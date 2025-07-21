// vitals.js  – compatible with web-vitals ≥ 5.0
import { onCLS, onFCP, onINP, onLCP, onTTFB } from 'web-vitals'; // ↩️  new “on*” APIs

const vitalsUrl = 'https://vitals.vercel-analytics.com/v1/vitals';

/**
 * Detect the user’s effective connection type (4g/3g/2g/slow-2g) if supported.
 */
function getConnectionSpeed() {
  // modern browsers expose navigator.connection.effectiveType
  return navigator?.connection?.effectiveType ?? '';
}

/**
 * Send a single metric to the Vercel /analytics endpoint.
 * @param {import('web-vitals').Metric} metric
 * @param {{ params: Record<string,any>; path: string; analyticsId: string; debug?: boolean; }} options
 */
function sendToAnalytics(metric, options) {
  const page = Object.entries(options.params).reduce(
    (acc, [key, value]) => acc.replace(value, `[${key}]`),
    options.path
  );

  const body = {
    dsn: options.analyticsId,      // project-specific ID
    id: metric.id,                 // unique per-page-load
    page,
    href: location.href,
    event_name: metric.name,       // e.g. 'CLS', 'INP'
    value: metric.value.toString(),
    speed: getConnectionSpeed()
  };

  if (options.debug) {
    console.log('[Web Vitals]', metric.name, JSON.stringify(body, null, 2));
  }

  const blob = new Blob([new URLSearchParams(body).toString()], {
    type: 'application/x-www-form-urlencoded' // required for sendBeacon()
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon(vitalsUrl, blob);
  } else {
    fetch(vitalsUrl, {
      method: 'POST',
      body: blob,
      credentials: 'omit',
      keepalive: true
    });
  }
}

/**
 * Wire up Core Web Vitals + supporting metrics.
 * Call this once from your app’s client entry.
 */
export function webVitals(options) {
  try {
    // Core Web Vitals (Mar-2024 update promotes INP, deprecates FID)
    onINP((m)  => sendToAnalytics(m, options)); // replaces getFID()
    onLCP((m)  => sendToAnalytics(m, options));
    onCLS((m)  => sendToAnalytics(m, options));

    // Helpful supporting numbers
    onTTFB((m) => sendToAnalytics(m, options));
    onFCP((m)  => sendToAnalytics(m, options));
  } catch (err) {
    console.error('[Web Vitals]', err);
  }
}