<script lang="ts">
	import About from '$lib/about.svelte';
	import Experience from '$lib/experience.svelte';
	import Footer from '$lib/footer.svelte';
	import Projects from '$lib/projects.svelte';
</script>

<div class="mx-auto my-10 max-w-[650px]">
	<header class="space-y-1">
		<h1 class="text-2xl font-bold">Thomas Urie</h1>
		<h2 class="font-semibold">Full Stack Engineer</h2>
		<p>I build high performing, data rich applications for the web.</p>
		<ul>
			<li><a href="https://localhost:5173">Github</a></li>
			<li><a href="https://localhost:5173">LinkedIn</a></li>
			<li><a href="https://localhost:5173">Bluesky</a></li>
		</ul>
	</header>
	<main class="mt-8 space-y-8">
		<About />
		<Experience />
		<Projects />
		<Footer />
	</main>
</div>
