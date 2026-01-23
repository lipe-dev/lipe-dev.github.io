<script lang="ts">
	import { notes } from '$lib/generated/notes-data';

	interface Props {
		tag: string;
	}

	let { tag }: Props = $props();

	// Check if tag has a corresponding note
	const noteExists = $derived(notes.some((n) => n.slug === tag.toLowerCase()));
	const href = $derived(noteExists ? `/${tag.toLowerCase()}` : null);
</script>

{#if href}
	<a
		{href}
		class="tag-link relative overflow-hidden px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 transition-all duration-200 uppercase tracking-wider font-semibold"
	>
		<span class="tag-bg z-10 gradient"></span>
		<span class="relative z-20">{tag}</span>
	</a>
{:else}
	<span
		class="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-500 uppercase tracking-wider font-semibold"
	>
		{tag}
	</span>
{/if}

<style lang="postcss">
	.tag-link {
		display: inline-block;
	}

	.tag-bg {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0;
		transition: opacity 0.2s ease-in-out;
	}

	.tag-link:hover {
		color: white;
		background: transparent;
	}

	.tag-link:hover .tag-bg {
		opacity: 1;
		animation: spin 2s linear infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(359deg);
		}
	}
</style>
