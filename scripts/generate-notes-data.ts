// Generates notes-data.ts from all markdown files in content/notes/
// Run with: pnpm compost

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import type { Node, Parent } from 'unist';

// Types for the generated data
type GrowthStage = 'seedling' | 'budding' | 'evergreen';

interface NoteFrontmatter {
	name?: string;
	slug?: string;
	tags?: string[];
	growth?: GrowthStage;
	date?: string;
	image?: string;
	description?: string;
	images?: string[];
}

interface RawNote {
	slug: string;
	name: string;
	tags: string[];
	growth: GrowthStage;
	date?: string;
	image?: string;
	description?: string;
	images?: string[];
	filePath: string;
}

interface GraphNode {
	slug: string;
	name: string;
	tags: string[];
	growth: GrowthStage;
}

interface GraphEdge {
	source: string;
	target: string;
}

interface NoteTreeNode {
	type: 'file' | 'folder';
	name: string;
	slug?: string;
	children?: NoteTreeNode[];
}

// Regex to extract [[wikilinks]] from text nodes
const WIKILINK_REGEX = /\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g;

// Types we care about for AST walking
interface TextNode extends Node {
	type: 'text';
	value: string;
}

function isParent(node: Node): node is Parent {
	return 'children' in node;
}

function isTextNode(node: Node): node is TextNode {
	return node.type === 'text';
}

// Extract wikilinks from markdown content, properly ignoring code blocks
function extractWikilinks(markdownContent: string): string[] {
	const links: string[] = [];
	const tree = unified().use(remarkParse).parse(markdownContent);

	// Walk the AST, but skip code and inlineCode nodes
	function walk(node: Node, insideCode = false): void {
		// Skip code blocks and inline code
		if (node.type === 'code' || node.type === 'inlineCode') {
			return;
		}

		// Extract wikilinks from text nodes
		if (isTextNode(node) && !insideCode) {
			let match;
			while ((match = WIKILINK_REGEX.exec(node.value)) !== null) {
				const linkText = match[1].trim();
				if (!links.includes(linkText)) {
					links.push(linkText);
				}
			}
		}

		// Recurse into children
		if (isParent(node)) {
			for (const child of node.children) {
				walk(child, insideCode);
			}
		}
	}

	walk(tree);
	return links;
}

function scanNotesDirectory(dir: string, relativePath = ''): { notes: RawNote[]; tree: NoteTreeNode[] } {
	const notes: RawNote[] = [];
	const tree: NoteTreeNode[] = [];

	if (!fs.existsSync(dir)) {
		return { notes, tree };
	}

	const entries = fs.readdirSync(dir, { withFileTypes: true });

	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);
		const relPath = path.join(relativePath, entry.name);

		if (entry.isDirectory()) {
			const { notes: childNotes, tree: childTree } = scanNotesDirectory(fullPath, relPath);
			notes.push(...childNotes);

			if (childTree.length > 0 || childNotes.length > 0) {
				tree.push({
					type: 'folder',
					name: entry.name,
					children: childTree
				});
			}
		} else if (entry.name.endsWith('.md')) {
			const note = parseNoteFile(fullPath, relPath);
			if (note) {
				notes.push(note);
				tree.push({
					type: 'file',
					name: entry.name.replace('.md', ''),
					slug: note.slug
				});
			}
		}
	}

	return { notes, tree };
}

function parseNoteFile(fullPath: string, relativePath: string): RawNote | null {
	try {
		const fileContent = fs.readFileSync(fullPath, 'utf-8');
		const { data } = matter(fileContent);
		const frontmatter = data as NoteFrontmatter;

		const slug = frontmatter.slug || path.basename(relativePath, '.md');
		const name = frontmatter.name || slug;

		return {
			slug,
			name,
			tags: frontmatter.tags || [],
			growth: frontmatter.growth || 'seedling',
			date: frontmatter.date,
			image: frontmatter.image,
			description: frontmatter.description,
			images: frontmatter.images,
			filePath: relativePath
		};
	} catch {
		return null;
	}
}

function buildLookup(notes: RawNote[]): { byName: Record<string, string>; bySlug: Record<string, true> } {
	const byName: Record<string, string> = {};
	const bySlug: Record<string, true> = {};

	for (const note of notes) {
		byName[note.name.toLowerCase()] = note.slug;
		bySlug[note.slug.toLowerCase()] = true;
	}

	return { byName, bySlug };
}

function resolveWikilinkSlug(
	linkText: string,
	byName: Record<string, string>,
	bySlug: Record<string, true>
): string {
	const lowercased = linkText.toLowerCase();

	// 1. Try exact name match
	if (byName[lowercased]) {
		return byName[lowercased];
	}

	// 2. Try slug match
	if (bySlug[lowercased]) {
		return lowercased;
	}

	// 3. Try with spaces as underscores
	const underscored = lowercased.replace(/\s+/g, '_');
	if (bySlug[underscored]) {
		return underscored;
	}

	// 4. Try with spaces as hyphens
	const hyphenated = lowercased.replace(/\s+/g, '-');
	if (bySlug[hyphenated]) {
		return hyphenated;
	}

	// 5. Fallback
	return underscored;
}

function buildGraph(
	notes: RawNote[],
	notesDir: string,
	byName: Record<string, string>,
	bySlug: Record<string, true>
): { nodes: GraphNode[]; edges: GraphEdge[]; links: Map<string, string[]>; backlinks: Map<string, string[]> } {
	const nodes: GraphNode[] = [];
	const edges: GraphEdge[] = [];
	const links = new Map<string, string[]>();
	const backlinks = new Map<string, string[]>();

	const slugSet = new Set(notes.map((n) => n.slug));

	for (const note of notes) {
		// Add node
		nodes.push({
			slug: note.slug,
			name: note.name,
			tags: note.tags,
			growth: note.growth
		});

		// Extract wikilinks from content
		const fullPath = path.join(notesDir, note.filePath);
		const fileContent = fs.readFileSync(fullPath, 'utf-8');
		const { content } = matter(fileContent);
		const rawLinks = extractWikilinks(content);

		// Resolve links to slugs
		const resolvedLinks: string[] = [];
		for (const linkText of rawLinks) {
			const targetSlug = resolveWikilinkSlug(linkText, byName, bySlug);

			// Only add if target exists and not self-link
			if (slugSet.has(targetSlug) && targetSlug !== note.slug) {
				if (!resolvedLinks.includes(targetSlug)) {
					resolvedLinks.push(targetSlug);
					edges.push({ source: note.slug, target: targetSlug });

					// Track backlinks
					if (!backlinks.has(targetSlug)) {
						backlinks.set(targetSlug, []);
					}
					if (!backlinks.get(targetSlug)!.includes(note.slug)) {
						backlinks.get(targetSlug)!.push(note.slug);
					}
				}
			}
		}

		// Also create edges from tags that match note slugs
		for (const tag of note.tags) {
			const tagLower = tag.toLowerCase();
			if (bySlug[tagLower] && tagLower !== note.slug && !resolvedLinks.includes(tagLower)) {
				resolvedLinks.push(tagLower);
				edges.push({ source: note.slug, target: tagLower });

				if (!backlinks.has(tagLower)) {
					backlinks.set(tagLower, []);
				}
				if (!backlinks.get(tagLower)!.includes(note.slug)) {
					backlinks.get(tagLower)!.push(note.slug);
				}
			}
		}

		links.set(note.slug, resolvedLinks);
	}

	return { nodes, edges, links, backlinks };
}

function generateTypeScriptFile(
	notes: RawNote[],
	lookup: { byName: Record<string, string>; bySlug: Record<string, true> },
	graph: { nodes: GraphNode[]; edges: GraphEdge[] },
	links: Map<string, string[]>,
	backlinks: Map<string, string[]>,
	tree: NoteTreeNode[]
): string {
	// Add links and backlinks to notes
	const notesWithLinks = notes.map((note) => ({
		...note,
		links: links.get(note.slug) || [],
		backlinks: backlinks.get(note.slug) || []
	}));

	return `// Auto-generated by scripts/generate-notes-data.ts
// Do not edit manually

export type GrowthStage = 'seedling' | 'budding' | 'evergreen';

export interface GeneratedNote {
	slug: string;
	name: string;
	tags: string[];
	growth: GrowthStage;
	date?: string;
	image?: string;
	description?: string;
	images?: string[];
	filePath: string;
	links: string[];
	backlinks: string[];
}

export interface GraphNode {
	slug: string;
	name: string;
	tags: string[];
	growth: GrowthStage;
}

export interface GraphEdge {
	source: string;
	target: string;
}

export interface NoteTreeNode {
	type: 'file' | 'folder';
	name: string;
	slug?: string;
	children?: NoteTreeNode[];
}

// Lookup: name (lowercase) -> slug
export const lookupByName: Record<string, string> = ${JSON.stringify(lookup.byName, null, '\t')};

// Lookup: slug (lowercase) -> exists
export const lookupBySlug: Record<string, true> = ${JSON.stringify(lookup.bySlug, null, '\t')};

// All notes with metadata, links, and backlinks
export const notes: GeneratedNote[] = ${JSON.stringify(notesWithLinks, null, '\t')};

// Graph data
export const graphNodes: GraphNode[] = ${JSON.stringify(graph.nodes, null, '\t')};

export const graphEdges: GraphEdge[] = ${JSON.stringify(graph.edges, null, '\t')};

// File tree structure
export const noteTree: NoteTreeNode[] = ${JSON.stringify(tree, null, '\t')};

// Helper to resolve wikilink text to slug (O(1) lookups)
export function resolveWikilink(linkText: string): string {
	const key = linkText.trim().toLowerCase();

	if (lookupByName[key]) return lookupByName[key];
	if (lookupBySlug[key]) return key;

	const underscored = key.replace(/\\s+/g, '_');
	if (lookupBySlug[underscored]) return underscored;

	const hyphenated = key.replace(/\\s+/g, '-');
	if (lookupBySlug[hyphenated]) return hyphenated;

	return underscored;
}
`;
}

// Main execution
const notesDir = path.join(process.cwd(), 'src/content/notes');
const outputPath = path.join(process.cwd(), 'src/lib/generated/notes-data.ts');

console.log('Scanning notes directory...');
const { notes, tree } = scanNotesDirectory(notesDir);
console.log(`Found ${notes.length} notes`);

console.log('Building lookup maps...');
const lookup = buildLookup(notes);

console.log('Building graph and extracting wikilinks...');
const { nodes, edges, links, backlinks } = buildGraph(notes, notesDir, lookup.byName, lookup.bySlug);
console.log(`Graph: ${nodes.length} nodes, ${edges.length} edges`);

console.log('Generating TypeScript file...');
const tsContent = generateTypeScriptFile(notes, lookup, { nodes, edges }, links, backlinks, tree);

// Ensure output directory exists
const outputDir = path.dirname(outputPath);
if (!fs.existsSync(outputDir)) {
	fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputPath, tsContent);
console.log(`Written to ${outputPath}`);
