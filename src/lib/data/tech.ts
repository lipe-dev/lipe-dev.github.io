import svelteIcon from '$lib/icons/svelte.svg?raw';
import reactIcon from '$lib/icons/react.svg?raw';
import nextIcon from '$lib/icons/next.svg?raw';
import maplibreIcon from '$lib/icons/maplibre.svg?raw';
import githubActions from '$lib/icons/github-actions.svg?raw';
import githubPages from '$lib/icons/github-pages.svg?raw';
import github from '$lib/icons/github.svg?raw';

export type Tech = {
	name: string;
	icon: string;
	star: boolean;
	slug: string;
	summary?: string;
};

export type Techs =
	| 'svelte'
	| 'sveltekit'
	| 'react'
	| 'next'
	| 'maplibre'
	| 'github-actions'
	| 'github-pages'
	| 'github';

const tech: Record<Techs, Tech> = {
	svelte: {
		name: 'Svelte',
		icon: svelteIcon,
		slug: 'svelte',
		star: true,
		summary:
			'I have started using Svelte recently, and I am really enjoying it. I have used it to build this website, and I am using it to build a few other projects. I am also using it at work to build a few internal tools and special projects. I am excited to see where Svelte goes in the future. I am also excited to see how SvelteKit turns out. I hope to use it for more and more projects in the future.'
	},
	sveltekit: {
		name: 'SvelteKit',
		icon: svelteIcon,
		slug: 'sveltekit',
		star: true,
		summary:
			'I am excited to see where SvelteKit goes in the future. I hope to use it for more and more projects in the future. I really enjoy how SvelteKit organizes the project structure with its folder based routing. I also really like how it handles server side rendering, making things really simple with the `load` function and +server files. The enhancing feature is by far my favorite feature, allowing for really accessible, available and fast websites.'
	},
	react: {
		name: 'React',
		icon: reactIcon,
		slug: 'react',
		star: true,
		summary:
			'I have used React for a few years now, and I am very comfortable with it. I have used it in a variety of ways, including with Redux, Next.js, and Gatsby. I have also used it with TypeScript. I have used React to build a variety of projects, including my previous website and most products at my last few jobs.'
	},
	next: {
		name: 'Next.js',
		icon: nextIcon,
		slug: 'next',
		star: true,
		summary:
			'I have used Next.js for a few years now, and I am very comfortable with it. I have used it to build a variety of projects, including my previous website and most products at my last few jobs. I have also used it with TypeScript. I have also used it with a variety of other technologies, including MapLibre, Mapbox, SWR, and more.'
	},
	maplibre: {
		name: 'MapLibre',
		icon: maplibreIcon,
		slug: 'maplibre',
		star: false,
		summary:
			'I have been using MaplibreGL JS since 2022 when a potential client approached me with a request for an irrigation mapping tool. I have mastered many of its advanced features, including custom layers, custom controls, and custom popups. I have also used it with Next.js, React, Svlete, and SvelteKit. I have also used it with a variety of other technologies, including Firebase for storing data, and ESRI for geocoding.'
	},
	'github-actions': {
		name: 'GitHub Actions',
		icon: githubActions,
		slug: 'github-actions',
		star: false,
		summary:
			'I have been using GitHub Actions since 2020 when I started using GitHub Actions for my personal projects. I have used it to build, test, and deploy a variety of projects, including this website. I have also used it to build, test, and deploy a variety of projects at my last few jobs.'
	},
	'github-pages': {
		name: 'GitHub Pages',
		icon: githubPages,
		slug: 'github-pages',
		star: false,
		summary:
			'I have been using GitHub Pages since 2018 when I started using it to host documentation for a component library project. I have used it to host a variety of projects, including this website and a few other personal projects. I have also used it to host a variety of projects at my last few jobs.'
	},
	github: {
		name: 'GitHub',
		icon: github,
		slug: 'github',
		star: false,
		summary:
			'I have been using GitHub since... well... basically forever. I have used it in all ways imaginable, to host stuff, for versioning, for collaboration, for documentation, for issue tracking, for project management, for CI/CD, and more. Do I even need to say more about GitHub at this point?'
	}
};

export default tech;
