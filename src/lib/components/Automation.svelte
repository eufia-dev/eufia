<script lang="ts">
  import { onMount } from 'svelte';

  let step = 0;

  // Returns the hidden X offset so odd items enter from the left and even from the right
  function getHiddenXOffset(index: number): number {
    return index % 2 === 1 ? -60 : 60;
  }

  // Computes inline styles so items are pre-mounted but animate in/out via CSS transitions
  function getItemStyle(index: number): string {
    const isVisible = step >= index;
    const xOffset = isVisible ? 0 : getHiddenXOffset(index);
    // Match previous timings approximately (in: 500ms cubicOut, out: 400ms cubicInOut)
    const durationMs = isVisible ? 500 : 400;
    const easing = isVisible
      ? 'cubic-bezier(0.215, 0.61, 0.355, 1)'
      : 'cubic-bezier(0.645, 0.045, 0.355, 1)';

    return `opacity: ${isVisible ? 1 : 0}; transform: translateX(${xOffset}px); transition: transform ${durationMs}ms ${easing}, opacity ${durationMs}ms ${easing};`;
  }

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

<div class="w-full h-full bg-secondary rounded-xl p-6 text-sm sm:text-base">
  <div class="flex items-center justify-center gap-2">
    <span class="material-symbols-rounded text-brand !text-3xl animate-pulse">automation</span>
    Realizar informe mensual
  </div>

  <div class="space-y-2 mt-4" aria-live="polite">
    <div
      class="bg-primary rounded-xl px-3 py-2 flex items-center justify-center gap-4"
      style={getItemStyle(1)}
      aria-hidden={step < 1}
    >
      <img src="/integrations/sage.png" alt="Sage" class="h-5" />
      Extraer y clasificar datos bancarios
    </div>
    <div
      class="bg-primary rounded-xl px-3 py-2 flex items-center justify-center gap-4"
      style={getItemStyle(2)}
      aria-hidden={step < 2}
    >
      <img src="/integrations/caixabank.png" alt="CaixaBank" class="h-5" />
      Completar conciliación bancaria
    </div>
    <div
      class="bg-primary rounded-xl px-3 py-2 flex items-center justify-center gap-4"
      style={getItemStyle(3)}
      aria-hidden={step < 3}
    >
      <img src="/integrations/chatgpt.png" alt="ChatGPT" class="h-5" />
      Generar informe automático
    </div>
    <div
      class="bg-primary rounded-xl px-3 py-2 flex items-center justify-center gap-4"
      style={getItemStyle(4)}
      aria-hidden={step < 4}
    >
      <img src="/integrations/power_bi.png" alt="Power BI" class="h-5" />
      Compartir con dirección
    </div>
  </div>
</div>
