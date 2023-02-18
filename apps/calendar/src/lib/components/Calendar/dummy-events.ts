import { addMinutes, parse } from 'date-fns';
import raw from './MOCK_DATA.json';

// const refined = raw.map(({ id, startAt, startAtTime, durationInMinutes, title }) => {
// 	const startAtDate = parse(startAt + ' ' + startAtTime, 'dd-MM-yyyy h:mm a', new Date());
// 	return { id, title, startAt: startAtDate, endAt: addMinutes(startAtDate, durationInMinutes) };
// });

const refined = raw.map(({ id, title, startAt, endAt }) => ({
	id: id.toString(),
	title,
	startAt: new Date(startAt),
	endAt: new Date(endAt)
}));

console.log(JSON.stringify(refined));

export interface ICalendarEvent {
	id: string;
	title: string;
	startAt: Date;
	endAt: Date;
}

export const events = refined;

// export const events: ICalendarEvent[] = [
// 	{
// 		id: '1',
// 		title: 'L1',
// 		startAt: new Date(2023, 1, 14, 6),
// 		endAt: new Date(2023, 1, 14, 8)
// 	},
// 	{
// 		id: '2',
// 		title: 'L2',
// 		startAt: new Date(2023, 1, 14, 10),
// 		endAt: new Date(2023, 1, 14, 16)
// 	},
// 	{
// 		id: '3',
// 		title: 'L3',
// 		startAt: new Date(2023, 1, 14, 14),
// 		endAt: new Date(2023, 1, 14, 17, 30)
// 	},
// 	{
// 		id: '4',
// 		title: 'L4',
// 		startAt: new Date(2023, 1, 14, 20),
// 		endAt: new Date(2023, 1, 15, 2)
// 	},
// 	{
// 		id: '5',
// 		title: 'L5',
// 		startAt: new Date(2023, 1, 15, 6),
// 		endAt: new Date(2023, 1, 15, 18)
// 	},
// 	{
// 		id: '6',
// 		title: 'L6',
// 		startAt: new Date(2023, 1, 16, 9),
// 		endAt: new Date(2023, 1, 16, 17)
// 	},
// 	{
// 		id: '7',
// 		title: 'L7',
// 		startAt: new Date(2023, 1, 17, 12),
// 		endAt: new Date(2023, 1, 17, 20)
// 	},
// 	{
// 		id: '8',
// 		title: 'L8',
// 		startAt: new Date(2023, 1, 18, 7),
// 		endAt: new Date(2023, 1, 18, 13)
// 	},
// 	{
// 		id: '8.1',
// 		title: 'L8',
// 		startAt: new Date(2023, 1, 18, 9),
// 		endAt: new Date(2023, 1, 18, 19)
// 	},
// 	{
// 		id: '8.2',
// 		title: 'L8',
// 		startAt: new Date(2023, 1, 18, 20),
// 		endAt: new Date(2023, 1, 18, 23)
// 	},
// 	{
// 		id: '9',
// 		title: 'L9',
// 		startAt: new Date(2023, 1, 19, 6),
// 		endAt: new Date(2023, 1, 19, 12)
// 	},
// 	{
// 		id: '10',
// 		title: 'L9',
// 		startAt: new Date(2023, 1, 20, 6),
// 		endAt: new Date(2023, 1, 20, 12)
// 	},
// 	{
// 		id: '11',
// 		title: 'L9',
// 		startAt: new Date(2023, 1, 21, 6),
// 		endAt: new Date(2023, 1, 21, 12)
// 	},
// 	{
// 		id: '12',
// 		title: 'L9',
// 		startAt: new Date(2023, 1, 22, 6),
// 		endAt: new Date(2023, 1, 22, 12)
// 	},
// 	{
// 		id: '13',
// 		title: 'L9',
// 		startAt: new Date(2023, 1, 23, 6),
// 		endAt: new Date(2023, 1, 23, 12)
// 	},
// 	{
// 		id: '14',
// 		title: 'L9',
// 		startAt: new Date(2023, 1, 24, 6),
// 		endAt: new Date(2023, 1, 24, 12)
// 	},
// 	{
// 		id: '14',
// 		title: 'L9',
// 		startAt: new Date(2023, 1, 25, 8),
// 		endAt: new Date(2023, 1, 25, 12)
// 	}
// ];
