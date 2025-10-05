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

export const categories: string[][] = [
  [
    'sap.png', 'odoo.png', 'sage.png', 'holded.png', 'business_central.png', 'a3erp.png', 'a3innuva.png', 'factura_directa.png',
    'power_bi.png', 'google_workspace.png', 'microsoft_365.png', 'gmail.png', 'whatsapp.png',
    'outlook.png', 'google_calendar.png', 'word.png', 'excel.png', 'teams.png', 'docusign.png'
  ],
  [
    'hubspot.png', 'salesforce.png', 'zoho.png', 'google_ads.png', 'linkedin.png', 'meta.png', 'shopify.png',
    'freshdesk.png', 'zendesk.png', 'trello.png', 'jira.png', 'restoo.png', 'the_fork.png',
    'chatgpt.png', 'claude.svg', 'gemini.png', 'postgresql.png', 'mongodb.png',
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


