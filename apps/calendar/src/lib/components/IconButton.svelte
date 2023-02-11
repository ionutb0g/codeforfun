<script lang="ts">
	import Pressable, { defaultPressLevel, type PressLevel } from './Pressable.svelte';

	export let pressLevel: PressLevel = defaultPressLevel;
</script>

<Pressable {pressLevel} on:click>
	<div class="w-10 h-10 p-2 rounded-full group-hover/press:bg-blue-50 transition-colors">
		<slot />
	</div>
</Pressable>
