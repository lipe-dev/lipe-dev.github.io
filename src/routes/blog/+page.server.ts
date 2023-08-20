import type { Techs } from '$lib/data/tech';
import type { ServerLoad } from '@sveltejs/kit';
const postModules = import.meta.glob('$lib/data/blog/*.md');
import tech from '$lib/data/tech';
import type { Post, PostMDType } from '$lib/data/posts';

export const load: ServerLoad = async () => {
	const posts: Post[] = [];

	for (const modulePath in postModules) {
		const post = { ...((await postModules[modulePath]()) as PostMDType) };
		post.metadata.date = new Date(post.metadata.date);
		post.metadata.tech = post.metadata.techSlugs.map((t: string) => tech[t as Techs]);
		posts.push(post.metadata);
	}

	return {
		posts
	};
};
