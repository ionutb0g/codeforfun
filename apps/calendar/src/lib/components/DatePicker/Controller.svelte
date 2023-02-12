<script lang="ts">
	import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons';
	import { format, addMonths, subMonths, startOfMonth, startOfDay } from 'date-fns';

	import Button from '../Button.svelte';
	import IconButton from '../IconButton.svelte';
	import { createEventDispatcher } from 'svelte';

	export let initialDate = new Date();
	const dispatch = createEventDispatcher<{
		ok: Date;
		cancel: void;
		toggleMonthSelector: boolean;
	}>();

	let isMonthSelectorActive = false;
	let currentMonth = startOfMonth(initialDate);
	let currentDay = startOfDay(initialDate);

	$: currentDate = format(currentMonth, 'MMMM yyyy');

	function switchToNextMonth() {
		currentMonth = addMonths(currentMonth, 1);
	}

	function switchToPreviousMonth() {
		currentMonth = subMonths(currentMonth, 1);
	}

	function toggleMonthSelector() {
		isMonthSelectorActive = !isMonthSelectorActive;
		dispatch('toggleMonthSelector', isMonthSelectorActive);
	}
</script>

<div class="divide-y">
	<header class="px-4 py-2 flex justify-between items-center">
		<IconButton on:click={switchToNextMonth}>
			<ChevronLeftIcon size="24" />
		</IconButton>
		<button on:click={toggleMonthSelector} class="pressable-sm px-2 py-1">
			<span class="text-xl font-semibold capitalize">{currentDate}</span>
		</button>
		<IconButton on:click={switchToPreviousMonth}>
			<ChevronRightIcon size="24" />
		</IconButton>
	</header>

	<slot {currentMonth} {isMonthSelectorActive} />

	<footer class="flex justify-end gap-2 px-4 py-2">
		<Button on:click={() => dispatch('ok', currentDay)}>Cancel</Button>
		<Button on:click={() => dispatch('cancel')}>Ok</Button>
	</footer>
</div>
