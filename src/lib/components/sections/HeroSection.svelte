<script lang="ts">
  import { tick, onMount } from 'svelte';
  import Particles, { particlesInit } from '@tsparticles/svelte';
  import { loadSlim } from '@tsparticles/slim';

  let showParticles = false;

  onMount(() => {
    const ric = (window as any).requestIdleCallback;
    if (ric) {
      ric(() => {
        showParticles = true;
      });
    } else {
      setTimeout(() => {
        showParticles = true;
      }, 300);
    }
  });

  particlesInit(async (engine) => {
    await loadSlim(engine);
  });

  const particlesOptions: any = {
    fullScreen: { enable: false },
    background: { color: { value: 'transparent' } },
    particles: {
      number: { value: 80, density: { enable: true, area: 800 } },
      color: { value: ['#F05F00', '#FF7A1A', '#FF6B00'] },
      links: { enable: true, color: '#F05F00', opacity: 0.6, distance: 200, width: 1.5 },
      move: { enable: true, speed: 0.6, direction: 'none', outModes: { default: 'out' } },
      opacity: { value: 0.8 },
      size: { value: { min: 2.5, max: 5 } },
      shape: { type: 'circle' }
    },
    interactivity: {
      events: { onHover: { enable: false }, onClick: { enable: true, mode: 'push' }, resize: true },
      modes: { push: { quantity: 1 } }
    },
    detectRetina: true
  };
</script>

<section
  class="relative bg-default overflow-hidden"
>
  <div class="absolute inset-0" aria-hidden="true">
    {#if showParticles}
      <Particles id="hero-particles" class="w-full h-full" options={particlesOptions} />
    {/if}
  </div>
  <div
    aria-hidden="true"
    class="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-b from-transparent via-stone-50/70 to-stone-50 z-5"
  ></div>
  <div class="relative z-10 max-w-7xl mx-auto p-8 md:p-16">
    <div class="flex flex-col lg:flex-row items-center gap-6">
      <div class="flex-1 text-center lg:text-left">
        <h1 class="sr-only">Consultoría de Inteligencia Artificial en Mallorca y Baleares</h1>
        <h2 class="text-4xl font-semibold">
          Impulsamos tu negocio con
          <span class="text-brand">Inteligencia Artificial</span>
        </h2>
        <h3 class="text-xl font-medium italic mt-10 lg:mt-14">
          ¿Quieres aprovechar la IA?
          <br/>
          ¿No tienes claro cómo puede mejorar tu negocio?
        </h3>
      </div>
      <div class="flex-shrink-0">
        <img src="/eufia_transparent.svg" alt="Eufia - Consultoría de IA" class="w-100 lg:w-120 xl:w-160" />
      </div>
    </div>
    <p class="text-xl mt-6 lg:mt-8">
      Somos EUFIA, consultoría de IA con sede en
      <span class="font-semibold">Mallorca</span>.
      Ayudamos a 
      <span class="font-semibold">PYMEs en toda España</span>
      a automatizar procesos, reducir costes y ganar ventaja competitiva con agentes, chatbots y automatizaciones.
    </p>
    <div class="mt-12">
      <a
        href="#contacto"
        aria-label="Ir al formulario de contacto"
        class="inline-flex items-center gap-2 rounded-md border bg-brand text-inverse px-6 py-3
          hover:border-brand hover:translate-y-[-2px] hover:shadow-lg transition-all duration-200">
        <span>Descubre el potencial de la IA</span>
        <span class="material-symbols-rounded">arrow_forward</span>
      </a>
    </div>
  </div>
</section>


