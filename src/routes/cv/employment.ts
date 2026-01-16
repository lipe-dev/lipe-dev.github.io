export default [
	{
		name: 'eBay',
		role: 'Senior Front-End Engineer (Independent Contractor)',
		start: '11/2023',
		end: 'Present Day',
		description: `
		Primary front-end developer on Showroom (showroom.ebay.com), the new platform that replaced eBay Motors' old Vehicle Merchandising Platform (VMP) for bulk vehicle listings by dealerships. Built most of the front-end myself (with occasional help from a full-stack engineer), working in a team led by engineering management. Currently supports ~1,000 active dealers, over 50,000 vehicles, and more than 1 million photos. Handled React + TypeScript client work, custom styling on top of eBay's design system, integrations with internal microservices (both existing and Showroom-specific), plus some server-side Node.js using eBay's modified Express fork and custom SSR engine. The app has separate internal views for eBay staff/account managers (user management, permissions, job monitoring) and an external portal for dealers (feed configs, listing creation/editing). Heavily involved in the ongoing migration from VMP, now at Wave 9 of 28.
		`,
		stack: [
			'React',
			'TypeScript',
			'Node.js',
			'Express (eBay fork)',
			'Custom SSR Engine',
			'@ebay/skin',
			'@ebay/ui-core-react',
			'Testing Library',
			'Playwright',
			'Jenkins (eBay-modified)',
			'Nu Object (document DB)',
			'HTML',
			'CSS',
			'Javascript'
		],
		challenges: [
			'Built the main front-end for Showroom, covering dealer and internal user flows including permissions, bulk feed setup from dealer databases, async job tracking, and direct listing management on eBay.',
			'Contributed to migrating dealers from the old VMP system—currently Wave 9 of 28—with smooth handoff of core workflows.',
			'Connected the front-end to multiple eBay microservices for real-time bulk operations at current scale (~1,000 dealers, 50k+ vehicles, 1M+ photos).',
			'Extended eBay\'s open-source UI components and skin with custom styles; set up unit/component tests (Testing Library) and E2E (Playwright) in modified Jenkins pipelines.'
		]
	},
	{
		name: 'LogRock',
		role: 'Senior Front-End Engineer (Independent Contractor)',
		start: '11/2021',
		end: '10/2025',
		description: `
		As the lead front-end engineer at LogRock, I have been entrusted with the design and construction of the entire front-end architecture and associated infrastructure, commencing from the ground up. My role has revolved extensively around harnessing the potential of React's ecosystem, including building a comprehensive array of solutions such as a Gatsby-based website, a Next.js web application, and an innovative open-source component library powered by Vite.js. In addition, I've contributed to the development of several mission-critical internal tools.
		`,
		stack: [
			'React',
			'Svelte',
			'Preact',
			'Gatsby',
			'Next.js',
			'SvelteKit',
			'Django',
			'Django-rest-framework',
			'Auth0',
			'Vite',
			'HTML',
			'CSS',
			'Javascript',
			'Typescript',
			'Testing Library',
			'PlayWright',
			'Docker',
			'GitHub Actions',
			'Terraform',
			'Sentry',
			'Datadog',
			'PostgreSQL'
		],
		challenges: [
			'Pioneered the establishment of an entirely new front-end infrastructure for the organization, architecting it from scratch and ensuring scalability, performance, and maintainability.',
			'Spearheaded the creation of an open-source component library, a resource that has significantly streamlined development processes and bolstered consistency across projects.',
			'Orchestrated the successful inception of multiple web applications, commencing with a blank canvas and crafting them into fully functional, intuitive, and user-centric solutions.',
			"Innovated the concept and execution of a novel component library, fostering efficiency, code reusability, and a unified design language throughout the company's projects."
		]
	},
	{
		name: 'Giphy',
		role: 'Senior Front-End Engineer',
		start: '06/2021',
		end: '11/2021',
		description: `
		As a Senior Front-End Engineer at Giphy, I assumed a pivotal role in crafting innovative features for the company's flagship website. My responsibilities extended beyond feature development, encompassing the meticulous maintenance of the company's SDK and overarching front-end infrastructure.
		`,
		stack: [
			'React',
			'Redux',
			'Next.js',
			'Vite',
			'HTML',
			'CSS',
			'Javascript',
			'Typescript',
			'Jest',
			'Cypress',
			'Docker',
			'Kubernetes',
			'AWS',
			'GitHub Actions',
			'Circle CI',
			'Terraform',
			'Sentry',
			'Datadog',
			'New Relic',
			'ElasticSearch',
			'PostgreSQL',
			'Redis',
			'RabbitMQ',
			'Kafka'
		],
		challenges: [
			'Engineered a revolutionary authentication flow for the front-end, characterized by features such as magic links, password recovery, and two-factor authentication (2FA). The resounding success of this new authentication flow resulted in its widespread adoption across the entire company and its continued use today.',
			'Pioneered the seamless integration of end-to-end (E2E) tests into the continuous integration (CI) pipeline using Cypress. This implementation significantly enhanced testing efficiency and effectiveness, leading to its company-wide adoption and continued integration.'
		]
	},
	{
		name: 'Loadsmart',
		role: 'Senior Front-End Engineer',
		start: '05/2019',
		end: '06/2021',
		description: `
		Led transformation of the company's core front-end, migrating from a monolithic Django app to a modular React-based architecture. Balancing the migration seamlessly, I ensured uninterrupted user experience while enabling new feature integration.
		`,
		stack: [
			'React',
			'Redux',
			'Next.js',
			'Vite',
			'Python',
			'Django',
			'Django Rest Framework',
			'HTML',
			'CSS',
			'Javascript',
			'Typescript',
			'Jest',
			'Cypress',
			'Docker',
			'Kubernetes',
			'AWS',
			'GitHub Actions',
			'Circle CI',
			'Terraform',
			'Sentry',
			'Datadog',
			'New Relic',
			'WordPress',
			'ElasticSearch',
			'PostgreSQL',
			'Redis',
			'RabbitMQ',
			'Kafka'
		],
		challenges: [
			`Orchestrated seamless migration of the company's largest front-end project from a monolithic Django app to a modular React architecture.`,
			`Developed a Data Visualization component library, enhancing data representation and user understanding.`,
			`Spearheaded the creation of a comprehensive component library for improved efficiency and design consistency.`
		]
	},
	{
		name: 'Instituto Eldorado',
		role: 'Software Analyst',
		start: '11/2018',
		end: '05/2019',
		description: `
		Contributed to a range of Research and Development projects, primarily focusing on Android devices for Motorola. Pioneered the creation of internal testing systems for mobile devices, significantly enhancing quality control measures. Conducted field tests to validate project implementations.
		`,
		stack: ['Android', 'Python', 'NodeJS'],
		challenges: [
			`Engineered a sophisticated audio quality testing and logging system for phone calls, bolstering call performance evaluation.`,
			`Innovated an internal catalog system for over 3000 mobile devices. The system tracked storage, models, OS versions, and additional metadata, expediting retrieval for testing and research purposes.`,
			`Developed a Python tool for the automatic extraction of relevant device metadata, such as IMEI numbers. The tool integrated seamlessly with the catalog system, further enhancing efficiency.`
		]
	},
	{
		name: 'Empreguei',
		role: 'Full Stack Developer & Dev Ops',
		start: '11/2016',
		end: '11/2018',
		description: `
		Led end-to-end development and maintenance of Empreguei's flagship job board for the Brazilian market. Simultaneously managed the company's infrastructure, encompassing servers, databases, and network components.
		`,
		stack: [
			'Python',
			'Django',
			'Django Rest Framework',
			'React',
			'Redux',
			'HTML',
			'CSS',
			'Javascript',
			'Android',
			'Java',
			'Firebase',
			'Digital Ocean',
			'PostgreSQL',
			'GitLab'
		],
		challenges: [
			`Solely drove development efforts for an early-stage startup, demonstrating adeptness in tackling multifaceted challenges.`,
			`Created the company's mobile app, attaining remarkable success with over 100k downloads from the Google Play Store. The app was endorsed by Brazil's largest mall conglomerate, affirming its influence and relevance.`
		]
	},
	{
		name: 'Utyl Business Platforms',
		role: 'Full Stack + Mobile Developer',
		start: '09/2015',
		end: '11/2016',
		description: `
		Engaged in the comprehensive development of internal systems, applications, and diverse websites for clients. Efforts spanned static websites, WordPress themes, custom plugins, bespoke systems, and mobile applications. Oversight of the company's infrastructure, encompassing servers, databases, and network components, also fell within my purview.`,
		stack: [
			'PHP',
			'CodeIgniter',
			'Wordpress',
			'HTML',
			'CSS',
			'Javascript',
			'JQuery',
			'Android (Java)'
		],
		challenges: [
			`Spearheaded the creation of a client website for a prominent player in the Brazilian medical industry.`,
			`Elicited extensive positive feedback from both the client and their customer base.
			Orchestrated a highly successful SEO strategy, propelling the client's website to the top ranking on Google for numerous relevant keywords.`,
			`Facilitated an integral integration with an online education platform, enabling the client to seamlessly vend online courses through their website.`
		]
	},
	{
		name: 'Safe Trace Café',
		role: 'Android Developer',
		start: '01/2015',
		end: '09/2015',
		description: `
		Drove the conception, development, and continuous upkeep of Android applications, encompassing both internal tools and field applications for a food-products tracking enterprise.
		`,
		stack: ['Android', 'Java'],
		challenges: [
			`Pioneered the creation of a novel supermarket app that facilitated the comprehensive tracking of food product transformations. This encompassed stages from warehouse entry to display on supermarket shelves, encompassing fractioning, packaging, and in-house recipe modifications.`,
			`Navigated the role of sole developer for this app, achieving significant success. The app remains in active use by a substantial retailer, underscoring its enduring value.`
		]
	},
	{
		name: 'Traço Leal Communication',
		role: 'Web Developer',
		start: '06/2012',
		end: '06/2013',
		description: `
		Drove the development of numerous client websites, including a transformative overhaul of a significant government agency's digital presence, specifically for the Federal Accounting Council.
		`,
		stack: ['Wordpress', 'PHP', 'HTML', 'CSS', 'Javascript', 'JQuery', 'Photoshop', 'Illustrator'],
		challenges: [
			`Orchestrated a substantial website redesign for a pivotal government entity, the Brazilian Accounting Autharchy. This encompassed full front-end development for a content-rich site spanning over 100 pages.`,
			`Navigated the role of sole developer, responsible for conceiving the entire front-end experience. Developed and structured the CMS (WordPress) infrastructure, ensuring seamless content management.`,
			`Pioneered a responsive design strategy, accommodating users across devices and platforms.`,
			`Presented the project in Brasília, offering valuable insights to the client and conducting a comprehensive training session for the agency's staff.`
		]
	}
];
