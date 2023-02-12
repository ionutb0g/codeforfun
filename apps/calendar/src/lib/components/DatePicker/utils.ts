import {
	getDay,
	getDaysInMonth,
	getWeeksInMonth,
	startOfMonth,
	previousMonday,
	getDate,
	addDays
} from 'date-fns';

export const DAYS_IN_WEEK = 7;

export interface DayOfMonth {
	day: number;
	isDecorative?: boolean;
}

export function getDaysOfMonth(date: Date) {
	const length = getWeeksInMonth(date) * DAYS_IN_WEEK;
	const daysArray: Array<DayOfMonth> = [];

	const firstOfMonth = startOfMonth(date);
	const firstOfMonthDayIndex = (getDay(firstOfMonth) + 6) % 7;

	for (let i = 0; i < firstOfMonthDayIndex; i++) {
		const day = getDate(addDays(previousMonday(firstOfMonth), i));
		daysArray.push({ day, isDecorative: true });
	}

	const daysInMonth = getDaysInMonth(date);
	for (let i = 1; i <= daysInMonth; i++) {
		daysArray.push({ day: i });
	}

	const remainingDaysCount = length - daysArray.length;
	for (let i = 1; i <= remainingDaysCount; i++) {
		daysArray.push({ day: i, isDecorative: true });
	}

	return daysArray;
}

export function getDayInMonth(day: number, date: Date) {
	return addDays(startOfMonth(date), day - 1);
}
