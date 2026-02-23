<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import type { LayoutData } from '../$types';

	let { data }: { data: LayoutData } = $props();

	onMount(() => {
		const eligible = data.notes.filter(
			(n) => n.growth === 'budding' || n.growth === 'evergreen'
		);
		if (eligible.length === 0) return;
		const pick = eligible[Math.floor(Math.random() * eligible.length)];
		goto(`/${pick.slug}`);
	});
</script>

<p class="text-gray-400">Picking a random note...</p>
