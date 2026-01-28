<script lang="ts">
  const tiers = [
    {
      name: '1-10 empleados',
      monthlyPrice: 1.50,
      annualMonthlyPrice: 1.25, // 15€/year ÷ 12 = 1.25€/month
      popular: false
    },
    {
      name: '11-25 empleados',
      monthlyPrice: 1.35,
      annualMonthlyPrice: 1.125, // 13.50€/year ÷ 12 = 1.125€/month
      popular: true
    },
    {
      name: '25+ empleados',
      monthlyPrice: 1.20,
      annualMonthlyPrice: 1.00, // 12€/year ÷ 12 = 1€/month
      popular: false
    }
  ];

  const addons = [
    {
      name: 'Plan Proyectos',
      price: 0.50,
      description: 'Organiza el tiempo de tu equipo por proyectos, clientes o centros de coste con analíticas avanzadas.',
      icon: 'folder',
      features: [
        'Asignación de horas a proyectos',
        'Analíticas de tiempo por proyecto',
        'Informes detallados por cliente/proyecto',
        'Control de presupuesto y rentabilidad'
      ]
    },
    {
      name: 'Plan WhatsApp',
      price: 1,
      description: 'Permite a tus empleados fichar directamente desde WhatsApp, sin apps adicionales ni complicaciones.',
      icon: 'chat',
      features: [
        'Fichaje rápido escribiendo "entrada" o "salida"',
        'Recordatorios automáticos configurables',
        'Sin necesidad de instalar aplicación',
        'Funciona en cualquier dispositivo con WhatsApp'
      ]
    }
  ];

  function formatPrice(price: number): string {
    return price.toFixed(2).replace('.', ',');
  }
</script>

<section id="precios" class="max-w-7xl mx-auto px-8 md:px-16">
  <header class="text-center">
    <h2 class="text-4xl font-semibold">
      Precios <span class="text-brand">transparentes</span>
    </h2>
    <p class="text-lg text-secondary mt-4 max-w-2xl mx-auto">
      Sin sorpresas. Sin letra pequeña.
    </p>
  </header>

  <!-- Free Trial Banner -->
  <div class="mt-8 bg-brand/10 rounded-xl p-4 text-center">
    <p class="text-lg font-medium text-brand">
      <span class="material-symbols-rounded !text-xl align-middle mr-1">celebration</span>
      Primer mes GRATIS — Prueba todas las funcionalidades sin coste
    </p>
  </div>

  <!-- Pricing Tiers -->
  <div class="grid gap-6 md:grid-cols-3 mt-10">
    {#each tiers as tier}
      <div class="relative rounded-xl bg-primary p-6 border-2 transition-all duration-200 hover:border-brand
        {tier.popular ? 'border-strong shadow-xl' : 'border-default'} group">
        {#if tier.popular}
          <div class="absolute -top-3 left-1/2 -translate-x-1/2">
            <span class="bg-strong group-hover:bg-brand text-inverse text-sm font-medium px-3 py-1 rounded-full transition-colors duration-200">
              Más popular
            </span>
          </div>
        {/if}
        
        <h3 class="text-xl font-semibold text-center mt-2">{tier.name}</h3>
        
        <!-- Pricing Options -->
        <div class="mt-6 space-y-4">
          <!-- Monthly Price -->
          <div class="rounded-lg bg-secondary/5 p-4 border border-default">
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-secondary uppercase tracking-wide">Mensual</span>
            </div>
            <div class="flex items-baseline gap-1 mt-1">
              <span class="text-2xl font-bold">{formatPrice(tier.monthlyPrice)}€</span>
              <span class="text-sm text-secondary">/ usuario / mes</span>
            </div>
          </div>
          
          <!-- Annual Price (shown as monthly equivalent) -->
          <div class="relative rounded-lg bg-brand/5 p-4 border-2 border-brand">
            <div class="absolute -top-2.5 right-3">
              <span class="bg-brand text-inverse text-xs font-medium px-2 py-0.5 rounded-full">
                2 meses gratis
              </span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-brand uppercase tracking-wide">Anual</span>
            </div>
            <div class="flex items-baseline gap-1 mt-1">
              <span class="text-2xl font-bold text-brand">{formatPrice(tier.annualMonthlyPrice)}€</span>
              <span class="text-sm text-secondary">/ usuario / mes</span>
            </div>
            <p class="text-xs text-secondary mt-1">Facturado anualmente</p>
          </div>
        </div>

        <div class="mt-6">
          <a
            href="https://control-horario.eufia.eu"
            target="_blank"
            rel="noopener noreferrer"
            class="block w-full text-center rounded-lg py-3 font-medium transition-all duration-200
              {tier.popular 
                ? 'bg-brand text-inverse hover:scale-102' 
                : 'border-2 border-brand text-brand hover:bg-brand hover:text-inverse'}"
          >
            Empezar gratis
          </a>
        </div>
      </div>
    {/each}
  </div>

  <!-- All Plans Include -->
  <div class="mt-10 text-center">
    <p class="text-sm text-secondary uppercase tracking-wide font-medium mb-4">Todos los planes incluyen</p>
    <div class="flex flex-wrap justify-center gap-x-8 gap-y-3">
      <span class="flex items-center gap-2 text-secondary">
        <span class="material-symbols-rounded !text-lg text-brand">check</span>
        Fichaje web y móvil
      </span>
      <span class="flex items-center gap-2 text-secondary">
        <span class="material-symbols-rounded !text-lg text-brand">check</span>
        Informes exportables
      </span>
      <span class="flex items-center gap-2 text-secondary">
        <span class="material-symbols-rounded !text-lg text-brand">check</span>
        Cumplimiento Real Decreto
      </span>
      <span class="flex items-center gap-2 text-secondary">
        <span class="material-symbols-rounded !text-lg text-brand">check</span>
        Soporte personalizado
      </span>
    </div>
  </div>

  <!-- Add-ons -->
  <div class="mt-12">
    <h3 class="text-2xl font-semibold text-center">Complementos opcionales</h3>
    <p class="text-secondary text-center mt-2 max-w-2xl mx-auto">
      Potencia tu plan base con funcionalidades adicionales según las necesidades de tu empresa.
    </p>
    <div class="grid gap-6 md:grid-cols-2 mt-8">
      {#each addons as addon}
        <div class="rounded-xl bg-primary p-6 border border-default hover:border-brand transition-all duration-200">
          <!-- Header -->
          <div class="flex items-start justify-between gap-4">
            <div class="flex items-center gap-3">
              <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                <span class="material-symbols-rounded !text-2xl text-brand">{addon.icon}</span>
              </div>
              <h4 class="text-xl font-semibold">{addon.name}</h4>
            </div>
            <div class="text-right flex-shrink-0">
              <p class="text-xl font-bold text-brand">+{formatPrice(addon.price)}€</p>
              <p class="text-xs text-secondary">/ usuario / mes</p>
            </div>
          </div>
          
          <!-- Description -->
          <p class="text-secondary mt-4">{addon.description}</p>
          
          <!-- Features List -->
          <ul class="mt-5 space-y-3">
            {#each addon.features as feature}
              <li class="flex items-center gap-2">
                <span class="material-symbols-rounded !text-xl text-brand flex-shrink-0">check_circle</span>
                <span class="text-medium">{feature}</span>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</section>
