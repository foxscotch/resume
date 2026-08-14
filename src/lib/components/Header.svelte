<script lang="ts">
	import { faker } from '@faker-js/faker';
	import type { Contact } from '$lib/types';

	let { contact, anonymize }: { contact: Contact; anonymize: boolean } = $props();
</script>

<div class="contact">
	<h1>{anonymize ? faker.person.fullName() : contact.name}</h1>
	<h2>{anonymize ? faker.person.jobTitle() : contact.title}</h2>
	<p>
		<span
			>{anonymize
				? `${faker.location.city()}, ${faker.location.state({ abbreviated: true })}`
				: contact.location}</span
		>
		⬥
		<span>{anonymize ? faker.phone.number({ style: 'national' }) : contact.phone}</span> ⬥
		<span>
			<a href="mailto:{anonymize ? '' : contact.email}">
				{anonymize ? faker.internet.email() : contact.email}
			</a>
		</span>
	</p>
</div>

<style>
	.contact {
		text-align: center;
	}

	h1 {
		color: var(--pink-darkest);
		letter-spacing: 1px;
	}

	h2 {
		margin: 0.25em 0 0.5em;
	}

	p {
		font-size: 0.9em;
	}

	span {
		margin: 0 0.25em 0;
	}
</style>
