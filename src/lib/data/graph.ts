import type { GrowthStage } from './notes';

export type GraphNode = {
	slug: string;
	name: string;
	tags: string[];
	growth: GrowthStage;
	icon?: string; // SVG string for tech nodes
};

export type GraphEdge = {
	source: string; // slug
	target: string; // slug
};

export type Graph = {
	nodes: GraphNode[];
	edges: GraphEdge[];
};
