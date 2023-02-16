<script>
	import { range } from '$lib/utils/range';
	import Day from './Day.svelte';
</script>

<div>
	<header class="flex px-4 py-2 gap-4 border-b">
		<div class="w-24" />
		<div class="flex-1 grid grid-cols-[repeat(24,_minmax(0,_1fr))] text-2xs font-bold">
			{#each range(23) as hour}
				<div>
					<span class="inline-block -translate-x-1/2">
						{('0' + hour).slice(-2)}
					</span>
				</div>
			{/each}

			<div class="flex justify-between">
				<div class="inline-block -translate-x-1/2">23</div>
				<div class="inline-block translate-x-1/2">24</div>
			</div>
		</div>
	</header>
	<ul class="flex flex-col divide-y">
		<Day day={14} weekDay="marți" />
		<Day day={15} weekDay="miercuri" />
		<Day day={16} weekDay="joi" />
		<Day day={17} weekDay="vineri" />
		<Day day={18} weekDay="sâmbătă" />
		<Day day={19} weekDay="duminică" />
	</ul>
</div>

<style>
	.x {
		background-color: #fcd34d;
	}
</style>
