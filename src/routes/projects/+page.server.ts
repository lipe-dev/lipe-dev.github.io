import type { Techs } from '$lib/data/tech';
import type { ServerLoad } from '@sveltejs/kit';
const projectModules = import.meta.glob('$lib/data/projects/*.md');
import tech from '$lib/data/tech';
import type { Project, ProjectMDType } from '$lib/data/projects';

export const load: ServerLoad = async () => {
	const projects: Project[] = [];

	for (const modulePath in projectModules) {
		const project = { ...((await projectModules[modulePath]()) as ProjectMDType) };
		project.metadata.tech = project.metadata.techSlugs.map((t) => tech[t as unknown as Techs]);
		projects.push(project.metadata);
	}

	return {
		projects
	};
};
