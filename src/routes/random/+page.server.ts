import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { notes } from '$lib/generated/notes-data';

export const load: PageServerLoad = async () => {
	// Pick a random note
	const randomIndex = Math.floor(Math.random() * notes.length);
	const randomNote = notes[randomIndex];

	// Redirect to that note
	redirect(302, `/${randomNote.slug}`);
};
