<script lang="ts">
	import Graph from '$lib/components/Graph/Graph.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>lipe.dev | Digital Garden</title>
</svelte:head>

<div class="home-layout">
	<div class="text-center">
		<h1 class="text-stone-300 text-3xl font-display font-bold uppercase tracking-widest mb-2">
			Welcome to my Garden
		</h1>
		<p class="text-gray-400">
			Explore my interconnected notes, projects, and ideas. Click any node to dive deeper.
		</p>
	</div>

	<Graph graph={data.graph} />
</div>

<style>
	.home-layout {
		display: grid;
		grid-template-rows: max-content 1fr;
		height: 100%;
		gap: 1rem;
	}
</style>
