<script lang="ts">
	import About from '$lib/about.svelte';
	import Experience from '$lib/experience.svelte';
	import Footer from '$lib/footer.svelte';
	import Projects from '$lib/projects.svelte';
</script>

<svelte:head>
	<title>Thomas Urie</title>
	<meta property="og:title" content="Thomas Urie" />
	<meta property="og:description" content="Thomas Urie's Portfolio" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Thomas Urie" />
	<!-- <meta property="og:url" content="https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg" /> -->
	<!-- <meta property="og:image" content="https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg" /> -->
</svelte:head>
<div class="mx-auto my-10 max-w-[650px]">
	<header class="space-y-1">
		<h1 class="text-2xl font-bold">Thomas Urie</h1>
		<h2 class="font-semibold">Full Stack Engineer</h2>
		<p>I build high performing, data rich applications for the web.</p>
		<ul>
			<li><a href="https://localhost:5173/">Github</a></li>
			<li><a href="https://localhost:5173/">LinkedIn</a></li>
			<li><a href="https://localhost:5173/">Bluesky</a></li>
		</ul>
	</header>
	<main class="mt-8 space-y-8">
		<About />
		<Experience />
		<Projects />
		<Footer />
	</main>
</div>
