<script lang="ts">
	export let day: number;
	export let disabled = false;
</script>

<button
	on:click
	{disabled}
	class="rounded-2xl w-full aspect-square grid place-items-center transition-colors group"
	class:hover:bg-blue-500={!disabled}
>
	<span
		class="text-xs font-semibold group-disabled:text-slate-400"
		class:group-hover:text-white={!disabled}
	>
		{day}
	</span>
</button>
