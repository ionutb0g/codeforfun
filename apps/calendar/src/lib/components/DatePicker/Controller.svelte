<script lang="ts">
	import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons';
	import { format } from 'date-fns';
	import { fly } from 'svelte/transition';

	import Button from '../Button.svelte';
	import IconButton from '../IconButton.svelte';
	import { createEventDispatcher } from 'svelte';

	export let currentMonth: Date;
	const dispatch = createEventDispatcher<{
		ok: void;
		cancel: void;
		toggleMonthSelector: void;
		nextMonth: void;
		previousMonth: void;
	}>();

	$: currentDate = format(currentMonth, 'MMMM yyyy');
</script>

<div class="divide-y">
	<header class="px-4 py-2 flex justify-between items-center">
		<IconButton on:click={() => dispatch('previousMonth')}>
			<ChevronLeftIcon size="24" />
		</IconButton>

		<div class="flex-1 whitespace-nowrap overflow-hidden">
			{#key currentDate}
				<div class="w-full text-center inline-block">
					<button
						in:fly={{ duration: 150, delay: 150 }}
						out:fly={{ duration: 150 }}
						on:click={() => dispatch('toggleMonthSelector')}
						class="pressable-sm px-2 py-1"
					>
						<span class="text-xl font-semibold capitalize">{currentDate}</span>
					</button>
				</div>
			{/key}
		</div>
		<IconButton on:click={() => dispatch('nextMonth')}>
			<ChevronRightIcon size="24" />
		</IconButton>
	</header>

	<slot />

	<footer class="flex justify-end gap-2 px-4 py-2">
		<Button on:click={() => dispatch('cancel')}>Cancel</Button>
		<Button on:click={() => dispatch('ok')}>Ok</Button>
	</footer>
</div>
