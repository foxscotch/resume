<script lang="ts">
	import Experience from '$lib/components/Experience.svelte';
	import Header from '$lib/components/Header.svelte';
	import Skill from '$lib/components/Skill.svelte';
	import { md, mdnop } from '$lib/markdown';
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

<h3>Highlights</h3>

<ul class="highlights">
	{#each resume.highlights as highlight (highlight)}
		<li>{@html mdnop(highlight)}</li>
	{/each}
</ul>

{#each Object.entries(groups) as [group, experience] (group)}
	<h3>{group}</h3>
	{#each experience.toReversed() as exp (exp.begin)}
		<Experience experience={exp} />
	{/each}
{/each}

<h3>Skills</h3>

<p>
	{@html md(resume.skills._preamble)}
</p>

{#each Object.entries(resume.skills).filter(([skill]) => !skill.startsWith('_')) as [skill, body] (skill)}
	<Skill {skill} {body} />
{/each}

<style>
	h3 {
		margin-top: 1em;
		color: var(--pink-darker);
	}

	.highlights {
		margin-top: 1em;
	}
</style>
