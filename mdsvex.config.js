import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import remarkToc from 'remark-toc';
import slug from 'remark-slug';
import headings from 'remark-autolink-headings';
import { visit } from 'unist-util-visit';
import { lookupByName, lookupBySlug } from './src/lib/generated/notes-data.ts';

// Resolve wikilink text to a slug
function resolveWikilink(text) {
	const key = text.trim().toLowerCase();
	if (lookupByName[key]) return lookupByName[key];
	if (lookupBySlug[key]) return key;
	// Fallback: convert to slug format
	return key.replace(/\s+/g, '-');
}

// Custom remark plugin to convert [[wikilinks]] to standard links
// Remark parses [[text]] as: "[" (text) + linkReference + "]" (text)
// So we need to convert the linkReference AND remove the surrounding brackets
function remarkWikiLinks() {
	return (tree) => {
		visit(tree, 'linkReference', (node, index, parent) => {
			if (!parent) return;

			// linkReference has identifier (lowercase) and label (original case)
			const linkText = node.label || node.identifier;
			const resolvedSlug = resolveWikilink(linkText);

			// Get the display text from children or use the label
			const displayText = node.children?.[0]?.value || linkText;

			// Create the link node
			const linkNode = {
				type: 'link',
				url: `/${resolvedSlug}`,
				data: { hProperties: { class: 'wikilink' } },
				children: [{ type: 'text', value: displayText }]
			};

			// Check for surrounding brackets and remove them
			const prevNode = parent.children[index - 1];
			const nextNode = parent.children[index + 1];

			const hasPrevBracket = prevNode?.type === 'text' && prevNode.value.endsWith('[');
			const hasNextBracket = nextNode?.type === 'text' && nextNode.value.startsWith(']');

			if (hasPrevBracket && hasNextBracket) {
				// Remove the brackets
				prevNode.value = prevNode.value.slice(0, -1);
				nextNode.value = nextNode.value.slice(1);
			}

			// Replace the linkReference with our link
			parent.children[index] = linkNode;
		});
	};
}

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [slug, headings, remarkToc, remarkWikiLinks],
	rehypePlugins: []
});

export default config;
