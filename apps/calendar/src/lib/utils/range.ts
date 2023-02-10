export function range(length: number) {
	return Array(length)
		.fill(null)
		.map((_, i) => i);
}

export function reversedRange(length: number) {
	return Array(length)
		.fill(null)
		.map((_, i) => i)
		.reverse();
}
