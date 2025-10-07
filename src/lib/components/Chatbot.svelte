<script lang="ts">
  import { onMount } from 'svelte';
  import { tick } from 'svelte';
  import { fly } from 'svelte/transition';
  import { cubicIn, cubicOut } from 'svelte/easing';
  import { flip } from 'svelte/animate';

  type Msg = { who: 'user' | 'bot'; text: string };

  const examples: Msg[][] = [
    [
      { who: 'user', text: 'Quiero reservar una cita con Marta para mañana a las 10' },
      { who: 'bot', text: 'Veo que a las 10:00 ya tienes una reunión programada. ¿Qué tal si la ponemos a las 10:30?' },
      { who: 'user', text: 'Sí, perfecto.' },
      { who: 'bot', text: 'Listo, ya está agendada para mañana a las 10:30. Te enviare un recordatorio el dia antes.' }
    ],
    [
      { who: 'user', text: '¿Puedo ver el contrato de las automatizaciones que firmamos en mayo?' },
      { who: 'bot', text: "He encontrado el archivo 'Contrato Eufia.pdf' en la carpeta Compras/Contratos. ¿Te lo abro?" },
      { who: 'user', text: '¿Tiene renovación automática? Hazme un resumen y compártelo con Legal.' },
      { who: 'bot', text: 'Sí, tiene renovación automática anual con un preaviso de 30 días. Ahora se lo envío a Rafa, aquí tienes el resumen...' }
    ],
    [
      { who: 'user', text: 'Hola, mi pedido llegó incompleto.' },
      { who: 'bot', text: 'Hola, siento mucho que haya pasado esto. ¿Podrías decirme qué artículo te falta y el número de pedido?' },
      { who: 'user', text: 'El producto viene abierto y sin cargador. El pedido es el 8243.' },
      { who: 'bot', text: '¿Prefieres una devolución o que enviemos uno nuevo?' },
      { who: 'user', text: 'Uno nuevo' },
      { who: 'bot', text: 'Perfecto, ya está gestionado. Te enviamos uno nuevo, el propio repartidor recogerá el producto dañado.' }
    ]
  ];

  let visibleCount = 0;
  let timeouts: number[] = [];
  let currentExampleIndex = 0;
  let startIndex = 0;
  let containerEl: HTMLDivElement;

  async function ensureFits() {
    if (!containerEl) return;
    await tick();
    // Keep view pinned to bottom like a chat
    containerEl.scrollTop = containerEl.scrollHeight;

    let iterations = 0;
    const maxIterations = 50;
    while (
      containerEl.scrollHeight > containerEl.clientHeight &&
      startIndex < visibleCount - 1 &&
      iterations < maxIterations
    ) {
      startIndex += 1; // drop oldest message
      iterations += 1;
      await tick();
      containerEl.scrollTop = containerEl.scrollHeight;
    }
  }

  function clearAll() {
    timeouts.forEach((id) => clearTimeout(id));
    timeouts = [];
  }

  function startExample(index: number) {
    clearAll();
    currentExampleIndex = index;
    visibleCount = 0;
    startIndex = 0;

    const stepMs = 2000;
    const seq = examples[currentExampleIndex];
    seq.forEach((_, idx) => {
      timeouts.push(
        window.setTimeout(async () => {
          visibleCount = idx + 1;
          await ensureFits();
        }, idx * stepMs)
      );
    });

    const total = seq.length * stepMs;
    timeouts.push(
      window.setTimeout(() => {
        const next = (currentExampleIndex + 1) % examples.length;
        timeouts.push(window.setTimeout(() => startExample(next), 1000));
      }, total)
    );
  }

  onMount(() => {
    startExample(0);
    return () => clearAll();
  });
</script>

<div
  bind:this={containerEl}
  class="w-full h-full overflow-hidden flex flex-col justify-end gap-2 bg-secondary rounded-xl p-6 space-y-2"
  aria-live="polite"
>
  {#each examples[currentExampleIndex].slice(startIndex, visibleCount) as m, i (startIndex + i)}
    <div
      in:fly={{ y: 12, duration: 220, easing: cubicIn }}
      out:fly={{ y: -12, duration: 220, easing: cubicOut }}
      animate:flip={{ duration: 200, easing: cubicOut }}
      class="text-sm {m.who === 'user' ? 'p-3 self-end bg-primary rounded-xl' : 'self-start'}"
    >
      {m.text}
    </div>
  {/each}
</div>
