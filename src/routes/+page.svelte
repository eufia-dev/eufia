<script lang="ts">
  import { enhance } from '$lib/form';
  export let form: any;
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
  <form class="contact-form" method="POST" use:enhance>
    <input
      type="email"
      name="email"
      placeholder="Tu correo electrónico"
      required
    />
    <textarea
      name="message"
      placeholder="Cuéntanos tu caso (opcional)"
      rows="4"
    ></textarea>
    <button type="submit">
      Quiero saber más
    </button>
  </form>
  {#if form?.success}
    <p class="success">¡Gracias! Nos pondremos en contacto contigo muy pronto.</p>
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
  }

  button:hover:enabled {
    background: #e56d00;
  }

  .success {
    margin-top: 1rem;
    color: green;
  }

  .error {
    margin-top: 1rem;
    color: red;
  }
</style>
