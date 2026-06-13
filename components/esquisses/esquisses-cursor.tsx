'use client';

import { useEffect, useRef } from 'react';
import styles from './esquisses-cursor.module.css';

/**
 * Curseur crayon custom — suit la souris et grossit au survol des éléments
 * interactifs. Affiché uniquement sur pointeur fin (`@media (pointer: fine)`).
 * La position est une valeur dynamique inévitable → `style.left/top` documenté.
 */
export function EsquissesCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (event: MouseEvent) => {
      el.style.left = `${event.clientX}px`;
      el.style.top = `${event.clientY}px`;
    };
    const onOver = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const interactive = Boolean(target?.closest?.('a, button, [data-cursor="large"]'));
      el.classList.toggle(styles.large, interactive);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, []);

  return <div className={styles.cursor} ref={ref} aria-hidden="true" />;
}
