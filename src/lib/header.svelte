<script lang="ts">
	import { mainLinks } from '$lib/data/mainLinks';
</script>

<header class="space-y-1">
	<h1 class="text-2xl font-bold">Thomas Urie</h1>
	<h2 class="font-semibold">Full Stack Engineer</h2>
	<p>I build high performing, data rich applications for the web.</p>
	<ul class="flex flex-row items-center justify-start gap-4">
		{#each mainLinks as link}
			<li>
				<a
					href={link.url}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={link.label}
					class="block leading-none underline underline-offset-2 transition-colors duration-200 ease-in-out hover:text-blueCrayola focus:text-blueCrayola"
				>
					{link.name}
				</a>
			</li>
		{/each}
	</ul>
</header>
