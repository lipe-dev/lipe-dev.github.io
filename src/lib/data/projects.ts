import type { Tech } from './tech';

export type Project = {
	slug: string;
	name: string;
	description: string;
	tech: Tech[];
	images: string[];
	order: number;
};

export type ProjectMDType = {
	metadata: Project & { techSlugs: string[] };
};
