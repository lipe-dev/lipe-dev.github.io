import svelte from '$lib/icons/svelte.svelte';
import react from '$lib/icons/react.svelte';
import next from '$lib/icons/next.svelte';
import maplibre from '$lib/icons/maplibre.svelte';
import type { SvelteComponent } from 'svelte';

export type Tech = {
	name: string;
	icon: SvelteComponent;
	star: boolean;
};

export type Techs = 'svelte' | 'sveltekit' | 'react' | 'next' | 'maplibre';

const tech: Record<Techs, Tech> = {
	svelte: {
		name: 'Svelte',
		icon: svelte,
		star: true
	},
	sveltekit: {
		name: 'SvelteKit',
		icon: svelte,
		star: true
	},
	react: {
		name: 'React',
		icon: react,
		star: true
	},
	next: {
		name: 'Next.js',
		icon: next,
		star: true
	},
	maplibre: {
		name: 'MapLibre',
		icon: maplibre,
		star: false
	}
};

export default tech;
