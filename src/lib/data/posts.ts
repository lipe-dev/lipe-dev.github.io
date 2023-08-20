import type { Tech } from './tech';

export type Post = {
	slug: string;
	title: string;
	body: string;
	tech: Tech[];
	date: Date;
	excerpt?: string;
	image?: string;
};

export type PostMDType = {
	metadata: Post & { techSlugs: string[] };
};
