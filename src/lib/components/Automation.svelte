<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { cubicOut, cubicInOut } from 'svelte/easing';


  let step = 0;

  function startAnimation() {
    step = 0;
    
    setTimeout(() => {
      step = 1;
    }, 2000);
    
    setTimeout(() => {
      step = 2;
    }, 4000);
    
    setTimeout(() => {
      step = 3;
    }, 6000);
    
    setTimeout(() => {
      step = 4;
    }, 8000);
    
    setTimeout(() => {
      step = 0;
      setTimeout(() => startAnimation(), 1500);
    }, 10000);
  }
  
  onMount(() => {
    startAnimation();
  });
</script>

<div class="w-full h-full bg-secondary rounded-xl p-6">
  <div class="flex items-center justify-center gap-2">
    <span class="material-symbols-rounded text-brand !text-3xl animate-pulse">automation</span>
    Realizar informe mensual
  </div>

  <div class="space-y-2 mt-4" aria-live="polite">
    {#if step >= 1}
      <div
        class="bg-primary rounded-xl px-3 py-2 flex items-center justify-center gap-4"
        in:fly={{ x: -60, duration: 500, easing: cubicOut, opacity: 0.2 }}
        out:fly={{ x: 60, duration: 400, easing: cubicInOut, opacity: 0.2 }}
      >
        <img src="/integrations/sage.png" alt="Sage" class="h-5" />
        Extraer y clasificar datos bancarios
      </div>
    {/if}
    {#if step >= 2}
      <div
        class="bg-primary rounded-xl px-3 py-2 flex items-center justify-center gap-4"
        in:fly={{ x: 60, duration: 500, easing: cubicOut, opacity: 0.2 }}
        out:fly={{ x: -60, duration: 400, easing: cubicInOut, opacity: 0.2 }}
      >
        <img src="/integrations/caixabank.png" alt="CaixaBank" class="h-5" />
        Completar conciliación bancaria
      </div>
    {/if}
    {#if step >= 3}
      <div
        class="bg-primary rounded-xl px-3 py-2 flex items-center justify-center gap-4"
        in:fly={{ x: -60, duration: 500, easing: cubicOut, opacity: 0.2 }}
        out:fly={{ x: 60, duration: 400, easing: cubicInOut, opacity: 0.2 }}
      >
        <img src="/integrations/chatgpt.png" alt="ChatGPT" class="h-5" />
        Generar informe automático
      </div>
    {/if}
    {#if step >= 4}
      <div
        class="bg-primary rounded-xl px-3 py-2 flex items-center justify-center gap-4"
        in:fly={{ x: 60, duration: 500, easing: cubicOut, opacity: 0.2 }}
        out:fly={{ x: -60, duration: 400, easing: cubicInOut, opacity: 0.2 }}
      >
        <img src="/integrations/power_bi.png" alt="Power BI" class="h-5" />
        Compartir con dirección
      </div>
    {/if}
  </div>
</div>
