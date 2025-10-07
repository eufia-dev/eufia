<script>
  import { webVitals } from '$lib/vitals';
  import { browser } from '$app/environment';
  import { page } from '$app/state';

  import '../app.css';
  
  let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

  let mobileMenuOpen = false;
  
  function closeMobileMenu() {
    mobileMenuOpen = false;
  }

  $: if (browser && analyticsId) {
    webVitals({
      path: page.url.pathname,
      params: {},
      analyticsId
    });
  }
</script>

<svelte:head>
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="es_ES" />
  <meta property="og:site_name" content="EUFIA"/>
  <meta property="og:title" content="Consultoría de Inteligencia Artificial en Mallorca | Eufia" />
  <meta property="og:description" content="Consultoría de inteligencia artificial en Mallorca y Baleares. Especialistas en automatización para PYMEs y empresas en España: chatbots, agentes de IA e integración rápida con tus herramientas." />
  <meta property="og:url" content="https://www.eufia.eu/" />
  <meta property="og:image" content="https://www.eufia.eu/eufia_1200.png" />
  <meta property="og:image:secure_url" content="https://www.eufia.eu/eufia_1200.png" />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Eufia - Consultoría de IA en Mallorca" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Consultoría de Inteligencia Artificial en Mallorca | Eufia" />
  <meta name="twitter:description" content="Consultoría de inteligencia artificial en Mallorca y Baleares. Especialistas en automatización para PYMEs y empresas en España: chatbots, agentes de IA e integración rápida con tus herramientas." />
  <meta name="twitter:image" content="https://www.eufia.eu/eufia_1200.png" />
  <meta name="twitter:image:alt" content="Eufia - Consultoría de IA en Mallorca" />
  <meta name="twitter:url" content="https://www.eufia.eu/" />
  <meta name="twitter:domain" content="eufia.eu" />

  <link rel="canonical" href="https://www.eufia.eu/" />
  <link rel="alternate" hreflang="es-ES" href="https://www.eufia.eu/" />
  <link rel="alternate" hreflang="es" href="https://www.eufia.eu/" />
  <link rel="alternate" hreflang="x-default" href="https://www.eufia.eu/" />
</svelte:head>

<main class="min-h-screen text-primary bg-default">
  <header
    class="sticky top-0 z-40"
  >
    <div class="relative">
      <div class="flex items-center justify-between gap-4 bg-gradient-to-b from-stone-50 via-stone-50 to-stone-50/90">
        <a href="/" aria-label="Inicio">
          <img src="/eufia_transparent.svg" alt="Eufia" class="w-28 mx-1 md:mx-4 my-2" />
        </a>
        <nav class="hidden px-8 py-4 md:flex items-center gap-8">
          <div class="relative group left-1">
            <a
              href="/#soluciones"
              class="flex items-center gap-1 hover:text-brand transition-colors duration-200"
            >
              <span class="border-b border-transparent hover:border-brand transition-colors duration-200">Soluciones</span>
              <span class="material-symbols-rounded transition-transform duration-200 group-hover:rotate-180">expand_more</span>
            </a>
            <div
              class="absolute top-full left-0 mt-2 bg-primary border border-default rounded-lg overflow-hidden
                opacity-0 invisible max-h-0 group-hover:opacity-100 group-hover:visible group-hover:max-h-40
                transition-all duration-250 z-50"
            >
              <div class="py-1">
                <a href="/#agentes-ia" class="block px-4 py-2 group/item">
                  <span class="border-b border-transparent group-hover/item:text-brand group-hover/item:border-brand transition-colors duration-200">
                    Agentes IA
                  </span>
                </a>
                <a href="/#chatbots" class="block px-4 py-2 group/item">
                  <span class="border-b border-transparent group-hover/item:text-brand group-hover/item:border-brand transition-colors duration-200">
                    Chatbots
                  </span>
                </a>
                <a href="/#automatizaciones" class="block px-4 py-2 group/item">
                  <span class="border-b border-transparent group-hover/item:text-brand group-hover/item:border-brand transition-colors duration-200">
                    Automatizaciones
                  </span>
                </a>
              </div>
            </div>
          </div>
          <a href="/#sectores"
            class="border-b border-transparent hover:text-brand hover:border-brand transition-colors duration-200"
          >
            Sectores
          </a>
          <a href="/#beneficios"
            class="border-b border-transparent hover:text-brand hover:border-brand transition-colors duration-200"
          >
            Beneficios
          </a>
          <a href="/#conocenos"
            class="border-b border-transparent hover:text-brand hover:border-brand transition-colors duration-200"
          >
            Conócenos
          </a>
          <a href="/#contacto"
            class="rounded-lg bg-brand text-inverse px-3 py-1.5 hover:scale-102 transition-transform duration-200"
          >
            Contacto
          </a>
        </nav>
        <button
          aria-label="Menú"
          aria-expanded={mobileMenuOpen}
          class="md:hidden mx-6 my-4 hover:text-brand transition-colors duration-200"
          on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
        >
          <span class="relative block w-6 h-6" aria-hidden="true">
            <span
              class="absolute left-0 right-0 top-1 block h-[2px] rounded bg-current transition-transform duration-200 ease-in-out"
              class:translate-y-[7px]={mobileMenuOpen}
              class:rotate-45={mobileMenuOpen}
            ></span>
            <span
              class="absolute left-0 right-0 top-1/2 -translate-y-1/2 block h-[2px] rounded bg-current transition-opacity duration-200 ease-in-out"
              class:opacity-0={mobileMenuOpen}
            ></span>
            <span
              class="absolute left-0 right-0 bottom-1 block h-[2px] rounded bg-current transition-transform duration-200 ease-in-out"
              class:-translate-y-[7px]={mobileMenuOpen}
              class:-rotate-45={mobileMenuOpen}
            ></span>
          </span>
        </button>
      </div>
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-x-0 -bottom-14 h-14
          bg-gradient-to-b from-stone-50/90 via-stone-50/60 to-transparent
          {mobileMenuOpen ? 'w-0 duration-300' : 'w-full duration-100'}
          transition-width ease-in-out"
      ></div>
    </div>
  </header>

  <div
    class={`fixed inset-0 z-30 bg-default transform transition-transform duration-250 ease-in-out
      ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
    role="dialog"
    aria-modal="true"
    aria-hidden={!mobileMenuOpen}
  >
    <nav class="mt-20 mb-10 px-6 z-40">
      <a
        href="/#soluciones"
        class="flex items-center justify-between !text-xl py-2 hover:text-brand transition-colors duration-200 relative group"
        on:click={closeMobileMenu}
      >
        <span>Soluciones</span>
        <span class="material-symbols-rounded group-hover:-translate-x-2 transition-all duration-300">arrow_forward</span>
        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
      </a>
      <div class="my-1 ml-1">
        <a
          href="/#agentes-ia"
          class="flex items-center justify-between !text-xl py-2 pl-4 hover:text-brand transition-colors duration-200 relative group"
          on:click={closeMobileMenu}
        >
          <span>Agentes IA</span>
          <span class="material-symbols-rounded group-hover:-translate-x-2 transition-all duration-300">arrow_forward</span>
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="/#chatbots"
          class="flex items-center justify-between !text-xl py-2 pl-4 hover:text-brand transition-colors duration-200 relative group"
          on:click={closeMobileMenu}
        >
          <span>Chatbots</span>
          <span class="material-symbols-rounded group-hover:-translate-x-2 transition-all duration-300">arrow_forward</span>
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="/#automatizaciones"
          class="flex items-center justify-between !text-xl py-2 pl-4 hover:text-brand transition-colors duration-200 relative group"
          on:click={closeMobileMenu}
        >
          <span>Automatizaciones</span>
          <span class="material-symbols-rounded group-hover:-translate-x-2 transition-all duration-300">arrow_forward</span>
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
      <a
        href="/#sectores"
        class="flex items-center justify-between !text-xl py-2 hover:text-brand transition-colors duration-200 relative group"
        on:click={closeMobileMenu}
      >
        <span>Sectores</span>
        <span class="material-symbols-rounded group-hover:-translate-x-2 transition-all duration-300">arrow_forward</span>
        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
      </a>
      <a
        href="/#beneficios"
        class="flex items-center justify-between !text-xl py-2 hover:text-brand transition-colors duration-200 relative group"
        on:click={closeMobileMenu}
      >
        <span>Beneficios</span>
        <span class="material-symbols-rounded group-hover:-translate-x-2 transition-all duration-300">arrow_forward</span>
        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
      </a>
      <a
        href="/#conocenos"
        class="flex items-center justify-between !text-xl py-2 hover:text-brand transition-colors duration-200 relative group"
        on:click={closeMobileMenu}
      >
        <span>Conócenos</span>
        <span class="material-symbols-rounded group-hover:-translate-x-2 transition-all duration-300">arrow_forward</span>
        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
      </a>
      <a
        href="/#contacto"
        class="group relative flex items-center !text-xl py-2"
        on:click={closeMobileMenu}
      >
        <span
          class="relative z-10 inline-flex rounded-lg bg-brand text-inverse
            px-4 py-2 flex-none transition-[flex-grow,padding-right] duration-300 ease-in-out
            group-hover:flex-grow group-hover:pr-12"
        >
          Contacto
        </span>
        <span
          class="material-symbols-rounded absolute right-0 z-20 transition-all duration-300 ease-in-out
            group-hover:text-inverse group-hover:-translate-x-2"
        >
          arrow_forward
        </span>
      </a>
    </nav>
  </div>

  <slot />
  
  <footer class="bg-primary border-t border-default py-4">
    <div class="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <img src="/eufia_transparent.svg" alt="Eufia" class="w-24" />
      </div>

      <div class="flex items-center gap-3 flex-wrap justify-center">
        <a
          href="mailto:info@eufia.eu"
          class="inline-flex items-center gap-2 rounded-full border border-default px-4 py-2 text-sm text-primary hover:text-brand hover:border-brand transition-colors duration-200"
          aria-label="Correo electrónico: info@eufia.eu"
        >
          <span class="material-symbols-rounded !text-base">mail</span>
          <span>info@eufia.eu</span>
        </a>
        <a
          href="tel:+34686733922"
          class="inline-flex items-center gap-2 rounded-full border border-default px-4 py-2 text-sm text-primary hover:text-brand hover:border-brand transition-colors duration-200"
          aria-label="Teléfono: +34 686 733 922"
        >
          <span class="material-symbols-rounded !text-base">call</span>
          <span>+34 686 733 922</span>
        </a>
      </div>

      <div class="flex items-center gap-4">
        <a 
          href="https://www.instagram.com/eufia_consulting" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Instagram"
          class="text-primary hover:text-brand transition-colors duration-200"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        <a 
          href="https://www.linkedin.com/company/eufia" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          class="text-primary hover:text-brand transition-colors duration-200"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </div>
    </div>
  </footer>
</main>
