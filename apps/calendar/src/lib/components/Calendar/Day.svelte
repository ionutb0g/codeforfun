<script lang="ts">
	import { range } from '$lib/utils/range';
	import {
		differenceInCalendarDays,
		differenceInMilliseconds,
		endOfDay,
		format,
		startOfDay
	} from 'date-fns';
	import type { ICalendarEvent } from './dummy-events';

	export let day: Date;
	export let events: ICalendarEvent[];

	const eventsLayout = new WeakMap<ICalendarEvent, { widths: number[]; offsets: number[] }>();

	function getWidths({ startAt, endAt }: ICalendarEvent) {
		const daysCount = differenceInCalendarDays(endAt, startAt) + 1;
		const SCALE_FACTOR = 100 / (1000 * 60 * 60 * 24);
		if (daysCount === 1) {
			return [differenceInMilliseconds(endAt, startAt) * SCALE_FACTOR];
		}

		const first = differenceInMilliseconds(endOfDay(startAt), startAt) * SCALE_FACTOR;
		const last = differenceInMilliseconds(endAt, startOfDay(endAt)) * SCALE_FACTOR;

		return [first, ...Array(daysCount - 2).fill(100), last];
	}

	function getOffsets({ startAt, endAt }: ICalendarEvent) {
		const daysCount = differenceInCalendarDays(endAt, startAt) + 1;
		const SCALE_FACTOR = 100 / (1000 * 60 * 60 * 24);
		const firstOffset = differenceInMilliseconds(startAt, startOfDay(startAt)) * SCALE_FACTOR;
		if (daysCount === 1) {
			return [firstOffset];
		}

		return [firstOffset, ...Array(daysCount - 1).fill(0)];
	}

	$: for (const event of events) {
		eventsLayout.set(event, {
			widths: getWidths(event),
			offsets: getOffsets(event)
		});
	}
</script>

<li class="px-4 flex gap-4 relative">
	<div class="w-24 py-2 flex flex-col items-center justify-center">
		<div class="text-2xl font-semibold">{format(day, 'dd')}</div>
		<div class="text-xs text-slate-500">{format(day, 'EEEE')}</div>
	</div>
	<div class="flex-1 relative">
		<div
			class="absolute -z-10 top-0 left-0 w-full h-full grid grid-cols-[repeat(24,_minmax(0,_1fr))] divide-x divide-dashed border-x border-dashed pointer-events-none"
		>
			{#each range(24) as _}
				<div class="h-full" />
			{/each}
		</div>
		<div class="h-full flex flex-col justify-center gap-1 py-2">
			{#each events as event (event.id)}
				<div
					class="items-center px-2 py-1 text-xs border bg-sky-300 flex gap-2"
					class:rounded-l-full={differenceInCalendarDays(event.startAt, day) === 0}
					class:rounded-r-full={differenceInCalendarDays(event.endAt, day) === 0}
					style:width={eventsLayout
						.get(event)
						?.widths.at(differenceInCalendarDays(event.startAt, day)) + '%'}
					style:margin-left={eventsLayout
						.get(event)
						?.offsets.at(differenceInCalendarDays(event.startAt, day)) + '%'}
				>
					<!-- <div class="bg-white w-7 h-7 rounded-full" /> -->
					<span class="text-xs font-bold truncate whitespace-nowrap">{event.title}</span>
				</div>
			{/each}
		</div>
	</div>
</li>
