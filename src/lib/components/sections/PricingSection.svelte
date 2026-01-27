<script lang="ts">
  let billingCycle: 'monthly' | 'annual' = 'monthly';

  const tiers = [
    {
      name: '1-10 empleados',
      monthlyPrice: 1.50,
      annualPrice: 15,
      popular: false
    },
    {
      name: '11-25 empleados',
      monthlyPrice: 1.35,
      annualPrice: 13.50,
      popular: true
    },
    {
      name: '25+ empleados',
      monthlyPrice: 1.20,
      annualPrice: 12,
      popular: false
    }
  ];

  const addons = [
    {
      name: 'Plan WhatsApp',
      price: 1,
      description: 'Fichaje a través de chat de WhatsApp',
      icon: 'chat'
    },
    {
      name: 'Plan Proyectos',
      price: 0.50,
      description: 'Gestión por centros de coste y analíticas',
      icon: 'folder'
    }
  ];
</script>

<section id="precios" class="max-w-7xl mx-auto px-8 md:px-16">
  <header class="text-center">
    <h2 class="text-4xl font-semibold">
      Precios <span class="text-brand">transparentes</span>
    </h2>
    <p class="text-lg text-secondary mt-4 max-w-2xl mx-auto">
      Sin sorpresas. Sin letra pequeña. Primer mes gratis para que lo pruebes sin compromiso.
    </p>
  </header>

  <!-- Free Trial Banner -->
  <div class="mt-8 bg-brand/10 rounded-xl p-4 text-center">
    <p class="text-lg font-medium text-brand">
      <span class="material-symbols-rounded !text-xl align-middle mr-1">celebration</span>
      Primer mes GRATIS — Prueba todas las funcionalidades sin coste
    </p>
  </div>

  <!-- Billing Toggle -->
  <div class="flex items-center justify-center gap-4 mt-8">
    <span class="{billingCycle === 'monthly' ? 'font-semibold text-primary' : 'text-secondary'}">Mensual</span>
    <button
      class="relative w-14 h-7 rounded-full transition-colors duration-200
        {billingCycle === 'annual' ? 'bg-brand' : 'bg-stone-300'}"
      on:click={() => billingCycle = billingCycle === 'monthly' ? 'annual' : 'monthly'}
      aria-label="Cambiar entre facturación mensual y anual"
    >
      <span
        class="absolute top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200
          {billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-1'}"
      ></span>
    </button>
    <span class="{billingCycle === 'annual' ? 'font-semibold text-primary' : 'text-secondary'}">
      Anual
      <span class="text-brand text-sm ml-1">2 meses gratis</span>
    </span>
  </div>

  <!-- Pricing Tiers -->
  <div class="grid gap-6 md:grid-cols-3 mt-10">
    {#each tiers as tier}
      <div class="relative rounded-xl bg-primary p-6 border-2 transition-all duration-200
        {tier.popular ? 'border-brand shadow-xl' : 'border-default hover:border-brand'}">
        {#if tier.popular}
          <div class="absolute -top-3 left-1/2 -translate-x-1/2">
            <span class="bg-brand text-inverse text-sm font-medium px-3 py-1 rounded-full">
              Más popular
            </span>
          </div>
        {/if}
        
        <h3 class="text-xl font-semibold text-center mt-2">{tier.name}</h3>
        
        <div class="text-center mt-6">
          <div class="flex items-baseline justify-center gap-1">
            <span class="text-4xl font-bold text-brand">
              {billingCycle === 'monthly' 
                ? tier.monthlyPrice.toFixed(2).replace('.', ',')
                : tier.annualPrice.toFixed(2).replace('.', ',')}€
            </span>
            <span class="text-secondary">
              / usuario / {billingCycle === 'monthly' ? 'mes' : 'año'}
            </span>
          </div>
        </div>

        <ul class="mt-6 space-y-3">
          <li class="flex items-center gap-2 text-secondary">
            <span class="material-symbols-rounded !text-lg text-brand">check</span>
            <span>Fichaje web y móvil</span>
          </li>
          <li class="flex items-center gap-2 text-secondary">
            <span class="material-symbols-rounded !text-lg text-brand">check</span>
            <span>Informes exportables</span>
          </li>
          <li class="flex items-center gap-2 text-secondary">
            <span class="material-symbols-rounded !text-lg text-brand">check</span>
            <span>Cumplimiento Real Decreto</span>
          </li>
          <li class="flex items-center gap-2 text-secondary">
            <span class="material-symbols-rounded !text-lg text-brand">check</span>
            <span>Soporte por email</span>
          </li>
        </ul>

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

  <!-- Add-ons -->
  <div class="mt-12">
    <h3 class="text-2xl font-semibold text-center">Complementos opcionales</h3>
    <div class="grid gap-4 md:grid-cols-2 mt-6 max-w-2xl mx-auto">
      {#each addons as addon}
        <div class="flex items-center gap-4 rounded-xl bg-primary p-4 border border-default">
          <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center">
            <span class="material-symbols-rounded !text-xl text-brand">{addon.icon}</span>
          </div>
          <div class="flex-1">
            <p class="font-semibold">{addon.name}</p>
            <p class="text-sm text-secondary">{addon.description}</p>
          </div>
          <div class="text-right">
            <p class="font-bold text-brand">+{addon.price.toFixed(2).replace('.', ',')}€</p>
            <p class="text-xs text-secondary">/ usuario / mes</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
