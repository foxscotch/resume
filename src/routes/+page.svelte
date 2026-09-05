<script lang="ts">
	import Experience from '$lib/components/Experience.svelte';
	import Header from '$lib/components/Header.svelte';
	import Skill from '$lib/components/Skill.svelte';
	import type { Experience as ExperienceType } from '$lib/types';
	import type { PageProps } from './$types';
	let { data: resume }: PageProps = $props();

	let groups = $derived.by(() => {
		const groups: { [k: string]: ExperienceType[] } = {};

		resume.experience.forEach((exp) => {
			if (exp.group in groups) {
				groups[exp.group].push(exp);
			} else {
				groups[exp.group] = [exp];
			}
		});

		return groups;
	});
</script>

<Header contact={resume.contact} />

<hr />

{#each Object.entries(groups) as [group, experience] (group)}
	<h3>{group}</h3>
	{#each experience.toReversed() as exp (exp.begin)}
		<Experience experience={exp} />
	{/each}
{/each}

<h3>Skills</h3>
{#each Object.entries(resume.skills) as [skill, body] (skill)}
	<Skill {skill} {body} />
{/each}

<style>
	h3 {
		margin-top: 1em;
		color: var(--pink-darker);
	}
</style>
