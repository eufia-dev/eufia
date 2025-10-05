<script lang="ts">
  import Agent from '$lib/components/Agent.svelte';
</script>

<section id="agentes-ia" class="max-w-7xl mx-auto px-6 md:px-16 mt-20">
  <div class="flex flex-col lg:flex-row items-center lg:items-start gap-10">
    <div class="w-full lg:flex-1">
      <Agent containerMaxWidth="max-w-2xl" nodeSize={76} paddingY="py-6" />
    </div>
    
    <div class="lg:flex-1 text-center lg:text-left">
      <h3 class="text-3xl md:text-4xl font-semibold mb-4">Agentes de IA a medida</h3>
      <p class="text-lg text-secondary mb-6 leading-relaxed">
        Tu <span class="font-semibold text-primary">asistente digital</span> que ejecuta tareas completas de forma autónoma. 
        Conectado a tus sistemas, <span class="font-semibold text-primary">toma decisiones y actúa</span> como un empleado 24/7.
      </p>
      
      <div class="space-y-2.5 mb-6">
        <ul class="space-y-2.5 text-secondary">
          <li class="flex items-start gap-3">
            <span class="material-symbols-rounded text-brand mt-0.5 flex-shrink-0">check_circle</span>
            <span><strong>Procesa documentos</strong> y actualiza tu ERP/CRM automáticamente</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="material-symbols-rounded text-brand mt-0.5 flex-shrink-0">check_circle</span>
            <span><strong>Detecta anomalías</strong> y envía alertas proactivas</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="material-symbols-rounded text-brand mt-0.5 flex-shrink-0">check_circle</span>
            <span><strong>Genera informes</strong> y reportes en tiempo real</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="material-symbols-rounded text-brand mt-0.5 flex-shrink-0">check_circle</span>
            <span><strong>Orquesta tareas</strong> entre múltiples herramientas</span>
          </li>
        </ul>
      </div>
      
      <div class="bg-secondary/50 rounded-xl p-4 border border-default">
        <p class="text-sm text-secondary">
          <span class="material-symbols-rounded text-brand align-middle !text-xl mr-1">lightbulb</span>
          <span class="font-semibold text-primary">Caso real:</span> 
          Una gestoría ahorra 35h/mes automatizando clasificación de facturas, contabilidad e informes.
        </p>
      </div>
    </div>
  </div>
</section>


