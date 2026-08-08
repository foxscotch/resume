<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<style>
	:root {
		--pink: #ff0055;
		--pink-dark: #b3003b;
		--pink-darker: #8d002f;
		--pink-darkest: #670022;
		--white: #ffffff;
		--black: #0d0508;

		--primary: var(--pink);
		--primary-hl: var(--pink-dark);
		--secondary: var(--black);
		--secondary-hl: var(--white);

		--text: var(--secondary);
		--muted-text: rgba(246, 247, 243, 0.5);
		--background: var(--secondary-hl);
		--wallpaper: var(--secondary-hl);

		/* --- Other Page Attributes --- */

		--desktop-min-width: 576px;

		font-family: 'Noto Sans', sans-serif;
	}

	:global {
		body {
			padding: 1em;
			text-align: left;
			color: var(--text);
			background-color: var(--wallpaper);
		}

		h1,
		h2,
		h3 {
			font-family: 'PT Serif', serif;
		}

		/* Adapted from MDN content: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr#example */
		hr {
			border: none;
			border-top: 0.2em solid var(--primary-hl);
			color: var(--primary-hl);
			overflow: visible;
			text-align: center;
			height: 0px;
			margin: 2em auto 2em;
		}

		hr:after {
			background: var(--background);
			font-size: 1.4em;
			content: '✦';
			padding: 0 12px;
			position: relative;
			top: -16px;
		}
		/* End MDN content */

		h1 {
			font-size: 2.75em;
		}

		h2 {
			font-size: 1.75em;
		}

		h3 {
			font-size: 1.75em;
		}

		h4 {
			font-size: 1.25em;
		}

		h5 {
			font-size: 1.15em;
		}

		h6 {
			font-size: 1.1em;
		}

		p {
			margin: 1em auto 1em;
		}

		a {
			color: var(--primary-hl);
			text-decoration: none;
		}

		a:hover {
			opacity: 75%;
		}

		ul {
			list-style: '⬪' outside;
			margin-left: 1.5em;
		}

		ul > li {
			padding-left: 0.5em;
			line-height: 1.2em;
		}
	}
</style>
