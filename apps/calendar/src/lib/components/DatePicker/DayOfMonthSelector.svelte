<script lang="ts">
	import { range, reversedRange } from '$lib/utils/range';
	import { getDay, getDate, getDaysInMonth, startOfMonth, subMonths, isSameMonth } from 'date-fns';
	import { createEventDispatcher } from 'svelte';
	import DayButton from './DayButton.svelte';
	import DaysOfWeekHeader from './DaysOfWeekHeader.svelte';

	export let currentMonth: Date;
	export let initialDay: Date;
	const dispatch = createEventDispatcher<{ select: Date }>();

	let selectedDate = initialDay;

	$: selectedDay = getDate(selectedDate);

	$: numberOfDays = getDaysInMonth(currentMonth);
	$: firstDayOfFirstWeek = (getDay(startOfMonth(currentMonth)) + 6) % 7;

	$: numberOfDaysOfPreviousMonth = getDaysInMonth(subMonths(currentMonth, 1));
	$: numberOfDaysLeftFromNextMonth = (7 - ((numberOfDays + firstDayOfFirstWeek) % 7)) % 7;
</script>

{#key currentMonth}
	<div class="p-4 flex flex-col gap-4 text-xs">
		<DaysOfWeekHeader />

		<div class="grid grid-cols-7 gap-1 place-items-center">
			{#each reversedRange(firstDayOfFirstWeek) as i}
				<DayButton disabled day={numberOfDaysOfPreviousMonth - i} />
			{/each}

			{#each range(numberOfDays) as i}
				<DayButton
					day={i + 1}
					isSelected={i + 1 === selectedDay && isSameMonth(currentMonth, selectedDate)}
				/>
			{/each}

			{#each range(numberOfDaysLeftFromNextMonth) as i}
				<DayButton disabled day={i + 1} />
			{/each}
		</div>
	</div>
{/key}
