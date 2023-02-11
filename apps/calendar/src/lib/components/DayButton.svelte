<script lang="ts">
	import Pressable from './Pressable.svelte';

	export let day: number;
	export let disabled = false;
</script>

<Pressable on:click {disabled} expandH expandV>
	<div
		class="rounded-2xl w-full aspect-square overflow-hidden grid place-items-center transition-colors group/this"
		class:group-hover:bg-blue-500={!disabled}
	>
		<span
			class="text-xs font-semibold group-disabled/this:text-slate-400"
			class:group-hover:text-white={!disabled}
		>
			{day}
		</span>
	</div>
</Pressable>
