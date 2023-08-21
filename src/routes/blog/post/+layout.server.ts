import type { Post } from '$lib/data/posts';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ parent, url }) => {
	const slug = url.pathname.split('/').pop();
	const { posts } = await parent();

	let prevPost: Post | undefined = undefined;
	let nextPost: Post | undefined = undefined;
	let post: Post | undefined = undefined;

	const postIndex = posts.findIndex((p) => p.slug === slug);

	nextPost = posts[postIndex + 1];
	prevPost = posts[postIndex - 1];

	post = posts[postIndex];

	return {
		post,
		prevPost,
		nextPost
	};
};
