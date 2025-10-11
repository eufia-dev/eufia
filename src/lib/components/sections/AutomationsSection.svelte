<script lang="ts">
  import Automation from '$lib/components/Automation.svelte';
</script>

<section
  id="automatizaciones"
  class="max-w-7xl mx-auto px-8 md:px-16"
>
  <div class="flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-12">
    <div class="text-left sm:text-center lg:text-left w-full">
      <h3 class="text-4xl font-semibold">Automatización de <span class="text-brand">procesos</span></h3>
      <p class="text-lg mt-6">
        Procesos repetitivos totalmente automatizados, liberando tiempo al equipo.
      </p>
      
      <ul class="space-y-2.5 mt-6">
        <li class="flex items-center justify-start sm:justify-center lg:justify-start gap-3">
          <span class="material-symbols-rounded text-brand">check_circle</span>
          <span>
            <span class="font-semibold">Contabilidad</span> y conciliación bancaria
          </span>
        </li>
        <li class="flex items-center justify-start sm:justify-center lg:justify-start gap-3">
          <span class="material-symbols-rounded text-brand">check_circle</span>
          <span>
            <span class="font-semibold">Informes automáticos</span> y sin esfuerzo
          </span>
        </li>
        <li class="flex items-center justify-start sm:justify-center lg:justify-start gap-3">
          <span class="material-symbols-rounded text-brand">check_circle</span>
          <span>
            <span class="font-semibold">Proyectos</span> y contratos agilizados
          </span>
        </li>
        <li class="flex items-center justify-start sm:justify-center lg:justify-start gap-3">
          <span class="material-symbols-rounded text-brand">check_circle</span>
          <span>
            <span class="font-semibold">Sincronización</span> y flujos entre aplicaciones
          </span>
        </li>
      </ul>
    </div>

    <div class="w-full md:h-69 self-stretch">
      <Automation />
    </div>
  </div>
  <p class="mt-10 lg:mt-12 text-lg">
    Nuestras automatizaciones conectan tus sistemas, eliminan tareas repetitivas y mantienen total trazabilidad.
    Para que tu equipo mantenga el control y pueda centrarse en lo que realmente importa.
  </p>
  <a
    href="#contacto"
    aria-label="Ir al formulario de contacto"
    class="inline-flex items-center gap-2 rounded-lg bg-brand text-inverse px-6 py-3 mt-10
      hover:scale-102 transition-transform duration-200">
    <span>Automatiza tus procesos</span>
    <span class="material-symbols-rounded">arrow_forward</span>
  </a>
</section>
