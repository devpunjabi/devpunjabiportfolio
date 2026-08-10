/**
 * Keeps <title>, the meta description and <html lang> in step with the current
 * route and language.
 *
 * index.html carries the static tags that link previews and crawlers read on
 * first load. This hook updates the two that change as the visitor navigates,
 * which is what browser tabs, bookmarks, history entries and the page titles in
 * Analytics reports actually show.
 *
 * Deliberately not touched here: the canonical link and the Open Graph and
 * Twitter card tags. Routing is hash-based, so every route shares one crawlable
 * URL, and the scrapers that read those tags do not run JavaScript — rewriting
 * them at runtime would look thorough and change nothing.
 */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE } from '../config/site';
import { useLanguage } from '../contexts/LanguageContext';
import { NAV_ENTRIES } from '../content/navigation';
import { routeMeta } from '../content/seo';

/** Google shows roughly 155 characters of a description; trim on a word boundary. */
const DESCRIPTION_LIMIT = 155;

const truncate = (text: string) => {
  const flat = text.replace(/\s+/g, ' ').trim();
  if (flat.length <= DESCRIPTION_LIMIT) return flat;
  const cut = flat.slice(0, DESCRIPTION_LIMIT);
  return `${cut.slice(0, cut.lastIndexOf(' '))}…`;
};

/** Creates the tag on first use so a stripped-down index.html cannot break this. */
function setMetaContent(name: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

export function usePageMeta() {
  const { pathname } = useLocation();
  const { language, content } = useLanguage();

  useEffect(() => {
    const isHome = pathname === '/';
    const navId = NAV_ENTRIES.find((entry) => entry.path === pathname)?.id;
    const page = navId ? content[navId] : undefined;

    // Pages with a content file are the source of truth for their own wording;
    // Home, Arts and Contact fall back to content/seo.ts.
    const meta = routeMeta(pathname, language) ??
      (page
        ? { title: page.title, description: page.description }
        : routeMeta('/', language)!);

    document.title = isHome ? meta.title : `${meta.title} — ${SITE.name}`;
    setMetaContent('description', truncate(meta.description));
    document.documentElement.lang = language;
  }, [pathname, language, content]);
}
