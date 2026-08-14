<script lang="ts">
	let { skill, body }: { skill: string; body: string } = $props();
</script>

<p><em>{skill}</em>: {body}</p>

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
