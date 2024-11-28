<script lang="ts">
	import ExperienceCard from './experienceCard.svelte';
	import { experiences } from '$lib/data/experiences';
</script>

<section>
	<h2>Experience</h2>
	<div>
		{#each experiences as experience}
			<ExperienceCard
				title={experience.title}
				description={experience.description}
				company={experience.company}
				dateFrom={experience.dateFrom}
				dateTo={experience.dateTo}
				technologies={experience.technologies}
			/>
		{/each}
	</div>
</section>
