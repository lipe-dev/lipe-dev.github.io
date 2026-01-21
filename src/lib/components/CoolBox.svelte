<script lang="ts">
	import type { Tech } from '$lib/data/tech';

	let { tech }: { tech: Tech } = $props();
</script>

<a
	href="/tech/{tech.slug}"
	class="coolbox relative overflow-hidden flex flex-col items-center justify-center rounded-lg p-1 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-orange-900/50 hover:shadow-lg"
>
	<div class="coolbox-bg z-10 gradient" />
	<div
		class="p-4 rounded-[6px] border-[1px] border-solid border-gray-800 flex flex-col items-center justify-center w-24 h-24 bg-gray-900 z-50 coolbox-content"
	>
		{#if tech.star}
			<div class="absolute top-0 right-0 mt-0 mr-0 z-50">
				<iconify-icon icon="line-md:star-filled" class="text-yellow-400 text-2xl" />
			</div>
		{/if}
		<div class="icon-wrapper text-gray-300 fill-gray-300">
			{@html tech.icon}
		</div>

		<div class="uppercase mt-2 text-sm text-center">
			{tech.name}
		</div>
	</div>
</a>

<style lang="postcss">
	.icon-wrapper {
		width: 40px;
		height: 40px;
		line-height: 1;
	}

	:global(.coolbox:hover .icon-wrapper svg path) {
		fill: url(#Gradient1);
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(359deg);
		}
	}

	.coolbox .coolbox-content {
		color: theme(colors.gray.400);
	}

	.coolbox:hover .coolbox-content {
		border-color: transparent;
		color: theme(colors.white);
	}

	.coolbox:hover .coolbox-bg {
		position: absolute;
		width: 142%;
		height: 142%;
		content: '';
		border-radius: 8px;
		padding: 9px;
		box-sizing: border-box;
		border-radius: 9999px;
		box-sizing: border-box;
		border-color: transparent;
		animation: spin 2s linear infinite;
	}
</style>
