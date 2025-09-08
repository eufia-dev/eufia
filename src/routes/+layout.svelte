<script>
  import { webVitals } from '$lib/vitals';
  import { browser } from '$app/environment';
  import '../app.css';

  export let url;
  let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

  $: if (browser && analyticsId) {
    webVitals({
      path: url.pathname,
      params: {},
      analyticsId
    });
  }
</script>

<main class="p-4 min-h-screen text-primary bg-gradient-to-br from-blue-50 via-orange-50 to-blue-100">
  <slot />
</main>

