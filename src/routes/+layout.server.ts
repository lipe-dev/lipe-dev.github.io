export const prerender = true;

import type { LayoutServerLoad } from './$types';
import type { Note, GrowthStage } from '$lib/data/notes';
import type { Graph, GraphNode, GraphEdge } from '$lib/data/graph';
import tech, { type Techs } from '$lib/data/tech';
import {
	notes as generatedNotes,
	graphNodes as generatedNodes,
	graphEdges,
	noteTree
} from '$lib/generated/notes-data';

export const load: LayoutServerLoad = async () => {
	// Convert generated notes to runtime format (add icons, parse dates)
	const notes: Note[] = generatedNotes.map((n) => {
		const techSlug = n.slug as keyof typeof tech;
		const techData = tech[techSlug];

		return {
			slug: n.slug,
			name: n.name,
			tags: n.tags,
			growth: n.growth as GrowthStage,
			links: n.links,
			backlinks: n.backlinks,
			date: n.date ? new Date(n.date) : undefined,
			image: n.image,
			description: n.description,
			images: n.images,
			icon: techData?.icon
		};
	});

	// Add icons to graph nodes
	const nodes: GraphNode[] = generatedNodes.map((n) => {
		const techSlug = n.slug as keyof typeof tech;
		const techData = tech[techSlug];

		return {
			...n,
			icon: techData?.icon
		};
	});

	// Sort notes by date (newest first) for those with dates
	notes.sort((a, b) => {
		if (a.date && b.date) {
			return b.date.getTime() - a.date.getTime();
		}
		if (a.date) return -1;
		if (b.date) return 1;
		return a.name.localeCompare(b.name);
	});

	const graph: Graph = { nodes, edges: graphEdges };

	// For backwards compatibility, provide filtered lists
	const techNotes = notes.filter((n) => n.icon);
	const projectNotes = notes.filter((n) => n.tags.includes('projects'));
	const blogNotes = notes.filter((n) => n.date && n.image);

	// Convert to old format for backwards compatibility
	const techWithStats = Object.fromEntries(
		Object.entries(tech).map(([key, value]) => {
			const relatedProjects = projectNotes.filter((p) => p.tags.includes(key));
			const relatedPosts = blogNotes.filter((p) => p.tags.includes(key));
			return [
				key,
				{
					...value,
					projectCount: relatedProjects.length,
					postCount: relatedPosts.length
				}
			];
		})
	);

	return {
		notes,
		graph,
		noteTree,
		// Backwards compatibility
		tech: techWithStats,
		projects: projectNotes.map((n) => ({
			slug: n.slug,
			name: n.name,
			description: n.description || '',
			tech: n.tags
				.filter((t) => tech[t as Techs])
				.map((t) => tech[t as Techs]),
			images: n.images || [],
			order: 0
		})),
		posts: blogNotes.map((n) => ({
			slug: n.slug,
			title: n.name,
			tech: n.tags
				.filter((t) => tech[t as Techs])
				.map((t) => tech[t as Techs]),
			date: n.date!,
			image: n.image
		}))
	};
};
