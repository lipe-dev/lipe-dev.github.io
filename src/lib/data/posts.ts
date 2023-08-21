import type { Tech } from './tech';

export type Post = {
	slug: string;
	title: string;
	tech: Tech[];
	date: Date;
	image?: string;
};

export type PostMDType = {
	metadata: Post & { techSlugs: string[] };
};
