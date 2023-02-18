<script lang="ts">
	import { range } from '$lib/utils/range';
	import { format, parse } from 'date-fns';
	import Day from './Day.svelte';
	import { type ICalendarEvent, events } from './dummy-events';

	const eventsGroupedByDays = new Map<string, Set<ICalendarEvent>>();

	function formatKey(date: Date) {
		return format(date, 'dd-MM-yyyy');
	}

	function parseKey(key: string) {
		return parse(key, 'dd-MM-yyyy', new Date());
	}

	function update(date: Date, event: ICalendarEvent) {
		const key = formatKey(date);
		const value = eventsGroupedByDays.get(key);

		eventsGroupedByDays.set(key, value?.add(event) ?? new Set([event]));
	}

	for (const event of events) {
		update(event.startAt, event);
		update(event.endAt, event);
	}
</script>

<div class="relative">
	<header class="flex px-4 py-2 gap-4 border-b sticky top-0 z-10 bg-white">
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
		{#each Array.from(eventsGroupedByDays.entries()) as [key, value]}
			<Day day={parseKey(key)} events={Array.from(value)} />
		{/each}
	</ul>
</div>
