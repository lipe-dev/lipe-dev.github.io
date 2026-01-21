<script lang="ts">
	interface Props {
		activeFilters: string[];
		onFilterChange: (filters: string[]) => void;
	}

	let { activeFilters, onFilterChange }: Props = $props();

	const filters = [
		{ id: 'technology', label: 'Technology', color: '#22c55e' },
		{ id: 'projects', label: 'Projects', color: '#f97316' },
		{ id: 'hobbies', label: 'Hobbies', color: '#8b5cf6' }
	];

	function toggleFilter(filterId: string) {
		const newFilters = activeFilters.includes(filterId)
			? activeFilters.filter((f) => f !== filterId)
			: [...activeFilters, filterId];

		// Ensure at least one filter is active
		if (newFilters.length > 0) {
			onFilterChange(newFilters);
		}
	}
</script>

<div class="controls">
	<span class="controls-label">Filter:</span>
	{#each filters as filter}
		<button
			class="filter-btn"
			class:active={activeFilters.includes(filter.id)}
			style="--filter-color: {filter.color};"
			onclick={() => toggleFilter(filter.id)}
		>
			{filter.label}
		</button>
	{/each}
</div>

<style lang="postcss">
	.controls {
		position: absolute;
		top: 1rem;
		right: 1rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem;
		background: rgba(17, 24, 39, 0.9);
		border-radius: theme(borderRadius.md);
		z-index: 10;
	}

	.controls-label {
		font-size: 0.75rem;
		color: theme(colors.gray.400);
		margin-right: 0.25rem;
	}

	.filter-btn {
		padding: 0.25rem 0.75rem;
		font-size: 0.75rem;
		border-radius: theme(borderRadius.full);
		background: theme(colors.gray.800);
		color: theme(colors.gray.400);
		border: 1px solid theme(colors.gray.700);
		cursor: pointer;
		transition: all 0.15s ease;
	}

	.filter-btn:hover {
		background: theme(colors.gray.700);
		color: theme(colors.gray.200);
	}

	.filter-btn.active {
		background: var(--filter-color);
		color: white;
		border-color: var(--filter-color);
	}
</style>
