<script lang="ts">
	import CoolBox from '$lib/components/CoolBox.svelte';
	import PostBox from '$lib/components/PostBox.svelte';
	import ProjectBox from '$lib/components/ProjectBox.svelte';
	import type { PageData } from './$types';
	import { Breadcrumb, BreadcrumbItem, Carousel, CarouselTransition } from 'flowbite-svelte';

	export let data: PageData;

	let projectMD: ConstructorOfATypedSvelteComponent;

	$: {
		if (data.path) {
			import(data.path).then((module) => {
				projectMD = module.default;
			});
		}
	}

	$: images =
		data.project?.images.map((image, index) => {
			return {
				id: index,
				imgurl: image
			};
		}) || [];
</script>

<Breadcrumb aria-label="Default breadcrumb example" class="mb-4">
	<BreadcrumbItem
		href="/"
		home
		homeClass="hover:text-white text-gray-500 text-sm flex items-center flex-row"
		>Home</BreadcrumbItem
	>
	<BreadcrumbItem href="/projects" linkClass="hover:text-white text-gray-500 text-sm ml-2"
		>Projects</BreadcrumbItem
	>
	<BreadcrumbItem
		href="/project/{data.project?.slug}"
		linkClass="hover:text-white text-gray-500 text-sm gradient-text ml-2"
		>{data.project?.name}</BreadcrumbItem
	>
</Breadcrumb>

<h1
	class="text-gray-100 text-4xl font-display font-bold uppercase tracking-widest text-center mb-8"
>
	Me <span class="gradient-text">X</span>
	{data.project?.name}
</h1>

<div class="bg-gray-950 shadow-sm rounded-md p-4 py-8 mb-8">
	<div class="rounded-md mb-8">
		{#if data.project?.tech.length}
			<div class="flex flex-row flex-wrap gap-2 justify-center">
				{#each data.project?.tech as tech}
					<CoolBox {tech} />
				{/each}
			</div>
		{/if}
	</div>

	<div class="mb-16 w-[820px] max-w-full mx-auto">
		<Carousel {images} showThumbs={false} showCaptions={false} />
	</div>

	<article
		class="prose lg:prose-xl prose-invert prose-headings:text-2xl prose-headings:tracking-wide prose-headings:font-semibold prose-headings:font-display prose-headings:text-gray-200 mx-auto"
	>
		<svelte:component this={projectMD} />
	</article>
</div>
