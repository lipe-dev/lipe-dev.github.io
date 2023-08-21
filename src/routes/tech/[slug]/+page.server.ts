import type { Techs } from '$lib/data/tech';

import allTech from '$lib/data/tech';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ url, parent }) => {
	const slug = url.pathname.split('/').pop();

	const { projects, posts } = await parent();

	const tech = allTech[slug as unknown as Techs];

	return {
		projects: projects.filter((p) => p.tech.includes(tech)),
		tech: tech,
		posts: posts.filter((p) => p.tech.includes(tech))
	};
};

/** @type {import('./$types').EntryGenerator} */
export async function entries() {
	return Object.keys(allTech).map((slug) => ({ slug }));
}
