<script lang="ts">
	import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons';
	import {
		format,
		getDaysInMonth,
		startOfMonth,
		getDay,
		addMonths,
		subMonths,
		eachDayOfInterval,
		startOfWeek,
		endOfWeek
	} from 'date-fns';
	import { range, reversedRange } from '$lib/utils/range';
	import DayButton from './DayButton.svelte';
	import Button from './Button.svelte';
	import IconButton from './IconButton.svelte';

	let currentMonth = new Date();

	$: daysOfWeek = eachDayOfInterval({
		start: startOfWeek(currentMonth),
		end: endOfWeek(currentMonth)
	}).map((day) => format(day, 'EEEEEE'));

	$: numberOfDays = getDaysInMonth(currentMonth);
	$: firstDayOfFirstWeek = (getDay(startOfMonth(currentMonth)) + 6) % 7;

	$: numberOfDaysOfPreviousMonth = getDaysInMonth(subMonths(currentMonth, 1));
	$: numberOfDaysLeftFromNextMonth = (7 - ((numberOfDays + firstDayOfFirstWeek) % 7)) % 7;

	$: currentDate = format(currentMonth, 'MMMM yyyy');
</script>

<div class="divide-y">
	<header class="px-4 py-2 flex justify-between items-center">
		<IconButton on:click={() => (currentMonth = subMonths(currentMonth, 1))}>
			<ChevronLeftIcon size="24" />
		</IconButton>
		<button class="pressable-sm px-2 py-1">
			<span class="text-xl font-semibold capitalize">{currentDate}</span>
		</button>
		<IconButton on:click={() => (currentMonth = addMonths(currentMonth, 1))}>
			<ChevronRightIcon size="24" />
		</IconButton>
	</header>
	<div class="p-4 grid grid-cols-7 gap-1 place-items-center text-xs">
		{#each daysOfWeek as day}
			<div class="text-slate-700 capitalize">{day}</div>
		{/each}

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
		<Button>Cancel</Button>
		<Button>Ok</Button>
	</footer>
</div>
