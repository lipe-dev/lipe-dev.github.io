<script lang="ts">
	interface Props {
		progress: string | number;
		class?: string;
	}

	let { progress, class: className = '' }: Props = $props();
</script>

<div class="w-full bg-gray-600 rounded-full h-2.5 {className}">
	<div class="h-2.5 rounded-full progress-bar" style="width: {progress}%"></div>
</div>

<style lang="postcss">
	.progress-bar {
		background: var(--gradient);
	}
</style>
