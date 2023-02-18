export class Store<T> {
	constructor(readonly value: T) {}

	apply<U extends unknown[]>(func: (...args: U) => Store<T>, ...args: U) {
		return func.call(this, ...args);
	}

	get<U extends unknown[], R>(func: (...args: U) => R, ...args: U) {
		return func.call(this, ...args);
	}

	do<U extends unknown[]>(func: (...args: U) => void, ...args: U) {
		return func.call(this, ...args);
	}
}

export function add(this: Store<number>, amount: number, message?: string) {
	if (message) console.log(message);
	return new Store(this.value + amount);
}

export function concat(this: Store<string>, str: string) {
	return new Store(this.value + str);
}

export function count(this: Store<string>) {
	return this.value.length;
}
