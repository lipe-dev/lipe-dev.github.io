import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ parent }) => {
	const { projects } = await parent();

	return {
		projects
	};
};
