<script>
	import Controller from './Controller.svelte';
	import DayOfMonthSelector from './DayOfMonthSelector.svelte';
</script>

<Controller let:currentMonth>
	<DayOfMonthSelector {currentMonth} initialDay={new Date()} />
</Controller>
