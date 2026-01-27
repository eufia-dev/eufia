<script lang="ts">
  const tiers = [
    {
      name: 'Starter',
      range: '1-50 empresas',
      commission: 20,
      color: 'bg-stone-100'
    },
    {
      name: 'Partner',
      range: '51-100 empresas',
      commission: 25,
      color: 'bg-brand/10',
      popular: true
    },
    {
      name: 'Premium',
      range: '100+ empresas',
      commission: 30,
      color: 'bg-stone-100'
    }
  ];

  const steps = [
    {
      number: 1,
      title: 'Presentación',
      description: 'Presenta EUFIA a tu cliente como solución para cumplir con el Real Decreto.'
    },
    {
      number: 2,
      title: 'Demostración',
      description: 'EUFIA realiza una demo personalizada, presencial u online, directamente con el cliente.'
    },
    {
      number: 3,
      title: 'Configuración',
      description: 'Nuestro equipo configura el sistema y forma a todos los empleados.'
    },
    {
      number: 4,
      title: 'Comisión',
      description: 'Recibes tu comisión mensual automáticamente mientras el cliente usa el servicio.'
    }
  ];

  const benefits = {
    gestoria: [
      { icon: 'trending_up', title: 'Ingresos recurrentes', description: 'Comisiones mensuales predecibles sin trabajo adicional continuo.' },
      { icon: 'stars', title: 'Valor añadido', description: 'Ofrece soluciones innovadoras que fidelizan y diferencian tu despacho.' },
      { icon: 'person_off', title: 'Sin carga operativa', description: 'EUFIA gestiona soporte, formación y atención al cliente final.' }
    ],
    cliente: [
      { icon: 'verified_user', title: 'Cumplimiento legal', description: 'Garantía total de conformidad con el Real Decreto y normativa laboral.' },
      { icon: 'touch_app', title: 'Simplicidad de uso', description: 'Interfaz intuitiva con formación completa incluida desde el primer día.' },
      { icon: 'support_agent', title: 'Soporte local', description: 'Atención presencial en Baleares con respuesta rápida y cercana.' }
    ]
  };
</script>

<svelte:head>
  <title>Programa para Gestorías | EUFIA Control Horario</title>
  <meta name="description" content="Genera ingresos recurrentes con EUFIA Control Horario. Programa de colaboración para gestorías y asesorías: hasta 30% de comisión mensual, sin carga operativa." />
</svelte:head>

<div class="space-y-24 md:space-y-30 mb-10">
  <!-- Hero Section -->
  <section class="relative bg-gradient-to-br from-stone-800 to-stone-900 text-inverse overflow-hidden">
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0); background-size: 32px 32px;"></div>
    </div>
    <div class="relative max-w-7xl mx-auto px-8 md:px-16 py-16 md:py-24">
      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-2 bg-brand/20 text-brand px-4 py-2 rounded-full text-sm font-medium mb-6">
          <span class="material-symbols-rounded !text-lg">handshake</span>
          <span>Programa de colaboración</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-semibold leading-tight">
          Genera <span class="text-brand">ingresos recurrentes</span> con EUFIA Control Horario
        </h1>
        <p class="text-xl text-stone-300 mt-6">
          Ofrece a tus clientes la solución de control horario más sencilla del mercado y recibe comisiones mensuales 
          sin añadir carga de trabajo a tu despacho.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 mt-10">
          <a
            href="#contacto"
            class="inline-flex items-center justify-center gap-2 rounded-lg bg-brand text-inverse px-6 py-3
              hover:scale-102 transition-transform duration-200 font-medium">
            <span>Solicitar información</span>
            <span class="material-symbols-rounded">arrow_forward</span>
          </a>
          <a
            href="#como-funciona"
            class="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-stone-600 text-inverse px-6 py-3
              hover:border-stone-400 transition-all duration-200 font-medium">
            <span>Ver cómo funciona</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Commission Tiers -->
  <section class="max-w-7xl mx-auto px-8 md:px-16">
    <header class="text-center">
      <h2 class="text-4xl font-semibold">
        Niveles de <span class="text-brand">colaboración</span>
      </h2>
      <p class="text-lg text-secondary mt-4 max-w-2xl mx-auto">
        Tres niveles diseñados para crecer junto a tu despacho. Cuantos más clientes, mayor comisión.
      </p>
    </header>

    <div class="grid gap-6 md:grid-cols-3 mt-12">
      {#each tiers as tier}
        <div class="relative rounded-xl p-8 text-center border-2 transition-all duration-200
          {tier.popular ? 'border-brand shadow-xl bg-primary' : 'border-default bg-primary hover:border-brand'}">
          {#if tier.popular}
            <div class="absolute -top-3 left-1/2 -translate-x-1/2">
              <span class="bg-brand text-inverse text-sm font-medium px-3 py-1 rounded-full">
                Recomendado
              </span>
            </div>
          {/if}
          <h3 class="text-2xl font-semibold mt-2">{tier.name}</h3>
          <p class="text-secondary mt-2">{tier.range}</p>
          <div class="mt-6">
            <span class="text-5xl font-bold text-brand">{tier.commission}%</span>
            <p class="text-secondary mt-2">comisión mensual recurrente</p>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Profitability Example -->
  <section class="max-w-7xl mx-auto px-8 md:px-16">
    <div class="bg-secondary rounded-2xl p-8 md:p-12">
      <div class="grid gap-8 lg:grid-cols-2 items-center">
        <div>
          <h2 class="text-3xl font-semibold">
            Ejemplo de <span class="text-brand">rentabilidad</span>
          </h2>
          <p class="text-lg text-secondary mt-4">
            Cálculo basado en nivel Premium con 100 empresas cliente.
          </p>
          <ul class="mt-6 space-y-3">
            <li class="flex items-center gap-3">
              <span class="material-symbols-rounded text-brand">apartment</span>
              <span>100 empresas clientes</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="material-symbols-rounded text-brand">group</span>
              <span>Promedio de 8 empleados por empresa</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="material-symbols-rounded text-brand">euro</span>
              <span>Precio medio: 1,50€ / usuario / mes</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="material-symbols-rounded text-brand">percent</span>
              <span>Comisión Premium: 30%</span>
            </li>
          </ul>
        </div>
        <div class="bg-primary rounded-xl p-8 text-center">
          <p class="text-secondary">Ingresos anuales estimados</p>
          <p class="text-5xl md:text-6xl font-bold text-brand mt-4">+4.300€</p>
          <p class="text-lg mt-4">Previsibles y recurrentes</p>
          <p class="text-secondary mt-2">Sin trabajo adicional para tu despacho</p>
        </div>
      </div>
    </div>
  </section>

  <!-- How It Works -->
  <section id="como-funciona" class="max-w-7xl mx-auto px-8 md:px-16">
    <header class="text-center">
      <h2 class="text-4xl font-semibold">
        Flujo de trabajo <span class="text-brand">simple</span>
      </h2>
      <p class="text-lg text-secondary mt-4 max-w-2xl mx-auto">
        Nuestro equipo se encarga de todo el proceso operativo. Tú solo presentas y cobras.
      </p>
    </header>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
      {#each steps as step}
        <div class="relative">
          <div class="bg-primary rounded-xl p-6 border border-default h-full">
            <div class="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-inverse font-bold mb-4">
              {step.number}
            </div>
            <h3 class="text-lg font-semibold">{step.title}</h3>
            <p class="text-secondary mt-2">{step.description}</p>
          </div>
          {#if step.number < 4}
            <div class="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-stone-300"></div>
          {/if}
        </div>
      {/each}
    </div>
  </section>

  <!-- Benefits -->
  <section class="max-w-7xl mx-auto px-8 md:px-16">
    <header class="text-center">
      <h2 class="text-4xl font-semibold">
        Beneficios del <span class="text-brand">modelo</span>
      </h2>
    </header>

    <div class="grid gap-8 lg:grid-cols-2 mt-12">
      <!-- For Gestoría -->
      <div class="bg-primary rounded-xl p-8 border border-default">
        <h3 class="text-2xl font-semibold mb-6">Para la gestoría</h3>
        <div class="space-y-6">
          {#each benefits.gestoria as benefit}
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center">
                <span class="material-symbols-rounded !text-xl text-brand">{benefit.icon}</span>
              </div>
              <div>
                <h4 class="font-semibold">{benefit.title}</h4>
                <p class="text-secondary mt-1">{benefit.description}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- For Client -->
      <div class="bg-primary rounded-xl p-8 border border-default">
        <h3 class="text-2xl font-semibold mb-6">Para el cliente final</h3>
        <div class="space-y-6">
          {#each benefits.cliente as benefit}
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center">
                <span class="material-symbols-rounded !text-xl text-brand">{benefit.icon}</span>
              </div>
              <div>
                <h4 class="font-semibold">{benefit.title}</h4>
                <p class="text-secondary mt-1">{benefit.description}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- Local Support -->
  <section class="max-w-7xl mx-auto px-8 md:px-16">
    <div class="bg-gradient-to-br from-brand to-orange-600 rounded-2xl p-8 md:p-12 text-inverse">
      <div class="grid gap-8 lg:grid-cols-2 items-center">
        <div>
          <div class="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span class="material-symbols-rounded !text-lg">location_on</span>
            <span>Presencia local</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-semibold">
            Atención presencial en Baleares
          </h2>
          <p class="text-lg text-orange-100 mt-6">
            A diferencia de otras soluciones, en EUFIA ofrecemos <strong class="text-white">implantación presencial</strong> 
            en Mallorca e Ibiza. Visitamos tu despacho y el de tus clientes para hacer las demostraciones 
            y formaciones en persona.
          </p>
          <ul class="mt-6 space-y-3 text-orange-100">
            <li class="flex items-center gap-3">
              <span class="material-symbols-rounded !text-xl text-white">check_circle</span>
              <span>Demos presenciales en tu despacho</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="material-symbols-rounded !text-xl text-white">check_circle</span>
              <span>Formación in situ a tus clientes</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="material-symbols-rounded !text-xl text-white">check_circle</span>
              <span>Soporte cercano y respuesta rápida</span>
            </li>
          </ul>
        </div>
        <div class="text-center">
          <p class="text-6xl md:text-7xl font-bold">24h</p>
          <p class="text-xl mt-2">Respuesta garantizada</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact CTA -->
  <section id="contacto" class="max-w-7xl mx-auto px-8 md:px-16">
    <div class="bg-primary rounded-2xl p-8 md:p-12 border border-default text-center">
      <h2 class="text-3xl md:text-4xl font-semibold">
        Comienza tu colaboración con <span class="text-brand">EUFIA</span>
      </h2>
      <p class="text-lg text-secondary mt-4 max-w-2xl mx-auto">
        Agenda una demostración presencial en tu despacho. Te mostraremos en detalle todas las 
        funcionalidades, condiciones y casos de éxito.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <a
          href="mailto:info@eufia.eu"
          class="inline-flex items-center justify-center gap-2 rounded-lg bg-brand text-inverse px-6 py-3
            hover:scale-102 transition-transform duration-200 font-medium">
          <span class="material-symbols-rounded">mail</span>
          <span>info@eufia.eu</span>
        </a>
        <a
          href="tel:+34686733922"
          class="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-brand text-brand px-6 py-3
            hover:bg-brand hover:text-inverse transition-all duration-200 font-medium">
          <span class="material-symbols-rounded">call</span>
          <span>+34 686 733 922</span>
        </a>
      </div>
      <p class="text-secondary mt-6">
        <span class="material-symbols-rounded !text-base align-middle mr-1">schedule</span>
        Respuesta en menos de 24 horas
      </p>
    </div>
  </section>
</div>
