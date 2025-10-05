<script lang="ts">
  import IntegrationsMarquee from '$lib/components/sections/IntegrationsMarquee.svelte';
</script>

<section id="soluciones" class="max-w-7xl mx-auto mt-8 px-8 md:px-16">
  <header class="text-center">
    <h2 class="text-4xl font-semibold">
      <span class="text-brand">IA</span> práctica para empresas
    </h2>
    <h3 class="mt-8 mx-auto text-xl">
      Soluciones que se adaptan a tu negocio. Tecnología líder y fácil de usar que mejora tu productividad cada día.
    </h3>
  </header>

  <div class="grid gap-6 md:grid-cols-3 mt-10">
    <a
      href="#agentes-ia"
      class="group rounded-2xl border-2 border-default bg-primary p-6 block transition-all duration-200
        hover:border-brand hover:-translate-y-0.5 hover:shadow-lg">
      <div class="mb-3 text-brand">
        <span class="material-symbols-rounded !text-4xl align-middle transition-transform duration-200 group-hover:scale-110">smart_toy</span>
      </div>
      <h2 class="text-lg font-semibold mb-1">Agentes a medida</h2>
      <p class="text-secondary">Asistentes que trabajan con tus herramientas.</p>
    </a>

    <a
      href="#chatbots"
      class="group rounded-2xl border-2 border-default bg-primary p-6 block transition-all duration-200
        hover:border-brand hover:-translate-y-0.5 hover:shadow-lg">
      <div class="mb-3 text-brand">
        <span class="material-symbols-rounded !text-4xl align-middle transition-transform duration-200 group-hover:scale-110">chat_bubble</span>
      </div>
      <h2 class="text-lg font-semibold mb-1">Chatbots inteligentes</h2>
      <p class="text-secondary">Responde 24/7 con tu propio conocimiento.</p>
    </a>

    <a
      href="#automatizaciones"
      class="group rounded-2xl border-2 border-default bg-primary p-6 block transition-all duration-200
        hover:border-brand hover:-translate-y-0.5 hover:shadow-lg">
      <div class="mb-3 text-brand">
        <span class="material-symbols-rounded !text-4xl align-middle transition-transform duration-200 group-hover:scale-110">settings_suggest</span>
      </div>
      <h2 class="text-lg font-semibold mb-1">Automatización de procesos</h2>
      <p class="text-secondary">Facturas, documentos, correos… sin esfuerzo.</p>
    </a>
  </div>

  <div class="mt-10 text-center">
    <h3 class="text-2xl font-semibold">
      Integración con tus herramientas de trabajo
    </h3>
    <p class="max-auto mt-4">
      Tus procesos de siempre potenciados con Inteligencia Artificial. Para que trabajes como siempre, pero más rápido.
    </p>
  </div>

  <IntegrationsMarquee />
</section>


