<script lang="ts">
  import HeroSection from '$lib/components/sections/HeroSection.svelte';
  import ContextSection from '$lib/components/sections/ContextSection.svelte';
  import FeaturesSection from '$lib/components/sections/FeaturesSection.svelte';
  import HowItWorksSection from '$lib/components/sections/HowItWorksSection.svelte';
  import AppShowcaseSection from '$lib/components/sections/AppShowcaseSection.svelte';
  import PricingSection from '$lib/components/sections/PricingSection.svelte';
  import GestoriasTeaser from '$lib/components/sections/GestoriasTeaser.svelte';
  import AboutSection from '$lib/components/sections/AboutSection.svelte';
  import ContactSection from '$lib/components/sections/ContactSection.svelte';
  import FAQSection from '$lib/components/sections/FAQSection.svelte';
</script>

<svelte:head>
  <title>EUFIA Control Horario - Software de Fichaje Digital para Empresas</title>
  <meta name="description" content="Cumple con el nuevo Real Decreto de control horario. Software de fichaje digital para PYMEs en España: fácil de usar, sin hardware, listo en 2 minutos. Primer mes gratis." />
  
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "EUFIA - Control Horario",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, iOS, Android",
      "description": "Software de control horario digital para empresas. Cumple con el Real Decreto de registro de jornada laboral.",
      "offers": {
        "@type": "Offer",
        "price": "1.20",
        "priceCurrency": "EUR",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "1.20",
          "priceCurrency": "EUR",
          "unitText": "usuario/mes",
          "referenceQuantity": {
            "@type": "QuantitativeValue",
            "value": "1",
            "unitCode": "MON"
          }
        }
      },
      "provider": {
        "@type": "Organization",
        "name": "EUFIA",
        "url": "https://www.eufia.eu",
        "logo": "https://www.eufia.eu/eufia_1200.png",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mallorca",
          "addressRegion": "Islas Baleares",
          "addressCountry": "ES"
        }
      },
      "featureList": [
        "Fichaje web y móvil",
        "Cumplimiento Real Decreto",
        "Informes exportables",
        "Fichaje por WhatsApp",
        "Analíticas por proyectos"
      ],
      "screenshot": "https://www.eufia.eu/screenshots/main.png"
    }
  </script>
  
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Es obligatorio el control horario digital?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. El nuevo Real Decreto exigirá a todas las empresas en España implementar sistemas digitales de registro de jornada laboral. Ya no serán válidos los registros en papel ni las hojas de cálculo manuales."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué pasa si no cumplo con la normativa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Las sanciones por incumplimiento pueden ir desde los 70€ para infracciones leves hasta los 225.018€ en casos muy graves. Lo más habitual es que las infracciones se resuelvan con una multas entre 1.000€ y 3.000€. Además, ante una inspección de trabajo sin registros válidos, la empresa queda expuesta a reclamaciones laborales."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuánto tiempo lleva implementar EUFIA Control Horario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Menos de 2 minutos. Creas tu cuenta, añades a tus empleados por email y ya pueden empezar a fichar. No hay instalaciones, ni configuraciones técnicas, ni hardware que comprar."
          }
        },
        {
          "@type": "Question",
          "name": "¿Mis empleados necesitan instalar algo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No es obligatorio. Pueden fichar desde cualquier navegador web sin instalar nada. Opcionalmente, pueden usar nuestra app móvil o incluso fichar por WhatsApp."
          }
        },
        {
          "@type": "Question",
          "name": "¿Es válido ante una inspección de trabajo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. EUFIA Control Horario genera registros con marca temporal verificable, almacenados de forma segura y accesibles inmediatamente. Cumple con todos los requisitos del Real Decreto."
          }
        },
        {
          "@type": "Question",
          "name": "¿Hay permanencia o compromiso?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Puedes cancelar en cualquier momento sin penalización. El primer mes es gratis para probar todas las funcionalidades sin compromiso."
          }
        }
      ]
    }
  </script>
  
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "EUFIA",
      "url": "https://www.eufia.eu",
      "logo": "https://www.eufia.eu/eufia_1200.png",
      "description": "Software de control horario digital para empresas en España.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mallorca",
        "addressRegion": "Islas Baleares",
        "addressCountry": "ES"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+34-686-733-922",
        "contactType": "sales",
        "email": "info@eufia.eu",
        "availableLanguage": "Spanish"
      },
      "sameAs": [
        "https://www.linkedin.com/company/eufia",
        "https://www.instagram.com/eufia_consulting"
      ]
    }
  </script>
</svelte:head>

<div class="space-y-24 md:space-y-30 2xl:space-y-40 mb-10">
  <HeroSection />
  
  <ContextSection />
  
  <FeaturesSection />
  
  <HowItWorksSection />
  
  <AppShowcaseSection />
  
  <PricingSection />
  
  <GestoriasTeaser />
  
  <AboutSection />
  
  <ContactSection />
   
  <FAQSection />
</div>
