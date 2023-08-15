import tech, { type Tech } from './tech';

export type Project = {
	id: string;
	name: string;
	description: string;
	tech: Tech[];
	images: string[];
};

const projects: Project[] = [
	{
		id: 'irriplans.com',
		name: 'Irriplans.com',
		description: 'Irrigation system mapping tool',
		tech: [
			tech.svelte,
			tech.sveltekit,
			tech.maplibre
			// tech.typescript,
			// tech.firebase,
			// tech.firebaseauth,
			// tech.firebasefirestore,
			// tech.tailwind,
			// tech.flowbite
		],
		images: ['/images/projects/legacy_irriplans.com/1.png']
	},
	{
		id: 'irriplans.com-legacy',
		name: 'Legacy Irriplans.com in Next.js',
		description: 'First version of Irriplans.com in Next.js, now deprecated',
		tech: [
			tech.react,
			tech.maplibre
			// tech.nextjs,
			// tech.typescript,
			// tech.mapboxglreact,
			// tech.firebase,
			// tech.firebaseauth,
			// tech.firebasefirestore,
			// tech.orbitds,
			// tech.styledcomponents
		],
		images: ['/images/projects/legacy_irriplans.com/1.png']
	}
];

export default projects;
