<script lang="ts">
	import Link from '$lib/components/ui/Link.svelte';
</script>

<svelte:head>
	<title>404</title>
	<meta name="description" content="Thomas Urie's Portfolio" />
	<meta property="og:title" content="Thomas Urie - 404" />
	<meta property="og:description" content="Page not found" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Thomas Urie" />
	<!-- <meta property="og:url" content="https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg" /> -->
</svelte:head>
<main class="mx-auto my-10 max-w-[650px] px-4 md:px-0">
	<h1 class="text-2xl font-bold">404</h1>
	<h2 class="text-xl font-bold">Page not found</h2>
	<p>Sorry, we couldn't find the page you were looking for.</p>
	<Link href="/" label="Go back to home" />
</main>
