import svelteIcon from '$lib/icons/svelte.svg?raw';
import reactIcon from '$lib/icons/react.svg?raw';
import nextIcon from '$lib/icons/next.svg?raw';
import maplibreIcon from '$lib/icons/maplibre.svg?raw';

export type Tech = {
	name: string;
	icon: string;
	star: boolean;
	slug: string;
};

export type Techs = 'svelte' | 'sveltekit' | 'react' | 'next' | 'maplibre';

const tech: Record<Techs, Tech> = {
	svelte: {
		name: 'Svelte',
		icon: svelteIcon,
		slug: 'svelte',
		star: true
	},
	sveltekit: {
		name: 'SvelteKit',
		icon: svelteIcon,
		slug: 'sveltekit',
		star: true
	},
	react: {
		name: 'React',
		icon: reactIcon,
		slug: 'react',
		star: true
	},
	next: {
		name: 'Next.js',
		icon: nextIcon,
		slug: 'next',
		star: true
	},
	maplibre: {
		name: 'MapLibre',
		icon: maplibreIcon,
		slug: 'maplibre',
		star: false
	}
};

export default tech;
