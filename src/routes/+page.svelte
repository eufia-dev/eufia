<script lang="ts">
  import { enhance } from '$lib/form';
  import { tick, onMount } from 'svelte';
  import Particles, { particlesInit } from '@tsparticles/svelte';
  import { loadSlim } from '@tsparticles/slim';
  
  export let form: any;

  let emailInput: HTMLInputElement | null = null;
  let messageInput: HTMLTextAreaElement | null = null;
  let sending = false;
  let sent = false;
  let showParticles = false;

  const integrationFiles: string[] = [
    'a3erp.png',
    'a3innuva.png',
    'bbva.png',
    'business_central.png',
    'caixabank.png',
    'chatgpt.png',
    'claude.svg',
    'docusign.png',
    'excel.png',
    'factorial.png',
    'factura_directa.png',
    'freshdesk.png',
    'gemini.png',
    'gmail.png',
    'google_ads.png',
    'google_calendar.png',
    'google_workspace.png',
    'holded.png',
    'hubspot.png',
    'jira.png',
    'linkedin.png',
    'meta.png',
    'microsoft_365.png',
    'mongodb.png',
    'odoo.png',
    'outlook.png',
    'postgresql.png',
    'power_bi.png',
    'quipu.png',
    'restoo.png',
    'sage.png',
    'salesforce.png',
    'santander.png',
    'sap.png',
    'shopify.png',
    'teams.png',
    'the_fork.png',
    'trello.png',
    'whatsapp.png',
    'word.png',
    'zendesk.png',
    'zoho.png'
  ];

  type IntegrationLogo = { src: string; alt: string };

  const integrations: IntegrationLogo[] = integrationFiles.map((file) => {
    const name = file
      .replace(/\.(png|svg)$/i, '')
      .replace(/[_-]/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());
    return { src: `/integrations/${file}`, alt: name };
  });

  const categories: string[][] = [
    [
      'sap.png', 'odoo.png', 'sage.png', 'holded.png', 'business_central.png', 'a3erp.png', 'a3innuva.png', 'factura_directa.png',
      'power_bi.png', 'postgresql.png', 'mongodb.png', 'google_workspace.png', 'microsoft_365.png', 'gmail.png',
      'outlook.png', 'google_calendar.png', 'word.png', 'excel.png', 'teams.png', 'docusign.png'
    ],
    [
      'hubspot.png', 'salesforce.png', 'zoho.png', 'google_ads.png', 'linkedin.png', 'meta.png', 'shopify.png',
      'whatsapp.png', 'freshdesk.png', 'zendesk.png', 'trello.png', 'jira.png', 'restoo.png', 'the_fork.png',
      'chatgpt.png', 'claude.svg', 'gemini.png'
    ]
  ];

  const logoByFileName: Map<string, IntegrationLogo> = new Map(
    integrations.map((logo) => [logo.src.split('/').pop() || '', logo])
  );

  function getLogos(files: string[]): IntegrationLogo[] {
    return files
      .map((f) => logoByFileName.get(f) || {
        src: `/integrations/${f}`,
        alt: f
          .replace(/\.(png|svg)$/i, '')
          .replace(/[_-]/g, ' ')
          .replace(/\b\w/g, (c) => c.toUpperCase())
      })
      .filter((l) => !!l);
  }

  onMount(() => {
    const ric = (window as any).requestIdleCallback;
    if (ric) {
      ric(() => {
        showParticles = true;
      });
    } else {
      setTimeout(() => {
        showParticles = true;
      }, 300);
    }
  });

  function resetSent() {
    sent = true;
    setTimeout(() => {
      sent = false;
    }, 2000);
  }

  $: if (form?.success && emailInput && messageInput) {
    emailInput.value = '';
    messageInput.value = '';
  }

  const enhanceOptions = {
    pending: () => {
      sending = true;
      sent = false;
    },
    result: async ({ response }: { response: Response }) => {
      sending = false;
      if (response.ok) {
        await tick();
        resetSent();
      }
    }
  };

  particlesInit(async (engine) => {
    await loadSlim(engine);
  });

  const particlesOptions: any = {
    fullScreen: { enable: false },
    background: { color: { value: 'transparent' } },
    particles: {
      number: { value: 80, density: { enable: true, area: 800 } },
      color: { value: ['#F05F00', '#FF7A1A', '#FF6B00'] },
      links: { enable: true, color: '#F05F00', opacity: 0.6, distance: 200, width: 1.5 },
      move: { enable: true, speed: 0.6, direction: 'none', outModes: { default: 'out' } },
      opacity: { value: 0.8 },
      size: { value: { min: 2.5, max: 5 } },
      shape: { type: 'circle' }
    },
    interactivity: {
      events: { onHover: { enable: false }, onClick: { enable: true, mode: 'push' }, resize: true },
      modes: { push: { quantity: 1 } }
    },
    detectRetina: true
  };
</script>

<svelte:head>
  <style>
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes marquee-reverse {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }
  </style>
  <title>Consultoría de Inteligencia Artificial en Mallorca | Eufia</title>
  <meta name="description" content="Consultoría de inteligencia artificial en Mallorca y Baleares. Especialistas en automatización para PYMEs y empresas en España: chatbots, agentes de IA e integración rápida con tus herramientas." />
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Qué es un agente de IA y en qué se diferencia de un chatbot?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Un agente de IA es un sistema capaz de ejecutar tareas completas y procesos de varias etapas conectado a tus herramientas (por ejemplo, leer una factura, actualizar el ERP y enviar un informe). Un chatbot se centra en conversar y responder preguntas con la información de tu empresa, pero también puede formar parte de un agente: al conectarlo con sistemas, puede realizar acciones prácticas como agendar citas, gestionar reservas o crear tickets."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué procesos o tareas se pueden automatizar en una pyme?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Facturación, documentos, correos, atención al cliente, citas, CRM/ERP, informes, inventario, pedidos... Casi cualquier tarea digital puede automatizarse, desde analizar datos hasta ejecutar acciones en sistemas. En EUFIA empezamos con un estudio gratuito de tus procesos y después proponemos las soluciones más adecuadas para tu empresa."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cómo puede la IA ayudar a mejorar mi negocio?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reduce tareas manuales y errores, acorta tiempos de respuesta y ofrece atención 24/7. Mejora la eficiencia operativa, la experiencia del cliente y las conversiones, liberando horas del equipo para poder centrarse en tareas que aporten valor real e impulsen el negocio."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cómo puedo implementar IA en mi empresa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La implementación de IA empieza con un análisis de procesos para detectar tareas que se pueden mejorar. En EUFIA ofrecemos un estudio gratuito y proponemos un piloto rápido adaptado a tus sistemas. Si funciona, la solución se escala progresivamente a más áreas. No necesitas grandes datos ni ser una gran empresa para empezar."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuánto tarda un proyecto de IA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Un piloto suele estar listo en 2–3 semanas, y una implantación completa entre 4–8 semanas según el alcance. Los primeros beneficios en productividad y tiempos se perciben desde las primeras semanas. Además, en EUFIA ofrecemos seguimiento y monitorización continua, con informes que muestran los resultados conseguidos y el ahorro estimado para tu empresa."
          }
        },
        {
          "@type": "Question",
          "name": "¿Es seguro usar IA en una pyme o empresa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, diseñamos con seguridad y RGPD por defecto: minimización y anonimización de datos, control de accesos y registro de actividad, cifrado en tránsito y en reposo, acuerdos de tratamiento y, cuando se requiere, alojamiento en la UE. Los datos siguen siendo de tu propiedad y se usan con fines definidos."
          }
        }
      ]
    }
  </script>
</svelte:head>

<section
  class="relative bg-default overflow-hidden"
>
  <div class="absolute inset-0" aria-hidden="true">
    {#if showParticles}
      <Particles id="hero-particles" class="w-full h-full" options={particlesOptions} />
    {/if}
  </div>
  <div
    aria-hidden="true"
    class="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-b from-transparent via-stone-50/70 to-stone-50 z-5"
  ></div>
  <div class="relative z-10 max-w-7xl mx-auto p-8 md:p-16">
    <div class="flex flex-col lg:flex-row items-center gap-6">
      <div class="flex-1 text-center lg:text-left">
        <h1 class="sr-only">Consultoría de Inteligencia Artificial en Mallorca y Baleares</h1>
        <h2 class="text-4xl font-semibold">
          Impulsamos tu negocio con
          <span class="text-brand">Inteligencia Artificial</span>
        </h2>
        <h3 class="text-xl font-medium italic mt-10 lg:mt-14">
          ¿Quieres aprovechar la IA?
          <br/>
          ¿No tienes claro cómo puede mejorar tu negocio?
        </h3>
      </div>
      <div class="flex-shrink-0">
        <img src="/eufia_transparent.svg" alt="Eufia - Consultoría de IA" class="w-100 lg:w-120 xl:w-160" />
      </div>
    </div>
    <p class="text-xl mt-6 lg:mt-8">
      Somos EUFIA, consultoría de IA con sede en
      <span class="font-semibold">Mallorca</span>.
      Ayudamos a 
      <span class="font-semibold">PYMEs en toda España</span>
      a automatizar procesos, reducir costes y ganar ventaja competitiva con agentes, chatbots y automatizaciones.
    </p>
    <div class="mt-12">
      <a
        href="#contacto"
        aria-label="Ir al formulario de contacto"
        class="inline-flex items-center gap-2 rounded-md border bg-brand text-inverse px-6 py-3
          hover:border-brand hover:translate-y-[-2px] hover:shadow-lg transition-all duration-200">
        <span>Descubre el potencial de la IA</span>
        <span class="material-symbols-rounded">arrow_forward</span>
      </a>
    </div>
  </div>
</section>

<section id="servicios" class="max-w-7xl mx-auto mt-8 px-8 md:px-16">
  <header class="text-center">
    <h2 class="text-4xl font-semibold">
      <span class="text-brand">IA</span> práctica para empresas
    </h2>
    <h3 class="mt-8 mx-auto text-xl">
      Soluciones que se adaptan a tu negocio. Tecnología líder y fácil de usar que mejora tu productividad cada día.
    </h3>
  </header>

  <div class="grid gap-6 md:grid-cols-3 mt-10">
    <a
      href="#agentes-ia"
      class="group rounded-2xl border-2 border-default bg-primary p-6 block transition-all duration-200
        hover:border-brand hover:-translate-y-0.5 hover:shadow-lg">
      <div class="mb-3 text-brand">
        <span class="material-symbols-rounded !text-4xl align-middle transition-transform duration-200 group-hover:scale-110">smart_toy</span>
      </div>
      <h3 class="text-lg font-semibold mb-1">Agentes a medida</h3>
      <p class="text-secondary">Asistentes que trabajan con tus herramientas.</p>
    </a>

    <a
      href="#chatbots"
      class="group rounded-2xl border-2 border-default bg-primary p-6 block transition-all duration-200
        hover:border-brand hover:-translate-y-0.5 hover:shadow-lg">
      <div class="mb-3 text-brand">
        <span class="material-symbols-rounded !text-4xl align-middle transition-transform duration-200 group-hover:scale-110">chat_bubble</span>
      </div>
      <h3 class="text-lg font-semibold mb-1">Chatbots inteligentes</h3>
      <p class="text-secondary">Responde 24/7 con tu propio conocimiento.</p>
    </a>

    <a
      href="#automatizaciones"
      class="group rounded-2xl border-2 border-default bg-primary p-6 block transition-all duration-200
        hover:border-brand hover:-translate-y-0.5 hover:shadow-lg">
      <div class="mb-3 text-brand">
        <span class="material-symbols-rounded !text-4xl align-middle transition-transform duration-200 group-hover:scale-110">settings_suggest</span>
      </div>
      <h3 class="text-lg font-semibold mb-1">Automatización de procesos</h3>
      <p class="text-secondary">Facturas, documentos, correos… sin esfuerzo.</p>
    </a>
  </div>

  <div class="mt-10 text-center">
    <h3 class="text-2xl font-semibold">
      Integración con tus herramientas de trabajo
    </h3>
    <p class="max-auto mt-4">
      Tus procesos de siempre potenciados con Inteligencia Artificial. Para que trabajes como siempre, pero más rápido.
    </p>
  </div>

  <div class="mt-8">
    {#each categories as category, i}
      <div
        class="overflow-x-hidden overflow-y-visible group border-default py-4
          {i === 0 ? 'border-y' : 'border-b'}
          [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]
          [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div
          class="flex items-center gap-10 w-max
            {i % 2 === 0 ? 'animate-[marquee_90s_linear_infinite]' : 'animate-[marquee-reverse_90s_linear_infinite]'}">
          <div class="flex items-center gap-10">
            {#each getLogos(category) as item}
              <img class="h-8 grayscale hover:grayscale-0 transition-colors duration-150" src={item.src} alt={item.alt} loading="lazy" />
            {/each}
          </div>
          <div class="flex items-center gap-10" aria-hidden="true">
            {#each getLogos(category) as item}
              <img class="h-8 grayscale hover:grayscale-0 transition-colors duration-150" src={item.src} alt="" />
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<section id="agentes-ia" class="max-w-7xl mx-auto px-12 mt-16">
  <header class="mb-6">
    <h3 class="text-2xl md:text-3xl font-semibold">Agentes de IA</h3>
    <p class="text-secondary mt-2 max-w-3xl">Agentes que entienden objetivos y ejecutan procesos de varias etapas conectados a tus sistemas. Ideales para operaciones, finanzas o soporte.</p>
  </header>
  <ul class="grid gap-3 md:grid-cols-2 text-secondary">
    <li class="flex items-start gap-2"><span class="material-symbols-rounded text-brand mt-0.5">check_circle</span><span>Recepción y procesamiento de facturas y documentación.</span></li>
    <li class="flex items-start gap-2"><span class="material-symbols-rounded text-brand mt-0.5">check_circle</span><span>Actualización del ERP/CRM y generación de informes.</span></li>
    <li class="flex items-start gap-2"><span class="material-symbols-rounded text-brand mt-0.5">check_circle</span><span>Detección de anomalías y avisos proactivos.</span></li>
    <li class="flex items-start gap-2"><span class="material-symbols-rounded text-brand mt-0.5">check_circle</span><span>Orquestación de tareas con múltiples herramientas.</span></li>
  </ul>
</section>

<section id="chatbots" class="max-w-7xl mx-auto px-12 mt-16">
  <header class="mb-6">
    <h3 class="text-2xl md:text-3xl font-semibold">Chatbots</h3>
    <p class="text-secondary mt-2 max-w-3xl">Asistentes conversacionales entrenados con tu contenido que responden 24/7 y ejecutan acciones básicas. Se integran en tu web, WhatsApp o redes sociales.</p>
  </header>
  <ul class="grid gap-3 md:grid-cols-2 text-secondary">
    <li class="flex items-start gap-2"><span class="material-symbols-rounded text-brand mt-0.5">check_circle</span><span>Atención al cliente con catálogo y políticas de tu negocio.</span></li>
    <li class="flex items-start gap-2"><span class="material-symbols-rounded text-brand mt-0.5">check_circle</span><span>Captura de leads y reservas con calendario.</span></li>
    <li class="flex items-start gap-2"><span class="material-symbols-rounded text-brand mt-0.5">check_circle</span><span>Integración con CRM y helpdesk.</span></li>
    <li class="flex items-start gap-2"><span class="material-symbols-rounded text-brand mt-0.5">check_circle</span><span>Escalado a agente humano cuando es necesario.</span></li>
  </ul>
</section>

<section id="automatizaciones" class="max-w-7xl mx-auto px-12 mt-16">
  <header class="mb-6">
    <h3 class="text-2xl md:text-3xl font-semibold">Automatizaciones</h3>
    <p class="text-secondary mt-2 max-w-3xl">Automatiza tareas repetitivas y flujos entre sistemas: facturas, correos, CRM/ERP, almacén y más. Integraciones con Google Workspace, Microsoft 365, Shopify, WooCommerce, HubSpot, Holded, Notion o Slack.</p>
  </header>
  <ul class="grid gap-3 md:grid-cols-2 text-secondary">
    <li class="flex items-start gap-2"><span class="material-symbols-rounded text-brand mt-0.5">check_circle</span><span>Conciliación y archivo automático de facturas.</span></li>
    <li class="flex items-start gap-2"><span class="material-symbols-rounded text-brand mt-0.5">check_circle</span><span>Sincronización de pedidos y stock entre ecommerce y ERP.</span></li>
    <li class="flex items-start gap-2"><span class="material-symbols-rounded text-brand mt-0.5">check_circle</span><span>Secuencias de email y actualizaciones en CRM.</span></li>
    <li class="flex items-start gap-2"><span class="material-symbols-rounded text-brand mt-0.5">check_circle</span><span>Generación de informes y alertas automáticas.</span></li>
  </ul>
</section>

<section id="casos" class="max-w-7xl mx-auto px-12 mt-16">
  <header class="text-center mb-12">
    <h2 class="text-3xl md:text-4xl font-semibold mb-4">Casos de éxito</h2>
    <p class="text-lg text-secondary max-w-4xl mx-auto">
      Descubre cómo nuestras soluciones de IA están transformando negocios reales
    </p>
  </header>

  <div class="grid gap-8 md:grid-cols-2">
    <div class="rounded-2xl border border-default bg-primary p-8">
      <div class="mb-4 text-brand">
        <span class="material-symbols-rounded !text-5xl align-middle">account_balance</span>
      </div>
      <h3 class="text-xl font-semibold mb-3">Agente Financiero Inteligente</h3>
      <p class="text-secondary mb-4">
        Una gestoría automatizó completamente su proceso de contabilidad con un agente de IA que:
      </p>
      <ul class="space-y-2 text-secondary mb-6">
        <li class="flex items-start gap-2">
          <span class="material-symbols-rounded !text-lg text-brand mt-0.5">check_circle</span>
          <span>Clasifica automáticamente facturas y gastos</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="material-symbols-rounded !text-lg text-brand mt-0.5">check_circle</span>
          <span>Genera informes financieros mensuales</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="material-symbols-rounded !text-lg text-brand mt-0.5">check_circle</span>
          <span>Detecta anomalías y errores contables</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="material-symbols-rounded !text-lg text-brand mt-0.5">check_circle</span>
          <span>Se integra con su software de gestión</span>
        </li>
      </ul>
      <div class="bg-secondary rounded-lg p-4">
        <p class="text-sm font-medium text-primary">
          <span class="text-brand">Resultado:</span> 35 horas ahorradas al mes y 0% errores contables
        </p>
      </div>
    </div>

    <div class="rounded-2xl border border-default bg-primary p-8">
      <div class="mb-4 text-brand">
        <span class="material-symbols-rounded !text-5xl align-middle">support_agent</span>
      </div>
      <h3 class="text-xl font-semibold mb-3">Chatbot de Atención al Cliente</h3>
      <p class="text-secondary mb-4">
        Un e-commerce implementó un chatbot inteligente que revolucionó su atención al cliente:
      </p>
      <ul class="space-y-2 text-secondary mb-6">
        <li class="flex items-center justify-start gap-2">
          <span class="material-symbols-rounded !text-lg text-brand mt-0.5">check_circle</span>
          <span>Responde consultas 24/7 en tiempo real</span>
        </li>
        <li class="flex items-center justify-start gap-2">
          <span class="material-symbols-rounded !text-lg text-brand mt-0.5">check_circle</span>
          <span>Conoce todo el catálogo de productos</span>
        </li>
        <li class="flex items-center justify-start gap-2">
          <span class="material-symbols-rounded !text-lg text-brand mt-0.5">check_circle</span>
          <span>Gestiona devoluciones y seguimientos</span>
        </li>
        <li class="flex items-center justify-start gap-2">
          <span class="material-symbols-rounded !text-lg text-brand mt-0.5">check_circle</span>
          <span>Deriva casos complejos al equipo humano</span>
        </li>
      </ul>
      <div class="bg-secondary rounded-lg p-4">
        <p class="text-sm font-medium text-primary">
          <span class="text-brand">Resultado:</span> 80% consultas resueltas automáticamente y clientes más satisfechos
        </p>
      </div>
    </div>
  </div>

  <div class="text-center mt-8">
    <p class="text-lg text-secondary">
      ¿Tienes un caso similar? <span class="font-medium text-primary">Hablemos de cómo la IA puede transformar tu negocio</span>
    </p>
  </div>
</section>

<section id='sectores' class="max-w-7xl mx-auto px-12 mt-16">
  <header class="mb-8 text-center">
    <h2 class="text-2xl md:text-3xl font-semibold mb-4">
      IA para <span class="text-brand">todos los sectores</span>
    </h2>
    <p class="text-secondary text-lg max-w-3xl mx-auto">
      La Inteligencia Artificial se adapta a cualquier negocio. Estos son algunos sectores donde hemos visto resultados especialmente impactantes:
    </p>
  </header>

  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
    <div class="rounded-xl border border-default bg-primary p-6">
      <div class="mb-4 text-brand">
        <span class="material-symbols-rounded !text-4xl">store</span>
      </div>
      <h3 class="text-lg font-semibold mb-2">E-commerce y Retail</h3>
      <ul class="text-secondary text-sm space-y-1">
        <li>• Chatbots de atención 24/7</li>
        <li>• Gestión automática de inventario</li>
        <li>• Análisis de comportamiento de compra</li>
        <li>• Recomendaciones personalizadas</li>
      </ul>
    </div>

    <div class="rounded-xl border border-default bg-primary p-6">
      <div class="mb-4 text-brand">
        <span class="material-symbols-rounded !text-4xl">medical_services</span>
      </div>
      <h3 class="text-lg font-semibold mb-2">Salud y Bienestar</h3>
      <ul class="text-secondary text-sm space-y-1">
        <li>• Gestión de citas automática</li>
        <li>• Recordatorios personalizados</li>
        <li>• Análisis de historiales médicos</li>
        <li>• Triaje inicial de consultas</li>
      </ul>
    </div>

    <div class="rounded-xl border border-default bg-primary p-6">
      <div class="mb-4 text-brand">
        <span class="material-symbols-rounded !text-4xl">account_balance</span>
      </div>
      <h3 class="text-lg font-semibold mb-2">Servicios Financieros</h3>
      <ul class="text-secondary text-sm space-y-1">
        <li>• Automatización contable</li>
        <li>• Análisis de riesgo crediticio</li>
        <li>• Detección de fraudes</li>
        <li>• Asesoramiento personalizado</li>
      </ul>
    </div>

    <div class="rounded-xl border border-default bg-primary p-6">
      <div class="mb-4 text-brand">
        <span class="material-symbols-rounded !text-4xl">school</span>
      </div>
      <h3 class="text-lg font-semibold mb-2">Educación</h3>
      <ul class="text-secondary text-sm space-y-1">
        <li>• Tutores virtuales personalizados</li>
        <li>• Corrección automática de exámenes</li>
        <li>• Seguimiento del progreso estudiantil</li>
        <li>• Generación de contenido educativo</li>
      </ul>
    </div>

    <div class="rounded-xl border border-default bg-primary p-6">
      <div class="mb-4 text-brand">
        <span class="material-symbols-rounded !text-4xl">home_repair_service</span>
      </div>
      <h3 class="text-lg font-semibold mb-2">Servicios Profesionales</h3>
      <ul class="text-secondary text-sm space-y-1">
        <li>• Automatización de presupuestos</li>
        <li>• Gestión inteligente de proyectos</li>
        <li>• Análisis predictivo de demanda</li>
        <li>• Optimización de rutas y recursos</li>
      </ul>
    </div>

    <div class="rounded-xl border border-default bg-primary p-6">
      <div class="mb-4 text-brand">
        <span class="material-symbols-rounded !text-4xl">restaurant</span>
      </div>
      <h3 class="text-lg font-semibold mb-2">Hostelería y Turismo</h3>
      <ul class="text-secondary text-sm space-y-1">
        <li>• Reservas y gestión de mesas</li>
        <li>• Recomendaciones gastronómicas</li>
        <li>• Optimización de precios dinámicos</li>
        <li>• Análisis de satisfacción del cliente</li>
      </ul>
    </div>
  </div>

  <div class="bg-secondary rounded-xl p-8 text-center">
    <h3 class="text-xl font-semibold mb-4">
      ¿Tu sector no aparece aquí?
    </h3>
    <p class="text-secondary mb-6 max-w-2xl mx-auto">
      La IA es adaptable a <span class="font-semibold text-primary">cualquier negocio</span>. 
      Cada empresa tiene procesos únicos que se pueden optimizar. 
      Ofrecemos un <span class="font-semibold text-brand">estudio gratuito</span> para identificar 
      las mejores oportunidades en tu caso específico.
    </p>
    <a
      href="#contacto"
      aria-label="Solicitar estudio gratuito de IA"
      class="inline-flex items-center gap-2 rounded-md border bg-brand text-inverse px-6 py-3
        hover:border-brand hover:translate-y-[-2px] hover:shadow-lg transition-all duration-200">
      <span>Solicita tu estudio gratuito</span>
      <span class="material-symbols-rounded">arrow_forward</span>
    </a>
  </div>
</section>

<section id="contacto" class="mx-4 mt-12 mb-8">
  <div class="max-w-md mx-auto">
    <div class="bg-primary border border-default rounded-xl shadow-lg p-6">
      <h2 class="text-2xl font-semibold mb-6 text-center">Contacto</h2>
      <form class="space-y-4" method="POST" use:enhance={enhanceOptions}>
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          required
          bind:this={emailInput}
          class="w-full px-4 py-3 bg-secondary border border-default rounded-lg
            focus:outline-none focus:ring-2 ring-default transition-all duration-200"
        />

        <div style="display:none;">
          <label for="website">Your website</label>
          <input type="text" name="website" id="website" placeholder="Your website" tabindex="-1" autocomplete="off">
        </div>
        
        <textarea
          name="message"
          placeholder="Cuéntanos tu caso (opcional)"
          rows="4"
          bind:this={messageInput}
          class="w-full px-4 py-3 bg-secondary border border-default rounded-lg
            focus:outline-none focus:ring-2 ring-default transition-all duration-200"
        ></textarea>

        <button
          type="submit"
          disabled={sending}
          class="w-full py-3 px-6 font-semibold text-inverse rounded-lg shadow-lg
            flex items-center justify-center gap-2 transition-all duration-200
            disabled:opacity-70 disabled:cursor-not-allowed border
            hover:shadow-xl transform hover:-translate-y-0.5
            hover:border-brand
            {sent ? 'bg-green-600' : 'bg-brand'}"
        >
          {#if sending}
            <span class="w-5 h-5 border-2 border-inverse border-t-transparent rounded-full animate-spin"></span>
            Enviando…
          {:else if sent}
            <span class="material-symbols-rounded">check_circle</span>
            ¡Enviado!
          {:else}
            Quiero saber más
          {/if}
        </button>
      </form>
  
      <!-- TODO: this is not working-->
      {#if form?.success}
        <div class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p class="text-green-700 text-center font-medium">
            ¡Gracias por contactarnos! Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.
          </p>
        </div>
      {:else if form?.error}
        <div class="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p class="text-red-700 text-center">{form.error}</p>
        </div>
      {/if}
    </div>
  </div>

  <div class="text-2xl md:text-4xl mt-8 text-center mx-auto flex flex-col md:flex-row
    gap-4 items-center justify-center">
    <img src="/eufia_transparent.svg" alt="Eufia" class="w-60 md:w-100" />
    <p>
      Hazlo <span class="font-semibold">fácil</span>. Hazlo con <span class="font-semibold text-brand">IA.</span>
    </p>
    <p class="max-w-6xl mx-auto text-secondary">
      Nuestro nombre se inspira en el término griego antiguo εὐφυΐα (euphyía),
      que significa "inteligencia natural".
      Eufia nace precisamente de esa idea: fusionar el talento natural de las personas con la potencia transformadora de la Inteligencia Artificial.
    </p>
  </div>
</section>

<section class="max-w-7xl mx-auto px-12 mt-16 mb-20">
  <header class="text-center mb-10">
    <h2 class="text-3xl md:text-4xl font-semibold">Preguntas frecuentes</h2>
  </header>

  <div class="mx-auto rounded-2xl overflow-hidden">
    <div class="divide-y divide-default">
      <details class="group p-6">
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <span class="text-base md:text-lg font-medium text-primary">¿Qué es un agente de IA y en qué se diferencia de un chatbot?</span>
          <span class="material-symbols-rounded text-secondary transition-transform duration-300 group-open:rotate-180">expand_more</span>
        </summary>
        <div class="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr]">
          <div class="overflow-hidden">
            <p class="mt-3 text-secondary">
              Un agente de IA es un sistema capaz de ejecutar tareas completas y procesos de varias etapas conectado a tus herramientas
              (por ejemplo, leer una factura, actualizar el ERP y enviar un informe).
              <br/>
              Un chatbot se centra en conversar y responder preguntas con la información de tu empresa,
              pero también puede formar parte de un agente:
              al conectarlo con sistemas, puede realizar acciones prácticas como agendar citas, gestionar reservas o crear tickets.        
            </p>
          </div>
        </div>
      </details>

      <details class="group p-6">
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <span class="text-base md:text-lg font-medium text-primary">¿Qué procesos o tareas se pueden automatizar en una pyme?</span>
          <span class="material-symbols-rounded text-secondary transition-transform duration-300 group-open:rotate-180">expand_more</span>
        </summary>
        <div class="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr]">
          <div class="overflow-hidden">
            <p class="mt-3 text-secondary">
              Facturación, documentos, correos, atención al cliente, citas, CRM/ERP, informes, inventario, pedidos...
              Casi cualquier tarea digital puede automatizarse, desde analizar datos hasta ejecutar acciones en sistemas.
              En EUFIA empezamos con un estudio gratuito de tus procesos y después proponemos las soluciones más adecuadas para tu empresa.
            </p>
          </div>
        </div>
      </details>

      <details class="group p-6">
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <span class="text-base md:text-lg font-medium text-primary">¿Cómo puede la IA ayudar a mejorar mi negocio?</span>
          <span class="material-symbols-rounded text-secondary transition-transform duration-300 group-open:rotate-180">expand_more</span>
        </summary>
        <div class="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr]">
          <div class="overflow-hidden">
            <p class="mt-3 text-secondary">
              Reduce tareas manuales y errores, acorta tiempos de respuesta y ofrece atención 24/7.
              Mejora la eficiencia operativa, la experiencia del cliente y las conversiones,
              liberando horas del equipo para poder centrarse en tareas que aporten valor real e impulsen el negocio.
            </p>
          </div>
        </div>
      </details>

      <details class="group p-6">
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <span class="text-base md:text-lg font-medium text-primary">¿Cómo puedo implementar IA en mi empresa?</span>
          <span class="material-symbols-rounded text-secondary transition-transform duration-300 group-open:rotate-180">expand_more</span>
        </summary>
        <div class="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr]">
          <div class="overflow-hidden">
            <p class="mt-3 text-secondary">
              La implementación de IA empieza con un análisis de procesos para detectar tareas que se pueden mejorar.
              En EUFIA ofrecemos un estudio gratuito y proponemos un piloto rápido adaptado a tus sistemas.
              Si funciona, la solución se escala progresivamente a más áreas. No necesitas grandes datos ni ser una gran empresa para empezar.            </p>
          </div>
        </div>
      </details>

      <details class="group p-6">
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <span class="text-base md:text-lg font-medium text-primary">¿Cuánto tarda un proyecto de IA?</span>
          <span class="material-symbols-rounded text-secondary transition-transform duration-300 group-open:rotate-180">expand_more</span>
        </summary>
        <div class="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr]">
          <div class="overflow-hidden">
            <p class="mt-3 text-secondary">
              Un piloto suele estar listo en 2–3 semanas, y una implantación completa entre 4–8 semanas según el alcance.
              Los primeros beneficios en productividad y tiempos se perciben desde las primeras semanas.
              Además, en EUFIA ofrecemos seguimiento y monitorización continua, con informes que muestran los resultados conseguidos y el ahorro estimado para tu empresa.
            </p>
          </div>
        </div>
      </details>

      <details class="group p-6">
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <span class="text-base md:text-lg font-medium text-primary">¿Es seguro usar IA en una pyme o empresa?</span>
          <span class="material-symbols-rounded text-secondary transition-transform duration-300 group-open:rotate-180">expand_more</span>
        </summary>
        <div class="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr]">
          <div class="overflow-hidden">
            <p class="mt-3 text-secondary">Sí, diseñamos con seguridad y RGPD por defecto: minimización y anonimización de datos, control de accesos y registro de actividad, cifrado en tránsito y en reposo, acuerdos de tratamiento y, cuando se requiere, alojamiento en la UE. Los datos siguen siendo de tu propiedad y se usan con fines definidos.</p>
          </div>
        </div>
      </details>
    </div>
  </div>
</section>

