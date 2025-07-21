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
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />
</svelte:head>

<section class="hero">
  <h1 class="logo">EUFIA</h1>
  <h2>Impulsamos tu negocio con Inteligencia Artificial</h2>
  <p>
    Somos EUFIA, una consultora de IA con sede en Mallorca. Nos enfocamos en ayudar a las
    pequeñas y medianas empresas a aprovechar el poder de la inteligencia artificial para
    crecer, optimizar sus procesos y ganar ventaja competitiva.
  </p>
  <p>
    Nuestro nombre proviene de la palabra griega antigua <em>εὐφυΐα</em> (euphyía), que significa
    ingenio o buen juicio; ese es el espíritu que aportamos a cada proyecto.
  </p>
</section>

<section class="contact">
  <h3>¿Hablamos?</h3>
  <form class="contact-form" method="POST" use:enhance={enhanceOptions}>
    <input
      type="email"
      name="email"
      placeholder="Tu correo electrónico"
      required
      bind:this={emailInput}
    />
    <textarea
      name="message"
      placeholder="Cuéntanos tu caso (opcional)"
      rows="4"
      bind:this={messageInput}
    ></textarea>
    <button
      type="submit"
      class:enviado={sent}
      disabled={sending || sent}
    >
      {#if sending}
        <span class="spinner"></span> Enviando…
      {:else if sent}
        ✓ Enviado
      {:else}
        Quiero saber más
      {/if}
    </button>
  </form>
  {#if form?.success}
    <p class="success">
      ¡Gracias por contactarnos! Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.
    </p>
  {:else if form?.error}
    <p class="error">{form.error}</p>
  {/if}
</section>

<style>
  .hero {
    text-align: center;
    margin-top: 4rem;
  }

  .logo {
    font-size: 3rem;
    font-weight: 600;
    color: var(--accent-color);
    margin: 0;
  }

  .hero h2 {
    margin: 1rem 0;
    font-size: 1.5rem;
    font-weight: 400;
  }

  .contact {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .contact-form {
    width: 100%;
    max-width: 420px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input,
  textarea {
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 4px;
    font-family: inherit;
  }

  button {
    padding: 0.75rem 1rem;
    background: var(--accent-color);
    color: #fff;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    position: relative;
  }

  button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  button.enviado {
    background: #2ecc40;
    color: #fff;
  }

  .spinner {
    width: 1em;
    height: 1em;
    border: 2px solid #fff;
    border-top: 2px solid var(--accent-color);
    border-radius: 50%;
    display: inline-block;
    animation: spin 0.8s linear infinite;
    margin-right: 0.5em;
    vertical-align: middle;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .success {
    margin-top: 1rem;
    color: green;
    font-weight: 500;
    text-align: center;
  }

  .error {
    margin-top: 1rem;
    color: red;
    text-align: center;
  }
</style>
