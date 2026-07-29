import { useEffect, useState } from 'react';

/**
 * Subscribes to a CSS media query.
 *
 * Used to *mount* one of two layouts rather than rendering both and hiding one
 * with `lg:hidden`. Hidden <img> elements still get fetched, so the class-only
 * approach was quietly downloading the entire mobile gallery on desktop.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() =>
    typeof window === 'undefined' ? false : window.matchMedia(query).matches
  );

  useEffect(() => {
    const list = window.matchMedia(query);
    const onChange = (event: MediaQueryListEvent) => setMatches(event.matches);

    setMatches(list.matches);
    list.addEventListener('change', onChange);
    return () => list.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}

/** Matches Tailwind's `lg` breakpoint, where the sticky exhibition layout kicks in. */
export const useIsDesktop = () => useMediaQuery('(min-width: 1024px)');
