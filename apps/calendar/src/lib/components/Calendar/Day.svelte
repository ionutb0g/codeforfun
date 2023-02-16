<script lang="ts">
	import { range } from '$lib/utils/range';

	export let day: number;
	export let weekDay: string;
</script>

<li class="px-4 flex gap-4">
	<div class="w-24 flex flex-col items-center justify-center">
		<div class="text-2xl font-semibold">{day}</div>
		<div class="text-xs text-slate-500">{weekDay}</div>
	</div>
	<div class="flex-1 relative">
		<div
			class="absolute -z-10 top-0 left-0 w-full h-full grid grid-cols-[repeat(24,_minmax(0,_1fr))] divide-x divide-dashed border-x border-dashed pointer-events-none"
		>
			{#each range(24) as _}
				<div class="h-full" />
			{/each}
		</div>
		<div class="grid grid-cols-12 gap-1 py-2">
			<div class="flex items-center p-2 bg-amber-300 col-span-3 col-start-4 rounded-full">
				<span class="text-xs font-bold"> Lucrare #1 </span>
			</div>
			<div class="flex items-center p-2 bg-pink-300 col-span-1 col-start-8 rounded-full">
				<span class="text-xs font-bold"> Lucrare #3 </span>
			</div>
			<div class="flex items-center p-2 text-xs bg-blue-300 col-span-2 col-start-6 rounded-full">
				<span class="text-xs font-bold"> Lucrare #2 </span>
			</div>
		</div>
	</div>
</li>
