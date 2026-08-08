<script lang="ts">
	import type { Contact } from '$lib/types';

	let { contact }: { contact: Contact } = $props();
</script>

<div class="contact">
	<h1>{contact.name}</h1>
	<h2>{contact.title}</h2>
	<p>
		<span>{contact.location}</span> ⬥
		<span>{contact.phone}</span> ⬥
		<span><a href="mailto:{contact.email}">{contact.email}</a></span>
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
