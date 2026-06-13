'use client';

import { useEffect, useRef } from 'react';

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Mécanique d'overlay accessible (WAI-ARIA dialog), mutualisée entre les modales
 * projet (technique/case-study, esquisses/project-detail) :
 * - verrou du scroll du body au montage, restauré au démontage ;
 * - focus initial sur le premier élément focusable ;
 * - restitution du focus à l'élément précédemment actif à la fermeture ;
 * - piège à focus (Tab / Shift+Tab bouclent à l'intérieur de la modale).
 *
 * Si `onClose` est fourni, Échap ferme l'overlay. Les modales qui ont un Échap
 * contextuel (ex. fermer d'abord un zoom) l'omettent et gèrent Échap elles-mêmes.
 *
 * @returns la ref à poser sur le conteneur de la modale.
 */
export function useFocusTrap<T extends HTMLElement = HTMLDivElement>(onClose?: () => void) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    ref.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();
    return () => {
      document.body.style.overflow = '';
      previouslyFocused?.focus();
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && onClose) {
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !ref.current) return;
      const items = Array.from(ref.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return ref;
}
