import React, { useEffect, useRef, useState } from 'react';

type RevealVariant =
  | 'fade-up'
  | 'fade-in'
  | 'blur-up'
  | 'scale-in'
  | 'slide-left'
  | 'slide-right'
  | 'img-curtain';

interface RevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  /** Transition delay in milliseconds */
  delay?: number;
  /** How much of the element must be visible before triggering (0–1) */
  threshold?: number;
  className?: string;
}

/**
 * Wraps content and reveals it with a CSS transition the first time it
 * scrolls into the viewport. Variants map to classes in index.css.
 */
const Reveal: React.FC<RevealProps> = ({
  children,
  variant = 'fade-up',
  delay = 0,
  threshold = 0.15,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reveal immediately if IntersectionObserver is unavailable
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const baseClass =
    variant === 'img-curtain' ? 'img-reveal' : `reveal reveal-${variant}`;

  return (
    <div
      ref={ref}
      className={`${baseClass} ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};

export default Reveal;
