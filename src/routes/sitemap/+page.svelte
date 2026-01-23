<script lang="ts">
	import type { PageData } from './$types';
	import bottomShine from '$lib/actions/bottom-shine';

	let { data }: { data: PageData } = $props();

	interface TreeNode {
		type: 'file' | 'folder';
		name: string;
		slug?: string;
		children?: TreeNode[];
	}

	function formatFolderName(name: string): string {
		return name
			.split('-')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	}
</script>

<svelte:head>
	<title>Sitemap | lipe.dev</title>
</svelte:head>

<div class="mb-8">
	<h1 class="text-gray-100 text-4xl font-display font-bold uppercase tracking-widest mb-4">
		Sitemap
	</h1>
	<p class="text-gray-400">
		Browse all notes organized by their folder structure.
	</p>
</div>

<div class="bg-gray-950 rounded-lg p-6 relative overflow-hidden" use:bottomShine>
	<ul class="space-y-4">
		{#each data.noteTree as node}
			{#if node.type === 'folder'}
				<li id={node.name}>
					<div class="flex items-center gap-2 text-gray-200 font-semibold mb-2">
						<svg class="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
							<path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
						</svg>
						<span class="uppercase tracking-wider">{formatFolderName(node.name)}</span>
					</div>
					{#if node.children && node.children.length > 0}
						<ul class="ml-6 space-y-1 border-l border-gray-800 pl-4">
							{#each node.children as child}
								{#if child.type === 'file' && child.slug}
									<li>
										<a
											href="/{child.slug}"
											class="text-gray-400 hover:text-orange-400 transition-colors"
										>
											{formatFolderName(child.name)}
										</a>
									</li>
								{:else if child.type === 'folder'}
									<li class="mt-3">
										<div class="flex items-center gap-2 text-gray-300 font-medium mb-1">
											<svg class="w-4 h-4 text-orange-400/70" fill="currentColor" viewBox="0 0 20 20">
												<path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
											</svg>
											<span class="uppercase tracking-wider text-sm">{formatFolderName(child.name)}</span>
										</div>
										{#if child.children && child.children.length > 0}
											<ul class="ml-5 space-y-1 border-l border-gray-800/50 pl-3">
												{#each child.children as grandchild}
													{#if grandchild.type === 'file' && grandchild.slug}
														<li>
															<a
																href="/{grandchild.slug}"
																class="text-gray-500 hover:text-orange-400 transition-colors text-sm"
															>
																{formatFolderName(grandchild.name)}
															</a>
														</li>
													{/if}
												{/each}
											</ul>
										{/if}
									</li>
								{/if}
							{/each}
						</ul>
					{/if}
				</li>
			{:else if node.type === 'file' && node.slug}
				<li>
					<a
						href="/{node.slug}"
						class="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors"
					>
						<svg class="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd" />
						</svg>
						{formatFolderName(node.name)}
					</a>
				</li>
			{/if}
		{/each}
	</ul>
</div>
