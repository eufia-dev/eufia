<script lang="ts">
  import { onMount } from 'svelte';
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
      links: { enable: true, color: '#F05F00', opacity: 0.5, distance: 180, width: 1.2 },
      move: { enable: true, speed: 0.5, direction: 'none', outModes: { default: 'out' } },
      opacity: { value: 0.7 },
      size: { value: { min: 2, max: 4 } },
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
  <div class="-mb-4 md:-mb-8">    
    <div class="absolute inset-0" aria-hidden="true">
      {#if showParticles}
        <Particles id="hero-particles" class="w-full h-full" options={particlesOptions} />
      {/if}
    </div>
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 bottom-0 h-14
        bg-gradient-to-b from-transparent via-stone-50/70 to-stone-50 z-5"
    ></div>
    <div class="relative z-10 max-w-7xl mx-auto p-8 md:p-16">
      <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div class="flex-1 text-center lg:text-left">
          <p class="text-sm font-medium text-brand mb-3 tracking-wide uppercase mt-8">
            ✓ Cumple con el Real Decreto
          </p>
          <h1 class="text-4xl md:text-5xl font-semibold leading-tight">
            Control horario <span class="text-brand">sin complicaciones</span>
          </h1>
          <p class="text-xl text-secondary mt-6">
            Software de fichaje digital para PYMEs en España. 
            <span class="font-semibold text-primary">Listo en 2 minutos</span>, 
            sin hardware, sin instalaciones.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
            <a
              href="https://control-horario.eufia.eu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Comenzar prueba gratuita"
              class="inline-flex items-center justify-center gap-2 rounded-lg bg-brand text-inverse px-6 py-3
                hover:scale-102 transition-transform duration-200 font-medium">
              <span>Prueba gratis 1 mes</span>
              <span class="material-symbols-rounded">arrow_forward</span>
            </a>
            <a
              href="#contacto"
              aria-label="Solicitar una demostración"
              class="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-brand text-brand px-6 py-3
                hover:bg-brand hover:text-inverse transition-all duration-200 font-medium">
              <span>Solicitar demo</span>
              <span class="material-symbols-rounded">calendar_month</span>
            </a>
          </div>
          <p class="text-sm text-secondary mt-4">
            Sin tarjeta de crédito. Sin compromiso.
          </p>
        </div>
        <div class="flex-shrink-0 w-full lg:w-auto max-w-md lg:max-w-none">
          <img 
            src="/screenshots/main.png" 
            alt="EUFIA Control Horario - Panel de fichaje" 
            class="w-full lg:w-[400px] xl:w-[480px] rounded-xl shadow-2xl border border-stone-200"
          />
        </div>
      </div>
    </div>
  </div>
</section>
