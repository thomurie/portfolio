<script lang="ts">
	import About from '$lib/about.svelte';
	import Experience from '$lib/experience.svelte';
	import Footer from '$lib/footer.svelte';
	import Projects from '$lib/projects.svelte';
</script>

<header>
	<h1>Thomas Urie</h1>
	<h2>Full Stack Engineer</h2>
	<p>I build high performing, data rich applications for the web.</p>
	<ul>
		<li><a href="https://localhost:5173">Github</a></li>
		<li><a href="https://localhost:5173">LinkedIn</a></li>
		<li><a href="https://localhost:5173">Bluesky</a></li>
	</ul>
</header>
<main>
	<About />
	<Experience />
	<Projects />
	<Footer />
</main>
