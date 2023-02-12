<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Controller from './Controller.svelte';
	import DayOfMonthSelector from './DayOfMonthSelector.svelte';
	import { fly } from 'svelte/transition';
	import { addMonths, subMonths, startOfMonth } from 'date-fns';

	export let initialSelectedDate = new Date();
	const dispatch = createEventDispatcher<{ pick: Date; cancel: void }>();

	let selectedDate = initialSelectedDate;
	let currentMonth = selectedDate;
	let animationDirection: 1 | -1 = -1;
	let node: HTMLDivElement;

	$: width = node?.clientWidth ?? 0;
	$: currentMonthKey = currentMonth.toDateString();

	$: console.log(node, width);

	function setCurrentMonth(date: Date) {
		currentMonth = startOfMonth(date);
	}

	function setSelectedDate({ detail: newDate }: CustomEvent<Date>) {
		selectedDate = newDate;
	}

	function switchToPreviousMonth() {
		setCurrentMonth(subMonths(currentMonth, 1));
		animationDirection = -1;
	}

	function switchToNextMonth() {
		setCurrentMonth(addMonths(currentMonth, 1));
		animationDirection = 1;
	}

	function pickDate() {
		dispatch('pick', selectedDate);
	}
</script>

<Controller
	{currentMonth}
	on:previousMonth={switchToPreviousMonth}
	on:nextMonth={switchToNextMonth}
	on:cancel
	on:ok={pickDate}
>
	<div bind:this={node} class="overflow-x-hidden whitespace-nowrap">
		{#key currentMonthKey}
			<div
				class="inline-block w-full h-full"
				in:fly={{
					x: width * animationDirection,
					duration: 150,
					delay: 150,
					opacity: animationDirection === 1 ? 1 : 0
				}}
				out:fly={{
					x: -width * animationDirection,
					duration: 150,
					opacity: animationDirection === 1 ? 0 : 1
				}}
			>
				<DayOfMonthSelector on:select={setSelectedDate} {currentMonth} {selectedDate} />
			</div>
		{/key}
	</div>
</Controller>
