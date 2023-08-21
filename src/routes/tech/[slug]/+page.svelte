<script lang="ts">
	import bottomShine from '$lib/actions/bottom-shine';
	import CoolBox from '$lib/components/CoolBox.svelte';
	import PostBox from '$lib/components/PostBox.svelte';
	import ProjectBox from '$lib/components/ProjectBox.svelte';
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import type { PageData } from './$types';
	import Button from '$lib/components/Button.svelte';

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

<div class="mb-4 p-4 bg-gray-950 rounded-lg relative overflow-hidden" use:bottomShine>
	<div class="prose prose-invert lg:prose-lg mx-auto">
		{data.tech.summary}
	</div>
</div>

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

<Button href="/projects">
	<iconify-icon icon="ph:plus" class="mr-1 text-sm" />See all my projects
</Button>

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

<Button href="/projects">
	<iconify-icon icon="ph:plus" class="mr-1 text-sm" />See all my posts
</Button>
