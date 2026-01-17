export default [
	{
		name: 'eBay',
		role: 'Senior Front-End Engineer (Independent Contractor)',
		start: '11/2023',
		end: 'Present',
		description: `
		Primary front-end developer on Showroom (showroom.ebay.com), replacing eBay Motors' legacy VMP for bulk vehicle listings. Built most front-end independently in a team under engineering management. Supports ~1,000 dealers, 50k+ vehicles, 1M+ photos. Ongoing migration (Wave 9/28).
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
			'JavaScript'
		],
		challenges: [
			'Developed React + TypeScript portals with permissions, feed configs, async monitoring, listing CRUD.',
			'Integrated microservices for real-time bulk operations at scale.',
			'Extended @ebay/ui-core-react and @ebay/skin with custom styling; added Testing Library + Playwright coverage in Jenkins.'
		]
	},
	{
		name: 'LogRock',
		role: 'Senior Front-End Engineer (Independent Contractor)',
		start: '11/2021',
		end: '10/2025',
		description: `
		Primary (often sole) front-end engineer; owned architecture from scratch for trucking insurance platform. Later mentored juniors while retaining direction. Built multi-agency quote form system (~100k responses, self-conversions 6x industry benchmark ~3%).
		`,
		stack: [
			'React',
			'Svelte',
			'Preact',
			'Gatsby',
			'Next.js',
			'SvelteKit',
			'Django',
			'Django REST Framework',
			'Auth0',
			'Vite',
			'HTML',
			'CSS',
			'JavaScript',
			'TypeScript',
			'Testing Library',
			'Playwright',
			'Docker',
			'GitHub Actions',
			'Terraform',
			'Vercel',
			'shadcn/ui',
			'Storybook',
			'Sentry',
			'Datadog',
			'PostgreSQL'
		],
		challenges: [
			'Built scalable quote system (FSM-driven) for 3 agencies; reps closed majority of remainder.',
			'Set up CI/CD (Actions + Terraform + Vercel) for <2-min parallel deploys + great DX (Storybook, PR previews).',
			'Created modular email templating tool (150+ campaigns + transactional); refactored Django backend emails.',
			'Distributed components via custom shadcn registry; >95% coverage with ESLint + E2E tests.',
			'Led AI initiatives: custom ChatGPT client for reps + Devin.ai setup/maintenance.'
		]
	},
	{
		name: 'Giphy',
		role: 'Senior Front-End Engineer',
		start: '06/2021',
		end: '11/2021',
		description: `
		Developed features for flagship site; maintained SDK and infrastructure.
		`,
		stack: [
			'React',
			'Redux',
			'Next.js',
			'Vite',
			'HTML',
			'CSS',
			'JavaScript',
			'TypeScript',
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
			'Kafka',
			'Django'
		],
		challenges: [
			'Built auth flow (magic links, recovery, 2FA) adopted company-wide; used daily by thousands (still in production).',
			'Refactored Django email templates into reusable modules for auth + transactional emails.',
			'Integrated Cypress E2E tests into CI, boosting coverage and full-team adoption.'
		]
	},
	{
		name: 'Loadsmart',
		role: 'Senior Front-End Engineer',
		start: '05/2019',
		end: '06/2021',
		description: `
		Led migration of core internal logistics tools from monolithic Django to modular React architecture (zero downtime).
		`,
		stack: [
			'React',
			'Redux',
			'Next.js',
			'Vite',
			'Python',
			'Django',
			'Django REST Framework',
			'HTML',
			'CSS',
			'JavaScript',
			'TypeScript',
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
			'Decoupled components/APIs/services, reducing build times from ~1h to <5 min.',
			'Maintained parallel legacy + React layers with phased rollouts and thorough testing.',
			'Optimized early CPU issues (>90% → minimal) via conditional rendering fixes for animated/interactive elements.',
			'Delivered scalable tool still used daily by hundreds of reps managing thousands of loads.'
		]
	},
	{
		name: 'Instituto Eldorado',
		role: 'Software Analyst',
		start: '11/2018',
		end: '05/2019',
		description: `
		R&D on Motorola Android devices; built testing tools and ran field validation.
		`,
		stack: ['Android', 'Python', 'Node.js'],
		challenges: [
			'Created audio quality testing/logging system for call performance.',
			'Built catalog for 3,000+ devices (metadata tracking) to speed testing.',
			'Developed Python tool for auto metadata extraction (IMEI etc.) integrated with catalog.'
		]
	},
	{
		name: 'Empreguei',
		role: 'Full Stack Developer & DevOps',
		start: '11/2016',
		end: '11/2018',
		description: `
		Built/maintained job board platform and mobile app in early-stage startup; managed Digital Ocean infra.
		`,
		stack: [
			'Python',
			'Django',
			'Django REST Framework',
			'React',
			'Redux',
			'HTML',
			'CSS',
			'JavaScript',
			'Android',
			'Java',
			'Firebase',
			'Digital Ocean',
			'PostgreSQL',
			'GitLab'
		],
		challenges: [
			'Developed full platform + Android app from scratch.',
			'Launched app to 100k+ Google Play downloads; endorsed by Brazil\'s largest mall group.'
		]
	},
	{
		name: 'Early Career',
		role: 'Full Stack + Mobile Developer',
		start: '01/2015',
		end: '11/2016',
		description: `
		Full Stack + Mobile Developer roles (Utyl Business Platforms, Safe Trace Café, Traço Leal Communication). Built client websites (WordPress/custom), plugins, Android apps, and integrations (medical/education sectors).
		`,
		stack: [
			'PHP',
			'WordPress',
			'CodeIgniter',
			'HTML',
			'CSS',
			'JavaScript',
			'jQuery',
			'Android (Java)',
			'Photoshop',
			'Illustrator'
		],
		challenges: [
			'Ranked medical client site #1 on Google via SEO strategy.',
			'Developed food-tracking supermarket app (sole developer); still in use by major retailers.',
			'Redesigned 100+ page government website (Federal Accounting Council) with responsive design and client training.'
		]
	}
];
