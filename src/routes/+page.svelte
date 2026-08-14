<script lang="ts">
	import Experience from '$lib/components/Experience.svelte';
	import Header from '$lib/components/Header.svelte';
	import Skill from '$lib/components/Skill.svelte';
	import type { PageProps } from './$types';
	let { data: resume }: PageProps = $props();
</script>

<Header contact={resume.contact} />

<hr />

<h3>Experience</h3>
{#each resume.experience.toReversed() as experience (experience.begin)}
	<Experience {experience} />
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
