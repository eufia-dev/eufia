<script lang="ts">
    let input = "";
    type Msg = { who: "user" | "bot"; text: string };
    let messages: Msg[] = [
      { who: "bot", text: "Hola 👋 Soy tu asistente. Pregúntame sobre tus datos: ventas, pedidos, citas…" }
    ];
  
    const canned: Record<string, string> = {
      ventas: "Las ventas de este mes crecieron un 12% vs. el mes anterior. Top producto: “Plan Pro”.",
      pedidos: "Tienes 37 pedidos pendientes. 12 con stock bajo, 5 requieren revisión de dirección.",
      citas: "Mañana hay 3 citas libres entre 10:00–12:00. ¿Quieres reservar una?",
      facturas: "Se han conciliado 92 facturas esta semana. 4 requieren aprobación manual.",
      default:
        "Puedo consultar datos en tu CRM/ERP, crear tickets o reservar citas. Prueba: \"ventas\", \"pedidos\", \"citas\" o \"facturas\"."
    };
  
    function reply(q: string) {
      const key = Object.keys(canned).find(k => q.toLowerCase().includes(k)) ?? "default";
      messages = [...messages, { who: "bot", text: canned[key] }];
    }
  
    function send() {
      if (!input.trim()) return;
      messages = [...messages, { who: "user", text: input }];
      const q = input;
      input = "";
      // simulate latency
      setTimeout(() => reply(q), 450);
    }
  
    function quickAsk(text: string) {
      input = text;
      send();
    }
  </script>
  
  <section class="rounded-3xl bg-orange-50 p-8 ring-1 ring-orange-100">
    <div class="mb-4 flex items-center justify-between">
      <h2 class="text-2xl font-extrabold tracking-tight text-orange-700">Chatbots inteligentes</h2>
      <div class="text-xs text-orange-700/80">Demo: no usa datos reales</div>
    </div>
    <p class="mb-6 max-w-prose text-zinc-700">
      Interfaz conversacional conectada a tus sistemas. Consulta datos, ejecuta acciones y atiende 24/7.
    </p>
  
    <div class="mx-auto max-w-2xl overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-orange-100">
      <!-- header -->
      <div class="flex items-center gap-2 bg-gradient-to-r from-orange-100 to-orange-50 px-4 py-2">
        <div class="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
        <span class="text-sm font-medium text-orange-800">Asistente EUFIA</span>
      </div>
  
      <!-- messages -->
      <div class="max-h-[320px] overflow-y-auto p-4">
        {#each messages as m, i}
          <div class="mb-3 flex {m.who === 'user' ? 'justify-end' : 'justify-start'}">
            <div class="{m.who === 'user'
              ? 'bg-orange-600 text-white'
              : 'bg-orange-100 text-orange-900'} max-w-[85%] rounded-2xl px-3 py-2 text-sm shadow">
              {m.text}
            </div>
          </div>
        {/each}
      </div>
  
      <!-- quick chips -->
      <div class="flex flex-wrap gap-2 border-t border-orange-100 px-4 py-3">
        {#each ["ventas", "pedidos", "citas", "facturas"] as chip}
          <button on:click={() => quickAsk(chip)}
            class="rounded-full border border-orange-200 px-3 py-1 text-xs font-medium text-orange-700 hover:bg-orange-50">
            {chip}
          </button>
        {/each}
      </div>
  
      <!-- input -->
      <form on:submit|preventDefault={send} class="flex items-center gap-2 border-t border-orange-100 p-3">
        <input
          bind:value={input}
          placeholder="Pregúntame algo… p.ej. “ventas de este mes”"
          class="h-10 flex-1 rounded-xl border border-orange-200 bg-orange-50/40 px-3 text-sm text-orange-900 placeholder:text-orange-800/50 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200" />
        <button
          type="submit"
          class="h-10 rounded-xl bg-orange-600 px-4 text-sm font-semibold text-white transition hover:bg-orange-700 active:scale-[0.99]">
          Enviar
        </button>
      </form>
    </div>
  </section>