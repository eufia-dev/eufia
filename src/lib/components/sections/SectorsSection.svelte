<script lang="ts">
  import FeatureCard from '$lib/components/FeatureCard.svelte';
  
  const sectors = [
    {
      icon: 'hotel',
      title: 'Turismo y Hostelería',
      subtitle: 'Hoteles, restaurantes, alquiler vacacional',
      description: '• Asistencia 24/7 en reservas (web, WhatsApp, OTAs)\n• Revenue management dinámico'
    },
    {
      icon: 'home_work',
      title: 'Construcción e Inmobiliaria',
      subtitle: 'Constructoras, reformas, agencias inmobiliarias',
      description: '• Presupuestos y mediciones asistidos por IA\n• Cualificación de leads y CRM inteligente'
    },
    {
      icon: 'directions_boat',
      title: 'Náutica y Charter',
      subtitle: 'Charter, varaderos, puertos deportivos',
      description: '• Gestión de flota e itinerarios\n• Upselling y cross-selling en temporada'
    },
    {
      icon: 'manage_accounts',
      title: 'Gestorías y Asesorías',
      subtitle: 'Asesorías fiscales, laborales y contables',
      description: '• Captura y conciliación de facturas/documentos\n• Automatización de modelos y obligaciones'
    },
    {
      icon: 'medical_services',
      title: 'Salud y Bienestar',
      subtitle: 'Clínicas privadas, fisioterapia y terapias',
      description: '• Pre-triaje y FAQs multilingües\n• Historias clínicas estructuradas con IA'
    },
    {
      icon: 'store',
      title: 'Comercio y Servicios Locales',
      subtitle: 'Peluquerías, estética, talleres, retail',
      description: '• Agenda inteligente y recordatorios\n• Programas de fidelización inteligentes'
    }
  ];
</script>

<section id='sectores' class="max-w-7xl mx-auto px-12 mt-16">
  <header class="mb-8 text-center">
    <h2 class="text-2xl md:text-3xl font-semibold mb-4">
      IA para los <span class="text-brand">sectores clave de Mallorca</span>
    </h2>
    <p class="text-secondary text-lg max-w-3xl mx-auto">
      Mallorca es una isla de servicios: turismo, construcción, náutica y pymes. Diseñamos soluciones de IA prácticas
      que se integran con tus herramientas y procesos para ganar eficiencia y mejorar la experiencia del cliente.
    </p>
  </header>

  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
    {#each sectors as s}
      <FeatureCard icon={s.icon} title={s.title} subtitle={s.subtitle} description={s.description} />
    {/each}
  </div>

  <div class="bg-secondary rounded-xl p-8 text-center">
    <h3 class="text-xl font-semibold mb-4">
      ¿Tu sector en Mallorca no aparece aquí?
    </h3>
    <p class="text-secondary mb-6 max-w-2xl mx-auto">
      La IA es adaptable a <span class="font-semibold text-primary">cualquier negocio</span>.
      Analizamos tus procesos y herramientas para detectar oportunidades rápidas de impacto.
      Ofrecemos un <span class="font-semibold text-brand">estudio gratuito</span> para identificar
      las mejores iniciativas en tu caso.
    </p>
    <a
      href="#contacto"
      aria-label="Solicitar estudio gratuito de IA en Mallorca"
      class="inline-flex items-center gap-2 rounded-lg bg-brand text-inverse px-6 py-3 mt-10
        hover:scale-102 transition-transform duration-200">
      <span>Solicita tu estudio gratuito</span>
      <span class="material-symbols-rounded">arrow_forward</span>
    </a>
  </div>
</section>
