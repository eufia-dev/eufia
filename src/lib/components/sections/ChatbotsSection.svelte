<script lang="ts">
  import Chatbot from '$lib/components/Chatbot.svelte';
</script>

<section id="chatbots" class="max-w-7xl mx-auto px-8 md:px-16">
  <div class="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
    <div class="text-center lg:text-left w-full">
      <h3 class="text-4xl font-semibold">
        Chatbots <span class="text-brand">profesionales</span>
      </h3>
      <p class="text-lg mt-6">
        Asistentes con toda tu información, para que siempre lo tengas todo a mano.
      </p>
      
      <ul class="space-y-2.5 mt-6">
        <li class="flex items-center justify-center lg:justify-start gap-2">
          <span class="material-symbols-rounded text-brand">check_circle</span>
          <span>
            <span class="font-semibold">Respuestas inmediatas</span> y en cualquier idioma
          </span>
        </li>
        <li class="flex items-center justify-center lg:justify-start gap-2">
          <span class="material-symbols-rounded text-brand">check_circle</span>
          <span>
            <span class="font-semibold">Con tus carpetas, documentos</span> y bases de datos
          </span>
        </li>
        <li class="flex items-center justify-center lg:justify-start gap-2">
          <span class="material-symbols-rounded text-brand">check_circle</span>
          <span>
            <span class="font-semibold">Agenda citas o reuniones</span> y envia recordatorios
          </span>
        </li>
        <li class="flex items-center justify-center lg:justify-start gap-2">
          <span class="material-symbols-rounded text-brand">check_circle</span>
          <span>
            <span class="font-semibold">WhatsApp, Instagram, web</span> y donde lo necesites
          </span>
        </li>
      </ul>
    </div>

    <div class="w-full self-stretch h-69">
      <Chatbot />
    </div>
  </div>

  <p class="mt-10 lg:mt-12 text-lg">
    Nuestros chatbots no solo resuelven dudas a clientes, mejoran la productividad de tus equipos.
    Información al instante, actualizada, y con capacidad de que le realizar acciones conectado a nuestos Agentes IA.
  </p>
  
  <a
    href="#contacto"
    aria-label="Ir al formulario de contacto"
    class="inline-flex items-center gap-2 rounded-lg bg-brand text-inverse px-6 py-3 mt-10
      hover:scale-102 transition-transform duration-200">
    <span>Descubre los Chatbots</span>
    <span class="material-symbols-rounded">arrow_forward</span>
  </a>
</section>
