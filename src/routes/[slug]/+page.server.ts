import { error } from '@sveltejs/kit';
import type { PageServerLoad, EntryGenerator } from './$types';
import { notes } from '$lib/generated/notes-data';

export const entries: EntryGenerator = () => {
	return notes.map((n) => ({ slug: n.slug }));
};

export const load: PageServerLoad = async ({ params, parent }) => {
	const { slug } = params;
	const parentData = await parent();

	// Get note metadata from parent data (includes icons, parsed dates)
	const note = parentData.notes.find((n) => n.slug === slug);

	if (!note) {
		error(404, `Note not found: ${slug}`);
	}

	// Get filePath from generated data for module lookup
	const generatedNote = notes.find((n) => n.slug === slug);
	const filePath = generatedNote?.filePath;

	// Get backlink note data for display
	const backlinkNotes = note.backlinks
		.map((blSlug: string) => parentData.notes.find((n) => n.slug === blSlug))
		.filter(Boolean);

	return {
		note,
		backlinkNotes,
		filePath
	};
};
