<script lang="ts">
	import bottomShine from '$lib/actions/bottom-shine';
	import CoolBox from '$lib/components/CoolBox.svelte';
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Breadcrumb aria-label="Default breadcrumb example" class="mb-4">
	<BreadcrumbItem
		href="/"
		home
		homeClass="hover:text-white text-gray-500 text-sm flex items-center flex-row"
		>Home</BreadcrumbItem
	>
	<BreadcrumbItem href="/tech" linkClass="hover:text-white text-gray-500 text-sm gradient-text ml-2"
		>Tech</BreadcrumbItem
	>
</Breadcrumb>

<h1 class="text-gray-100 text-4xl font-display font-bold uppercase tracking-widest text-center">
	All the stuff I have worked with
</h1>
<div class="text-lg text-orange-300 mb-8 text-center">
	Click one to see what I have done with it
</div>

<div
	class="flex flex-row flex-wrap mb-3 gap-3 bg-gray-950 shadow-sm rounded-lg p-4 relative overflow-hidden"
	use:bottomShine
>
	{#each Object.entries(data.tech) as [name, tech]}
		<CoolBox {tech} />
	{/each}
</div>
