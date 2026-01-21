<script>
	import Button from '$lib/components/Button.svelte';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import BreadcrumbItem from '$lib/components/BreadcrumbItem.svelte';
	import Progressbar from '$lib/components/Progressbar.svelte';
	import employment from './employment';
</script>

<Breadcrumb class="mb-8">
	<BreadcrumbItem href="/" home>Home</BreadcrumbItem>
	<BreadcrumbItem href="/cv">Resume</BreadcrumbItem>
</Breadcrumb>

<Button
	href="/docs/__CV__Felipe_lipe-dev_Pereira.pdf"
	download="__CV__Felipe_lipe-dev_Pereira.pdf"
	buttonClass="w-full justify-center mb-4"
>
	<iconify-icon icon="line-md:download-outline" class="mr-2"></iconify-icon> Download as PDF
</Button>

<div class="bg-gray-950 rounded-lg md:p-12 p-4">
	<div class="prose prose-invert mx-auto prose-headings:my-2">
		<h1 class="mb-0">Felipe "lipe-dev" Pereira</h1>
		<h2 class="mt-0 mb-4 font-light tracking-wide">Senior Software Engineer</h2>

		<hr />

		<p class="m-0 leading-normal">Remotely from Brazil</p>
		<p class="m-0 leading-normal"><a href="mailto:fe@lipe.dev">fe@lipe.dev</a></p>
		<p class="m-0 leading-normal"><a href="tel:+5535999965473">+55 (35) 99996 - LIPE</a></p>

		<hr />

		<h1>Profile</h1>
		<p>
			Passionate Computer Science graduate (UNIFEI & UMD) focused on UI/UX. Build impactful, accessible, performant user experiences that blend design and reliability to improve the world.
		</p>

		<hr />

		<h1>Languages</h1>

		<div class="grid grid-cols-3 gap-4 pt-4">
			<div>
				<p class="m-0 mb-2 flex flex-row items-center text-sm">
					<iconify-icon icon="circle-flags:br" class="mr-4"></iconify-icon>
					Brazilian Portuguese
				</p>

				<Progressbar progress="100" class="mb-4" />
			</div>

			<div>
				<p class="m-0 mb-2 flex flex-row items-center text-sm">
					<iconify-icon icon="circle-flags:us" class="mr-4"></iconify-icon>
					US English
				</p>

				<Progressbar progress="95" class="mb-4" />
			</div>

			<div>
				<p class="m-0 mb-2 flex flex-row items-center text-sm">
					<iconify-icon icon="circle-flags:es" class="mr-4"></iconify-icon>
					Spanish
				</p>

				<Progressbar progress="30" class="mb-4" />
			</div>
		</div>

		<hr />

		<h1>Skills</h1>

		<div class="grid grid-cols-3 gap-4 pt-4">
			<div>
				<p class="m-0 mb-2 flex flex-row items-center text-sm">Front-End Development</p>

				<Progressbar progress="100" class="mb-4" />
			</div>

			<div>
				<p class="m-0 mb-2 flex flex-row items-center text-sm">Mobile Development</p>

				<Progressbar progress="100" class="mb-4" />
			</div>

			<div>
				<p class="m-0 mb-2 flex flex-row items-center text-sm">Project Management</p>

				<Progressbar progress="80" class="mb-4" />
			</div>

			<div>
				<p class="m-0 mb-2 flex flex-row items-center text-sm">Back-End Development</p>

				<Progressbar progress="80" class="mb-4" />
			</div>

			<div>
				<p class="m-0 mb-2 flex flex-row items-center text-sm">UI/UX Design</p>

				<Progressbar progress="60" class="mb-4" />
			</div>

			<div>
				<p class="m-0 mb-2 flex flex-row items-center text-sm">Dev Ops</p>

				<Progressbar progress="80" class="mb-4" />
			</div>
		</div>

		<hr />

		<h1>Employment History</h1>

		{#each employment as job}
			<h2>{job.role} at {job.name}</h2>
			<p>{job.start} - {job.end}</p>

			<p>{job.description}</p>

			<h3>Stack</h3>

			<p>
				{#each job.stack as tech}
					<span class="bg-gray-700 rounded-sm p-1 m-1 inline-block">{tech}</span>
				{/each}
			</p>

			<h3>Notable Challenges</h3>

			<ul>
				{#each job.challenges as challenge}
					<li>{challenge}</li>
				{/each}
			</ul>
		{/each}

		<hr />

		<h1>Education</h1>

		<h2>
			<b>Information Systems</b> - Federal University of Itajubá - Brazil
		</h2>
		<p class="m-0">2010 - 2013 & 2015 - 2016</p>
		<p class="m-0">Bachelor's Degree</p>

		<ul>
			<li class="m-0"><b>1st Place in the Admission Process</b></li>
			<li class="m-0">Graduated with a <b>GPA in the top 2%</b></li>
			<li class="m-0">
				Engaged as a <b>Scientific Initiation Student</b>, researching Data Mining during the
				academic journey.
			</li>
		</ul>

		<h2><b>Computer Science</b> - University of Maryland - USA</h2>
		<p class="m-0">2013 - 2014</p>
		<p class="m-0">Scientific Expansion Program, Full Scholarship</p>

		<ul>
			<li class="m-0">
				Scientific Expansion Program, Full Scholarship recipient by the Brazilian Government
			</li>
			<li class="m-0">Successfully completed a portion of the degree during the program</li>
			<li class="m-0">
				Actively participated in scientific research focused on UI/UX, enriching expertise in the
				field.
			</li>
		</ul>

		<hr />

		<h1>Links</h1>

		<div class="gap-4 flex flex-row items-center">
			<div class="flex flex-row items-center gap-2">
				<iconify-icon icon="mdi:web"></iconify-icon>
				<a href="https://lipe.dev">lipe.dev</a>
			</div>

			<div class="flex flex-row items-center gap-2">
				<iconify-icon icon="fa6-brands:linkedin"></iconify-icon>
				<a href="https://linkedin.com/in/felipeicp">/in/felipeicp</a>
			</div>

			<div class="flex flex-row items-center gap-2">
				<iconify-icon icon="fa6-brands:github" class="ml-4"></iconify-icon>
				<a href="https://github.com/lipe-dev">github/lipe-dev</a>
			</div>

			<div class="flex flex-row items-center gap-2">
				<iconify-icon icon="ic:baseline-discord" class="ml-4"></iconify-icon>
				<a href="https://discordapp.com/users/lipe_dev">discord @ lipe_dev</a>
			</div>
		</div>

		<hr />

		<h1>Notable Skills</h1>

		<p>
			Front-End Development
			<br />
			<span class="bg-gray-700 rounded-sm p-1 inline-block m-1">Javascript </span>
			<span class="bg-gray-700 rounded-sm p-1 inline-block m-1">Typescript</span>
			<span class="bg-gray-700 rounded-sm p-1 inline-block m-1">React</span>
			<span class="bg-gray-700 rounded-sm p-1 inline-block m-1">Next.js</span>
			<span class="bg-gray-700 rounded-sm p-1 inline-block m-1">Svelte</span>
			<span class="bg-gray-700 rounded-sm p-1 inline-block m-1">SvelteKit</span>
			<span class="bg-gray-700 rounded-sm p-1 inline-block m-1">Redux</span>
			<span class="bg-gray-700 rounded-sm p-1 inline-block m-1">JQuery</span>
			<span class="bg-gray-700 rounded-sm p-1 inline-block m-1">p5.js</span>
			<span class="bg-gray-700 rounded-sm p-1 inline-block m-1">Electron</span>
			<span class="bg-gray-700 rounded-sm p-1 inline-block m-1">HTML5</span>
			<span class="bg-gray-700 rounded-sm p-1 inline-block m-1">CSS3</span>
			<span class="bg-gray-700 rounded-sm p-1 inline-block m-1">TailwindCSS</span>
			<span class="bg-gray-700 rounded-sm p-1 inline-block m-1">CSS in JS</span>
			<span class="bg-gray-700 rounded-sm p-1 inline-block m-1">SASS</span>
			<span class="bg-gray-700 rounded-sm p-1 inline-block m-1">Bootstrap</span>
		</p>

		<p>
			Mobile Development
			<br />
			<span class="bg-gray-700 rounded-sm p-1 inline-block m-1">React Native</span>
			<span class="bg-gray-700 rounded-sm p-1 inline-block m-1">Android (Java, Kotlin)</span>
		</p>

		<p>
			Project Management
			<br />
			<span class="bg-gray-700 rounded-sm p-1 inline-block m-1">SCRUM</span>
			<span class="bg-gray-700 rounded-sm p-1 inline-block m-1">Agile Methodologies</span>
		</p>

		<p>
			Back-End Development
			<br />
			<span class="bg-gray-700 rounded-sm p-1 inline-block m-1">Databases</span>
			<span class="bg-gray-700 rounded-sm p-1 inline-block m-1">Python </span>
			<span class="bg-gray-700 rounded-sm p-1 inline-block m-1">Django</span>
			<span class="bg-gray-700 rounded-sm p-1 inline-block m-1">Django Rest Framework</span>
			<span class="bg-gray-700 rounded-sm p-1 inline-block m-1">NodeJS</span>
			<span class="bg-gray-700 rounded-sm p-1 inline-block m-1">PHP</span>
			<span class="bg-gray-700 rounded-sm p-1 inline-block m-1">CakePHP</span>
			<span class="bg-gray-700 rounded-sm p-1 inline-block m-1">CodeIgniter</span>
		</p>

		<p>
			UI/UX Design
			<br />
			<span class="bg-gray-700 rounded-sm p-1 inline-block m-1">Material Design</span>
			<span class="bg-gray-700 rounded-sm p-1 inline-block m-1">Atomic Design</span>
			<span class="bg-gray-700 rounded-sm p-1 inline-block m-1">Illustrator</span>
			<span class="bg-gray-700 rounded-sm p-1 inline-block m-1">InVision</span>
			<span class="bg-gray-700 rounded-sm p-1 inline-block m-1">Figma</span>
			<span class="bg-gray-700 rounded-sm p-1 inline-block m-1">Photoshop</span>
		</p>

		<p>
			See more in my <a href="/">digital garden</a>
		</p>

		<hr />

		<h1>Hobbies</h1>

		<ul>
			<li class="m-0">Hardware & Electronics</li>
			<li class="m-0">Playing the Bass</li>
			<li class="m-0">Motor Sports (car building, drifting, off-road)</li>
			<li class="m-0">Woodworking</li>
		</ul>
	</div>
</div>

<Button
	download="__CV__Felipe_lipe-dev_Pereira.pdf"
	href="/docs/__CV__Felipe_lipe-dev_Pereira.pdf"
	buttonClass="w-full justify-center mt-4"
>
	<iconify-icon icon="line-md:download-outline" class="mr-2"></iconify-icon> Download as PDF
</Button>

