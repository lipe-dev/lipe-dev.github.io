import { error } from '@sveltejs/kit';
import type { PageServerLoad, EntryGenerator } from './$types';
import { notes } from '$lib/generated/notes-data';

export const entries: EntryGenerator = () => {
	return notes.map((n) => ({ slug: n.slug }));
};

export const load: PageServerLoad = async ({ params, parent }) => {
	const { slug } = params;
	const parentData = await parent();

	// Get note from parent data
	const note = parentData.notes.find((n) => n.slug === slug);

	if (!note) {
		error(404, `Note not found: ${slug}`);
	}

	// Get backlink note data for display
	const backlinkNotes = note.backlinks
		.map((blSlug: string) => parentData.notes.find((n) => n.slug === blSlug))
		.filter(Boolean);

	return {
		note,
		backlinkNotes
	};
};
