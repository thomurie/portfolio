<script lang="ts">
	import ProjectCard from './projectCard.svelte';
	import { projects } from '$lib/data/projects';
</script>

<section>
	<h2 class="font-semibold">Projects</h2>
	<div class="space-y-4">
		{#each projects as project}
			<ProjectCard
				title={project.title}
				description={project.description}
				imageURI={project.imageURI}
				imageAlt={project.imageAlt}
				technologies={project.technologies}
			/>
		{/each}
	</div>
</section>
