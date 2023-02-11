<script lang="ts">
	import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons';
	import DayButton from './DayButton.svelte';
	import { format, getDaysInMonth, startOfMonth, getDay, addMonths, subMonths } from 'date-fns';
	import ro from 'date-fns/locale/ro/index';
	import { range, reversedRange } from '$lib/utils/range';

	let currentMonth = new Date();

	$: numberOfDays = getDaysInMonth(currentMonth);
	$: firstDayOfFirstWeek = (getDay(startOfMonth(currentMonth)) + 6) % 7;

	$: numberOfDaysOfPreviousMonth = getDaysInMonth(subMonths(currentMonth, 1));
	$: numberOfDaysLeftFromNextMonth = (7 - ((numberOfDays + firstDayOfFirstWeek) % 7)) % 7;

	$: currentDate = format(currentMonth, 'MMMM yyyy', { locale: ro });
</script>

<div class="divide-y">
	<header class="px-4 py-2 flex justify-between items-center">
		<button on:click={() => (currentMonth = subMonths(currentMonth, 1))}>
			<ChevronLeftIcon
				size="24"
				class="w-10 h-10 p-2 rounded-full hover:bg-blue-50 transition-colors"
			/>
		</button>
		<button class="px-2 py-1">
			<span class="text-xl font-semibold capitalize">{currentDate}</span>
		</button>
		<button on:click={() => (currentMonth = addMonths(currentMonth, 1))}>
			<ChevronRightIcon
				size="24"
				class="w-10 h-10 p-2 rounded-full hover:bg-blue-50 transition-colors"
			/>
		</button>
	</header>
	<div class="p-4 grid grid-cols-7 gap-1 place-items-center text-xs">
		<div class="text-slate-700">Lu</div>
		<div class="text-slate-700">Ma</div>
		<div class="text-slate-700">Mi</div>
		<div class="text-slate-700">Jo</div>
		<div class="text-slate-700">Vi</div>
		<div class="text-slate-700">Sa</div>
		<div class="text-slate-700">Du</div>

		<div class="col-span-7 my-2" />

		{#each reversedRange(firstDayOfFirstWeek) as i}
			<DayButton disabled day={numberOfDaysOfPreviousMonth - i} />
		{/each}

		{#each range(numberOfDays) as i}
			<DayButton day={i + 1} />
		{/each}

		{#each range(numberOfDaysLeftFromNextMonth) as i}
			<DayButton disabled day={i + 1} />
		{/each}
	</div>

	<footer class="flex justify-end gap-2 px-4 py-2">
		<button class="px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
			<span class="text-sm font-semibold">Cancel</span>
		</button>
		<button class="px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
			<span class="text-sm font-semibold">Ok</span>
		</button>
	</footer>
</div>
