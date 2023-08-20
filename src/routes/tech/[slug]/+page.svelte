<script lang="ts">
	import bottomShine from '$lib/actions/bottom-shine';
	import CoolBox from '$lib/components/CoolBox.svelte';
	import PostBox from '$lib/components/PostBox.svelte';
	import ProjectBox from '$lib/components/ProjectBox.svelte';
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Breadcrumb aria-label="Default breadcrumb example" class="mb-4">
	<BreadcrumbItem
		href="/"
		home
		homeClass="hover:text-white text-gray-500 text-sm flex items-center flex-row"
		>Home</BreadcrumbItem
	>
	<BreadcrumbItem href="/tech" linkClass="hover:text-white text-gray-500 text-sm ml-2"
		>Tech</BreadcrumbItem
	>
	<BreadcrumbItem
		href="/tech/{data.tech.slug}"
		linkClass="hover:text-white text-gray-500 text-sm gradient-text ml-2"
		>{data.tech.name}</BreadcrumbItem
	>
</Breadcrumb>

<h1
	class="text-gray-100 text-4xl font-display font-bold uppercase tracking-widest text-center mb-8"
>
	Me <span class="gradient-text">X</span>
	{data.tech.name}
</h1>

<h2
	class="text-gray-300 text-xl font-display font-normal tracking-normal mb-4 p-4 bg-gray-950 rounded-lg relative overflow-hidden"
	use:bottomShine
>
	{data.tech.summary}
</h2>

<h1 class="text-stone-300 text-2xl font-display font-bold uppercase tracking-widest mb-4 mt-8">
	My <span class="gradient-text no-underline">{data.tech.name}</span> projects
</h1>

<div
	class="flex flex-row flex-wrap mb-3 gap-4 p-4 bg-gray-950 rounded-lg relative overflow-hidden"
	use:bottomShine
>
	{#each data.projects as project}
		<ProjectBox {project} />
	{/each}
</div>

<a href="/projects" class="text-1xl gradient-text mb-4">
	<iconify-icon icon="ph:plus" class="mr-1 text-orange-500 text-sm" />Check out all my projects
</a>

<h1 class="text-stone-300 text-2xl font-display font-bold uppercase tracking-widest mb-4 mt-8">
	Recent posts about <span class="gradient-text no-underline">{data.tech.name}</span>
</h1>

<div
	class="flex flex-row flex-wrap mb-3 gap-4 p-4 bg-gray-950 rounded-lg relative overflow-hidden"
	use:bottomShine
>
	{#each data.posts as post}
		<PostBox {post}>
			{post.title}
		</PostBox>
	{/each}
</div>

<a href="/tech" class="text-1xl gradient-text">
	<iconify-icon icon="ph:plus" class="mr-1 text-orange-500 text-sm" />See all posts
</a>
