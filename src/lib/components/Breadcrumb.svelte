<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children: Snippet;
	}

	let { class: className = '', children }: Props = $props();
</script>

<nav aria-label="Breadcrumb" class="flex {className}">
	<ol class="inline-flex items-center space-x-1 md:space-x-2">
		{@render children()}
	</ol>
</nav>
