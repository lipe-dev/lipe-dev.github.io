import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	const { posts, projects, tech } = await parent();

	return {
		projects: projects,
		tech: tech,
		posts
	};
};
