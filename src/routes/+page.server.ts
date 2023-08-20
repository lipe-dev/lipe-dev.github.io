import type { Post, PostMDType } from '$lib/data/posts';
import type { Techs } from '$lib/data/tech';
import type { ServerLoad } from '@sveltejs/kit';
const postModules = import.meta.glob('$lib/data/blog/*.md');
const projectModules = import.meta.glob('$lib/data/projects/*.md');
import tech from '$lib/data/tech';
import type { Project, ProjectMDType } from '$lib/data/projects';

export const load: ServerLoad = async () => {
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
		posts
	};
};
