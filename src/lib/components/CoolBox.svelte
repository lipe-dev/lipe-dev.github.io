<script lang="ts">
	export let href: string;
</script>

<a
	{href}
	class="coolbox relative overflow-hidden flex flex-col items-center justify-center rounded-lg p-1 transition-all duration-200 ease-in-out hover:scale-105"
>
	<div class="coolbox-bg z-10" />
	<div
		class="p-4 rounded-[6px] border-[1px] border-solid border-stone-500 flex flex-col items-center justify-center w-24 h-24 bg-stone-900 z-50 coolbox-content"
	>
		<div class="icon-wrapper text-stone-300 fill-stone-300">
			<slot name="icon" />
		</div>

		<div class="uppercase mt-2">
			<slot />
		</div>
	</div>
</a>

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="position: fixed; top: -1000px">
	<defs>
		<linearGradient id="Gradient2" x1="0" x2="100%" y1="0" y2="0">
			<stop offset="0%" stop-color="#c2410c" />
			<stop offset="50%" stop-color="#c2410c">
				<animate attributeName="offset" values="-20%;70%;-20%" dur="3s" repeatCount="indefinite" />
			</stop>
			<stop offset="100%" stop-color="#e9aa2b" />
		</linearGradient>
	</defs>
</svg>

<style lang="postcss">
	.icon-wrapper {
		width: 40px;
		height: 40px;
		line-height: 1;
	}

	:global(.coolbox:hover .icon-wrapper svg path) {
		fill: url('#Gradient2');
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
		color: theme(colors.stone.400);
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
		border-radius: 9999px;
		box-sizing: border-box;
		border-color: transparent;
		animation: spin 4s linear infinite;
	}
</style>
