<script lang="ts">
	interface BreadcrumbItem {
		name: string;
		href: string;
	}

	interface Props {
		filePath: string;
		noteName: string;
	}

	let { filePath, noteName }: Props = $props();

	// Generate breadcrumb items from file path
	// e.g., "hobbies/cars.md" -> [{ name: "Home", href: "/" }, { name: "Hobbies", href: "/sitemap#hobbies" }, { name: "Cars", href: "/cars" }]
	const breadcrumbs = $derived.by(() => {
		const items: BreadcrumbItem[] = [{ name: 'Home', href: '/' }];

		if (!filePath) return items;

		const parts = filePath.replace('.md', '').split('/');

		// Add folder parts as breadcrumbs
		for (let i = 0; i < parts.length - 1; i++) {
			const folderName = parts[i];
			const displayName = folderName
				.split('-')
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
				.join(' ');
			items.push({
				name: displayName,
				href: `/sitemap#${folderName}`
			});
		}

		// Add current note
		items.push({
			name: noteName,
			href: '#'
		});

		return items;
	});
</script>

<nav class="flex mb-6" aria-label="Breadcrumb">
	<ol class="inline-flex items-center flex-wrap gap-y-1">
		{#each breadcrumbs as crumb, i}
			<li class="inline-flex items-center">
				{#if i > 0}
					<svg
						class="w-3 h-3 text-gray-500 mx-2"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 6 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m1 9 4-4-4-4"
						/>
					</svg>
				{/if}
				{#if i === 0}
					<a
						href={crumb.href}
						class="inline-flex items-center text-sm text-gray-400 hover:text-orange-400 transition-colors"
					>
						<svg
							class="w-3 h-3 mr-1.5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
							/>
						</svg>
						{crumb.name}
					</a>
				{:else if i === breadcrumbs.length - 1}
					<span class="text-sm text-gray-500">{crumb.name}</span>
				{:else}
					<a
						href={crumb.href}
						class="text-sm text-gray-400 hover:text-orange-400 transition-colors"
					>
						{crumb.name}
					</a>
				{/if}
			</li>
		{/each}
	</ol>
</nav>
