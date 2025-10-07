<script lang="ts">
  import { carousels, getLogos } from '$lib/data/integrations';
</script>

<div class="mt-8">
  {#each carousels as carousel, i}
    <div
      class="overflow-x-hidden overflow-y-visible group py-4
        [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]
        [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        class="flex items-center gap-10 w-max
          {i % 2 === 0 ? 'animate-[marquee_90s_linear_infinite]' : 'animate-[marquee-reverse_90s_linear_infinite]'}">
        <div class="flex items-center gap-10">
          {#each getLogos(carousel) as item}
            <img
              class="h-8 grayscale hover:grayscale-0 transition-colors duration-150"
              src={item.src}
              alt={item.alt}
              loading="lazy"
              decoding="async"
            />
          {/each}
        </div>
        <div class="flex items-center gap-10" aria-hidden="true">
          {#each getLogos(carousel) as item}
            <img
              class="h-8 grayscale hover:grayscale-0 transition-colors duration-150"
              src={item.src}
              alt=""
              loading="lazy"
              decoding="async"
            />
          {/each}
        </div>
      </div>
    </div>
  {/each}
</div>
