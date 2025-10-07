export type IntegrationLogo = { src: string; alt: string };

export const integrationFiles: string[] = [
  'a3erp.png',
  'a3innuva.png',
  'bbva.png',
  'business_central.png',
  'caixabank.png',
  'chatgpt.png',
  'claude.svg',
  'docusign.png',
  'excel.png',
  'factorial.png',
  'factura_directa.png',
  'freshdesk.png',
  'gemini.png',
  'gmail.png',
  'google_ads.png',
  'google_calendar.png',
  'google_workspace.png',
  'holded.png',
  'hubspot.png',
  'jira.png',
  'linkedin.png',
  'meta.png',
  'microsoft_365.png',
  'mongodb.png',
  'odoo.png',
  'outlook.png',
  'postgresql.png',
  'power_bi.png',
  'quipu.png',
  'restoo.png',
  'sage.png',
  'salesforce.png',
  'santander.png',
  'sap.png',
  'shopify.png',
  'teams.png',
  'the_fork.png',
  'trello.png',
  'whatsapp.png',
  'word.png',
  'zendesk.png',
  'zoho.png'
];

export const integrations: IntegrationLogo[] = integrationFiles.map((file) => {
  const name = file
    .replace(/\.(png|svg)$/i, '')
    .replace(/[_-]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return { src: `/integrations/${file}`, alt: name };
});

export const carousels: string[][] = [
  [
    'gmail.png', 'sap.png', 'meta.png', 'factorial.png', 'google_calendar.png', 'zendesk.png', 
    'the_fork.png', 'postgresql.png', 'a3innuva.png', 'microsoft_365.png', 'santander.png',
    'linkedin.png', 'docusign.png', 'chatgpt.png', 'google_workspace.png', 'bbva.png',
    'shopify.png', 'holded.png', 'trello.png', 'word.png', 'quipu.png'
  ],
  [
    'odoo.png', 'hubspot.png', 'whatsapp.png', 'sage.png', 'freshdesk.png', 'excel.png',
    'business_central.png', 'gemini.png', 'power_bi.png', 'jira.png', 'claude.svg',
    'google_ads.png', 'caixabank.png', 'teams.png', 'a3erp.png', 'outlook.png',
    'salesforce.png', 'restoo.png', 'factura_directa.png', 'mongodb.png', 'zoho.png'
  ]
];

const logoByFileName: Map<string, IntegrationLogo> = new Map(
  integrations.map((logo) => [logo.src.split('/').pop() || '', logo])
);

export function getLogos(files: string[]): IntegrationLogo[] {
  return files
    .map((f) => logoByFileName.get(f) || {
      src: `/integrations/${f}`,
      alt: f
        .replace(/\.(png|svg)$/i, '')
        .replace(/[_-]/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase())
    })
    .filter((l) => !!l);
}


