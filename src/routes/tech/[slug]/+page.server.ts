import type { Techs } from '$lib/data/tech';

import tech from '$lib/data/tech';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ url, parent }) => {
	const slug = url.pathname.split('/').pop();

	const { projects, posts } = await parent();

	return {
		projects,
		tech: tech[slug as unknown as Techs],
		posts
	};
};

/** @type {import('./$types').EntryGenerator} */
export async function entries() {
	return Object.keys(tech).map((slug) => ({ slug }));
}
