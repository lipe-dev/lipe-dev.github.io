<script lang="ts">
	import Graph from '$lib/components/Graph/Graph.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	// Filter state for graph highlighting
	let activeFilter = $state<string | null>(null);

	// Button config with tags and colors
	const filterButtons = [
		{ label: 'Projects', tag: 'projects', color: '#f97316' },
		{ label: 'Hobbies', tag: 'hobby', color: '#8b5cf6' },
		{ label: 'Work', tag: 'work', color: '#3b82f6' },
		{ label: 'Learning', tag: 'learning', color: '#22c55e' },
		{ label: 'Ideas', tag: 'ideas', color: '#ec4899' },
		{ label: 'Tech', tag: 'tech', color: '#06b6d4' }
	];

	function toggleFilter(tag: string) {
		activeFilter = activeFilter === tag ? null : tag;
	}
</script>

<svelte:head>
	<title>lipe.dev | Digital Garden</title>
</svelte:head>

<div class="home-layout">
	<div class="text-center">
		<h1 class="text-stone-300 text-3xl font-display font-bold uppercase tracking-widest mb-2">
			Lipe-Dev
		</h1>
		<p class="text-gray-400">Software Engineer, Maker, Tinkerer.</p>
		<div class="flex justify-center gap-2 mt-4 flex-wrap">
			{#each filterButtons as btn}
				<button
					class="btn"
					class:active={activeFilter === btn.tag}
					style:--btn-color={btn.color}
					onclick={() => toggleFilter(btn.tag)}
				>
					{btn.label}
				</button>
			{/each}
		</div>
	</div>

	<Graph graph={data.graph} highlightTag={activeFilter} />
</div>

<style>
	.home-layout {
		display: grid;
		grid-template-rows: max-content 1fr;
		height: 100%;
		gap: 1rem;
	}

	.btn {
		padding: 0.5rem 1rem;
		background: transparent;
		border: 1px solid #525252;
		color: #a1a1aa;
		border-radius: 0.375rem;
		font-size: 0.875rem;
		transition: all 0.15s ease;
		cursor: pointer;
	}

	.btn:hover {
		border-color: var(--btn-color, #a1a1aa);
		color: var(--btn-color, #e4e4e7);
	}

	.btn.active {
		border-color: var(--btn-color);
		color: var(--btn-color);
		background: color-mix(in srgb, var(--btn-color) 15%, transparent);
		box-shadow: 0 0 10px color-mix(in srgb, var(--btn-color) 30%, transparent);
	}
</style>
