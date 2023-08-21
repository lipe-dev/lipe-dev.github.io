export const prerender = true;

import type { Post, PostMDType } from '$lib/data/posts';
import type { Techs } from '$lib/data/tech';
const postModules = import.meta.glob('./blog/post/**/*.md');
const projectModules = import.meta.glob('./projects/details/**/*.md');
import tech from '$lib/data/tech';
import type { Project, ProjectMDType } from '$lib/data/projects';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const posts: Post[] = [];
	const projects: Project[] = [];

	for (const modulePath in postModules) {
		const post = { ...((await postModules[modulePath]()) as PostMDType) };
		post.metadata.date = new Date(post.metadata.date);
		post.metadata.tech = post.metadata.techSlugs.map((t) => tech[t as unknown as Techs]);
		posts.push(post.metadata);
	}

	for (const modulePath in projectModules) {
		const project = { ...((await projectModules[modulePath]()) as ProjectMDType) };
		project.metadata.tech = project.metadata.techSlugs.map((t) => tech[t as unknown as Techs]);
		projects.push(project.metadata);
	}

	return {
		projects: projects,
		tech: tech,
		posts: posts.sort((a, b) => b.date.getTime() - a.date.getTime())
	};
};
