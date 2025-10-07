<script lang="ts">
  import FaqAccordion from '$lib/components/FaqAccordion.svelte';
  import FaqJsonLd from '$lib/seo/FaqJsonLd.svelte';
  import { faqs } from '$lib/data/faqs';
</script>

<FaqJsonLd items={faqs} />

<section class="max-w-7xl mx-auto px-12 mt-16 mb-20">
  <header class="text-center mb-10">
    <h2 class="text-3xl md:text-4xl font-semibold">Preguntas frecuentes</h2>
  </header>
  <FaqAccordion items={faqs} />
</section>
