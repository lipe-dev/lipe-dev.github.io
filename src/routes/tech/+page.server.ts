import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	const { tech, projects, posts } = await parent();

	const orderedTech = [
		// filter tech with star
		...Object.values(tech).filter((t) => t.star),
		// order tech without star based on sum of projects + posts that use it
		...Object.values(tech)
			.filter((t) => !t.star)
			.sort((a, b) => {
				const aCount = [...projects, ...posts].filter((p) => p.tech.includes(a)).length;
				const bCount = [...projects, ...posts].filter((p) => p.tech.includes(b)).length;
				return bCount - aCount;
			})
	];

	return {
		tech: orderedTech
	};
};
