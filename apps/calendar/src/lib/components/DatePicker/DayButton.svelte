<script lang="ts">
	export let day: number;
	export let disabled = false;

	export let isSelected = false;
</script>

<button
	on:click
	{disabled}
	class="pressable-sm rounded-full w-full aspect-square overflow-hidden grid place-items-center disabled:text-slate-400 "
	class:bg-blue-500={isSelected}
	class:text-white={isSelected}
	class:enabled:hover:bg-blue-100={!isSelected}
>
	<span class="text-xs font-semibold ">
		{day}
	</span>
</button>
