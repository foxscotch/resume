<script lang="ts">
	import type { Experience } from '$lib/types';

	const formatDate = new Intl.DateTimeFormat('en-US', {
		month: 'short',
		year: 'numeric'
	}).format;

	let { experience }: { experience: Experience } = $props();
</script>

<div class="heading">
	<div class="left">
		<p>{experience.entity}</p>
		<p>{experience.title}</p>
	</div>
	<div class="right">
		<p>
			{experience.location}
		</p>
		<p>
			{formatDate(experience.begin)}&ndash;{experience.end ? formatDate(experience.end) : 'present'}
		</p>
	</div>
</div>

<ul>
	{#each experience.points as point (point)}
		<li>{point}</li>
	{/each}
</ul>

<style>
	.heading {
		display: flex;
		justify-content: space-between;
		break-after: avoid;
	}

	.right {
		text-align: right;
	}

	.heading .left :first-child,
	.heading .right :first-child {
		margin-bottom: 0.2em;
		font-weight: bold;
	}

	.heading .left :last-child,
	.heading .right :last-child {
		margin-top: 0.2em;
		margin-bottom: 0.2em;
		font-style: italic;
	}

	li {
		break-inside: avoid;
	}
</style>
