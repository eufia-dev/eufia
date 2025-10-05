<script lang="ts">
    const steps = [
      { key: "inbox", title: "Factura recibida (email)", icon: "📥" },
      { key: "extract", title: "Extraer y clasificar", icon: "🧾" },
      { key: "erp", title: "Actualizar ERP/CRM", icon: "⚙️" },
      { key: "notify", title: "Enviar confirmación", icon: "✅" }
    ];
  </script>
  
  <section class="group rounded-3xl bg-orange-50 p-8 ring-1 ring-orange-100">
    <h2 class="mb-2 text-2xl font-extrabold tracking-tight text-orange-700">Automatización de procesos</h2>
    <p class="mb-6 max-w-prose text-zinc-700">
      Cuando llega una factura, el flujo se ejecuta solo: se extraen datos, se actualiza el ERP/CRM y se notifica.
      Pasa el ratón para ver el recorrido.
    </p>
  
    <div class="relative mx-auto max-w-3xl overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
      <!-- lanes -->
      <div class="grid grid-cols-1 gap-6 md:grid-cols-4">
        {#each steps as s, i}
          <div class="relative">
            <div
              class="rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 to-white p-4 text-center transition
                     group-hover:shadow-md hover:border-orange-300">
              <div class="mb-2 text-2xl">{s.icon}</div>
              <div class="text-sm font-semibold text-orange-800">{s.title}</div>
            </div>
  
            <!-- connector arrow (revealed on hover) -->
            {#if i < steps.length - 1}
              <div class="pointer-events-none absolute right-[-28px] top-1/2 hidden -translate-y-1/2 md:block">
                <svg viewBox="0 0 80 16" width="80" height="16"
                     class="opacity-0 transition duration-500 group-hover:opacity-100">
                  <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 0 L 10 5 L 0 10 z" class="fill-orange-500"></path>
                    </marker>
                  </defs>
                  <line x1="0" y1="8" x2="72" y2="8"
                        class="stroke-orange-400" stroke-width="2" marker-end="url(#arrow)">
                    <animate attributeName="x2" from="0" to="72" dur="0.8s" begin="mouseover" fill="freeze" />
                  </line>
                </svg>
              </div>
            {/if}
          </div>
        {/each}
      </div>
  
      <!-- trigger badges -->
      <div class="mt-6 flex flex-wrap items-center gap-2 text-[11px] text-orange-800/80">
        <span class="rounded-full bg-orange-100 px-2 py-1 font-semibold">Trigger: email entrante</span>
        <span class="rounded-full bg-orange-100 px-2 py-1">OCR + validación</span>
        <span class="rounded-full bg-orange-100 px-2 py-1">API ERP/CRM</span>
        <span class="rounded-full bg-orange-100 px-2 py-1">Notificación al proveedor</span>
      </div>
  
      <div class="absolute right-3 top-3 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-orange-700 shadow">
        hover → ver flujo
      </div>
    </div>
  </section>