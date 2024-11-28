<script lang="ts">
	import ProjectCard from './projectCard.svelte';
	import { projects } from '$lib/data/projects';
</script>

<section>
	<h2>Projects</h2>
	<div>
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
