<script lang="ts">
	import type { IExperience } from '$lib/data/experiences';

	let { title, company, dateFrom, dateTo, technologies, description }: IExperience = $props();
</script>

<div>
	<span>{dateFrom} - {dateTo}</span>
	<h3>{title} | {company}</h3>
	<p>{description}</p>
	<div>
		{#each technologies as technology, i}
			<span>{technology} {i < technologies.length - 1 ? '•' : ''}</span>
		{/each}
	</div>
</div>
