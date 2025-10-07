<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { cubicIn, cubicOut } from 'svelte/easing';
  
  let step = 0;
  let currentText = '';
  
  const timeline = [
    { step: 1, label: 'Recibe un email con una factura adjunta', delay: 0 },
    { step: 2, label: 'El agente detecta la factura y procesa los datos', delay: 3000 },
    { step: 3, label: 'Analiza el contenido y decide la acción', delay: 6000 },
    { step: 4, label: 'Actualiza el ERP/CRM con la información de la factura', delay: 9000 },
    { step: 5, label: 'Procesa el pago y notifica al cliente', delay: 12000 },
  ];
  
  function startAnimation() {
    step = 0;
    currentText = '';
    
    timeline.forEach((item) => {
      setTimeout(() => {
        step = item.step;
        currentText = item.label;
      }, item.delay);
    });
    
    setTimeout(() => {
      setTimeout(() => startAnimation(), 1500);
    }, 12000);
  }
  
  onMount(() => {
    startAnimation();
  });
</script>

<div class="w-full h-full flex flex-col items-center justify-center gap-6 bg-secondary rounded-xl p-6">
  <div class="text-center text-lg w-full">
    <div class="relative h-14 lg:h-12">
      {#key currentText}
        <span
          in:fly={{ y: 10, duration: 300, easing: cubicIn }}
          out:fly={{ y: -10, duration: 300, easing: cubicOut }}
          class="absolute inset-0 will-change-transform"
          aria-live="polite"
        >
          {currentText}
        </span>
      {/key}
    </div>
    <div
      class="mx-auto mt-4 bg-primary border-2 border-brand rounded-lg flex items-center justify-center
        animate-pulse aspect-square size-16"
    >
      <span class="material-symbols-rounded text-brand !text-6xl">network_intelligence</span>
    </div>
  </div>

  <div class="mx-auto w-full mt-2 lg:mt-4 flex flex-col sm:flex-row justify-center items-center">
    <div
      class="flex items-center justify-center size-14 p-2 bg-primary
        border-2  rounded-lg transition-all duration-400
        {step == 1 ? 'border-brand' : 'border-default'}"
    >
      <img src="/integrations/gmail.png" alt="Gmail" class="w-10" />
    </div>

    <div
      class="h-6 w-0.5 mx-auto sm:h-0.5 sm:w-12 sm:mx-0 bg-border opacity-0 transition-opacity duration-400 ease-in"
      class:bg-brand={step == 2}
      class:opacity-100={step >=2}
    ></div>

    <div
      class="flex items-center justify-center size-14 p-2 bg-primary
        border-2 rounded-lg opacity-0 transition-all duration-400 ease-in
        {step == 2 ? 'border-brand' : 'border-default'}"
      class:border-brand={step == 2}
      class:opacity-100={step >= 2}
    >
      <img src="/integrations/word.png" alt="Word" class="w-10" />
    </div>

    <div
      class="h-6 w-0.5 mx-auto sm:h-0.5 sm:w-12 sm:mx-0 bg-border opacity-0 transition-opacity duration-400 ease-in"
      class:bg-brand={step == 3}
      class:opacity-100={step >=3}
    ></div>

    <div
      class="flex items-center justify-center size-14 p-2 bg-primary
        border-2 rounded-lg opacity-0 transition-all duration-400 ease-in
        {step == 3 ? 'border-brand' : 'border-default'}"
      class:border-brand={step == 3}
      class:opacity-100={step >= 3}
    >
      <img src="/integrations/chatgpt.png" alt="ChatCPT" class="w-10" />
    </div>

    <div
      class="h-6 w-0.5 mx-auto sm:h-0.5 sm:w-12 sm:mx-0 bg-border opacity-0 transition-opacity duration-400 ease-in"
      class:bg-brand={step == 4}
      class:opacity-100={step >=4}
    ></div>

    <div
      class="flex items-center justify-center size-14 p-2 bg-primary
        border-2 rounded-lg opacity-0 transition-all duration-400 ease-in
        {step == 4 ? 'border-brand' : 'border-default'}"
      class:border-brand={step == 4}
      class:opacity-100={step >= 4}
    >
      <img src="/integrations/odoo.png" alt="CRM/ERP" class="w-10" />
    </div>

    <div
      class="h-6 w-0.5 mx-auto sm:h-0.5 sm:w-12 sm:mx-0 bg-border opacity-0 transition-opacity duration-400 ease-in"
      class:bg-brand={step == 5}
      class:opacity-100={step >=5}
    ></div>

    <div
      class="flex items-center justify-center size-14 p-2 bg-primary
        border-2 rounded-lg opacity-0 transition-all duration-400 ease-in
        {step == 5 ? 'border-brand' : 'border-default'}"
      class:border-brand={step == 5}
      class:opacity-100={step >= 5}
    >
      <img src="/integrations/whatsapp.png" alt="WhatsApp" class="w-10" />
    </div>
  </div>
</div>
