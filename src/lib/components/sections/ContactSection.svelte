<script lang="ts">
  import { enhance } from '$lib/form';
  import { tick } from 'svelte';
  
  let emailInput: HTMLInputElement | null = null;
  let messageInput: HTMLTextAreaElement | null = null;
  let sending = false;
  let sent = false;
  let requestType = 'demo';

  const enhanceOptions = {
    pending: () => { sending = true; sent = false; },
    result: async ({ response }: { response: Response }) => {
      sending = false;
      if (response.ok) { await tick(); sent = true; }
    }
  };
</script>

<section id="contacto" class="max-w-7xl mx-auto px-8 md:px-16">
  <div class="flex flex-col lg:flex-row items-start gap-6 lg:gap-12">
    <div class="w-full text-center lg:text-left lg:mt-4">
      <header>
        <h2 class="text-4xl font-semibold">
          ¿Listo para <span class="text-brand">empezar</span>?
        </h2>
        <p class="mt-8 text-lg mx-auto">
          Solicita una demostración personalizada o empieza tu prueba gratuita hoy mismo.
        </p>
      </header>

      <div class="mt-8 space-y-4">
        <div class="flex items-center gap-3">
          <span class="material-symbols-rounded text-brand !text-2xl">schedule</span>
          <span class="text-lg">Respuesta en menos de 24 horas</span>
        </div>
        <div class="flex items-center gap-3">
          <span class="material-symbols-rounded text-brand !text-2xl">videocam</span>
          <span class="text-lg">Demo online o presencial en Baleares</span>
        </div>
        <div class="flex items-center gap-3">
          <span class="material-symbols-rounded text-brand !text-2xl">credit_card_off</span>
          <span class="text-lg">Sin tarjeta de crédito para empezar</span>
        </div>
      </div>

      <div class="mt-8 hidden lg:block">
        <a
          href="https://control-horario.eufia.eu/register"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-lg bg-brand text-inverse px-6 py-3
            hover:scale-102 transition-transform duration-200 font-medium">
          <span>Ir a la aplicación</span>
          <span class="material-symbols-rounded">open_in_new</span>
        </a>
      </div>
    </div>

    <div class="w-full">
      <div class="bg-primary rounded-xl p-6 md:p-8">
        <h3 class="text-2xl font-semibold text-center">
          Contacta con nosotros
        </h3>
        
        <form class="space-y-4 mt-6" method="POST" use:enhance={enhanceOptions}>
          <!-- Request Type -->
          <div class="flex gap-2">
            <button
              type="button"
              class="flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200
                {requestType === 'demo' 
                  ? 'bg-brand text-inverse' 
                  : 'bg-secondary text-primary hover:bg-stone-200'}"
              on:click={() => requestType = 'demo'}
            >
              Solicitar demo
            </button>
            <button
              type="button"
              class="flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200
                {requestType === 'info' 
                  ? 'bg-brand text-inverse' 
                  : 'bg-secondary text-primary hover:bg-stone-200'}"
              on:click={() => requestType = 'info'}
            >
              Más información
            </button>
          </div>

          <input
            type="email" name="email" placeholder="Correo electrónico" required
            bind:this={emailInput}
            class="w-full px-4 py-3 bg-secondary rounded-lg
              focus:outline-none focus:ring-2 ring-default transition-all duration-200" />

          <input
            type="text" name="empresa" placeholder="Nombre de tu empresa (opcional)"
            class="w-full px-4 py-3 bg-secondary rounded-lg
              focus:outline-none focus:ring-2 ring-default transition-all duration-200" />

          <!-- Honeypot fields -->
          <span class="sr-only">Empresa</span>
          <input class="sr-only" type="text" name="company" id="company" placeholder="Tu empresa" tabindex="-1" autocomplete="off" />
          <label class="sr-only" for="website">Sitio web</label>
          <input class="sr-only" type="text" name="website" id="website" placeholder="Tu sitio web" tabindex="-1" autocomplete="off" />

          <textarea
            name="message" 
            placeholder="{requestType === 'demo' 
              ? '¿Cuántos empleados tienes? ¿Alguna pregunta específica?' 
              : '¿En qué podemos ayudarte?'}" 
            rows="3"
            bind:this={messageInput}
            class="w-full px-4 py-3 bg-secondary rounded-lg
              focus:outline-none focus:ring-2 ring-default transition-all duration-200"
          ></textarea>

          <span class="sr-only">Información</span>
          <textarea
            class="sr-only" name="information" placeholder="Añade información" rows="4" tabindex="-1" autocomplete="off"
          ></textarea>

          <!-- Hidden field for request type -->
          <input type="hidden" name="tipo" value={requestType} />

          <button
            type="submit" disabled={sending}
            class="w-full py-3 px-6 font-semibold text-inverse rounded-lg
              flex items-center justify-center gap-2 transition-all duration-200
              disabled:opacity-70 disabled:cursor-not-allowed
              hover:scale-102
              {sent ? 'bg-green-600' : 'bg-brand'}">
            {#if sending}
              <span class="w-5 h-5 border-2 border-inverse border-t-transparent rounded-full animate-spin"></span>
              Enviando…
            {:else if sent}
              <span class="material-symbols-rounded">check_circle</span>
              ¡Enviado!
            {:else}
              {requestType === 'demo' ? 'Solicitar demo' : 'Enviar mensaje'}
            {/if}
          </button>
          {#if sent}
            <p class="text-center text-secondary">
              ¡Gracias! Te contactaremos en menos de 24 horas.
            </p>
          {/if}
        </form>
      </div>
    </div>

    <div class="lg:hidden w-full text-center">
      <a
        href="https://control-horario.eufia.eu/register"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 rounded-lg bg-brand text-inverse px-6 py-3
          hover:scale-102 transition-transform duration-200 font-medium">
        <span>Ir a la aplicación</span>
        <span class="material-symbols-rounded">open_in_new</span>
      </a>
    </div>
  </div>

  <p class="mt-6 text-xs text-secondary leading-relaxed text-center max-w-4xl mx-auto">
    Tratamos tus datos para responder a tu solicitud de contacto o demo. Conservación máxima: 12 meses.
    Puedes ejercer tus derechos en
    <a href="mailto:info@eufia.eu" class="text-brand hover:underline">info@eufia.eu</a>.
    Más información en nuestra
    <a href="/politica-privacidad" class="text-brand hover:underline">Política de Privacidad</a>.
  </p>
</section>
