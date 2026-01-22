// Lists all notes grouped by growth status
// Run with: pnpm survey

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type GrowthStage = 'seedling' | 'budding' | 'evergreen';

interface Note {
	name: string;
	slug: string;
	growth: GrowthStage;
	filePath: string;
}

function scanNotes(dir: string, relativePath = ''): Note[] {
	const notes: Note[] = [];

	if (!fs.existsSync(dir)) return notes;

	const entries = fs.readdirSync(dir, { withFileTypes: true });

	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);
		const relPath = path.join(relativePath, entry.name);

		if (entry.isDirectory()) {
			notes.push(...scanNotes(fullPath, relPath));
		} else if (entry.name.endsWith('.md')) {
			const content = fs.readFileSync(fullPath, 'utf-8');
			const { data } = matter(content);

			notes.push({
				name: data.name || path.basename(entry.name, '.md'),
				slug: data.slug || path.basename(entry.name, '.md'),
				growth: data.growth || 'seedling',
				filePath: relPath
			});
		}
	}

	return notes;
}

const notesDir = path.join(process.cwd(), 'src/content/notes');
const notes = scanNotes(notesDir);

const grouped: Record<GrowthStage, Note[]> = {
	seedling: [],
	budding: [],
	evergreen: []
};

for (const note of notes) {
	grouped[note.growth].push(note);
}

// Sort each group alphabetically
for (const stage of Object.keys(grouped) as GrowthStage[]) {
	grouped[stage].sort((a, b) => a.name.localeCompare(b.name));
}

console.log('🌱 Seedlings (%d)', grouped.seedling.length);
console.log('─'.repeat(40));
for (const note of grouped.seedling) {
	console.log(`  ${note.name}`);
}

console.log('\n🌿 Budding (%d)', grouped.budding.length);
console.log('─'.repeat(40));
for (const note of grouped.budding) {
	console.log(`  ${note.name}`);
}

console.log('\n🌳 Evergreen (%d)', grouped.evergreen.length);
console.log('─'.repeat(40));
for (const note of grouped.evergreen) {
	console.log(`  ${note.name}`);
}

console.log('\n📊 Total: %d notes', notes.length);
