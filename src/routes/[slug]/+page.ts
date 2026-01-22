import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

type NoteModule = {
	default: ConstructorOfATypedSvelteComponent;
	metadata: Record<string, unknown>;
};

const noteModules = import.meta.glob<NoteModule>('/src/content/notes/**/*.md', { eager: true });

export const load: PageLoad = async ({ data }) => {
	const { filePath } = data;

	if (!filePath) {
		error(404, 'Note file path not found');
	}

	// Use filePath from server data to find the module
	const notePath = `/src/content/notes/${filePath}`;
	const noteModule = noteModules[notePath];

	if (!noteModule) {
		error(404, `Note module not found: ${notePath}`);
	}

	return {
		...data,
		component: noteModule.default
	};
};
