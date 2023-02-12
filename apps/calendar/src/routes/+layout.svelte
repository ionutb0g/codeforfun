<script context="module" lang="ts">
	import { setDefaultOptions } from 'date-fns';
	import ro from 'date-fns/locale/ro';
	// import en from 'date-fns/locale/en-US';
	setDefaultOptions({ locale: ro, weekStartsOn: 1 });
</script>

<script lang="ts">
	import '../app.css';
</script>

<slot />
