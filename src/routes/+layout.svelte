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

<svelte:head>
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Eufia"/>
  <meta property="og:title" content="Consultoría de Inteligencia Artificial en Mallorca | Eufia" />
  <meta property="og:description" content="Eufia, consultoría de Inteligencia Artificial en Mallorca" />
  <meta property="og:url" content="https://www.eufia.eu/" />
  <meta property="og:image" content="https://www.eufia.eu/eufia_light_rectangular.png" />
  <meta property="og:image:width" content="1024" />
  <meta property="og:image:height" content="512" />

  <link rel="canonical" href="https://www.eufia.eu/" />
</svelte:head>

<main class="p-4 min-h-screen text-primary bg-gradient-to-br from-blue-50 via-orange-50 to-blue-100">
  <slot />
</main>

