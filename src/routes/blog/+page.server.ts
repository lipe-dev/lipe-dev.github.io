import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	const { posts } = await parent();

	return {
		posts
	};
};
