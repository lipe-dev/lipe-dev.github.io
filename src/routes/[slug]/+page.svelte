<script lang="ts">
	import type { PageData } from './$types';
	import bottomShine from '$lib/actions/bottom-shine';

	let { data }: { data: PageData } = $props();

	const growthEmoji: Record<string, string> = {
		seedling: '🌱',
		budding: '🌿',
		evergreen: '🌲'
	};

	// Extract component for Svelte 5 dynamic component rendering
	const NoteContent = $derived(data.component);
</script>

<svelte:head>
	<title>{data.note?.name || 'Note'} | lipe.dev</title>
</svelte:head>

{#if data.note}
	<div class="mb-8">
		<div class="flex items-center gap-3 mb-2">
			<h1
				class="text-gray-100 text-4xl font-display font-bold uppercase tracking-widest"
			>
				{data.note.name}
			</h1>
			<span class="text-2xl" title={data.note.growth}>
				{growthEmoji[data.note.growth] || '🌱'}
			</span>
		</div>

		{#if data.note.tags.length > 0}
			<div class="flex flex-wrap gap-2 mb-4">
				{#each data.note.tags as tag}
					<span
						class="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
					>
						{tag}
					</span>
				{/each}
			</div>
		{/if}

		{#if data.note.date}
			<p class="text-orange-300 text-sm mb-4">
				{new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(data.note.date)}
			</p>
		{/if}
	</div>

	{#if data.note.image}
		<div class="mb-8 rounded-lg overflow-hidden h-[300px]">
			<img
				src={data.note.image}
				alt={data.note.name}
				class="w-full h-full object-cover"
			/>
		</div>
	{/if}

	{#if data.note.images && data.note.images.length > 0}
		<div class="mb-8 rounded-lg overflow-hidden">
			<img
				src={data.note.images[0]}
				alt={data.note.name}
				class="w-full h-auto max-h-[400px] object-contain bg-gray-900"
			/>
		</div>
	{/if}

	<div
		class="bg-gray-950 rounded-lg p-6 mb-8 relative overflow-hidden"
		use:bottomShine
	>
		<article
			class="prose lg:prose-lg prose-invert prose-headings:text-2xl prose-headings:tracking-wide prose-headings:font-semibold prose-headings:font-display prose-headings:text-gray-200 mx-auto"
		>
			<NoteContent />
		</article>
	</div>

	{#if data.backlinkNotes && data.backlinkNotes.length > 0}
		<div class="bg-gray-950 rounded-lg p-6 relative overflow-hidden" use:bottomShine>
			<h2 class="text-gray-100 text-xl font-display font-bold uppercase tracking-widest mb-4">
				Backlinks
			</h2>
			<div class="flex flex-col gap-2">
				{#each data.backlinkNotes as backlink}
					{#if backlink}
						<a
							href="/{backlink.slug}"
							class="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors"
						>
							<span class="text-orange-500">←</span>
							<span>{backlink.name}</span>
						</a>
					{/if}
				{/each}
			</div>
		</div>
	{/if}
{:else}
	<p class="text-gray-400">Note not found</p>
{/if}

<style lang="postcss">
	:global(.wikilink) {
		color: theme(colors.orange.400);
		text-decoration: underline;
		text-decoration-style: dotted;
		text-underline-offset: 2px;
	}

	:global(.wikilink:hover) {
		color: theme(colors.orange.300);
		text-decoration-style: solid;
	}
</style>
