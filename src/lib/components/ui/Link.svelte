<script lang="ts">
	import { type ILink } from '$lib/types';
	let { href, target, rel, ariaLabel = '', label }: ILink = $props();
</script>

<a
	{href}
	{target}
	{rel}
	aria-label={ariaLabel}
	class="block leading-none underline underline-offset-2 transition-colors duration-200 ease-in-out hover:text-blueCrayola focus:text-blueCrayola dark:hover:text-safetyOrange dark:focus:text-safetyOrange"
>
	{label}
</a>
