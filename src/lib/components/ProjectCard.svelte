<script lang="ts">
	import { type IProject } from '$lib/types';

	let { title, imageURI, imageAlt, technologies, description }: IProject = $props();
</script>

<div>
	<img src={imageURI} alt={imageAlt} width="200" height="100" />
	<h3>{title}</h3>
	<p>{description}</p>
	<div>
		{#each technologies as technology, i}
			<span class="text-sm font-medium">
				{technology}{i < technologies.length - 1 ? ' • ' : ''}
			</span>
		{/each}
	</div>
</div>
