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

