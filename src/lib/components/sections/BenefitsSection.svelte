<script lang="ts">
  import FeatureCard from '$lib/components/FeatureCard.svelte';
  
  const benefits = [
    {
      icon: 'trending_up',
      title: 'Más productividad',
      description: 'Reduce tareas manuales y libera horas al equipo.'
    },
    {
      icon: 'checklist',
      title: 'Menos errores',
      description: 'Procesos consistentes, validaciones automáticas y trazabilidad de acciones.'
    },
    {
      icon: 'schedule',
      title: '24/7 y automático',
      description: 'Atiende al instante y sin ocupar tiempo del equipo.'
    },
    {
      icon: 'handshake',
      title: 'Integrado con tus herramientas',
      description: 'Google, Microsoft, ERPs, CRMs… trabajamos cómo tú trabajas.'
    },
    {
      icon: 'lock',
      title: 'Seguridad por delante',
      description:'RGPD, privacidad de la nube y control de accesos.'
    },
    {
      icon: 'monitoring',
      title: 'Resultados medibles',
      description: 'Paneles e informes con ahorro y impacto en el negocio.'
    },
  ];
</script>

<section id="beneficios" class="max-w-7xl mx-auto px-8 md:px-16">
  <header class="text-center">
    <h2 class="text-4xl font-semibold">
      Trabaja con <span class="text-brand">beneficios</span>
    </h2>
    <p class="mt-8 text-lg mx-auto">
      Impulsados por IA, enfocados en resultados. Creamos soluciones que aportan valor y tienen retorno real.
    </p>
  </header>

  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
    {#each benefits as b}
      <FeatureCard icon={b.icon} title={b.title} description={b.description} />
    {/each}
  </div>

  <p class="mx-auto mt-10 text-lg">
    Hacemos que la inteligencia artificial trabaje por ti, para que tu equipo pueda centrarse en crear valor y crecer.
  </p>
  <a
    href="#contacto"
    aria-label="Solicitar estudio gratuito de IA en Mallorca"
    class="inline-flex items-center gap-2 rounded-lg bg-brand text-inverse px-6 py-3 mt-10
      hover:scale-102 transition-transform duration-200">
    <span>Crecer con IA</span>
    <span class="material-symbols-rounded">arrow_forward</span>
  </a>
</section>
