<script lang="ts">
  import HeroSection from '$lib/components/sections/HeroSection.svelte';
  import SolutionsSection from '$lib/components/sections/SolutionsSection.svelte';
  import AgentsSection from '$lib/components/sections/AgentsSection.svelte';
  import ChatbotsSection from '$lib/components/sections/ChatbotsSection.svelte';
  import AutomationsSection from '$lib/components/sections/AutomationsSection.svelte';
  import BenefitsSection from '$lib/components/sections/BenefitsSection.svelte';
  import SectorsSection from '$lib/components/sections/SectorsSection.svelte';
  import AboutSection from '$lib/components/sections/AboutSection.svelte';
  import ContactSection from '$lib/components/sections/ContactSection.svelte';
  import FAQSection from '$lib/components/sections/FAQSection.svelte';
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
  
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Soluciones",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Service",
            "name": "Agentes a medida",
            "serviceType": "Agentes",
            "description": "Asistentes que trabajan con tus herramientas.",
            "areaServed": "ES",
            "url": "#agentes-ia",
            "provider": { "@type": "Organization", "name": "EUFIA" }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Service",
            "name": "Chatbots inteligentes",
            "serviceType": "Chatbots",
            "description": "Responde 24/7 con tu propio conocimiento.",
            "areaServed": "ES",
            "url": "#chatbots",
            "provider": { "@type": "Organization", "name": "EUFIA" }
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Service",
            "name": "Automatización de procesos",
            "serviceType": "Automatizaciones",
            "description": "Facturas, documentos, correos… sin esfuerzo.",
            "areaServed": "ES",
            "url": "#automatizaciones",
            "provider": { "@type": "Organization", "name": "EUFIA" }
          }
        }
      ]
    }
  </script>
</svelte:head>

<div class="space-y-24 md:space-y-30 2xl:space-y-40 mb-10">
  <HeroSection />
  
  <SolutionsSection />
  
  <AgentsSection />
  
  <ChatbotsSection />
  
  <AutomationsSection />
  
  <SectorsSection />
  
  <BenefitsSection />
  
  <AboutSection />
  
  <ContactSection />
   
  <FAQSection />
</div>
 