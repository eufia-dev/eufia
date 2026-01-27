<script lang="ts">
  let activeTab = 'fichaje';

  const tabs = [
    { id: 'fichaje', label: 'Fichaje', icon: 'login' },
    { id: 'calendario', label: 'Calendario', icon: 'calendar_month' },
    { id: 'empleados', label: 'Empleados', icon: 'group' },
    { id: 'analiticas', label: 'Analíticas', icon: 'analytics' }
  ];

  const screenshots: Record<string, { desktop: string; mobile?: string; alt: string; description: string }> = {
    fichaje: {
      desktop: '/screenshots/main.png',
      mobile: '/screenshots/main_mobile.png',
      alt: 'Panel de fichaje de EUFIA Control Horario',
      description: 'Fichaje con un solo clic. Vista clara del estado de cada empleado.'
    },
    calendario: {
      desktop: '/screenshots/calendar.png',
      mobile: '/screenshots/calendar_mobile.png',
      alt: 'Calendario de registros horarios',
      description: 'Visualiza los registros de cualquier empleado por día, semana o mes.'
    },
    empleados: {
      desktop: '/screenshots/users_summary.png',
      alt: 'Gestión de empleados',
      description: 'Gestiona tu equipo fácilmente. Añade, edita o desactiva empleados en segundos.'
    },
    analiticas: {
      desktop: '/screenshots/analytics.png',
      alt: 'Analíticas y reportes',
      description: 'Informes detallados listos para exportar. Perfecto para nóminas e inspecciones.'
    }
  };

  $: currentScreenshot = screenshots[activeTab];
</script>

<section id="app" class="max-w-7xl mx-auto px-8 md:px-16">
  <header class="text-center">
    <h2 class="text-4xl font-semibold">
      Conoce la <span class="text-brand">aplicación</span>
    </h2>
    <p class="text-lg text-secondary mt-4 max-w-2xl mx-auto">
      Diseñada para ser intuitiva. Sin manuales, sin formación necesaria.
    </p>
  </header>

  <!-- Tabs -->
  <div class="flex flex-wrap justify-center gap-2 mt-10">
    {#each tabs as tab}
      <button
        class="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200
          {activeTab === tab.id 
            ? 'bg-brand text-inverse' 
            : 'bg-primary border border-default text-primary hover:border-brand hover:text-brand'}"
        on:click={() => activeTab = tab.id}
      >
        <span class="material-symbols-rounded !text-xl">{tab.icon}</span>
        <span class="hidden sm:inline">{tab.label}</span>
      </button>
    {/each}
  </div>

  <!-- Screenshot Display -->
  <div class="mt-10">
    <div class="bg-primary rounded-2xl p-4 md:p-8 border border-default">
      <div class="flex flex-col lg:flex-row items-center gap-8">
        <!-- Desktop Screenshot -->
        <div class="flex-1 w-full">
          <img 
            src={currentScreenshot.desktop} 
            alt={currentScreenshot.alt}
            class="w-full rounded-xl shadow-lg border border-stone-200"
          />
        </div>
        
        <!-- Mobile Screenshot (if available) -->
        {#if currentScreenshot.mobile}
          <div class="lg:w-48 flex-shrink-0">
            <img 
              src={currentScreenshot.mobile} 
              alt="{currentScreenshot.alt} - versión móvil"
              class="w-40 lg:w-full mx-auto rounded-xl shadow-lg border border-stone-200"
            />
          </div>
        {/if}
      </div>
      
      <p class="text-center text-lg text-secondary mt-6">
        {currentScreenshot.description}
      </p>
    </div>
  </div>
</section>
