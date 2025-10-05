<script lang="ts">
  import Automation from '$lib/components/Automation.svelte';
</script>

<section id="automatizaciones" class="max-w-7xl mx-auto px-6 md:px-16 mt-20 mb-8">
  <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
    <Automation />
    
    <div class="flex-1 text-center lg:text-left">
      <h3 class="text-3xl md:text-4xl font-semibold mb-4">Automatización de procesos</h3>
      <p class="text-lg text-secondary mb-6 leading-relaxed">
        Tareas que <span class="font-semibold text-primary">se hacen solas</span>, 
        liberando a tu equipo del trabajo repetitivo. 
        <span class="font-semibold text-primary">Tú mantienes el control</span>: decides qué, cómo y cuándo automatizar.
      </p>
      
      <div class="space-y-2.5 mb-6">
        <ul class="space-y-2.5 text-secondary">
          <li class="flex items-start gap-3">
            <span class="material-symbols-rounded text-green-600 mt-0.5 flex-shrink-0">check_circle</span>
            <span><strong>Gestión documental:</strong> Clasifica, archiva y concilia facturas automáticamente</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="material-symbols-rounded text-green-600 mt-0.5 flex-shrink-0">check_circle</span>
            <span><strong>Sincronización:</strong> Pedidos, stock, clientes... todo actualizado entre sistemas</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="material-symbols-rounded text-green-600 mt-0.5 flex-shrink-0">check_circle</span>
            <span><strong>Flujos inteligentes:</strong> Del email al sistema y la notificación sin tocar nada</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="material-symbols-rounded text-green-600 mt-0.5 flex-shrink-0">check_circle</span>
            <span><strong>Informes automáticos:</strong> Resúmenes, alertas y reportes sin crearlos manualmente</span>
          </li>
        </ul>
      </div>
      
      <div class="space-y-2.5">
        <div class="bg-green-50 rounded-xl p-4 border border-green-200">
          <p class="text-sm text-secondary">
            <span class="material-symbols-rounded text-green-600 align-middle !text-xl mr-1">shield</span>
            <span class="font-semibold text-primary">Control total:</span> 
            Notificaciones de cada acción, pausa/modifica cuando quieras, visibilidad completa.
          </p>
        </div>
        
        <div class="bg-secondary/50 rounded-xl p-4 border border-default">
          <p class="text-sm text-secondary">
            <span class="material-symbols-rounded text-green-600 align-middle !text-xl mr-1">lightbulb</span>
            <span class="font-semibold text-primary">Fácil:</span> 
            Se integra con tus herramientas actuales (Google, Microsoft, Shopify, HubSpot, Holded...).
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


