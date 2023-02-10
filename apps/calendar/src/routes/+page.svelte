<script lang="ts">
	import Calendar from '$lib/Calendar/Calendar.svelte';
</script>

<h1>Welcome to Calendar</h1>

<a href="/features" class="text-blue-500 underline">Features</a>

<input type="date" class="w-64 h-12 bg-red-50" />

<main class="p-8">
	<div class="w-96 shadow-md rounded-lg p-2">
		<Calendar />
	</div>
</main>
