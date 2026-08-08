import resume from '$lib/resume.yaml';
import type { Resume } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return resume as Resume;
};
