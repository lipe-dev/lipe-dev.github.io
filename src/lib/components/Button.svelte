<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

	type Props = (HTMLAnchorAttributes | HTMLButtonAttributes) & {
		buttonClass?: string;
		children: Snippet;
		href?: string;
	};

	let { buttonClass = '', children, href, ...rest }: Props = $props();
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	class="button px-4 py-3 rounded-md relative z-10 text-gray-100 text-sm uppercase flex flex-row hover:shadow-lg hover:shadow-orange-800 items-center w-fit {buttonClass}"
	{href}
	{...rest}
>
	{@render children()}
</svelte:element>

<style lang="postcss">
	.button {
		background: var(--gradient);
		transition: all 100ms ease-in-out;

		&:hover {
			transform: scale(1.05);
		}

		&:before {
			background: theme(colors.gray.900);
			position: absolute;
			content: '';
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: theme(spacing.[0.5]);
			border-radius: theme(borderRadius.md);
			z-index: -2;
		}

		&:after {
			background: rgba(0, 0, 0, 0.2);
			position: absolute;
			content: '';
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			border-radius: theme(borderRadius.md);
			z-index: -10;
		}

		&:hover:after {
			filter: opacity(0);
		}
	}
</style>
