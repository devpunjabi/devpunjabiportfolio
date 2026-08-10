/**
 * Google Analytics 4 for a single-page app.
 *
 * Two things make this different from pasting the snippet into index.html:
 *
 *  1. Nothing loads unless VITE_GA_MEASUREMENT_ID is set (see config/site.ts).
 *     A checkout without the variable makes no request to Google at all.
 *  2. gtag is configured with `send_page_view: false`. The router swaps pages
 *     without a document load, so GA would otherwise record exactly one
 *     pageview per visit — the landing page — and nothing else. Pageviews are
 *     sent per route below instead.
 */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ANALYTICS, ANALYTICS_ENABLED } from '../config/site';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const SCRIPT_ID = 'ga-gtag';

/** Injects gtag.js once per document and initialises the data layer. */
function loadGtag(measurementId: string) {
  if (document.getElementById(SCRIPT_ID)) return;

  const script = document.createElement('script');
  script.id = SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  // Must stay a `function` and push the raw `arguments` object — that is the
  // shape gtag.js reads out of the queue once the remote script arrives.
  window.gtag = function gtag() {
    window.dataLayer?.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, { send_page_view: false });
}

/**
 * Loads GA on first render and reports one pageview per route change.
 *
 * Call this *after* usePageMeta in the same component so `document.title` is
 * already the new page's title when the pageview is sent — effects run in the
 * order their hooks were called.
 */
export function useAnalytics() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!ANALYTICS_ENABLED) return;

    loadGtag(ANALYTICS.measurementId.trim());
    window.gtag?.('event', 'page_view', {
      page_title: document.title,
      // Routing is hash-based, so window.location.href alone would not tell the
      // routes apart in reports. Send the route explicitly.
      page_path: pathname,
      page_location: window.location.href,
    });
  }, [pathname]);
}
