<script lang="ts">
  import Agent from '$lib/components/Agent.svelte';
</script>

<section
  id="agentes-ia"
  class="max-w-7xl mx-auto px-8 md:px-16"
>
  <div class="flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-12">
    <div class="text-left sm:text-center lg:text-left w-full">
      <h3 class="text-4xl font-semibold">
        Agentes IA <span class="text-brand">personalizados</span>
      </h3>
      <p class="text-lg mt-6">
        Asistentes digitales que ejecutan tareas completas de forma autónoma. 
      </p>
      
      <ul class="space-y-2.5 mt-6">
        <li class="flex items-center justify-start sm:justify-center lg:justify-start gap-3">
          <span class="material-symbols-rounded text-brand">check_circle</span>
          <span>
            <span class="font-semibold">Procesa facturas</span> y actualiza tu ERP/CRM
          </span>
        </li>
        <li class="flex items-center justify-start sm:justify-center lg:justify-start gap-3">
          <span class="material-symbols-rounded text-brand flex-shrink-0">check_circle</span>
          <span>
            <span class="font-semibold">Gestiona pedidos</span> y repone el stock
          </span>
        </li>
        <li class="flex items-center justify-start sm:justify-center lg:justify-start gap-3">
          <span class="material-symbols-rounded text-brand flex-shrink-0">check_circle</span>
          <span>
            <span class="font-semibold">Crea documentación</span> y redacta informes
          </span>
        </li>
        <li class="flex items-center justify-start sm:justify-center lg:justify-start gap-3">
          <span class="material-symbols-rounded text-brand flex-shrink-0">check_circle</span>
          <span>
            <span class="font-semibold">Prepara presupuestos</span> y ventas
          </span>
        </li>
      </ul>
    </div>

    <div class="w-full self-stretch">
      <Agent />
    </div>
  </div>

  <p class="mt-10 lg:mt-12 text-lg">
    Nuestros Agentes IA tienen capacidad para conectarse a los sistemas de la empresa,
    inteligencia para tomar decisiones y potencia para llevarlas a cabo.
  </p>
  <a
    href="#contacto"
    aria-label="Ir al formulario de contacto"
    class="inline-flex items-center gap-2 rounded-lg bg-brand text-inverse px-6 py-3 mt-10
      hover:scale-102 transition-transform duration-200">
    <span>Crea tu propio Agente IA</span>
    <span class="material-symbols-rounded">arrow_forward</span>
  </a>
</section>
