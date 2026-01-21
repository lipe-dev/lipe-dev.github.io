// Finds all wikilinks that don't have corresponding notes
// Run with: pnpm forage
// To create seedlings: pnpm sow

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import type { Node, Parent } from 'unist';

const WIKILINK_REGEX = /\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g;

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

function extractWikilinks(markdownContent: string): string[] {
	const links: string[] = [];
	const tree = unified().use(remarkParse).parse(markdownContent);

	function walk(node: Node): void {
		if (node.type === 'code' || node.type === 'inlineCode') {
			return;
		}

		if (isTextNode(node)) {
			let match;
			while ((match = WIKILINK_REGEX.exec(node.value)) !== null) {
				const linkText = match[1].trim();
				if (!links.includes(linkText)) {
					links.push(linkText);
				}
			}
		}

		if (isParent(node)) {
			for (const child of node.children) {
				walk(child);
			}
		}
	}

	walk(tree);
	return links;
}

function scanNotes(dir: string): { names: Set<string>; slugs: Set<string>; allLinks: Map<string, string[]> } {
	const names = new Set<string>();
	const slugs = new Set<string>();
	const allLinks = new Map<string, string[]>();

	function scan(currentDir: string): void {
		if (!fs.existsSync(currentDir)) return;

		const entries = fs.readdirSync(currentDir, { withFileTypes: true });

		for (const entry of entries) {
			const fullPath = path.join(currentDir, entry.name);

			if (entry.isDirectory()) {
				scan(fullPath);
			} else if (entry.name.endsWith('.md')) {
				const content = fs.readFileSync(fullPath, 'utf-8');
				const { data, content: body } = matter(content);

				const slug = data.slug || path.basename(entry.name, '.md');
				const name = data.name || slug;

				names.add(name.toLowerCase());
				slugs.add(slug.toLowerCase());

				const links = extractWikilinks(body);
				if (links.length > 0) {
					allLinks.set(fullPath, links);
				}
			}
		}
	}

	scan(dir);
	return { names, slugs, allLinks };
}

function resolveLink(linkText: string, names: Set<string>, slugs: Set<string>): boolean {
	const lower = linkText.toLowerCase();

	if (names.has(lower)) return true;
	if (slugs.has(lower)) return true;

	const underscored = lower.replace(/\s+/g, '_');
	if (slugs.has(underscored)) return true;

	const hyphenated = lower.replace(/\s+/g, '-');
	if (slugs.has(hyphenated)) return true;

	return false;
}

function toSlug(text: string): string {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9\s-]/g, '')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-')
		.trim();
}

function createSeedling(notesDir: string, name: string): string {
	const slug = toSlug(name);
	const filePath = path.join(notesDir, `${slug}.md`);

	const content = `---
name: ${name}
slug: ${slug}
tags: []
growth: seedling
---

# ${name}

`;

	fs.writeFileSync(filePath, content);
	return filePath;
}

// Main execution
const notesDir = path.join(process.cwd(), 'content/notes');
const shouldCreate = process.argv.includes('--create');

console.log('Scanning notes for wikilinks...\n');

const { names, slugs, allLinks } = scanNotes(notesDir);

// Find all missing links
const missingLinks = new Map<string, string[]>(); // linkText -> [source files]

for (const [filePath, links] of allLinks) {
	for (const link of links) {
		if (!resolveLink(link, names, slugs)) {
			if (!missingLinks.has(link)) {
				missingLinks.set(link, []);
			}
			const relativePath = path.relative(notesDir, filePath);
			if (!missingLinks.get(link)!.includes(relativePath)) {
				missingLinks.get(link)!.push(relativePath);
			}
		}
	}
}

if (missingLinks.size === 0) {
	console.log('✓ All wikilinks resolve to existing notes!');
	process.exit(0);
}

// Sort by number of references (most referenced first)
const sorted = [...missingLinks.entries()].sort((a, b) => b[1].length - a[1].length);

console.log(`Found ${sorted.length} missing notes:\n`);

for (const [linkText, sources] of sorted) {
	console.log(`  [[${linkText}]] (${sources.length} reference${sources.length > 1 ? 's' : ''})`);
	for (const source of sources) {
		console.log(`    ← ${source}`);
	}
}

if (shouldCreate) {
	console.log('\nCreating seedling notes...\n');

	for (const [linkText] of sorted) {
		const filePath = createSeedling(notesDir, linkText);
		const relativePath = path.relative(notesDir, filePath);
		console.log(`  ✓ Created ${relativePath}`);
	}

	console.log(`\n🌱 Sowed ${sorted.length} seedlings.`);
	console.log('Run "pnpm compost" to fertilize the garden.');
} else {
	console.log(`\nTo sow seedlings for all missing notes, run:`);
	console.log('  pnpm sow');
}
