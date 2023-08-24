import svelteIcon from '$lib/icons/svelte.svg?raw';
import reactIcon from '$lib/icons/react.svg?raw';
import nextIcon from '$lib/icons/next.svg?raw';
import maplibreIcon from '$lib/icons/maplibre.svg?raw';
import githubActions from '$lib/icons/github-actions.svg?raw';
import githubPages from '$lib/icons/github-pages.svg?raw';
import github from '$lib/icons/github.svg?raw';
import django from '$lib/icons/django.svg?raw';
import python from '$lib/icons/python.svg?raw';
import materialDesign from '$lib/icons/material-design.svg?raw';
import mui from '$lib/icons/mui.svg?raw';
import android from '$lib/icons/android.svg?raw';
import firebase from '$lib/icons/firebase.svg?raw';
import storybook from '$lib/icons/storybook.svg?raw';
import recharts from '$lib/icons/recharts.svg?raw';
import javascript from '$lib/icons/javascript.svg?raw';
import typescript from '$lib/icons/typescript.svg?raw';
import styledComponents from '$lib/icons/styled-components.svg?raw';

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
	| 'github'
	| 'django'
	| 'python'
	| 'material-design'
	| 'mui'
	| 'android'
	| 'firebase'
	| 'storybook'
	| 'recharts'
	| 'javascript'
	| 'typescript'
	| 'styled-components';

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
	typescript: {
		name: 'TypeScript',
		icon: typescript,
		slug: 'typescript',
		star: true,
		summary:
			'I have been using TypeScript since 2018 when I started using it for a React project. I have used it to build a variety of projects, including my previous website and most products at my last few jobs. I have also used it with a variety of other technologies, including Next.js, MapLibre, Mapbox, SWR, and more. It is my default go to language for any project.'
	},
	javascript: {
		name: 'JavaScript',
		icon: javascript,
		slug: 'javascript',
		star: false,
		summary:
			'I have been using JavaScript since pretty much always. But if I had to put a date on it, I would say 2012, when I first saw it in a talk at my university. The idea of making dynamic interfaces was captivating. I have used it to build a variety of projects over the years, from bare JS to modern frameworks like React and Svelte.'
	},
	'styled-components': {
		name: 'Styled',
		icon: styledComponents,
		slug: 'styled-components',
		star: false,
		summary:
			"I have been using Styled Components since 2018 when I started using it for a React project. I still like using it whenever I'm using React. I like how it makes it easy to style components, and how it makes it easy to use props to style components. Nowadays, if I have any say, I will use Svelte and its built in CSS solution."
	},
	django: {
		name: 'Django',
		icon: django,
		slug: 'django',
		star: false,
		summary:
			"I have been using Django since 2016, at one of my first jobs. It is a very popular framework, and I have used it to help build a variety of projects, including a few internal tools and special projects at my last few jobs. I haven't used it much recently as I decided to focus on the frontend, but I am still get back into it if needed."
	},
	python: {
		name: 'Python',
		icon: python,
		slug: 'python',
		star: false,
		summary:
			"Python is my favorite language. I have been using Python since 2016, at one of my first jobs. I have used it to help build a variety of projects, including a few internal tools and special projects at my last few jobs. I haven't used it much recently as I decided to focus on the frontend, but I still use it from time to time in personal projects and for data analysis."
	},
	firebase: {
		name: 'Firebase',
		icon: firebase,
		slug: 'firebase',
		star: false,
		summary:
			"You know I'm all about that Base, 'bout that Base, no SQL. From the first moment I touched Firebase, I was in love. It helped immensely when I needed both authentication and a realtime database for a project. Nowadays I prefer open sources with less vendor lock in like Supabase, but Firebase is still a great option, specially for customers who want to stay in the Google ecosystem."
	},
	storybook: {
		name: 'Storybook',
		icon: storybook,
		slug: 'storybook',
		star: false,
		summary:
			'I have been using Storybook since 2018 when I started using it to document a component library project. I have used it to document a variety of projects, from component libraries, to icon libraries, to design systems. I have also used it to document a variety of projects at my last few jobs.'
	},
	'material-design': {
		name: 'Material Design',
		icon: materialDesign,
		slug: 'material-design',
		star: false,
		summary:
			'As a programmer, I am not a designer. Having a good design system is very important to me. I have used Material UI for a few years now, and I am very comfortable with it. I think it is going out of style a bit, but I still like it.'
	},
	android: {
		name: 'Android',
		icon: android,
		slug: 'android',
		star: false,
		summary:
			"I have been using Android since 2012, when I got my first smartphone. I have used it to build a variety of projects, from user facing apps, to working with the inner workings of the OS for Motorola. I haven't used it much recently since joining the Javascript revolution, and nowadays if I have to build an app, I will do it with React Native."
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
	},
	mui: {
		name: 'MUI',
		icon: mui,
		slug: 'mui',
		star: false,
		summary:
			"As a programmer, I am not a designer. Having a good design system is very important to me. Having a library that implements said design system is even better! Whenever the project calls for Material Design, I know what I'll be using. I have even contributed to the project a few times."
	},
	recharts: {
		name: 'Recharts',
		icon: recharts,
		slug: 'recharts',
		star: false,
		summary:
			'I have been using Recharts since 2018 when I build a component library on top of it for a data visualization project. I still use it to this day whenever I need to build a chart that is reliable, customizable, and easy to use.'
	}
};

export default tech;
