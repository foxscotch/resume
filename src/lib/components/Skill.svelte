<script lang="ts">
	let { skill, body }: { skill: string; body: string } = $props();
</script>

<h4>{skill}</h4>
<p>{body}</p>

<style>
	h4 {
		margin-top: 0.75em;
		margin-bottom: 0.25em;
		font-weight: bold;
	}

	p {
		margin-top: 0.25em;
	}
</style>
