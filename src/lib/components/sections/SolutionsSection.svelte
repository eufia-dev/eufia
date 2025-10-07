<script lang="ts">
  import IntegrationsMarquee from '$lib/components/IntegrationsMarquee.svelte';
  import FeatureCard from '$lib/components/FeatureCard.svelte';
  
  const solutions = [
    {
      href: '#agentes-ia',
      icon: 'smart_toy',
      title: 'Agentes a medida',
      description: 'Asistentes que trabajan con tus herramientas.'
    },
    {
      href: '#chatbots',
      icon: 'chat_bubble',
      title: 'Chatbots inteligentes',
      description: 'Responde 24/7 con tu propio conocimiento.'
    },
    {
      href: '#automatizaciones',
      icon: 'settings_suggest',
      title: 'Automatización de procesos',
      description: 'Facturas, documentos, correos… sin esfuerzo.'
    }
  ];
  
</script>

<section id="soluciones" class="max-w-7xl mx-auto mt-8 px-8 md:px-16">
  <header class="text-center">
    <h2 class="text-4xl font-semibold">
      IA práctica para <span class="text-brand">empresas</span>
    </h2>
    <h3 class="mt-8 mx-auto text-lg">
      Soluciones que se adaptan a tu negocio. Tecnología líder y fácil de usar que mejora tu productividad cada día.
    </h3>
  </header>

  <div class="grid gap-6 md:grid-cols-3 mt-10">
    {#each solutions as s}
      <FeatureCard href={s.href} icon={s.icon} title={s.title} description={s.description} />
    {/each}
  </div>

  <div class="mt-12 text-center">
    <h3 class="text-2xl font-semibold">
      Integración con tus herramientas de trabajo
    </h3>
    <p class="text-lg mx-auto mt-4">
      Tus procesos de siempre potenciados con Inteligencia Artificial. Para que trabajes como siempre, pero más rápido.
    </p>
  </div>

  <IntegrationsMarquee />
</section>
