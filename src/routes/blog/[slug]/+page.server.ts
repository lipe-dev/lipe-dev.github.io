import type { Techs } from '$lib/data/tech';
import type { ServerLoad } from '@sveltejs/kit';
const postModules = import.meta.glob('$lib/data/blog/*.md');
import tech from '$lib/data/tech';
import type { Post, PostMDType } from '$lib/data/posts';

export const load: ServerLoad = async ({ params }) => {
	const slug = params.slug || '';

	let foundPost = false;
	let prevPost: Post | undefined = undefined;
	let nextPost: Post | undefined = undefined;
	let post: Post | undefined = undefined;
	let path: string | undefined = undefined;

	for (const modulePath in postModules) {
		const p = { ...((await postModules[modulePath]()) as PostMDType) };
		if (foundPost) {
			nextPost = p.metadata;
			break;
		}

		if (p.metadata.slug !== slug) {
			prevPost = p.metadata;
			continue;
		}

		p.metadata.tech = p.metadata.techSlugs.map((t) => tech[t as unknown as Techs]);
		p.metadata.date = new Date(p.metadata.date);
		post = p.metadata;
		path = modulePath;
		foundPost = true;
	}

	return {
		post,
		path,
		prevPost,
		nextPost
	};
};

/** @type {import('./$types').EntryGenerator} */
export async function entries() {
	const entries = [];
	for (const modulePath in postModules) {
		const p = { ...((await postModules[modulePath]()) as PostMDType) };

		entries.push({ slug: p.metadata.slug });
	}

	return entries;
}
