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
import cssIcon from '$lib/icons/css.svg?raw';
import gatsbyIcon from '$lib/icons/gatsby.svg?raw';
import htmlIcon from '$lib/icons/html.svg?raw';
import i18nIcon from '$lib/icons/i18n.svg?raw';
import p5jsIcon from '$lib/icons/p5.js.svg?raw';

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
	| 'styled-components'
	| 'css'
	| 'gatsby'
	| 'html'
	| 'i18n'
	| 'p5.js';

const tech: Record<Techs, Tech> = {
	svelte: {
		name: 'Svelte',
		icon: svelteIcon,
		slug: 'svelte',
		star: true,
		summary:
			"Svelte is my new coding crush. Building websites with it feels like surfing on code waves. From my website to secret projects, Svelte's my trusty sidekick. Can't wait to see what SvelteKit brings to this electrifying tech romance!"
	},
	sveltekit: {
		name: 'SvelteKit',
		icon: svelteIcon,
		slug: 'sveltekit',
		star: true,
		summary:
			"SvelteKit, the futuristic superhero of web development! It organizes projects smoother than a dance routine, serves SSR magic with a sprinkle of load function fairy dust. And don't get me started on the enhancing feature - it's like giving your website a jetpack!"
	},
	react: {
		name: 'React',
		icon: reactIcon,
		slug: 'react',
		star: true,
		summary:
			"React and I go way back - we're practically old buddies. From Redux roller coasters to Gatsby galas, we've done it all. TypeScript joined the party, and now it's a sophisticated soirée of frontend fun."
	},
	next: {
		name: 'Next.js',
		icon: nextIcon,
		slug: 'next',
		star: true,
		summary:
			"Next.js is my virtual tour guide in the world of web. It's like a GPS for building projects, and it doesn't mind if I bring my TypeScript teddy bear along. MapLibre, SWR, and friends often tag along for the adventure!"
	},
	typescript: {
		name: 'TypeScript',
		icon: typescript,
		slug: 'typescript',
		star: true,
		summary:
			"TypeScript, my dependable partner-in-code since 2018. It's like coding with training wheels, making sure I don't fall into runtime potholes. It's my go-to language - the cape to my coding superhero outfit!"
	},
	css: {
		name: 'CSS',
		icon: cssIcon,
		slug: 'css',
		star: true,
		summary:
			"CSS, my artistic touch to the web since the early days. It's the palette with which I paint delightful visual experiences. From simple styling to complex animations, CSS is my creative outlet - the magician behind the curtain of web design!"
	},
	html: {
		name: 'HTML',
		icon: htmlIcon,
		slug: 'html',
		star: true,
		summary:
			"HTML, the building blocks of the web. It's the structure that holds it all together. From headings to hyperlinks, HTML is where it all begins. It's the alphabet of the digital realm."
	},
	javascript: {
		name: 'JavaScript',
		icon: javascript,
		slug: 'javascript',
		star: false,
		summary:
			"JavaScript, the wild and free spirit I met back in 2012. It's been a roller coaster ride from basic scripts to React extravaganzas. It's like a lifelong friendship with a coding rebel."
	},
	'styled-components': {
		name: 'Styled',
		icon: styledComponents,
		slug: 'styled-components',
		star: false,
		summary:
			"Styled Components, my design stylist since 2018. It's like having a personal fashion designer for my React components. Though nowadays, Svelte's internal couture is stealing the show!"
	},
	django: {
		name: 'Django',
		icon: django,
		slug: 'django',
		star: false,
		summary:
			"Django, the wise old wizard of web frameworks. I dabbled with it in 2016, creating digital spells for projects. While I'm grooving in the frontend spotlight now, Django knows I'll return if backend magic is needed."
	},
	python: {
		name: 'Python',
		icon: python,
		slug: 'python',
		star: false,
		summary:
			"Python, my trusty sidekick since 2016. It's like a Swiss Army knife for coding – from tools to data adventures. It's my go-to for scripting shenanigans and the occasional data caper."
	},
	firebase: {
		name: 'Firebase',
		icon: firebase,
		slug: 'firebase',
		star: false,
		summary:
			"Firebase, the rockstar of real-time tech. It's like the lead guitarist of a band that nails both authentication and real-time database solos. Supabase might be knocking, but Firebase still knows how to jam!"
	},
	storybook: {
		name: 'Storybook',
		icon: storybook,
		slug: 'storybook',
		star: false,
		summary:
			"Storybook, my trusty scribe since 2018. It's like the librarian for my components, neatly cataloging their tales. From design systems to hero icons, Storybook is the epic storyteller of code."
	},
	'material-design': {
		name: 'Material Design',
		icon: materialDesign,
		slug: 'material-design',
		star: false,
		summary:
			"Material Design, the stylish tailor of user interfaces. It's like a fashion consultant for my apps, dressing them in modern elegance. Sure, it might be taking a breather, but class is timeless, right?"
	},
	android: {
		name: 'Android',
		icon: android,
		slug: 'android',
		star: false,
		summary:
			"Android, the adventurous spirit that led me to the smartphone era in 2012. We've explored the app wilderness and tinkered with OS gears. Nowadays, React Native's my co-pilot for cross-platform quests."
	},
	maplibre: {
		name: 'MapLibre',
		icon: maplibreIcon,
		slug: 'maplibre',
		star: false,
		summary:
			"MapLibre, the cartographer of my coding journeys since 2022. It's like my GPS to coding destinations, complete with custom layers and map popups. With Firebase and ESRI, it's a dream team for geo-adventures!"
	},
	'github-actions': {
		name: 'GitHub Actions',
		icon: githubActions,
		slug: 'github-actions',
		star: false,
		summary:
			"GitHub Actions, the backstage crew of my coding circus since 2020. It's like having a team of automators, ensuring my code takes center stage flawlessly. Deployments, tests, and applause - all in one!"
	},
	'github-pages': {
		name: 'GitHub Pages',
		icon: githubPages,
		slug: 'github-pages',
		star: false,
		summary:
			"GitHub Pages, my online podium since 2018. It's like a virtual amphitheater for my projects, where they can shine in the spotlight. From this website to personal projects, it's a standing ovation for GitHub Pages!"
	},
	github: {
		name: 'GitHub',
		icon: github,
		slug: 'github',
		star: false,
		summary:
			"GitHub, the trusty companion that's been with me through thick and thin. From versioning virtuoso to collaboration maestro, it's the partner-in-crime every coder dreams of. At this point, GitHub's practically part of my DNA!"
	},
	mui: {
		name: 'MUI',
		icon: mui,
		slug: 'mui',
		star: false,
		summary:
			"MUI, the design conductor that orchestrates my UI symphonies. It's like having a conductor's wand for Material Design magic. Whether it's styling or orchestrating, MUI knows how to make UIs sing!"
	},
	recharts: {
		name: 'Recharts',
		icon: recharts,
		slug: 'recharts',
		star: false,
		summary:
			"Recharts, the data visualization partner that turns numbers into chart-topping hits. Since 2018, it's been my go-to chart maestro. With Recharts, my data stories are as captivating as a catchy melody!"
	},
	gatsby: {
		name: 'Gatsby',
		icon: gatsbyIcon,
		slug: 'gatsby',
		star: false,
		summary:
			'Gatsby, my static site sorcerer. It takes my React spells and turns them into blazing-fast websites. GraphQL is the magic wand, and plugins are the enchantments. Together, they craft web experiences like no other!'
	},
	i18n: {
		name: 'i18n',
		icon: i18nIcon,
		slug: 'i18n',
		star: false,
		summary:
			'i18n, the global communicator of my apps. It speaks the language of users around the world. With internationalization, my projects become multilingual, breaking down barriers and reaching a diverse audience.'
	},
	'p5.js': {
		name: 'p5.js',
		icon: p5jsIcon,
		slug: 'p5.js',
		star: false,
		summary:
			"p5.js, my canvas for creative coding. It's where algorithms meet artistry. From generative graphics to interactive animations, p5.js turns code into visual poetry. It's a playground for the imagination."
	}
};

export default tech;
