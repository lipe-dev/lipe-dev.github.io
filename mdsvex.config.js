import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import remarkToc from 'remark-toc';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [remarkToc],
	rehypePlugins: []
});

export default config;
