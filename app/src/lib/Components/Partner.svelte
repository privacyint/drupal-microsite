<script lang="ts">
	import { fade } from 'svelte/transition';
	let {
		html,
		title,
		url,
		imageURL,
		imageAlt
	}: { html: string; title: string; url: string; imageURL: string; imageAlt: string } = $props();
</script>

<div class="partner"  in:fade={{ duration: 300, delay: 400 }}>
	<div>
		<h4><a href={url} target="_blank">{title}</a></h4>
		<div>{@html html}</div>
	</div>

	{#if imageURL}<a href={url} target="_blank"><img src={imageURL} alt={imageAlt} /></a>{/if}
</div>

<style>
	.partner {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: var(--spacing-4);
		max-width: 900px;

		&:last-child {
			margin-bottom: var(--spacing-4);
		}

		& > div {
			display: inline-block;
			width: calc(100% - var(--spacing-2) - 190px);
			margin-right: var(--spacing-2);
		}

		& > a > img {
			display: inline-block;
			width: 180px;
			max-width: 100%;
			margin-top: var(--spacing-3);
		}
	}

	@media only screen and (max-width: 740px) {
		.partner {
			display: flex;
			flex-direction: column;
			align-items: unset;

			& > div {
				width: 100%;
				margin-right: 0;
			}

			& > a > img {
				margin-bottom: var(--spacing-3);
			}
		}
	}
</style>
