<script lang="ts">
  import { enhance } from '$lib/form';
  import { tick } from 'svelte';
  export let form: any;

  let emailInput: HTMLInputElement | null = null;
  let messageInput: HTMLTextAreaElement | null = null;
  let sending = false;
  let sent = false;

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
</script>

<svelte:head>
  <title>Consultoría de Inteligencia Artificial en Mallorca | EUFIA</title>
  <meta name="description" content="Consultoría de inteligencia artificial en Mallorca y Baleares. Especialistas en automatización para PYMEs y empresas en España: chatbots, agentes de IA e integración rápida con tus herramientas." />
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Qué tipo de proyectos de IA implementáis para PYMEs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Implantamos automatización de procesos (facturas, documentos, correos), chatbots con conocimiento propio y agentes de IA a medida. También hacemos analítica asistida por IA e integraciones con tus herramientas."
          }
        },
        {
          "@type": "Question",
          "name": "¿Trabajáis solo en Mallorca?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Atendemos en persona en Mallorca y el resto de las Islas Baleares. Para el resto de España trabajamos de forma remota con sesiones online y soporte continuo."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cómo es el proceso para empezar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "1) Diagnóstico inicial gratuito, 2) Taller de oportunidades y priorización, 3) Propuesta cerrada por fases, 4) Piloto rápido, 5) Despliegue y formación."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuánto tarda una implantación de IA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Un piloto suele estar listo en 2–3 semanas. Los proyectos completos tardan entre 4 y 8 semanas según el alcance y las integraciones necesarias."
          }
        },
        {
          "@type": "Question",
          "name": "¿Con qué herramientas y plataformas os integráis?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ERP/CRM (por ejemplo, Zoho, HubSpot), Google Workspace, Microsoft 365, WhatsApp Business, Shopify, WooCommerce, Slack y más mediante API."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cómo aseguráis la privacidad y el cumplimiento RGPD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Aplicamos minimización y anonimización de datos, acuerdos de tratamiento, y priorizamos proveedores con alojamiento en la UE cuando es posible. Adaptamos la solución a tus políticas y requisitos de cumplimiento."
          }
        },
        {
          "@type": "Question",
          "name": "¿Ofrecéis soporte y mantenimiento?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. Incluimos monitorización, ajustes continuos y mejoras periódicas. También podemos reentrenar modelos y ampliar integraciones según evolucionen tus necesidades."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuál es el coste de un proyecto?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Trabajamos con presupuesto cerrado por fases tras el taller inicial. Ajustamos el alcance al tamaño de la empresa y priorizamos entregas con retorno rápido."
          }
        }
      ]
    }
  </script>
</svelte:head>

<section class="text-center p-10 bg-gradient-to-b from-blue-50 via-orange-50 to-stone-50">
  <img src="/eufia_transparent.svg" alt="EUFIA" class="mx-auto w-100 md:w-140" />
  <h2 class="text-2xl md:text-4xl font-medium mt-4 mb-14">
    Impulsamos tu negocio con <span class="font-semibold text-brand">Inteligencia Artificial</span>
  </h2>
  <p class="text-lg md:text-xl max-w-6xl mx-auto mb-10">
    Somos EUFIA, una consultoría de IA con sede en
    <span class="font-medium text-primary">Mallorca</span>. 
    Ayudamos a pequeñas y medianas empresas a aprovechar el poder de la Inteligencia
    Artificial para optimizar sus procesos, reducir costes y ganar ventaja competitiva.
  </p>
  <p class="max-w-6xl mx-auto text-secondary">
    Nuestro nombre se inspira en el término griego antiguo εὐφυΐα (euphyía),
    que significa "inteligencia natural".
    EUFIA nace precisamente de esa idea: fusionar el talento natural de las personas con la potencia transformadora de la Inteligencia Artificial.
  </p>
</section>

<section class="max-w-6xl mx-auto px-12">
  <header class="text-center mb-8">
    <h2 class="text-4xl font-semibold">
      <span class="text-brand">IA</span> práctica para PYMEs

      quieres poner IA pero estas atascado? no sabes que puede hacer exactamente para mejorar tu negocio? no sabes por donde empezar?
      Se adapta a las necesidades de tu negocio, ahorrando más de 40 horas de trabajo al mes.
    </h2>
  </header>

  <div class="grid gap-6 md:grid-cols-3">
    <div class="rounded-2xl border border-default bg-primary p-6">
      <div class="mb-3 text-brand">
        <span class="material-symbols-rounded !text-4xl align-middle">settings_suggest</span>
      </div>
      <h3 class="text-lg font-semibold mb-1">Automatiza procesos</h3>
      <p class="text-secondary">Facturas, documentos y correos… sin esfuerzo.</p>
    </div>

    <div class="rounded-2xl border border-default bg-primary p-6">
      <div class="mb-3 text-brand">
        <span class="material-symbols-rounded !text-4xl align-middle">chat_bubble</span>
      </div>
      <h3 class="text-lg font-semibold mb-1">Chatbots inteligentes</h3>
      <p class="text-secondary">Responde 24/7 con tu propio conocimiento.</p>
    </div>

    <div class="rounded-2xl border border-default bg-primary p-6">
      <div class="mb-3 text-brand">
        <span class="material-symbols-rounded !text-4xl align-middle">smart_toy</span>
      </div>
      <h3 class="text-lg font-semibold mb-1">Agentes a medida</h3>
      <p class="text-secondary">Asistentes que trabajan con tus herramientas.</p>
    </div>
  </div>

  <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 text-sm">
    <div class="flex items-center gap-2 rounded-full border border-default bg-primary px-4 py-2">
      <span class="material-symbols-rounded !text-2xl">flash_on</span>
      <span>Implantación rápida</span>
    </div>
    <div class="flex items-center gap-2 rounded-full border border-default bg-primary px-4 py-2">
      <span class="material-symbols-rounded !text-2xl">link</span>
      <span>Integración con tus herramientas</span>
    </div>
    <div class="flex items-center gap-2 rounded-full border border-default bg-primary px-4 py-2">
      <span class="material-symbols-rounded !text-2xl">auto_awesome</span>
      <span>Tecnologías líderes</span>
    </div>
    <div class="flex items-center gap-2 rounded-full border border-default bg-primary px-4 py-2">
      <span class="material-symbols-rounded !text-2xl">verified_user</span>
      <span>Datos y seguridad primero</span>
    </div>
  </div>
</section>

<section class="max-w-6xl mx-auto px-12 mt-16">
  <header class="text-center mb-12">
    <h2 class="text-3xl md:text-4xl font-semibold mb-4">
      Casos de éxito con <span class="text-brand">IA</span>
    </h2>
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


<section class="mx-4 mt-12 mb-8">
  <div class="max-w-md mx-auto">
    <div class="bg-primary border border-default rounded-xl shadow-lg p-6">
      <h3 class="text-2xl font-semibold mb-6 text-center">¿Hablamos?</h3>
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
          class="w-full py-3 px-6 font-semibold text-white rounded-lg shadow-lg
            flex items-center justify-center gap-2 transition-all duration-200
            disabled:opacity-70 disabled:cursor-not-allowed
            hover:shadow-xl transform hover:-translate-y-0.5
            {sent ? 'bg-green-600' : 'bg-brand'}"
        >
          {#if sending}
            <span class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
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
    <img src="/eufia_transparent.svg" alt="EUFIA" class="w-60 md:w-100" />
    <p>
      Hazlo <span class="font-semibold">fácil</span>. Hazlo con <span class="font-semibold text-brand">IA.</span>
    </p>
  </div>
</section>

<section class="max-w-6xl mx-auto px-12 mt-16 mb-20">
  <header class="text-center mb-10">
    <h2 class="text-3xl md:text-4xl font-semibold">Preguntas frecuentes</h2>
  </header>

  <div class="mx-auto rounded-2xl overflow-hidden">
    <div class="divide-y divide-default">
      <details class="group p-6">
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <span class="text-base md:text-lg font-medium text-primary">¿Qué tipo de proyectos de IA implementáis para PYMEs?</span>
          <span class="material-symbols-rounded text-secondary transition-transform duration-300 group-open:rotate-180">expand_more</span>
        </summary>
        <div class="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr]">
          <div class="overflow-hidden">
            <p class="mt-3 text-secondary">Automatización de procesos (facturas, documentos, correos), chatbots con conocimiento propio y agentes de IA a medida. También analítica asistida por IA e integraciones con tus herramientas.</p>
          </div>
        </div>
      </details>

      <details class="group p-6">
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <span class="text-base md:text-lg font-medium text-primary">¿Trabajáis solo en Mallorca?</span>
          <span class="material-symbols-rounded text-secondary transition-transform duration-300 group-open:rotate-180">expand_more</span>
        </summary>
        <div class="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr]">
          <div class="overflow-hidden">
            <p class="mt-3 text-secondary">Atendemos en persona en Mallorca y el resto de las Islas Baleares. En el resto de España trabajamos de forma remota con sesiones online y soporte continuo.</p>
          </div>
        </div>
      </details>

      <details class="group p-6">
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <span class="text-base md:text-lg font-medium text-primary">¿Cómo es el proceso para empezar?</span>
          <span class="material-symbols-rounded text-secondary transition-transform duration-300 group-open:rotate-180">expand_more</span>
        </summary>
        <div class="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr]">
          <div class="overflow-hidden">
            <p class="mt-3 text-secondary">1) Diagnóstico inicial gratuito, 2) Taller de oportunidades y priorización, 3) Propuesta cerrada por fases, 4) Piloto rápido, 5) Despliegue y formación.</p>
          </div>
        </div>
      </details>

      <details class="group p-6">
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <span class="text-base md:text-lg font-medium text-primary">¿Cuánto tarda una implantación de IA?</span>
          <span class="material-symbols-rounded text-secondary transition-transform duration-300 group-open:rotate-180">expand_more</span>
        </summary>
        <div class="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr]">
          <div class="overflow-hidden">
            <p class="mt-3 text-secondary">Un piloto suele estar listo en 2–3 semanas. Los proyectos completos tardan entre 4 y 8 semanas según el alcance e integraciones.</p>
          </div>
        </div>
      </details>

      <details class="group p-6">
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <span class="text-base md:text-lg font-medium text-primary">¿Con qué herramientas y plataformas os integráis?</span>
          <span class="material-symbols-rounded text-secondary transition-transform duration-300 group-open:rotate-180">expand_more</span>
        </summary>
        <div class="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr]">
          <div class="overflow-hidden">
            <p class="mt-3 text-secondary">ERP/CRM (Zoho, HubSpot), Google Workspace, Microsoft 365, WhatsApp Business, Shopify, WooCommerce, Slack y más mediante API.</p>
          </div>
        </div>
      </details>

      <details class="group p-6">
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <span class="text-base md:text-lg font-medium text-primary">¿Cómo aseguráis la privacidad y el cumplimiento RGPD?</span>
          <span class="material-symbols-rounded text-secondary transition-transform duration-300 group-open:rotate-180">expand_more</span>
        </summary>
        <div class="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr]">
          <div class="overflow-hidden">
            <p class="mt-3 text-secondary">Aplicamos minimización y anonimización de datos, acuerdos de tratamiento y priorizamos proveedores con alojamiento en la UE cuando es posible. Adaptamos la solución a tus políticas.</p>
          </div>
        </div>
      </details>

      <details class="group p-6">
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <span class="text-base md:text-lg font-medium text-primary">¿Ofrecéis soporte y mantenimiento?</span>
          <span class="material-symbols-rounded text-secondary transition-transform duration-300 group-open:rotate-180">expand_more</span>
        </summary>
        <div class="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr]">
          <div class="overflow-hidden">
            <p class="mt-3 text-secondary">Sí. Incluimos monitorización, ajustes y mejoras continuas. Reentrenamos modelos y ampliamos integraciones según tus necesidades.</p>
          </div>
        </div>
      </details>

      <details class="group p-6">
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <span class="text-base md:text-lg font-medium text-primary">¿Cuál es el coste de un proyecto?</span>
          <span class="material-symbols-rounded text-secondary transition-transform duration-300 group-open:rotate-180">expand_more</span>
        </summary>
        <div class="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr]">
          <div class="overflow-hidden">
            <p class="mt-3 text-secondary">Trabajamos con presupuesto cerrado por fases tras el taller inicial. Ajustamos el alcance al tamaño de la empresa y priorizamos entregas con retorno rápido.</p>
          </div>
        </div>
      </details>
    </div>
  </div>
</section>

