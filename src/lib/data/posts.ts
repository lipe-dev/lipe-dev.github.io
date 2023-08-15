import type { Tech } from './tech';
import tech from './tech';

export type Post = {
	slug: string;
	title: string;
	body: string;
	tech: Tech[];
	date: Date;
	excerpt?: string;
	image?: string;
};

const posts: Post[] = [
	{
		slug: 'my-first-blog',
		title: 'My First Blog',
		body: 'This is my first blog',
		tech: [tech.react],
		date: new Date('2021-01-01'),
		excerpt: 'This is my first blog',
		image: 'https://picsum.photos/seed/picsum/200/300'
	},
	{
		slug: 'my-second-blog',
		title: 'My Second Blog',
		body: 'This is my second blog',
		tech: [tech.svelte],
		date: new Date('2021-01-02'),
		excerpt: 'This is my second blog',
		image: 'https://picsum.photos/seed/picsum/200/300'
	}
];

export default posts;
