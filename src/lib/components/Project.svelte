<script lang="ts">
	import type { Project } from '$lib/types';
	import { micromark } from 'micromark';

	let { project }: { project: Project } = $props();
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
<li>{@html micromark(project)}</li>
