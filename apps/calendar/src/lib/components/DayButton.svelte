<script lang="ts">
	export let day: number;
	export let disabled = false;
</script>

<button
	on:click
	{disabled}
	class="pressable transition-colors rounded-2xl w-full aspect-square overflow-hidden grid place-items-center disabled:text-slate-400  enabled:hover:bg-blue-500 enabled:hover:text-white"
>
	<span class="text-xs font-semibold ">
		{day}
	</span>
</button>
