<script lang="ts">
	export let day: number;
	export let disabled = false;
</script>

<button
	{disabled}
	class="p-2 rounded w-full grid place-items-center transition-colors font-semibold disabled:text-slate-400"
	class:hover:bg-blue-500={!disabled}
	class:hover:text-white={!disabled}
>
	{day}
</button>
