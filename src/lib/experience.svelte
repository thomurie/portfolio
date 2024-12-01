<script lang="ts">
	import ExperienceCard from './experienceCard.svelte';
	import { experiences } from '$lib/data/experiences';
</script>

<section>
	<h2 class="text-xl font-bold">Experience</h2>
	<div class="mb-4 space-y-4">
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
	<a
		href="https://storage.googleapis.com/tu-portfolio/Thomas_Urie_Resume.pdf"
		target="_blank"
		rel="noopener noreferrer"
		class="block leading-none underline underline-offset-2 transition-colors duration-200 ease-in-out hover:text-blueCrayola focus:text-blueCrayola"
	>
		View Full Resume
	</a>
</section>
