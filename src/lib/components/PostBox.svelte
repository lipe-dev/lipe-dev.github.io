<script lang="ts">
	import type { Post } from '$lib/data/posts';
	import { parseISO } from 'date-fns';
	import format from 'date-fns/format';

	export let post: Post;

	console.log(post);
</script>

<a
	href="/blog/{post.slug}"
	class="blog-box flex flex-col items-center justify-center border-[1px] border-solid border-gray-800 w-72 overflow-hidden relative rounded-lg box-content hover:scale-[1.03] transition-all duration-200 fill-gray-400 hover:fill-white text-gray-400 hover:text-white hover:shadow-orange-900/50 hover:shadow-lg p-[5px] m-1 bg-gray-900"
>
	<div class="blog-box-bg absolute top-0 left-0 right-0 bottom-0 w-full h-full" />

	<div
		class="rounded-[4px] z-50 blog-box-content w-full h-full bg-gray-900 flex flex-col justify-stretch items-stretch p-1"
	>
		<div
			class="relative img-wrapper text-gray-300 fill-gray-300 rounded-[2px] overflow-hidden h-40 w-full"
		>
			<img src={post.image} alt={post.title} loading="lazy" />

			<div
				class="description-box absolute bottom-0 left-0 right-0 z-50 p-2 text-center hidden h-full w-full"
				role="presentation"
			>
				<slot name="description" />

				<div
					class="gradient-link p-2 rounded-sm m-2 text-orange-600 uppercase text-sm overflow-hidden relative"
				>
					Read More
				</div>
			</div>
		</div>

		<div
			class="flex flex-row justify-center pt-2 flex-nowrap overflow-hidden min-h-16 bg-gray-900 mx-4 mt-2"
		>
			{#each post.tech as { icon }}
				<div class="flex flex-row items-center justify-center mr-2 mb-2 tech-icon w-4 shrink-0">
					{@html icon}
				</div>
			{/each}
		</div>

		<h1 class="text-lg font-bold mt-1">
			{post.title}
		</h1>

		<div class="text-xs mt-1 text-orange-300 -mt-1">
			{format(post.date, 'PP')}
		</div>

		<div class="text-sm text-gray-300 mt-1">
			{post.excerpt}
		</div>
	</div>
</a>

<style lang="postcss">
	.tech-icon svg {
		:global(svg) {
			width: 2rem;
			height: 2rem;
		}
	}

	.img-wrapper {
		overflow: hidden;
		z-index: 10;

		:global(& img) {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	@keyframes spin {
		0% {
			transform: translate(-50%, -50%) rotate(0deg);
		}
		100% {
			transform: translate(-50%, -50%) rotate(359deg);
		}
	}

	.blog-box-bg {
		content: '';
	}

	.blog-box:hover {
		border-color: transparent;

		:global(img) {
			filter: sepia(0.5) saturate(1.5) brightness(0.5) opacity(0.5) blur(2px) hue-rotate(180deg);
		}

		.blog-box-bg {
			background: var(--gradient);
			position: absolute;
			width: 150%;
			height: 180%;
			content: '';
			border-radius: 8px;
			padding: 9px;
			box-sizing: border-box;
			border-color: transparent;
			animation: spin 2s linear infinite;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}

		.description-box {
			display: flex;
			flex-flow: column nowrap;
			align-items: center;
			justify-content: center;
		}
	}
</style>
