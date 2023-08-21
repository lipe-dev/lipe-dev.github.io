import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ parent, url }) => {
	const { projects } = await parent();
	const slug = url.pathname.split('/').pop();

	return {
		project: projects.find((project) => project.slug === slug)
	};
};
