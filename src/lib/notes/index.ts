import type { Note, NoteMDType, GrowthStage } from '$lib/data/notes';
import type { Graph } from '$lib/data/graph';
import { buildGraph, computeBacklinks, extractWikilinks } from '$lib/graph/build-graph';
import tech from '$lib/data/tech';

type NoteModule = {
	default: unknown;
	metadata: NoteMDType['metadata'];
};

// Load all note markdown files
const noteModules = import.meta.glob<NoteModule>('/content/notes/*.md', { eager: true });

function parseNote(path: string, module: NoteModule): Note {
	const metadata = module.metadata;
	const slug = metadata.slug || path.split('/').pop()?.replace('.md', '') || '';

	// Check if this is a tech note and get the icon
	const techSlug = slug as keyof typeof tech;
	const techData = tech[techSlug];

	return {
		slug,
		name: metadata.name || slug,
		tags: metadata.tags || [],
		growth: (metadata.growth || 'seedling') as GrowthStage,
		links: metadata.links || [],
		backlinks: metadata.backlinks || [],
		date: metadata.date ? new Date(metadata.date) : undefined,
		image: metadata.image,
		description: metadata.description,
		images: metadata.images,
		icon: techData?.icon
	};
}

// Get all notes
export function getAllNotes(): Note[] {
	const notes: Note[] = [];

	for (const [path, module] of Object.entries(noteModules)) {
		const note = parseNote(path, module);
		notes.push(note);
	}

	// Sort by date (newest first) for notes that have dates
	return notes.sort((a, b) => {
		if (a.date && b.date) {
			return b.date.getTime() - a.date.getTime();
		}
		if (a.date) return -1;
		if (b.date) return 1;
		return a.name.localeCompare(b.name);
	});
}

// Get a single note by slug
export function getNoteBySlug(slug: string): Note | undefined {
	const notes = getAllNotes();
	return notes.find((n) => n.slug === slug);
}

// Get notes filtered by tag
export function getNotesByTag(tag: string): Note[] {
	const notes = getAllNotes();
	return notes.filter((n) => n.tags.includes(tag));
}

// Get the graph data
export function getGraph(): Graph {
	const notes = getAllNotes();

	// Extract raw content for wikilink parsing
	const noteContents = new Map<string, string>();
	for (const [path, module] of Object.entries(noteModules)) {
		const slug = path.split('/').pop()?.replace('.md', '') || '';
		// Get the raw content - for now we'll use a placeholder
		// In practice, we'd need to read the raw markdown file
		noteContents.set(slug, '');
	}

	return buildGraph(notes, noteContents);
}

// Get backlinks for a specific note
export function getBacklinks(slug: string): string[] {
	const graph = getGraph();
	const backlinksMap = computeBacklinks(graph.edges);
	return backlinksMap.get(slug) || [];
}

// Get all note slugs (for permalinks in wikilink plugin)
export function getAllSlugs(): string[] {
	return getAllNotes().map((n) => n.slug);
}

// Get notes by multiple tags (OR logic)
export function getNotesByTags(tags: string[]): Note[] {
	const notes = getAllNotes();
	return notes.filter((n) => n.tags.some((t) => tags.includes(t)));
}

// Get technology notes (notes that have an icon from tech.ts)
export function getTechNotes(): Note[] {
	const notes = getAllNotes();
	return notes.filter((n) => n.icon);
}

// Get project notes
export function getProjectNotes(): Note[] {
	return getNotesByTag('projects');
}

// Get blog-style notes (notes with dates and images)
export function getBlogNotes(): Note[] {
	const notes = getAllNotes();
	return notes.filter((n) => n.date && n.image);
}
