import type { Post } from '$lib/data/posts';
import type { Techs } from '$lib/data/tech';
import type { ServerLoad } from '@sveltejs/kit';
const postModules = import.meta.glob('$lib/data/blog/*.md');
import tech from '$lib/data/tech';
import projects from '$lib/data/projects';

type MDType = {
	metadata: Post & { techSlugs: string[] };
};

export const load: ServerLoad = async () => {
	const posts: Post[] = [];

	for (const modulePath in postModules) {
		const post = { ...((await postModules[modulePath]()) as MDType) };
		post.metadata.date = new Date(post.metadata.date);
		post.metadata.tech = post.metadata.techSlugs.map((t) => tech[t as unknown as Techs]);
		posts.push(post.metadata);
	}

	return {
		projects: projects,
		tech: tech,
		posts
	};
};
