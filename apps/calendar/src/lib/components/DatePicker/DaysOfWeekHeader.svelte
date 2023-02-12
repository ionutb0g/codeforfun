<script lang="ts">
	import { eachDayOfInterval, endOfWeek, startOfWeek, format } from 'date-fns';

	const currentMonth = new Date();

	const daysOfWeek = eachDayOfInterval({
		start: startOfWeek(currentMonth),
		end: endOfWeek(currentMonth)
	}).map((day) => format(day, 'EEEEEE'));
</script>

<header class="grid grid-cols-7 place-items-center">
	{#each daysOfWeek as day}
		<div class="capitalize">{day}</div>
	{/each}
</header>
