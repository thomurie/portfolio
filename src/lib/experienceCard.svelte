<script lang="ts">
	import type { IExperience } from '$lib/data/experiences';

	let { title, company, dateFrom, dateTo, technologies, description }: IExperience = $props();
</script>

<div>
	<span class="text-sm uppercase">{dateFrom} - {dateTo}</span>
	<h3 class="font-semibold">{title} | {company}</h3>
	<p class="py-1">{description}</p>
	<div>
		{#each technologies as technology, i}
			<span class="text-sm font-medium">{technology} {i < technologies.length - 1 ? '•' : ''}</span>
		{/each}
	</div>
</div>
