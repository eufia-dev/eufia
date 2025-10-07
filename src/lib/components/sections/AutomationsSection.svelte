<script lang="ts">
  import Automation from '$lib/components/Automation.svelte';
</script>

<section
  id="automatizaciones"
  class="max-w-7xl mx-auto px-8 md:px-16"
>
  <div class="flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-12">
    <div class="text-center lg:text-left w-full">
      <h3 class="text-4xl font-semibold">Automatización de <span class="text-brand">procesos</span></h3>
      <p class="text-lg mt-6">
        Tareas que se hacen solas, liberando a tu equipo del trabajo repetitivo. 
      </p>
      
      <ul class="space-y-2.5 mt-6">
        <li class="flex items-center justify-center lg:justify-start gap-2">
          <span class="material-symbols-rounded text-brand">check_circle</span>
          <span>
            <span class="font-semibold">Gestión documental</span>: Clasifica, archiva y concilia facturas automáticamente
          </span>
        </li>
        <li class="flex items-center justify-center lg:justify-start gap-2">
          <span class="material-symbols-rounded text-brand">check_circle</span>
          <span>
            <span class="font-semibold">Sincronización</span>: Pedidos, stock, clientes... todo actualizado entre sistemas
          </span>
        </li>
        <li class="flex items-center justify-center lg:justify-start gap-2">
          <span class="material-symbols-rounded text-brand">check_circle</span>
          <span>
            <span class="font-semibold">Flujos inteligentes</span>: Del email al sistema y la notificación sin tocar nada
          </span>
        </li>
        <li class="flex items-center justify-center lg:justify-start gap-2">
          <span class="material-symbols-rounded text-brand">check_circle</span>
          <span>
            <span class="font-semibold">Informes automáticos</span>: Resúmenes, alertas y reportes sin crearlos manualmente
          </span>
        </li>
      </ul>

      <span class="font-semibold text-primary">Tú mantienes el control</span>: decides qué, cómo y cuándo automatizar.
    </div>

    <div class="w-full self-stretch">
      <Automation />
    </div>
  </div>
  <p class="mt-10 lg:mt-12 text-lg">
    Nuestras automatizaciones conectan tus sistemas, eliminan tareas repetitivas y te dan control total con trazabilidad.
    Para que tu equipo pueda centrarse en lo que realmente importa.
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
