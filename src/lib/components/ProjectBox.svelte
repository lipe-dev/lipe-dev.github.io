<script lang="ts">
	import type { Project } from '$lib/data/projects';

	export let project: Project;
</script>

<a
	href="projects/{project.slug}"
	class="project-box flex flex-col items-center justify-center border-[1px] border-solid border-stone-500 w-72 overflow-hidden relative rounded-lg p-[5px] box-content hover:scale-[1.03] transition-all duration-200 fill-stone-400 hover:fill-white text-stone-400 hover:text-white"
>
	<div class="project-box-bg absolute top-0 left-0 right-0 bottom-0 w-full h-full" />

	<div
		class="rounded-[4px] z-50 project-box-content w-full h-full bg-stone-900 flex flex-col justify-stretch items-center p-1"
	>
		<div
			class="relative img-wrapper text-stone-300 fill-stone-300 rounded-[2px] overflow-hidden h-40 w-full"
		>
			<img src={project.images[0]} alt={project.name} />

			<div
				class="description-box absolute bottom-0 left-0 right-0 z-50 p-2 text-center hidden h-full w-full"
				role="presentation"
			>
				{project.description}

				<div
					class="gradient-link p-2 rounded-sm m-2 text-orange-600 uppercase text-sm overflow-hidden relative"
				>
					Read More
				</div>
			</div>
		</div>

		<div
			class="flex flex-row justify-center pt-2 flex-nowrap overflow-hidden min-h-16 bg-stone-900 mx-4 w-full mt-2"
		>
			{#each project.tech as { icon }}
				<div class="flex flex-row items-center justify-center mr-2 mb-2 tech-icon w-4 shrink-0">
					{@html icon}
				</div>
			{/each}
		</div>

		<h1 class="text-lg font-bold mt-1">
			{project.name}
		</h1>
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

	.project-box-bg {
		content: '';
	}

	.project-box:hover {
		border-color: transparent;

		:global(img) {
			filter: sepia(0.5) saturate(1.5) brightness(0.5) opacity(0.5) blur(2px) hue-rotate(180deg);
		}

		.project-box-bg {
			position: absolute;
			width: 150%;
			height: 180%;
			content: '';
			background: linear-gradient(
				233deg,
				theme(colors.orange.700) 8%,
				theme(colors.orange.400) 28.15%,
				theme(colors.orange.700) 49%,
				#e2730e 74.664%,
				#e9aa2b 100%
			);
			border-radius: 8px;
			padding: 9px;
			box-sizing: border-box;
			border-color: transparent;
			animation: spin 4s linear infinite;
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
