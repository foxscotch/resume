<script lang="ts">
	import { faker } from '@faker-js/faker';
	import type { Experience } from '$lib/types';

	const formatDate = new Intl.DateTimeFormat('en-US', {
		month: 'short',
		year: 'numeric'
	}).format;

	let { experience, anonymize }: { experience: Experience; anonymize: boolean } = $props();
</script>

<div class="heading">
	<div class="left">
		<p>{anonymize ? faker.company.name() : experience.entity}</p>
		<p>{anonymize ? faker.person.jobTitle() : experience.title}</p>
	</div>
	<div class="right">
		<p>
			{anonymize
				? `${faker.location.city()}, ${faker.location.state({ abbreviated: true })}`
				: experience.location}
		</p>
		<p>
			{formatDate(
				anonymize ? faker.date.past({ years: 10 }) : experience.begin
			)}&ndash;{experience.end
				? formatDate(anonymize ? faker.date.past({ years: 10 }) : experience.end)
				: 'present'}
		</p>
	</div>
</div>

<ul>
	{#each experience.points as point (point)}
		<li>{anonymize ? faker.lorem.sentences({ min: 2, max: 4 }) : point}</li>
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
