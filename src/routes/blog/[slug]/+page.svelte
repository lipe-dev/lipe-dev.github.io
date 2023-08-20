<script lang="ts">
	import CoolBox from '$lib/components/CoolBox.svelte';
	import PostBox from '$lib/components/PostBox.svelte';
	import { format } from 'date-fns';
	import type { PageData } from './$types';
	import { Breadcrumb, BreadcrumbItem, GradientButton } from 'flowbite-svelte';
	import Button from '$lib/components/Button.svelte';

	export let data: PageData;

	let postMD: ConstructorOfATypedSvelteComponent;

	$: {
		if (data.path) {
			import(data.path).then((module) => {
				postMD = module.default;
			});
		}
	}
</script>

<Breadcrumb aria-label="Default breadcrumb example" class="mb-8">
	<BreadcrumbItem
		href="/"
		home
		homeClass="hover:text-white text-gray-500 text-sm flex items-center flex-row"
		>Home</BreadcrumbItem
	>
	<BreadcrumbItem href="/blog" linkClass="hover:text-white text-gray-500 text-sm ml-2"
		>Blog</BreadcrumbItem
	>
	<BreadcrumbItem
		href="/project/{data.post?.slug}"
		linkClass="hover:text-white text-gray-500 text-sm gradient-text ml-2"
		>{data.post?.title}</BreadcrumbItem
	>
</Breadcrumb>

<h1 class="text-gray-100 text-4xl font-display font-bold uppercase tracking-widest text-center">
	{data.post?.title}
</h1>
{#if data.post?.date}
	<div class="text-lg text-orange-300 mb-4 text-center">
		{format(data.post.date, 'PP')}
	</div>
{/if}

<div class="bg-gray-950 shadow-sm rounded-md p-4 py-8 mb-8">
	<div class="rounded-md mb-8">
		{#if data.post?.tech.length}
			<div class="flex flex-row flex-wrap gap-2 justify-center">
				{#each data.post?.tech as tech}
					<CoolBox {tech} />
				{/each}
			</div>
		{/if}
	</div>

	<article
		class="prose lg:prose-xl prose-invert prose-headings:text-2xl prose-headings:tracking-wide prose-headings:font-semibold prose-headings:font-display prose-headings:text-gray-200 mx-auto"
	>
		<svelte:component this={postMD} />
	</article>
</div>

<div class="flex flex-row justify-between items-center bg-gray-950 shadow-sm rounded-md p-4">
	{#if data.prevPost}
		<Button href="/blog/{data.prevPost?.slug}">Previous Post</Button>
	{/if}
	{#if data.nextPost}
		<Button href="/blog/{data.nextPost?.slug}" buttonClass="ml-auto">Next Post</Button>
	{/if}
</div>
