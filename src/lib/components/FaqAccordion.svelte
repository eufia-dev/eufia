<script lang="ts">
  import type { FaqItem } from '$lib/data/faqs';
  export let items: FaqItem[] = [];
</script>

<div class="mx-auto rounded-2xl overflow-hidden">
  <div class="divide-y divide-default">
    {#each items as item}
      <details class="group p-6">
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <span class="text-base md:text-lg font-medium text-primary">{item.q}</span>
          <span class="material-symbols-rounded text-secondary transition-transform duration-300 group-open:rotate-180">expand_more</span>
        </summary>
        <div class="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr]">
          <div class="overflow-hidden">
            <p class="mt-3 text-secondary">{@html item.a}</p>
          </div>
        </div>
      </details>
    {/each}
  </div>
  </div>


