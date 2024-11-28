<script lang="ts">
	import type { IProject } from '$lib/data/projects';

	let { title, imageURI, imageAlt, technologies, description }: IProject = $props();
</script>

<div>
	<img src={imageURI} alt={imageAlt} />
	<h3>{title}</h3>
	<p>{description}</p>
	<div>
		{#each technologies as technology, i}
			<span>{technology} {i < technologies.length && '•'}</span>
		{/each}
	</div>
</div>
