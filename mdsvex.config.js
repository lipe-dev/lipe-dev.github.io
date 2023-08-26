import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import remarkToc from 'remark-toc';
import slug from 'remark-slug';
import headings from 'remark-autolink-headings';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [slug, headings, remarkToc],
	rehypePlugins: []
});

export default config;
