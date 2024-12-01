<script lang="ts">
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import Link from '$lib/components/ui/Link.svelte';
	import { experiences } from '$lib/data/experiences';
</script>

<section>
	<h2 class="text-xl font-bold">Experience</h2>
	<div class="mb-4 space-y-4">
		{#each experiences as experience}
			<ExperienceCard {...experience} />
		{/each}
	</div>
	<Link
		href="https://storage.googleapis.com/tu-portfolio/Thomas_Urie_Resume.pdf"
		target="_blank"
		rel="noopener noreferrer"
		label="View Full Resume"
	/>
</section>
