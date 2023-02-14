<script lang="ts">
	import DatePicker from '$lib/components/DatePicker/DatePicker.svelte';
</script>

<main class="p-4 flex flex-col gap-4">
	<div>
		<h1 class="text-xl text-blue-500 font-semibold underline">Stories</h1>
		<a href="/" class="text-blue-500 underline p-8">Back Home</a>
	</div>
	<ul class="marker:text-sky-400 list-disc pl-5 space-y-3">
		<li>Date Picker</li>

		<div class="w-96 shadow-md rounded-lg">
			<DatePicker
				on:pick={({ detail }) => {
					console.log(detail);
				}}
			/>
		</div>
	</ul>
</main>
