<script lang="ts">
  import FeatureCard from '$lib/components/FeatureCard.svelte';
  
  const sectors = [
    {
      icon: 'hotel',
      title: 'Turismo y Hostelería',
      subtitle: 'Hoteles, restaurantes, agroturismos',
      description: '- Chatbots multilingües para reservas y atención instantánea\n- Check-ins y gestiones automáticas'
    },
    {
      icon: 'home_work',
      title: 'Construcción y Vivienda',
      subtitle: 'Constructoras, reformas, inmobiliarias',
      description: '- Presupuestos autogenerados a tu medida\n- Permisos, trámites y documentación automatizados'
    },
    {
      icon: 'medical_services',
      title: 'Salud y Servicios',
      subtitle: 'Clínicas, peluquerías, comercios',
      description: '- Citas, recordatorios y atención por WhatsApp\n- Pedidos, reservas e inventario gestionados de forma autónoma'
    },
    {
      icon: 'computer',
      title: 'Profesionales y Despachos',
      subtitle: 'Gestorías, abogados, inenieros',
      description: '- Facturación y contabilidad automáticas\n- Asistente virtual para consultas y gestión de tareas'
    },
  ];
</script>

<section id='sectores' class="max-w-7xl mx-auto px-8 md:px-16">
  <header class="text-center">
    <h2 class="text-4xl font-semibold">
      IA enfocada a <span class="text-brand">Sectores</span>
    </h2>
    <p class="text-lg mx-auto mt-8">
      Soluciones personalizadas que optimizan tareas, mejoran la atención al cliente y multiplican la productividad en todos los ámbitos.
    </p>
  </header>

  <div class="grid gap-6 md:grid-cols-2 mt-10">
    {#each sectors as s}
      <FeatureCard icon={s.icon} title={s.title} subtitle={s.subtitle} description={s.description} />
    {/each}
  </div>

  <p class="mx-auto mt-10 text-lg">
    En Eufia analizamos tu empresa sin compromiso y te mostramos cómo la inteligencia artificial
    puede optimizar procesos y aumentar la rentabilidad desde el primer día.
  </p>
  <a
    href="#contacto"
    aria-label="Solicitar estudio gratuito de IA en Mallorca"
    class="inline-flex items-center gap-2 rounded-lg bg-brand text-inverse px-6 py-3 mt-10
      hover:scale-102 transition-transform duration-200">
    <span>Solicita tu estudio gratuito</span>
    <span class="material-symbols-rounded">arrow_forward</span>
  </a>
</section>
