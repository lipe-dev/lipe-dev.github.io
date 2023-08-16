<script lang="ts">
	import CoolBox from '$lib/components/CoolBox.svelte';
	import PostBox from '$lib/components/PostBox.svelte';
	import ProjectBox from '$lib/components/ProjectBox.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="text-stone-300 text-2xl font-display font-bold uppercase tracking-widest mb-4">
	Stuff I work with
</h1>

<div class="flex flex-row flex-wrap mb-2">
	{#each Object.entries(data.tech) as [name, tech]}
		<CoolBox {tech} />
	{/each}
</div>

<a href="/tech" class="text-1xl gradient-text">
	<iconify-icon icon="ph:plus" class="mr-1 text-orange-500 text-sm" />See more
</a>

<h1 class="text-stone-300 text-2xl font-display font-bold uppercase tracking-widest mb-4 mt-8">
	Stuff that I've built
</h1>

<div class="flex flex-row flex-wrap mb-3 gap-4">
	{#each data.projects as project}
		<ProjectBox {project} />
	{/each}
</div>

<a href="/projects" class="text-1xl gradient-text">
	<iconify-icon icon="ph:plus" class="mr-1 text-orange-500 text-sm" />Check out all my projects
</a>

<h1 class="text-stone-300 text-2xl font-display font-bold uppercase tracking-widest mb-4 mt-8">
	Recent posts on my blog
</h1>

<div class="flex flex-row flex-wrap mb-3 gap-4">
	{#each data.posts as post}
		<PostBox {post}>
			{post.title}
		</PostBox>
	{/each}
</div>

<a href="/tech" class="text-1xl gradient-text">
	<iconify-icon icon="ph:plus" class="mr-1 text-orange-500 text-sm" />See all posts
</a>

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
