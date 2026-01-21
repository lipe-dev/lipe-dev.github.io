import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import remarkToc from 'remark-toc';
import slug from 'remark-slug';
import headings from 'remark-autolink-headings';
import wikiLinkPlugin from '@flowershow/remark-wiki-link';
import { resolveWikilink as resolve } from './src/lib/generated/notes-data.ts';

// Page resolver wrapper for remark-wiki-link (returns array)
function pageResolver(name) {
	return [resolve(name)];
}

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [
		slug,
		headings,
		remarkToc,
		[
			wikiLinkPlugin,
			{
				pathFormat: 'obsidian-short',
				wikiLinkClassName: 'wikilink',
				hrefTemplate: (permalink) => `/${permalink}`,
				pageResolver: pageResolver
			}
		]
	],
	rehypePlugins: []
});

export default config;
