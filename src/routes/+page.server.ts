import resume from '$lib/resume.yaml';
import type { Resume } from '$lib/types';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async () => {
	return resume as Resume;
};
