<script>
	import Button from '$lib/components/Button.svelte';
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
</script>

<Breadcrumb aria-label="Default breadcrumb example" class="mb-8">
	<BreadcrumbItem
		href="/"
		home
		homeClass="hover:text-white text-gray-500 text-sm flex items-center flex-row"
		>Home</BreadcrumbItem
	>
	<BreadcrumbItem href="/cv" linkClass="hover:text-white text-gray-500 text-sm gradient-text ml-2"
		>Resume</BreadcrumbItem
	>
</Breadcrumb>

<Button
	href="/docs/__CV__Felipe_lipe-dev_Pereira.pdf"
	download="__CV__Felipe_lipe-dev_Pereira.pdf"
	buttonClass="w-full justify-center mb-4"
>
	<iconify-icon icon="line-md:download-outline" class="mr-2" /> Download as PDF
</Button>

<div class="bg-gray-950 rounded-lg md:p-12 p-4">
	<div class="prose prose-invert mx-auto">
		<h1 class="mb-0">Felipe "lipe-dev" Pereira</h1>
		<h2 class="mt-0 font-light tracking-wide">Software Engineer</h2>

		<h1>Contact</h1>

		<p>
			<iconify-icon icon="mdi:email" class="mr-2" />
			<a href="mailto:fe@lipe.dev">fe@lipe.dev</a>
			<br />

			<iconify-icon icon="mdi:phone" class="mr-2" />
			<a href="tel:+5535999965473">+55 (35) 99996 - LIPE</a>
			<br />

			<iconify-icon icon="fa6-brands:linkedin" class="mr-2" />
			<a href="https://linkedin.com/in/felipeicp">/in/felipeicp</a>
			<br />

			<iconify-icon icon="fa6-brands:github" class="mr-2" />
			<a href="https://github.com/lipe-dev">github/lipe-dev</a>
			<br />

			<iconify-icon icon="ic:baseline-discord" class="mr-2" />
			<a href="https://discordapp.com/users/lipe_dev">discord @ lipe_dev</a>
		</p>

		<h1>Communication</h1>

		<p>
			<iconify-icon icon="circle-flags:br" class="mr-2" />
			Native Brazilian Portuguese
			<br />

			<iconify-icon icon="circle-flags:us" class="mr-2" />
			Fluent US English
			<br />

			<iconify-icon icon="circle-flags:es" class="mr-2" />
			Barely Understands Spanish
		</p>

		<h1>Notable Skills</h1>

		<p>
			Front-End Development
			<br />
			<span class="bg-gray-700 rounded-sm p-1">Javascript </span>
			<span class="bg-gray-700 rounded-sm p-1">Typescript</span>
			<span class="bg-gray-700 rounded-sm p-1">React</span>
			<span class="bg-gray-700 rounded-sm p-1">Next.js</span>
			<span class="bg-gray-700 rounded-sm p-1">Svelte</span>
			<span class="bg-gray-700 rounded-sm p-1">SvelteKit</span>
			<span class="bg-gray-700 rounded-sm p-1">Redux</span>
			<span class="bg-gray-700 rounded-sm p-1">JQuery</span>
			<span class="bg-gray-700 rounded-sm p-1">p5.js</span>
			<span class="bg-gray-700 rounded-sm p-1">Electron</span>
			<span class="bg-gray-700 rounded-sm p-1">HTML5</span>
			<span class="bg-gray-700 rounded-sm p-1">CSS3</span>
			<span class="bg-gray-700 rounded-sm p-1">TailwindCSS</span>
			<span class="bg-gray-700 rounded-sm p-1">CSS in JS</span>
			<span class="bg-gray-700 rounded-sm p-1">SASS</span>
			<span class="bg-gray-700 rounded-sm p-1">Bootstrap</span>
		</p>

		<p>
			Mobile Development
			<br />
			<span class="bg-gray-700 rounded-sm p-1">React Native</span>
			<span class="bg-gray-700 rounded-sm p-1">Android (Java, Kotlin)</span>
		</p>

		<p>
			Project Management
			<br />
			<span class="bg-gray-700 rounded-sm p-1">SCRUM</span>
			<span class="bg-gray-700 rounded-sm p-1">Agile Methodologies</span>
		</p>

		<p>
			Back-End Development
			<br />
			<span class="bg-gray-700 rounded-sm p-1">Databases</span>
			<span class="bg-gray-700 rounded-sm p-1">Python </span>
			<span class="bg-gray-700 rounded-sm p-1">Django</span>
			<span class="bg-gray-700 rounded-sm p-1">Django Rest Framework</span>
			<span class="bg-gray-700 rounded-sm p-1">NodeJS</span>
			<span class="bg-gray-700 rounded-sm p-1">PHP</span>
			<span class="bg-gray-700 rounded-sm p-1">CakePHP</span>
			<span class="bg-gray-700 rounded-sm p-1">CodeIgniter</span>
		</p>

		<p>
			UI/UX Design
			<br />
			<span class="bg-gray-700 rounded-sm p-1">Material Design</span>
			<span class="bg-gray-700 rounded-sm p-1">Atomic Design</span>
			<span class="bg-gray-700 rounded-sm p-1">Illustrator</span>
			<span class="bg-gray-700 rounded-sm p-1">InVision</span>
			<span class="bg-gray-700 rounded-sm p-1">Figma</span>
			<span class="bg-gray-700 rounded-sm p-1">Photoshop</span>
		</p>

		<p>
			See more in <a href="/tech">Tech</a>
		</p>

		<h1>Education</h1>

		<h2>
			<b>Information Systems</b> @ Federal University of Itajubá - Brazil
		</h2>
		<p>
			2010 - 2013 & 2015 - 2016 <br />
			Bachelor's Degree <br />
		</p>

		<h2><b>Computer Science</b> @ University of Maryland - USA</h2>
		<p>
			2013 - 2014 <br />
			Scientific Expansion Program, Full Scholarship <br />
		</p>

		<h1>Work Experience</h1>

		<h2>Web Dev Internship @ Traço Leal Communication</h2>
		<p>06/2012 - 06/2013</p>
		<p>
			Development of many websites for clients, including a complete redesign of a major government
			agency (Federal Accounting Council).
		</p>
		<p><b>Stack</b>: Wordpress, PHP, HTML, CSS, Javascript, JQuery, Photoshop, Illustrator</p>
		<p>
			<b>Notable challenge</b>: acting as a sole developer in a major project, and being responsible
			for the entire front-end development of a website with over 100 pages. I was responsible for
			structuring the whole CMS (WordPress) infrastructure, and developing the entire front-end,
			including the responsive design. I was also flown to Brasilia to present the project to the
			client and give a training session to the agency's staff.
		</p>

		<h2>Android Dev Internship @ Safe Trace Café</h2>
		<p>01/2015 - 09/2015</p>
		<p>
			Development and maintenance of Android apps, including internal and field apps for a
			food-products tracking company.
		</p>
		<p><b>Stack</b>: Android (Java)</p>
		<p>
			Notable challenge: tackling the development of a brand new app for supermarkets, allowing
			tracking of all transformations of a food product from entry in the warehouse to the
			supermarket shelf, including fractionating, packaging, and in-house recipe transformations. I
			was the sole developer of this app, and it was a success, still in use by a large retailer.
		</p>

		<h2>Full-Stack + Mobile Developer @ Utyl Business Platforms</h2>
		<p>09/2015 - 11/2016</p>
		<p>
			Developing internal systems and apps, as well as developing many websites for clients,
			including static websites, wordpress themes, custom wordpress plugins, custom systems and
			mobile apps. Also responsible for the company's infrastructure, including servers, databases,
			and network.
		</p>
		<p>
			<b>Stack</b>: PHP, CodeIgniter, Wordpress, HTML, CSS, Javascript, JQuery, Android (Java)
		</p>
		<p>
			<b>Notable challenge</b>: developing a website for a client that was a major player in the
			medical industry in Brazil. The website was a complete redesign of their old website, and it
			was a huge success, with a lot of positive feedback from the client and their customers. The
			website was also a huge success in terms of SEO, with the client's website ranking first in
			Google for many relevant keywords. The website also had an important integration with an
			online education platform, allowing the client to sell online courses through their website.
		</p>

		<h2>Full Stack Developer & Dev Ops @ Empreguei</h2>
		<p>11/2016 - 11/2018</p>
		<p>
			Developing and maintaining the company's main product, a job board for the Brazilian market.
			Also responsible for the company's infrastructure, including servers, databases, and network.
		</p>
		<p>
			<b>Stack</b>: Python, Django, Django Rest Framework, React, Redux, HTML, CSS, Javascript,
			Android (Java), Firebase, Digital Ocean, Postgres and GitLab
		</p>
		<p>
			<b>Notable challange</b>: The company was a startup, and I was the sole developer for a while.
			I was responsible for the entire front-end and back-end development of the product, as well as
			the infrastructure. I was also responsible for the development of the company's mobile app,
			which was a huge success, with over 100k downloads in the Google Play Store. The app was a
			success, being adopted by the largest mall conglomerate in Brazil. Unfortunately, the company
			was not able to survive the economic crisis in Brazil, and had to close its doors after
			failing to raise a new round of investments, despite the technical success of the product.
		</p>

		<h2>Software Analyst @ Instituto Eldorado</h2>
		<p>11/2018 - 05/2019</p>
		<p>
			Working with many R&D projects, mostly related to Android devices for Motorola, as well as
			developing internal testing systems for mobile devices. I also conducted field tests for some
			of the projects.
		</p>
		<p>
			<b>Stack</b>: Android, Python and NodeJS.
		</p>
		<p>
			<b>Notable challange</b>: developing a system for testing and logging audio quality during
			phone calls and reporting it to a server. The system was developed in Python, and it was a
			success, being used by the company for a long time.
		</p>

		<h2>Senior Front-End Engineer @ Loadsmart</h2>
		<p>05/2019 - 06/2021</p>
		<p>
			Front-end specialist, tasked with taking the company front-end to the next level. Worked in
			many internal tools, as well as client facing projects.
		</p>
		<p>
			<b>Stack</b>: React, Redux, Next.js, Vite, Python, Django, Django Rest Framework, HTML, CSS,
			Javascript, Typescript, Jest, Cypress, Docker, Kubernetes, AWS, GitHub Actions, Circle CI,
			Terraform, Sentry, Datadog, New Relic, WordPress, ElasticSearch, Postgres, Redis, RabbitMQ,
			Kafka, and many more.
		</p>
		<p>
			<b>Notable challange</b>: developing a brand new front-end infrastructure for the company,
			including a component library, a design system, a new website, and a new web-app. The new
			infrastructure was a huge success, and it was adopted by the whole company, and it is still in
			use today. Prior to this rework, the company's front-end was part of a monolithic Django app,
			and it was a huge challenge to migrate everything to a new infrastructure, while keeping the
			old one running, and without breaking anything, while also doing it one part at a time. The UX
			also could not be compromised, users were able to hop back and forth between the old and new
			infrastructure, and everything had to work seamlessly.
		</p>

		<h2>Senior Front-End Engineer @ Giphy</h2>
		<p>06/2021 - 11/2021</p>
		<p>
			Front-end specialist, tasked with developing new features for the company's main website, as
			well as maintaining the company's SDK and overall front-end infrastructure.
		</p>
		<p>
			<b>Stack</b>: React, Redux, Next.js, Vite, HTML, CSS, Javascript, Typescript, Jest, Cypress,
			Docker, Kubernetes, AWS, GitHub Actions, Circle CI, Terraform, Sentry, Datadog, New Relic,
			ElasticSearch, Postgres, Redis, RabbitMQ, Kafka, and many more.
		</p>
		<p>
			<b>Notable challange</b>: as a member of the web platform team, I was tasked with developing
			the new authentication flow in the front-end, complete with magic links, password recovery,
			2FA, and more. The new authentication flow was a huge success, and it was adopted by the whole
			company, and it is still in use today.
		</p>
		<p>
			<b>Notable challange</b>: I was also in the front lines of the company's new e2e testing
			efforts. I developed, and integrated in the CI pipeline, tests with Cypress for most of the
			web app's features and flows. The new e2e testing infrastructure was a huge success, and it
			was adopted by the whole company, and it is still in use today.
		</p>

		<h2>Senior Front-End Engineer @ LogRock.com</h2>
		<p>11/2021 - Present Day</p>
		<p>
			Lead front-end engineer, building all of LogRock's front-end systems and related
			infrastructure from scratch. All work revolving around React's ecosystem, including: Website
			in Gatsby, Web-app in Next.js, an open source component library with Vite.js and a few
			internal tools.
		</p>
		<p>
			<b>Stack</b>: React, Svelte, Preact, Gatsby, Next.js, SvelteKit, Django,
			Django-rest-framework, Auth0, Vite, HTML, CSS, Javascript, Typescript, Testing Library,
			PlayWright, Docker, GitHub Actions, Terraform, Sentry, Datadog, Postgres.
		</p>
		<p>
			<b>Notable challange</b>: developing a brand new front-end infrastructure for the company,
			including a component library, a design system, a new website, and a new web-app. The
			front-end has a lot of complex data visualization, and it was a huge challenge to develop a
			new infrastructure that could handle all of that, while also being fast, accessible, and easy
			to use. The component library is very flexible, and it can be used to build a lot of different
			things, from simple forms to complex data visualization.
		</p>
	</div>
</div>

<Button
	download="__CV__Felipe_lipe-dev_Pereira.pdf"
	href="/docs/__CV__Felipe_lipe-dev_Pereira.pdf"
	buttonClass="w-full justify-center mt-4"
>
	<iconify-icon icon="line-md:download-outline" class="mr-2" /> Download as PDF
</Button>
