<script lang="ts">
  import { enhance } from '$lib/form';
  import { tick } from 'svelte';
  
  let emailInput: HTMLInputElement | null = null;
  let messageInput: HTMLTextAreaElement | null = null;
  let sending = false;
  let sent = false;

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
          Impulsa tu <span class="text-brand">negocio</span>
        </h2>
        <p class="mt-8 text-lg mx-auto">
          Descubre cómo EUFIA puede ayudarte a optimizar tus procesos con inteligencia artificial.
        </p>
      </header>

      <div class="flex items-center justify-center lg:justify-start gap-2 mt-8">
        <span class="material-symbols-rounded text-brand !text-3xl md:!text-4xl">assignment</span>
        <h3 class="text-xl md:text-2xl font-semibold">Estudio gratuito personalizado</h3>
      </div>
      
      <p class="text-lg mt-4">
        Analizamos tu negocio sin compromiso y te mostramos las oportunidades de IA que pueden adaptarse a tus necesidades.
      </p>
      <div class="mt-6 flex-col sm:flex-row items-center justify-center gap-4 md:gap-20 hidden lg:flex">
        <img src="/eufia_transparent.svg" alt="EUFIA" class="w-30 md:w-40 lg:w-40" />
        <div class="text-center text-xl md:text-2xl">
          Hazlo <span class="font-semibold">fácil.</span> Hazlo con <span class="font-semibold text-brand">IA.</span>
        </div>
      </div>
    </div>

    <div class="w-full">
      <div class="bg-primary rounded-xl p-6 md:p-8">
        <h3 class="text-2xl font-semibold text-center">
          Solicita tu estudio gratuito de IA
        </h3>
        <p class="text-center mt-4">
          Te contactaremos en menos de 24h para analizar tu caso
        </p>
        
        <form class="space-y-4 mt-4" method="POST" use:enhance={enhanceOptions}>
          <input
            type="email" name="email" placeholder="Correo electrónico" required
            bind:this={emailInput}
            class="w-full px-4 py-3 bg-secondary rounded-lg
              focus:outline-none focus:ring-2 ring-default transition-all duration-200" />

          <div style="display:none;">
            <label for="website">Your website</label>
            <input type="text" name="website" id="website" placeholder="Your website" tabindex="-1" autocomplete="off" />
          </div>

          <textarea
            name="message" placeholder="Cuéntanos tu caso (opcional)" rows="4"
            bind:this={messageInput}
            class="w-full px-4 py-3 bg-secondary rounded-lg
              focus:outline-none focus:ring-2 ring-default transition-all duration-200"></textarea>

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
              Solicitar análisis
            {/if}
          </button>
          {#if sent}
            <p class="text-center">
              ¡Gracias por contactarnos! Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.
            </p>
          {/if}
        </form>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-20 mx-auto lg:hidden">
      <img src="/eufia_transparent.svg" alt="EUFIA" class="w-30 md:w-40 lg:w-40" />
      <div class="text-center text-xl md:text-2xl">
        Hazlo <span class="font-semibold">fácil.</span> Hazlo con <span class="font-semibold text-brand">IA.</span>
      </div>
    </div>
  </div>
</section>
