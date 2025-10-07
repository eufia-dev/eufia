<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { cubicIn, cubicOut } from 'svelte/easing';

  const sequence: string[] = [
    'Factura recibida (email)',
    'Extraer y clasificar',
    'Actualizar ERP/CRM',
    'Enviar confirmación'
  ];

  let visibleCount = 0;
  let timeouts: number[] = [];

  function clearAll() {
    timeouts.forEach((id) => clearTimeout(id));
    timeouts = [];
  }

  function start() {
    clearAll();
    visibleCount = 0;

    const stepMs = 1600;
    sequence.forEach((_, idx) => {
      timeouts.push(
        window.setTimeout(() => {
          visibleCount = idx + 1;
        }, idx * stepMs)
      );
    });

    const total = sequence.length * stepMs;
    timeouts.push(
      window.setTimeout(() => {
        timeouts.push(window.setTimeout(start, 1200));
      }, total)
    );
  }

  onMount(() => {
    start();
    return () => clearAll();
  });
</script>

<div class="w-full h-full flex flex-col items-center justify-center gap-6 bg-secondary rounded-xl p-6">
  <div class="w-full max-w-md">
    <div class="space-y-2" aria-live="polite">
      {#each sequence.slice(0, visibleCount) as line, i (i)}
        <div
          in:fly={{ y: 8, duration: 220, easing: cubicIn }}
          out:fly={{ y: -8, duration: 220, easing: cubicOut }}
          class="bg-primary border border-default rounded-xl px-3 py-2 text-sm"
        >
          {line}
        </div>
      {/each}
    </div>
  </div>

  <div
    class="mx-auto mt-2 bg-primary border border-brand rounded-lg flex items-center justify-center
    animate-pulse aspect-square size-12"
  >
    <span class="material-symbols-rounded text-brand !text-4xl">bolt</span>
  </div>
</div>
