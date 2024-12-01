<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects } from '$lib/data/projects';
</script>

<section>
	<h2 class="text-xl font-bold">Projects</h2>
	<div class="space-y-4">
		{#each projects as project}
			<ProjectCard {...project} />
		{/each}
	</div>
</section>
