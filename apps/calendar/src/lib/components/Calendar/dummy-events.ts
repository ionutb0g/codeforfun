import { startOfDay } from 'date-fns';

export class CalendarEvent {
	constructor(readonly title: string, readonly interval: [Date, Date], readonly tags: string[]) {}
}

export class CalendarDay {
	readonly day: Date;
	readonly events: CalendarEvent[];

	constructor(day: Date) {
		this.day = startOfDay(day);
	}

	addEvent(interval: [[Date], [Date]]) {}
}

export const events = [
	{
		day: new Date(2023, 1, 14),
		marks: [
			{
				title: 'Lucrare #1',
				interval: [new Date(2023, 1, 14, 6), new Date(2023, 1, 14, 12)],
				tags: ['tag1', 'tag2']
			},
			{
				title: 'Lucrare #3',
				interval: [new Date(2023, 1, 14, 14), new Date(2023, 1, 14, 16)],
				tags: ['tag2']
			},
			{
				title: 'Lucrare #2',
				interval: [new Date(2023, 1, 14, 10), new Date(2023, 1, 14, 14)],
				tags: ['tag3, tag1']
			}
		]
	}
];
