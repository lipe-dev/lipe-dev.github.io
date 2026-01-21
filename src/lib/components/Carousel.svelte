<script lang="ts">
	interface Image {
		id: number;
		imgurl: string;
	}

	interface Props {
		images: Image[];
	}

	let { images }: Props = $props();
	let currentIndex = $state(0);

	function next() {
		currentIndex = (currentIndex + 1) % images.length;
	}

	function prev() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
	}
</script>

<div class="relative w-full overflow-hidden rounded-lg">
	{#if images.length > 0}
		<div class="relative h-[400px] md:h-[500px]">
			{#each images as image, index}
				<div
					class="absolute inset-0 transition-opacity duration-300 {index === currentIndex
						? 'opacity-100'
						: 'opacity-0 pointer-events-none'}"
				>
					<img
						src={image.imgurl}
						alt="Slide {index + 1}"
						class="w-full h-full object-contain"
					/>
				</div>
			{/each}
		</div>

		{#if images.length > 1}
			<button
				onclick={prev}
				class="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-800/50 hover:bg-gray-800/80 text-white p-2 rounded-full transition-colors"
				aria-label="Previous slide"
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
			</button>
			<button
				onclick={next}
				class="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-800/50 hover:bg-gray-800/80 text-white p-2 rounded-full transition-colors"
				aria-label="Next slide"
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</button>

			<div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
				{#each images as _, index}
					<button
						onclick={() => (currentIndex = index)}
						class="w-2 h-2 rounded-full transition-colors {index === currentIndex
							? 'bg-white'
							: 'bg-white/50 hover:bg-white/80'}"
						aria-label="Go to slide {index + 1}"
					></button>
				{/each}
			</div>
		{/if}
	{/if}
</div>
