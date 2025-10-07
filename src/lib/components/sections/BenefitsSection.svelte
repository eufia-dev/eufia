<script lang="ts">
  import FeatureCard from '$lib/components/FeatureCard.svelte';
  
  const benefits = [
    {
      icon: 'trending_up',
      title: 'Más productividad',
      description: 'Reduce tareas manuales y tiempos de respuesta. Libera horas del equipo.'
    },
    {
      icon: 'checklist',
      title: 'Menos errores',
      description: 'Procesos consistentes, validaciones automáticas y trazabilidad de acciones.'
    },
    {
      icon: 'schedule',
      title: '24/7 y más rápido',
      description: 'Atiende clientes y ejecuta tareas en cualquier momento, sin esperas.'
    },
    {
      icon: 'handshake',
      title: 'Se integra con tus herramientas',
      description: 'Google, Microsoft, Shopify, HubSpot, ERPs, CRMs… trabajamos donde tú trabajas.'
    },
    {
      icon: 'lock',
      title: 'Seguridad y RGPD',
      description:'Datos minimizados, cifrados y con control de accesos. Alojamiento en la UE cuando se requiere.'
    },
    {
      icon: 'monitoring',
      title: 'Resultados medibles',
      description: 'Paneles e informes que muestran ahorro de tiempo y el impacto en el negocio.'
    },
  ];
</script>

<section id="beneficios" class="max-w-7xl mx-auto px-6 md:px-16 mt-20">
  <header class="text-center">
    <h3 class="text-3xl md:text-4xl font-semibold">Beneficios de trabajar con IA</h3>
    <p class="mt-4 text-lg text-secondary max-w-3xl mx-auto">
      Resultados medibles desde las primeras semanas. Proyectos rápidos, integrados con tus sistemas y con control total.
    </p>
    <p class="mt-4 mx-auto text-lg text-secondary">Impulsadas por IA, enfocadas en resultados.</p>
  </header>

  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
    {#each benefits as b}
      <FeatureCard icon={b.icon} title={b.title} description={b.description} />
    {/each}
  </div>

  <div class="mt-8 text-center">
    <a href="#contacto" class="inline-flex items-center gap-2 rounded-xl bg-brand text-white px-5 py-3 font-medium hover:opacity-90 transition-opacity">
      <span class="material-symbols-rounded align-middle">rocket_launch</span>
      Empezar con un piloto
    </a>
  </div>
</section>
