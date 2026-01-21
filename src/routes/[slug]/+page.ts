import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

type NoteModule = {
	default: ConstructorOfATypedSvelteComponent;
	metadata: Record<string, unknown>;
};

const noteModules = import.meta.glob<NoteModule>('/content/notes/**/*.md', { eager: true });

// Helper to find note path by slug
function findNotePathBySlug(slug: string): string | undefined {
	for (const path of Object.keys(noteModules)) {
		const fileSlug = path.split('/').pop()?.replace('.md', '') || '';
		if (fileSlug === slug) {
			return path;
		}
	}
	return undefined;
}

export const load: PageLoad = async ({ params }) => {
	const { slug } = params;

	const notePath = findNotePathBySlug(slug);
	const noteModule = notePath ? noteModules[notePath] : undefined;

	if (!noteModule) {
		error(404, `Note not found: ${slug}`);
	}

	return {
		component: noteModule.default
	};
};
