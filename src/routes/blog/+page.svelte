<script lang="ts">
	import CoolBox from '$lib/components/CoolBox.svelte';
	import PostBox from '$lib/components/PostBox.svelte';
	import ProjectBox from '$lib/components/ProjectBox.svelte';
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import type { PageData } from './$types';
	import bottomShine from '$lib/actions/bottom-shine';

	export let data: PageData;
</script>

<Breadcrumb aria-label="Default breadcrumb example" class="mb-4">
	<BreadcrumbItem
		href="/"
		home
		homeClass="hover:text-white text-gray-500 text-sm flex items-center flex-row"
		>Home</BreadcrumbItem
	>
	<BreadcrumbItem href="/blog" linkClass="hover:text-white text-gray-500 text-sm gradient-text ml-2"
		>Blog</BreadcrumbItem
	>
</Breadcrumb>

<h1 class="text-gray-100 text-4xl font-display font-bold uppercase tracking-widest text-center">
	What I have been talking about
</h1>
<div class="text-lg text-orange-300 mb-8 text-center">
	This is a collection of my blog posts, talks and other content I have created. <br />
	I love to share my knowledge and help others. I hope you find something useful here. <br />
	I also use these to document my learning process and keep it for future reference. <br />
</div>

<div
	class="flex flex-row flex-wrap mb-3 gap-4 bg-gray-950 shadow-sm rounded-lg p-4 relative overflow-hidden"
	use:bottomShine
>
	{#each data.posts as post}
		<PostBox {post} />
	{/each}
</div>

<style lang="postcss">
	.gradient-text {
		background: linear-gradient(to right, theme(colors.orange.400), theme(colors.orange.700));
		background-clip: text;
		-webkit-background-clip: text;
		text-fill-color: transparent;
		-webkit-text-fill-color: transparent;
		font-weight: 700;
		position: relative;

		&:after {
			content: '';
			display: block;
			width: 100%;
			position: absolute;
			height: 1px;
			background: linear-gradient(to right, theme(colors.orange.400), theme(colors.orange.600));
			bottom: 0;
			left: 0;
		}
	}
</style>
