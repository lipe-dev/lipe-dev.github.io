export type GrowthStage = 'seedling' | 'budding' | 'evergreen';

export type Note = {
	slug: string;
	name: string;
	tags: string[];
	growth: GrowthStage;
	links: string[]; // slugs this note links to
	backlinks: string[]; // slugs that link to this note
	// Optional fields for backwards compatibility during migration
	date?: Date;
	image?: string;
	description?: string;
	images?: string[];
	icon?: string; // for tech notes
};

export type NoteMDType = {
	metadata: Omit<Note, 'links' | 'backlinks'> & {
		links?: string[];
		backlinks?: string[];
	};
};
