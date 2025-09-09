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
  <section class="text-center mb-16">
    <img src="/eufia_transparent.svg" alt="EUFIA" class="mx-auto w-100" />
    <h2 class="text-xl md:text-2xl font-medium mb-8">
      Impulsamos tu negocio con <span class="font-semibold text-brand">Inteligencia Artificial</span>
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

  <section class="max-w-md mx-auto">
    <div class="bg-primary rounded-xl shadow-lg p-6">
      <h3 class="text-2xl font-semibold mb-6 text-center">¿Hablamos?</h3>
      
      <form class="space-y-4" method="POST" use:enhance={enhanceOptions}>
        <input
          type="email"
          name="email"
          placeholder="Tu correo electrónico"
          required
          bind:this={emailInput}
          class="w-full px-4 py-3 bg-secondary border border-default rounded-lg
            focus:outline-none focus:ring-2 ring-default transition-all duration-200"
        />
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

