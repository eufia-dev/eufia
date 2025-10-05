<script lang="ts">
  import Chatbot from '$lib/components/Chatbot.svelte';
</script>

<section id="chatbots" class="max-w-7xl mx-auto px-6 md:px-16 mt-20">
  <div class="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
    <Chatbot />
    
    <div class="flex-1 text-center lg:text-left">
      <h3 class="text-3xl md:text-4xl font-semibold mb-4">Chatbots inteligentes</h3>
      <p class="text-lg text-secondary mb-6 leading-relaxed">
        Más que respuestas automáticas: asistentes entrenados con <span class="font-semibold text-primary">todo el conocimiento de tu empresa</span>. 
        Pueden ser <span class="font-semibold text-primary">la interfaz conversacional de un agente</span> que no solo responde, sino que ejecuta acciones.
      </p>
      
      <div class="space-y-2.5 mb-6">
        <ul class="space-y-2.5 text-secondary">
          <li class="flex items-start gap-3">
            <span class="material-symbols-rounded text-blue-600 mt-0.5 flex-shrink-0">check_circle</span>
            <span><strong>Acceso inteligente a datos:</strong> Consulta información sin buscar en múltiples sistemas</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="material-symbols-rounded tex-blue-600 mt-0.5 flex-shrink-0">check_circle</span>
            <span><strong>Ejecuta acciones:</strong> Agenda citas, crea tickets, gestiona reservas conversando</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="material-symbols-rounded text-blue-600 mt-0.5 flex-shrink-0">check_circle</span>
            <span><strong>Atención 24/7:</strong> Respuestas personalizadas con el conocimiento de tu negocio</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="material-symbols-rounded text-blue-600 mt-0.5 flex-shrink-0">check_circle</span>
            <span><strong>Multicanal:</strong> Web, WhatsApp, redes, Teams, Slack... donde lo necesites</span>
          </li>
        </ul>
      </div>
      
      <div class="bg-secondary/50 rounded-xl p-4 border border-default">
        <p class="text-sm text-secondary">
          <span class="material-symbols-rounded text-blue-600 align-middle !text-xl mr-1">lightbulb</span>
          <span class="font-semibold text-primary">Caso real:</span> 
          E-commerce resuelve 80% de consultas automáticamente y deriva solo casos complejos al equipo.
        </p>
      </div>
    </div>
  </div>
</section>


