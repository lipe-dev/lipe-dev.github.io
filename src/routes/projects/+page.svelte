<script lang="ts">
	import bottomShine from '$lib/actions/bottom-shine';
	import ProjectBox from '$lib/components/ProjectBox.svelte';
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: projects = data.projects || [];
</script>

<Breadcrumb aria-label="Default breadcrumb example" class="mb-4">
	<BreadcrumbItem
		href="/"
		home
		homeClass="hover:text-white text-gray-500 text-sm flex items-center flex-row"
		>Home</BreadcrumbItem
	>
	<BreadcrumbItem
		href="/projects"
		linkClass="hover:text-white text-gray-500 text-sm gradient-text ml-2">Projects</BreadcrumbItem
	>
</Breadcrumb>

<h1 class="text-gray-100 text-4xl font-display font-bold uppercase tracking-widest text-center">
	Projects I've built
</h1>
<div class="text-lg text-orange-300 mb-8 text-center">
	From my work as a freelancer or as part of a product team, to my personal projects and open source
	contributions. <br /> As a developer, I love to build things.
</div>

<div
	class="flex flex-row flex-wrap mb-3 gap-4 bg-gray-950 shadow-sm rounded-lg p-4 relative overflow-hidden"
	use:bottomShine
>
	{#each projects as project}
		<ProjectBox {project} />
	{/each}
</div>
