<script lang="ts">
	import '../app.postcss';
	import '@fontsource-variable/nunito';
	import '@fontsource-variable/manrope';
	import '@fontsource-variable/inter';

	import 'iconify-icon';

	import sheen from '$lib/actions/sheen';
	import textScramble from '$lib/actions/text-scramble';
	import sideShine from '$lib/actions/side-shine';
	import antiHoverSiblings from '$lib/actions/anti-hover-siblings';
	import bottomShine from '$lib/actions/bottom-shine';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();

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

<div>
	<div class="flex flex-col md:flex-row items-stretch w-full h-full">
		<div
			class="flex md:flex-col flex-row justify-center flex-wrap md:flex-nowrap items-start w-full md:w-[520px] shrink-0 gap-4 dotted border-gray-900 border-solid border-r-2 md:fixed md:h-screen sticky -top-20 z-[9999999] md:top-0"
		>
			<div
				class="rounded-full gradient w-20 h-20 md:w-48 md:h-48 p-1 relative overflow-hidden md:mx-16 md:mb-8 md:mt-16 m-2 shrink-0"
				use:sheen
				role="presentation"
			>
				<div class="rounded-full w-full h-full bg-stone-950 overflow-hidden p-1">
					<div class="rounded-full w-full h-full bg-stone-950 overflow-hidden">
						<img src="/me.jpg" alt="me" class="rounded-full" />
					</div>
				</div>
			</div>

			<div class="my-auto md:my-0">
				<h1
					class="font-display md:text-5xl text-xl font-normal text-white md:px-16 tracking-wider uppercase"
				>
					I'm <span
						class="gradient-text"
						style="-webkit-text-fill-color: transparent;"
						use:textScramble={wordPool.name}>Felipe</span
					>.
				</h1>

				<h2 class="font-display md:text-3xl text-lg text-stone-300 font-bold md:px-16">
					<span use:textScramble={wordPool.langs}>Front-End</span>
					<span use:textScramble={wordPool.developer}>Developer</span>
				</h2>
			</div>

			<nav class="md:mt-8 relative w-full overflow-hidden" use:sideShine>
				<ul
					class="flex md:flex-col justify-center md:justify-start gap-4 md:gap-0 flex-row text-stone-300 md:text-2xl text-md md:px-16 menu items-stretch"
				>
					<li use:antiHoverSiblings><a href="/">Garden</a></li>
					<li use:antiHoverSiblings><a href="/cv">Resume</a></li>
				</ul>
			</nav>

			<div
				class="flex flex-row items-center justify-center gap-4 mt-auto px-16 fill-stone-300 mb-4"
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
							href="https://www.linkedin.com/in/felipeicp/"
							class="rounded-full w-11 h-11 flex items-center justify-center"
							aria-label="LinkedIn"
						>
							<div class="rounded-full w-full h-full overflow-hidden pl-1 pt-0.5">
								<iconify-icon icon="line-md:linkedin" class="text-orange-400 text-3xl"></iconify-icon>
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

		<div class="md:p-16 p-4 grow relative md:ml-[520px]" use:sideShine>
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

	@keyframes expand-right {
		from {
			width: 0%;
		}
		to {
			width: 100%;
		}
	}

	.menu {
		li a {
			display: block;
			transition: all 0.2s ease-in-out;
			order: 3;
			position: relative;
			padding-top: theme(space.2);
			padding-bottom: theme(space.2);
			z-index: 1;

			&:hover {
				padding-left: theme(space.4);
				background: linear-gradient(
						162deg,
						rgba(232, 153, 1, 0.82) 0%,
						transparent 40.281%,
						rgba(236, 27, 116, 0.94) 100%
					),
					radial-gradient(
							at 50% 50%,
							#f41ff1 0%,
							#ef061b 10.771%,
							#f3074f 27.062%,
							#db411d 72%,
							#e12a0f 100%
						)
						67% 89%/170% 198%;
				background-clip: text;
				-webkit-background-clip: text;
				text-fill-color: transparent;
				-webkit-text-fill-color: transparent;
				font-weight: 700;

				&:before {
					content: '';
					position: absolute;
					left: 0;
					top: 50%;
					transform: translateY(-50%);
					width: 2px;
					height: 100%;
					background: linear-gradient(
							162deg,
							rgba(232, 153, 1, 0.82) 0%,
							transparent 40.281%,
							rgba(236, 27, 116, 0.94) 100%
						),
						radial-gradient(
								at 99% 13%,
								#f41ff1 0%,
								#ef061b 10.771%,
								#f3074f 27.062%,
								#db411d 72%,
								#e12a0f 100%
							)
							67% 89%/170% 198%;
				}

				&:after {
					content: '';
					position: absolute;
					left: 0;
					right: 0;
					top: 0;
					bottom: 0;
					width: 0%;
					z-index: -1;
					height: 100%;
					background: #ffffff05;
					animation: expand-right 0.2s ease-in-out both;
				}
			}
		}
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
