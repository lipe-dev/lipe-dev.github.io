<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	interface Props {
		images: string[];
		alt: string;
		autoPlayInterval?: number;
	}

	let { images, alt, autoPlayInterval = 5000 }: Props = $props();

	let currentIndex = $state(0);
	let intervalId: ReturnType<typeof setInterval> | null = null;

	function next() {
		currentIndex = (currentIndex + 1) % images.length;
	}

	function prev() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
	}

	function goTo(index: number) {
		currentIndex = index;
	}

	function startAutoPlay() {
		if (autoPlayInterval > 0 && images.length > 1) {
			intervalId = setInterval(next, autoPlayInterval);
		}
	}

	function stopAutoPlay() {
		if (intervalId) {
			clearInterval(intervalId);
			intervalId = null;
		}
	}

	onMount(() => {
		startAutoPlay();
	});

	onDestroy(() => {
		stopAutoPlay();
	});
</script>

<div
	class="relative rounded-lg overflow-hidden bg-gray-900"
	role="region"
	aria-label="Image carousel"
	onmouseenter={stopAutoPlay}
	onmouseleave={startAutoPlay}
>
	<!-- Main Image -->
	<div class="relative h-[400px]">
		{#each images as image, i}
			<img
				src={image}
				alt="{alt} - image {i + 1}"
				class="absolute inset-0 w-full h-full object-contain transition-opacity duration-500 {i === currentIndex ? 'opacity-100' : 'opacity-0'}"
			/>
		{/each}
	</div>

	<!-- Navigation Arrows -->
	{#if images.length > 1}
		<button
			onclick={prev}
			class="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-900/70 hover:bg-gray-800 text-white p-2 rounded-full transition-colors"
			aria-label="Previous image"
		>
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
			</svg>
		</button>
		<button
			onclick={next}
			class="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-900/70 hover:bg-gray-800 text-white p-2 rounded-full transition-colors"
			aria-label="Next image"
		>
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
			</svg>
		</button>

		<!-- Dots Indicator -->
		<div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
			{#each images as _, i}
				<button
					onclick={() => goTo(i)}
					class="w-2 h-2 rounded-full transition-colors {i === currentIndex ? 'bg-orange-400' : 'bg-gray-500 hover:bg-gray-400'}"
					aria-label="Go to image {i + 1}"
					aria-current={i === currentIndex ? 'true' : 'false'}
				></button>
			{/each}
		</div>

		<!-- Counter -->
		<div class="absolute top-4 right-4 bg-gray-900/70 text-gray-300 text-sm px-2 py-1 rounded">
			{currentIndex + 1} / {images.length}
		</div>
	{/if}
</div>
