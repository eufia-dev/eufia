<script lang="ts">
  import type { FaqItem } from '$lib/data/faqs';
  export let items: FaqItem[] = [];

  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a }
    }))
  };
</script>

<svelte:head>
  <script type="application/ld+json">{JSON.stringify(data)}</script>
</svelte:head>


