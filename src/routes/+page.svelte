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
  <title>EUFIA – Consultoría de Inteligencia Artificial</title>
  <meta name="description" content="Consultoría de IA para PYMEs en Mallorca" />
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <!-- Hero Section (sin card) -->
  <section class="text-center mb-16">
    <div class="flex items-center justify-center gap-20">
      <img src="/eufia_light_rectangular_transparent.svg" alt="EUFIA" class="w-100" />
    </div>
    <h2 class="text-xl md:text-2xl font-medium mb-8">
      Impulsamos tu negocio con <span class="font-semibold">Inteligencia Artificial</span>
    </h2>
    <div class="max-w-6xl mx-auto space-y-8">
      <p class="text-lg">
        Somos EUFIA, una consultora de IA con sede en
        <span class="font-medium text-primary">Mallorca</span>. 
        Ayudamos a pequeñas y medianas empresas a aprovechar el poder de la Inteligencia
        Artificial para optimizar sus procesos, reducir costes y ganar ventaja competitiva.
      </p>
      <p class="text-secondary">
        Nuestro nombre se inspira en el término griego antiguo εὐφυΐα (euphyía),
        que significa "inteligencia natural".
        Eufia nace precisamente de esa idea: fusionar el talento natural de las personas con la potencia transformadora de la Inteligencia Artificial.
      </p>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="max-w-md mx-auto">
    <div class="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8">
      <h3 class="text-2xl font-semibold mb-6 text-center">¿Hablamos?</h3>
      
      <form class="space-y-4" method="POST" use:enhance={enhanceOptions}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Tu correo electrónico"
            required
            bind:this={emailInput}
            class="w-full px-4 py-3 bg-default border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
          />
        </div>
        
        <div>
          <textarea
            name="message"
            placeholder="Cuéntanos tu caso (opcional)"
            rows="4"
            bind:this={messageInput}
            class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 resize-none"
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={sending || sent}
          class="w-full py-3 px-6 font-semibold rounded-lg transition-all duration-200
            flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowe
            shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
            {sent ? 'bg-green-500' : 'bg-brand'} text-white"
        >
          {#if sending}
            <span class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            Enviando…
          {:else if sent}
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            ¡Enviado!
          {:else}
            Quiero saber más
          {/if}
        </button>
      </form>

      <!-- Success/Error Messages -->
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
  </section>
</div>

