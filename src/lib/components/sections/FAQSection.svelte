<script lang="ts">
  import FaqJsonLd from '$lib/seo/FaqJsonLd.svelte';
  import { faqs } from '$lib/data/faqs';
</script>

<FaqJsonLd items={faqs} />

<section class="max-w-7xl mx-auto px-8 md:px-16">
  <header class="text-center mb-10">
    <h2 class="text-3xl font-semibold">Preguntas frecuentes</h2>
  </header>
  <div class="mx-auto rounded-2xl overflow-hidden">
    <div class="divide-y divide-default">
      {#each faqs as faq}
        <details class="group p-6">
          <summary class="flex items-center justify-between cursor-pointer list-none">
            <span class="text-base md:text-lg font-medium text-primary">{faq.q}</span>
            <span
              class="material-symbols-rounded transition-all group-hover:scale-110 duration-300 group-open:rotate-180"
            >
              expand_more
            </span>
          </summary>
          <div class="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr]">
            <div class="overflow-hidden">
              <p class="mt-3">{@html faq.a}</p>
            </div>
          </div>
        </details>
      {/each}
    </div>
  </div>
</section>
