<script lang="ts">
	import CoolBox from '$lib/components/CoolBox.svelte';
	import PostBox from '$lib/components/PostBox.svelte';
	import ProjectBox from '$lib/components/ProjectBox.svelte';
	import type { PageData } from './$types';
	import bottomShine from '$lib/actions/bottom-shine';
	import Button from '$lib/components/Button.svelte';

	export let data: PageData;

	const posts = data.posts || [];
	const projects = data.projects || [];
	const tech = data.tech || {};

	// order tech by number of projects + posts
	const techSorted = Object.entries(tech).sort((a, b) => {
		// if star, put it first
		if (a[1].star) return -1;
		if (b[1].star) return 1;

		const aProjects = projects.filter((project) => project.tech.includes(a[1])).length;
		const aPosts = posts.filter((post) => post.tech.includes(a[1])).length;

		const bProjects = projects.filter((project) => project.tech.includes(b[1])).length;
		const bPosts = posts.filter((post) => post.tech.includes(b[1])).length;

		return bProjects + bPosts - aProjects - aPosts;
	});
</script>

<h1
	class="text-stone-300 text-2xl font-display font-bold uppercase tracking-widest mb-4 text-center md:text-start"
>
	Stuff I work with
</h1>

<div
	class="flex relative flex-row flex-wrap mb-4 bg-gray-950 shadow-sm rounded-md p-4 overflow-hidden justify-evenly md:justify-start"
	use:bottomShine
>
	{#each techSorted as [name, tech]}
		<CoolBox {tech} />
	{/each}
</div>

<Button href="/tech" buttonClass="w-full justify-center md:w-fit">
	<iconify-icon icon="ph:plus" class="mr-1 text-sm" />
	See more
</Button>

<h1 class="text-stone-300 text-2xl font-display font-bold uppercase tracking-widest mb-4 mt-12">
	Stuff that I've built
</h1>

<div
	class="flex flex-row flex-wrap mb-4 gap-3 bg-gray-950 shadow-sm rounded-lg p-4 relative overflow-hidden justify-evenly md:justify-start"
	use:bottomShine
>
	{#each data.projects as project}
		<ProjectBox {project} />
	{/each}
</div>

<Button href="/projects" buttonClass="w-full justify-center md:w-fit">
	<iconify-icon icon="ph:plus" class="mr-1 text-sm" />See more</Button
>

<h1 class="text-stone-300 text-2xl font-display font-bold uppercase tracking-widest mb-4 mt-12">
	Recent posts on my blog
</h1>

<div
	class="flex flex-row flex-wrap mb-4 gap-3 bg-gray-950 shadow-sm rounded-lg p-4 relative overflow-hidden justify-evenly md:justify-start"
	use:bottomShine
>
	{#each data.posts as post}
		<PostBox {post}>
			{post.title}
		</PostBox>
	{/each}
</div>

<Button href="/blog" buttonClass="w-full justify-center md:w-fit">
	<iconify-icon icon="ph:plus" class="mr-1 text-sm" />See more</Button
>
