<script lang="ts">
	import { addDays, getDate, isSameMonth, startOfDay } from 'date-fns';
	import { createEventDispatcher } from 'svelte';
	import DayButton from './DayButton.svelte';
	import DaysOfWeekHeader from './DaysOfWeekHeader.svelte';
	import { getDayInMonth, getDaysOfMonth, type DayOfMonth } from './utils';

	export let currentMonth: Date;
	export let selectedDate: Date;
	const dispatch = createEventDispatcher<{ select: Date }>();

	$: selectedDay = getDate(selectedDate);
	$: daysOfMonth = getDaysOfMonth(currentMonth);

	$: isDaySelected = ({ day, isDecorative }: DayOfMonth) =>
		day === selectedDay && isSameMonth(currentMonth, selectedDate) && !isDecorative;

	function select(day: number) {
		dispatch('select', getDayInMonth(day, currentMonth));
	}
</script>

<div class="p-4 flex flex-col gap-4 text-xs">
	<DaysOfWeekHeader />

	<div class="grid grid-cols-7 gap-1 place-items-center">
		{#each daysOfMonth as { day, isDecorative }}
			<DayButton
				{day}
				disabled={isDecorative}
				isSelected={isDaySelected({ day, isDecorative })}
				on:click={() => select(day)}
			/>
		{/each}
	</div>
</div>
