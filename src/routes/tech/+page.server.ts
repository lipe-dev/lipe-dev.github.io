import type { ServerLoad } from '@sveltejs/kit';

import tech from '$lib/data/tech';

export const load: ServerLoad = async () => {
	return {
		tech
	};
};
