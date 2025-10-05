<script lang="ts">
  import { onMount } from 'svelte';
  
  // Public props to control sizing/spacing from parent
  export let containerMaxWidth: string = 'max-w-3xl';
  export let nodeSize: number = 80; // in px
  export let paddingY: string = 'py-8';

  let step = 0;
  let line = 0; // 1: mail->doc, 2: doc->agent, 3: agent->CRM, 4: agent->WhatsApp
  let currentText = '';
  
  const timeline = [
    { type: 'step' as const, step: 1, label: 'Recibe un email con una factura adjunta', delay: 0 },
    { type: 'line' as const, line: 1, delay: 1000 },
    { type: 'step' as const, step: 2, label: 'Lee y extrae los datos del documento', delay: 1800 },
    { type: 'line' as const, line: 2, delay: 2600 },
    { type: 'step' as const, step: 3, label: 'Piensa, valida y decide la acción', delay: 3400 },
    { type: 'line' as const, line: 3, delay: 4400 },
    { type: 'line' as const, line: 4, delay: 5200 },
    { type: 'step' as const, step: 4, label: 'Actualiza CRM y envía notificación por WhatsApp', delay: 5600 },
  ];
  
  function startAnimation() {
    step = 0;
    line = 0;
    currentText = '';
    
    timeline.forEach((item) => {
      setTimeout(() => {
        if (item.type === 'step' && 'step' in item) {
          step = item.step;
          currentText = item.label;
        } else if (item.type === 'line' && 'line' in item) {
          line = item.line;
        }
      }, item.delay);
    });
    
    // Restart animation
    setTimeout(() => {
      setTimeout(() => startAnimation(), 1500); // Brief pause before restart
    }, 9500);
  }
  
  onMount(() => {
    startAnimation();
  });
</script>

<!-- Minimalistic workflow visualization -->
<div class={`relative mx-auto w-full ${containerMaxWidth} ${paddingY}`} style={`--node-size:${nodeSize}px`}>
  <!-- Workflow steps -->
  <div class="relative grid grid-cols-1 gap-8 md:grid-cols-4">
    
    <!-- Step 1: Email arrives -->
    <div class="relative flex flex-col items-center">
      <div class="node-wrapper" class:visible={step >= 1}>
        <div class="node">
          <img src="/integrations/gmail.png" alt="Gmail" class="h-12 w-12" />
        </div>
        <span class="material-symbols-outlined icon-overlay">mail</span>
      </div>
    </div>

    <!-- Step 2: AI reads document -->
    <div class="relative flex flex-col items-center">
      <div class="node-wrapper" class:visible={step >= 2}>
        <div class="node">
          <img src="/integrations/word.png" alt="Word" class="h-10 w-10" />
        </div>
        <div class="ai-badge">
          <img src="/integrations/claude.png" alt="Claude AI" class="h-6 w-6" />
        </div>
      </div>
    </div>

    <!-- Step 3: AI analyzes and decides -->
    <div class="relative flex flex-col items-center">
      <div class="node-wrapper" class:visible={step >= 3}>
        <div class="node ai-brain">
          <span class="material-symbols-outlined text-4xl text-orange-600">psychology</span>
        </div>
      </div>
    </div>

    <!-- Step 4: Takes actions (branched targets) -->
    <div class="relative flex flex-col items-center space-y-6">
      <div class="node-wrapper" class:visible={step >= 4}>
        <div class="node">
          <img src="/integrations/odoo.png" alt="CRM/ERP" class="h-8 w-8" />
        </div>
      </div>
      <div class="node-wrapper" class:visible={step >= 4}>
        <div class="node">
          <img src="/integrations/whatsapp.png" alt="WhatsApp" class="h-8 w-8" />
        </div>
      </div>
    </div>
  </div>

  <!-- Connecting lines -->
  <svg class="connector-svg" viewBox="0 0 900 120" preserveAspectRatio="none">
    <defs>
      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#F05F00;stop-opacity:0.2" />
        <stop offset="50%" style="stop-color:#F05F00;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#F05F00;stop-opacity:0.2" />
      </linearGradient>
      
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L8,4 L0,8 z" fill="#F05F00" />
      </marker>
    </defs>
    
    <!-- Line 1: Email to Document -->
    <line 
      x1="225" y1="50" x2="450" y2="50" 
      class="connector-line"
      class:animated={line >= 1}
      stroke="url(#lineGradient)" 
      stroke-width="3"
      stroke-linecap="round"
      marker-end="url(#arrowhead)"
    />
    
    <!-- Line 2: Document to Brain -->
    <line 
      x1="450" y1="50" x2="675" y2="50" 
      class="connector-line"
      class:animated={line >= 2}
      stroke="url(#lineGradient)" 
      stroke-width="3"
      stroke-linecap="round"
      marker-end="url(#arrowhead)"
    />
    
    <!-- Line 3a: Brain to CRM/ERP (upper) -->
    <path 
      d="M675,50 C740,50 740,24 820,24" 
      class="connector-line"
      class:animated={line >= 3}
      stroke="url(#lineGradient)" 
      stroke-width="3"
      fill="none"
      stroke-linecap="round"
      marker-end="url(#arrowhead)"
    />

    <!-- Line 3b: Brain to WhatsApp (lower) -->
    <path 
      d="M675,50 C740,50 740,96 820,96" 
      class="connector-line"
      class:animated={line >= 4}
      stroke="url(#lineGradient)" 
      stroke-width="3"
      fill="none"
      stroke-linecap="round"
      marker-end="url(#arrowhead)"
    />
  </svg>

  <!-- Dynamic text description -->
  <div class="mt-12 flex min-h-[3rem] items-center justify-center">
    <p 
      class="text-description"
      class:visible={currentText !== ''}
    >
      {currentText}
    </p>
  </div>
</div>

<svelte:head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
</svelte:head>

<style>
  .node-wrapper {
    position: relative;
    opacity: 0;
    transform: scale(0.3);
    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .node-wrapper.visible {
    opacity: 1;
    transform: scale(1);
  }

  .node {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--node-size, 80px);
    height: var(--node-size, 80px);
    background: white;
    border-radius: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.4s ease;
  }

  .node-wrapper.visible .node {
    box-shadow: 0 8px 30px rgba(240, 95, 0, 0.25), 0 0 0 3px rgba(240, 95, 0, 0.1);
  }

  .icon-overlay {
    position: absolute;
    top: -8px;
    right: -8px;
    background: linear-gradient(135deg, #F05F00 0%, #FF8C42 100%);
    color: white;
    border-radius: 50%;
    padding: 6px;
    font-size: 20px;
    box-shadow: 0 4px 12px rgba(240, 95, 0, 0.4);
    opacity: 0;
    transform: scale(0) rotate(-180deg);
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .node-wrapper.visible .icon-overlay {
    opacity: 1;
    transform: scale(1) rotate(0deg);
    transition-delay: 0.2s;
  }

  .ai-badge {
    position: absolute;
    bottom: -4px;
    right: -4px;
    background: white;
    border-radius: 50%;
    padding: 4px;
    box-shadow: 0 4px 12px rgba(240, 95, 0, 0.3);
    opacity: 0;
    transform: scale(0);
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .node-wrapper.visible .ai-badge {
    opacity: 1;
    transform: scale(1);
    transition-delay: 0.3s;
  }

  .ai-brain {
    background: linear-gradient(135deg, #FFF5E6 0%, #FFE8CC 100%);
  }

  .node-wrapper.visible .ai-brain {
    animation: brain-pulse 2s ease-in-out infinite;
  }

  /* Pop-in for branched nodes */
  .node-wrapper.visible .node img {
    animation: pop-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }

  .connector-svg {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    height: 120px;
    pointer-events: none;
    display: none;
  }

  @media (min-width: 768px) {
    .connector-svg {
      display: block;
    }
  }

  .connector-line {
    opacity: 0;
    stroke-dasharray: 225;
    stroke-dashoffset: 225;
    filter: url(#glow);
  }

  .connector-line.animated {
    animation: draw-line 1s ease-out forwards;
  }

  .text-description {
    text-align: center;
    font-size: 1.125rem;
    font-weight: 500;
    color: #3f3f46;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.5s ease;
    max-width: 600px;
    line-height: 1.6;
  }

  .text-description.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @keyframes draw-line {
    to {
      opacity: 1;
      stroke-dashoffset: 0;
    }
  }

  @keyframes brain-pulse {
    0%, 100% {
      box-shadow: 0 8px 30px rgba(240, 95, 0, 0.2), 0 0 0 3px rgba(240, 95, 0, 0.1);
    }
    50% {
      box-shadow: 0 8px 40px rgba(240, 95, 0, 0.35), 0 0 0 6px rgba(240, 95, 0, 0.15);
    }
  }

  @keyframes pop-in {
    0% {
      opacity: 0;
      transform: scale(0) rotate(-45deg);
    }
    100% {
      opacity: 1;
      transform: scale(1) rotate(0deg);
    }
  }
</style>
