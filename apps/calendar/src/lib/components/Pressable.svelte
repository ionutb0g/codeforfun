<script context="module" lang="ts">
	export type PressLevel = 'low' | 'medium' | 'high';
	export const defaultPressLevel: PressLevel = 'medium';
</script>

<script lang="ts">
	export let pressLevel: PressLevel = defaultPressLevel;
	export let disabled = false;

	export let expandH = false;
	export let expandV = false;
</script>

<button {disabled} on:click class="block group/press" class:w-full={expandH} class:h-full={expandV}>
	<div
		class="transition-transform"
		class:group-active:scale-95={pressLevel === 'low'}
		class:group-active:scale-90={pressLevel === 'medium'}
		class:group-active:scale-75={pressLevel === 'high'}
	>
		<slot />
	</div>
</button>
