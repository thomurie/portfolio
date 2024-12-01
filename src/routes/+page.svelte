<script lang="ts">
	import About from '$lib/about.svelte';
	import Experience from '$lib/experience.svelte';
	import Footer from '$lib/footer.svelte';
	import Header from '$lib/header.svelte';
</script>

<svelte:head>
	<title>Thomas Urie</title>
	<meta name="description" content="Thomas Urie's Portfolio" />
	<meta property="og:title" content="Thomas Urie" />
	<meta property="og:description" content="Thomas Urie's Portfolio" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Thomas Urie" />
	<!-- <meta property="og:url" content="https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg" /> -->
</svelte:head>
<div class="mx-auto my-10 max-w-[650px] px-4 md:px-0">
	<Header />
	<main class="mt-8 space-y-8">
		<About />
		<Experience />
		<Footer />
	</main>
</div>
