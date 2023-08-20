import type { Post } from '$lib/data/posts';
import type { Tech, Techs } from '$lib/data/tech';
import type { ServerLoad } from '@sveltejs/kit';

const postModules = import.meta.glob('$lib/data/blog/*.md');
const projectModules = import.meta.glob('$lib/data/projects/*.md');

import tech from '$lib/data/tech';
import type { Project, ProjectMDType } from '$lib/data/projects';

type MDType = {
	metadata: Post & { techSlugs: string[] };
};

export const load: ServerLoad = async ({ params }) => {
	const slug = params.slug || '';
	const posts: Post[] = [];
	const projects: Project[] = [];

	for (const modulePath in postModules) {
		const post = { ...((await postModules[modulePath]()) as MDType) };
		if (post.metadata.techSlugs.includes(slug)) {
			post.metadata.date = new Date(post.metadata.date);
			post.metadata.tech = post.metadata.techSlugs.map((t) => tech[t as unknown as Techs]);
			posts.push(post.metadata);
		}
	}

	for (const modulePath in projectModules) {
		const project = { ...((await projectModules[modulePath]()) as ProjectMDType) };
		if (!project.metadata.techSlugs.includes(slug)) continue;
		project.metadata.tech = project.metadata.techSlugs.map((t) => tech[t as unknown as Techs]);
		projects.push(project.metadata);
	}

	return {
		projects,
		tech: tech[slug as unknown as Techs],
		posts
	};
};
