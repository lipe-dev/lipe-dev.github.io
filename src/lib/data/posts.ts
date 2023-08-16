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
