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
    setTimeout(() => (sent = false), 2000);
  }

  $: if (form?.success && emailInput && messageInput) {
    emailInput.value = '';
    messageInput.value = '';
  }

  const enhanceOptions = {
    pending: () => { sending = true; sent = false; },
    result: async ({ response }: { response: Response }) => {
      sending = false;
      if (response.ok) { await tick(); resetSent(); }
    }
  };
</script>

<section id="contacto" class="mx-4 mt-12 mb-8">
  <div class="max-w-md mx-auto">
    <div class="bg-primary border border-default rounded-xl shadow-lg p-6">
      <h2 class="text-2xl font-semibold mb-6 text-center">Contacto</h2>
      <form class="space-y-4" method="POST" use:enhance={enhanceOptions}>
        <input
          type="email" name="email" placeholder="Correo electrónico" required
          bind:this={emailInput}
          class="w-full px-4 py-3 bg-secondary border border-default rounded-lg
            focus:outline-none focus:ring-2 ring-default transition-all duration-200" />

        <div style="display:none;">
          <label for="website">Your website</label>
          <input type="text" name="website" id="website" placeholder="Your website" tabindex="-1" autocomplete="off" />
        </div>

        <textarea
          name="message" placeholder="Cuéntanos tu caso (opcional)" rows="4"
          bind:this={messageInput}
          class="w-full px-4 py-3 bg-secondary border border-default rounded-lg
            focus:outline-none focus:ring-2 ring-default transition-all duration-200"></textarea>

        <button
          type="submit" disabled={sending}
          class="w-full py-3 px-6 font-semibold text-inverse rounded-lg shadow-lg
            flex items-center justify-center gap-2 transition-all duration-200
            disabled:opacity-70 disabled:cursor-not-allowed border
            hover:shadow-xl transform hover:-translate-y-0.5
            hover:border-brand
            {sent ? 'bg-green-600' : 'bg-brand'}">
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


