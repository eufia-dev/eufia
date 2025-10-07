<script lang="ts">
  let { href, icon, title, subtitle, description, target, rel, ariaLabel } = $props<{
    href?: string;
    icon: string;
    title: string;
    subtitle?: string;
    description?: string;
    target?: string;
    rel?: string;
    ariaLabel?: string;
  }>();

  const isClickable = $derived(!!href);
</script>

{#if isClickable}
  <a
    href={href}
    target={target}
    rel={rel}
    aria-label={ariaLabel || title}
    class="group rounded-xl bg-primary p-6 block hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
  >
    <div class="flex justify-between">
      <span
        class="material-symbols-rounded !text-4xl text-brand group-hover:scale-110 transition-transform duration-200"
      >
        {icon}
      </span>
      <span
        class="material-symbols-rounded !text-2xl text-secondary self-start
          group-hover:text-primary group-hover:scale-110 transition-all duration-200"
      >
        arrow_forward
      </span>
    </div>
    <h3 class="text-lg font-semibold mt-3">{title}</h3>
    {#if subtitle}
      <p class="mt-2 text-secondary font-semibold">{subtitle}</p>
    {/if}
    {#if description}
      <p class="mt-2 text-secondary whitespace-pre-line">{description}</p>
    {/if}
  </a>
{:else}
  <div
    class="group rounded-xl bg-primary p-6 block"
  >
    <div class="text-brand">
      <span class="material-symbols-rounded !text-4xl">{icon}</span>
    </div>
    <h3 class="text-lg font-semibold mt-3">{title}</h3>
    {#if subtitle}
      <p class="mt-2 text-secondary font-semibold">{subtitle}</p>
    {/if}
    {#if description}
      <p class="mt-2 text-secondary whitespace-pre-line">{description}</p>
    {/if}
  </div>
{/if}
