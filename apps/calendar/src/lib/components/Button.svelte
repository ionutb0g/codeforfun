<script lang="ts">
	import Pressable, { defaultPressLevel, type PressLevel } from './Pressable.svelte';

	export let pressLevel: PressLevel = defaultPressLevel;
</script>

<Pressable {pressLevel} on:click>
	<div class="px-4 py-2 rounded-lg group-hover/press:bg-blue-50 transition-colors">
		<span class="text-sm font-semibold"><slot /></span>
	</div>
</Pressable>
