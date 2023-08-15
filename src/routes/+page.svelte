<script>
	import CoolBox from '$lib/components/CoolBox.svelte';
	import PostBox from '$lib/components/PostBox.svelte';
	import ProjectBox from '$lib/components/ProjectBox.svelte';
	import posts from '$lib/data/posts';
	import projects from '$lib/data/projects';
	import tech from '$lib/data/tech';
</script>

<h1 class="text-stone-300 text-2xl font-display font-bold uppercase tracking-widest mb-4">
	Stuff I work with
</h1>

<div class="flex flex-row flex-wrap mb-2">
	{#each Object.entries(tech) as [name, t]}
		<CoolBox href="/tech/{name}">
			<svelte:fragment slot="icon"><svelte:component this={t.icon} /></svelte:fragment>
			{t.name}
		</CoolBox>
	{/each}
</div>

<a href="/tech" class="text-1xl gradient-text">
	<iconify-icon icon="ph:plus" class="mr-1 text-orange-500 text-sm" />See more
</a>

<h1 class="text-stone-300 text-2xl font-display font-bold uppercase tracking-widest mb-4 mt-8">
	Stuff that I've built
</h1>

<div class="flex flex-row flex-wrap mb-3 gap-4">
	{#each Object.entries(projects) as [name, p]}
		<ProjectBox href="/project/{name}" tech={p.tech}>
			<img src={p.images[0]} slot="image" alt={p.name} />
			<svelte:fragment slot="name">{p.name}</svelte:fragment>
			<svelte:fragment slot="description">{p.description}</svelte:fragment>
		</ProjectBox>
	{/each}
</div>

<a href="/tech" class="text-1xl gradient-text">
	<iconify-icon icon="ph:plus" class="mr-1 text-orange-500 text-sm" />See more
</a>

<h1 class="text-stone-300 text-2xl font-display font-bold uppercase tracking-widest mb-4 mt-8">
	Recent posts on my blog
</h1>

<div class="flex flex-row flex-wrap mb-2">
	{#each posts as post}
		<PostBox {post}>
			{post.title}
		</PostBox>
	{/each}
</div>

<a href="/tech" class="text-1xl gradient-text">
	<iconify-icon icon="ph:plus" class="mr-1 text-orange-500 text-sm" />See more
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
