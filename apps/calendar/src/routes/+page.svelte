<script lang="ts">
	import DatePicker from '$lib/components/DatePicker/DatePicker.svelte';
</script>

<a href="/features" class="text-blue-500 underline p-8">Features</a>
<input type="date" name="" id="" />
<main class="p-8 flex items-start gap-8">
	<div class="w-96 shadow-md rounded-lg p-2">
		<DatePicker
			on:pick={({ detail }) => {
				console.log(detail);
			}}
		/>
	</div>
</main>
