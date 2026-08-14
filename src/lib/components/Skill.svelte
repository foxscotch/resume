<script lang="ts">
	import { faker } from '@faker-js/faker';

	let { skill, body, anonymize }: { skill: string; body: string; anonymize: boolean } = $props();
</script>

<p><em>{skill}</em>: {anonymize ? faker.lorem.paragraph() : body}</p>

<style>
	p {
		margin: 0.35em 0 0.35em;
		text-indent: 2em hanging;
		break-inside: avoid;
	}

	p:first-of-type {
		margin-top: 1em;
	}

	em {
		font-weight: bold;
	}
</style>
