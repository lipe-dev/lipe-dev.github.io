import type { Techs } from '$lib/data/tech';
import type { ServerLoad } from '@sveltejs/kit';
const projectModules = import.meta.glob('$lib/data/projects/*.md');
import tech from '$lib/data/tech';
import type { ProjectMDType } from '$lib/data/projects';

export const load: ServerLoad = async ({ params }) => {
	const slug = params.slug || '';

	for (const modulePath in projectModules) {
		if (modulePath.includes(slug)) {
			const p = { ...((await projectModules[modulePath]()) as ProjectMDType) };

			p.metadata.tech = p.metadata.techSlugs.map((t) => tech[t as unknown as Techs]);

			return {
				project: p.metadata,
				path: modulePath
			};
		}
	}
};
