<script lang="ts">
	import { links } from '$lib/data/links';
	import Link from '$lib/components/ui/Link.svelte';
</script>

<header class="space-y-1">
	<h1 class="text-2xl font-bold">Thomas Urie</h1>
	<h2 class="font-semibold">Full Stack Engineer</h2>
	<p>I build high performing, data rich applications for the web.</p>
	<ul class="flex flex-row items-center justify-start gap-4">
		{#each links as link}
			<li>
				<Link {...link} target="_blank" rel="noopener noreferrer" />
			</li>
		{/each}
	</ul>
</header>
