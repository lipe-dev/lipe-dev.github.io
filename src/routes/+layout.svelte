<script lang="ts">
	import '../app.postcss';
	import '@fontsource-variable/nunito';
	import '@fontsource-variable/manrope';
	import '@fontsource-variable/inter';

	import 'iconify-icon';

	import sheen from '$lib/actions/sheen';
	import textScramble from '$lib/actions/text-scramble';
	import sideShine from '$lib/actions/side-shine';
	import bottomShine from '$lib/actions/bottom-shine';
	import Graph from '$lib/components/Graph/Graph.svelte';
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import { page } from '$app/stores';

	let { children, data }: { children: Snippet; data: LayoutData } = $props();

	// Check if we're on a note page (not homepage)
	const isNotePage = $derived($page.route.id === '/[slug]');

	const wordPool = {
		developer: [
			'Developer',
			'Creator',
			'Maker',
			'Programmer',
			'Engineer',
			'Artist',
			'Writer',
			'Builder',
			'Hacker',
			'Tinkerer',
			'Craftsman',
			'Artisan',
			'Architect',
			'Inventor',
			'Coder'
		],
		name: ['Felipe', 'Lipe', 'lipe-dev', 'Felipera'],
		langs: [
			'Front-End',
			'React',
			'Svelte',
			'TypeScript',
			'JavaScript',
			'CSS',
			'HTML',
			'Web',
			'UI',
			'UX',
			'Mobile',
			'Web',
			'App',
			'React Native',
			'Firebase',
			'Testing',
			'Storybook',
			'Tailwind',
			'Python',
			'Next.js',
			'SvelteKit'
		]
	};
</script>

<div class="h-screen overflow-hidden">
	<div class="flex flex-col md:flex-row items-stretch w-full h-full">
		<div
			class="flex md:flex-col flex-row justify-center flex-wrap md:flex-nowrap items-start w-full md:w-[520px] shrink-0 gap-2 dotted border-gray-900 border-solid border-r-2 md:fixed md:h-screen sticky -top-20 z-[9999999] md:top-0"
		>
			<!-- Header row with pic and text side by side -->
			<div class="flex flex-row items-center gap-4 md:px-8 md:pt-4 m-2 md:m-0">
				<div
					class="rounded-full gradient w-20 h-20 md:w-24 md:h-24 p-1 relative overflow-hidden shrink-0"
					use:sheen
					role="presentation"
				>
					<div class="rounded-full w-full h-full bg-stone-950 overflow-hidden p-1">
						<div class="rounded-full w-full h-full bg-stone-950 overflow-hidden">
							<img src="/me.jpg" alt="me" class="rounded-full" />
						</div>
					</div>
				</div>

				<div class="my-auto">
					<h1
						class="font-display md:text-2xl text-xl font-normal text-white tracking-wider uppercase"
					>
						I'm <span
							class="gradient-text"
							style="-webkit-text-fill-color: transparent;"
							use:textScramble={wordPool.name}>Felipe</span
						>.
					</h1>

					<h2 class="font-display md:text-lg text-lg text-stone-300 font-bold">
						<span use:textScramble={wordPool.langs}>Front-End</span>
						<span use:textScramble={wordPool.developer}>Developer</span>
					</h2>
				</div>
			</div>

			<!-- Navigation Menu -->
			<nav class="hidden md:flex flex-col gap-0 px-8 w-full" use:sideShine>
				<a href="/" class="menu-item">
					<iconify-icon icon="line-md:home" class="text-xl"></iconify-icon>
					<span>Home</span>
				</a>
				<a href="/sitemap" class="menu-item">
					<iconify-icon icon="line-md:document-list" class="text-xl"></iconify-icon>
					<span>Sitemap</span>
				</a>
				<a href="/random" class="menu-item">
					<iconify-icon icon="line-md:compass-loop" class="text-xl"></iconify-icon>
					<span>Random</span>
				</a>
			</nav>

			{#if isNotePage}
				<div class="sidebar-graph hidden md:block flex-1 min-h-0">
					<Graph graph={data.graph} highlightSlug={$page.params.slug} />
				</div>
			{/if}

			<div
				class="flex flex-row items-center justify-center gap-4 mt-auto px-8 fill-stone-300 mb-2"
				use:bottomShine
			>
				<div
					class="rounded-full gradient hover:shadow-lg hover:shadow-orange-800 w-12 h-12 p-[2px] relative overflow-hidden transition-all duration-200 hover:scale-105"
					role="presentation"
				>
					<div class="rounded-full w-full h-full bg-gray-900 overflow-hidden p-1">
						<a
							href="https://github.com/lipe-dev"
							class="rounded-full w-11 h-11 flex items-center justify-center"
							aria-label="GitHub"
						>
							<div class="rounded-full w-full h-full overflow-hidden">
								<iconify-icon icon="line-md:github-twotone" class="text-orange-400 text-4xl"></iconify-icon>
							</div>
						</a>
					</div>
				</div>

				<div
					class="rounded-full gradient hover:shadow-lg hover:shadow-orange-800 w-12 h-12 p-[2px] relative overflow-hidden transition-all duration-200 hover:scale-105"
					role="presentation"
				>
					<div class="rounded-full w-full h-full bg-gray-900 overflow-hidden p-1">
						<a
							href="mailto:fe@lipe.dev"
							class="rounded-full w-11 h-11 flex items-center justify-center"
							aria-label="Email"
						>
							<div class="rounded-full w-full h-full overflow-hidden pt-[1px] pl-[2px]">
								<iconify-icon icon="line-md:email-twotone" class="text-orange-400 text-[32px]"></iconify-icon>
							</div>
						</a>
					</div>
				</div>

				<div
					class="rounded-full gradient hover:shadow-lg hover:shadow-orange-800 w-12 h-12 p-[2px] relative overflow-hidden transition-all duration-200 hover:scale-105"
					role="presentation"
				>
					<div class="rounded-full w-full h-full bg-gray-900 overflow-hidden p-1">
						<a
							href="https://discordapp.com/users/lipe_dev"
							class="rounded-full w-11 h-11 flex items-center justify-center"
							aria-label="Discord"
						>
							<div class="rounded-full w-full h-full overflow-hidden pt-[1px] pl-[2px]">
								<iconify-icon icon="line-md:discord" class="text-orange-400 text-[32px]"></iconify-icon>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>

		<div class="md:p-16 p-4 grow relative md:ml-[520px] min-h-0 overflow-auto" use:sideShine>
			{@render children()}
		</div>
	</div>
</div>

<style lang="postcss">
	.dotted {
		background-image: radial-gradient(theme(colors.gray.900) 10%, transparent 10%),
			radial-gradient(theme(colors.gray.900) 10%, transparent 10%);
		background-color: theme(colors.gray.950);
		background-position: 0 0;
		background-size: 48px 48px;
	}

	.menu-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.25rem 0.75rem;
		color: theme(colors.gray.400);
		font-size: 0.875rem;
		border-radius: 0.375rem;
		transition: all 0.2s ease-in-out;
	}

	.menu-item:hover {
		color: theme(colors.orange.400);
		background: rgba(251, 146, 60, 0.1);
		padding-left: 1rem;
	}

	@keyframes cool-img {
		from {
			transform: scale(1);
			filter: blur(0);
		}
		30% {
			transform: scale(1.1) rotate(5deg);
			filter: blur(6px);
		}
		50% {
			transform: scale(1.1) rotate(-5deg);
			filter: blur(0);
		}
		60% {
			transform: scale(1.1) rotate(-8deg);
			filter: blur(3px);
		}
		80% {
			transform: scale(1.1) rotate(0deg);
			filter: blur(0);
		}
		to {
			transform: scale(1.1);
			filter: blur(0);
		}
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	img:hover {
		animation-name: cool-img;
		animation-duration: 1s;
		animation-timing-function: ease-in-out;
		animation-delay: 0s;
		animation-iteration-count: 1;
		animation-direction: alternate;
		animation-fill-mode: both;
		animation-play-state: running;
	}
</style>
