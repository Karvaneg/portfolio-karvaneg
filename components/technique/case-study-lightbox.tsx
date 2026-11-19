import { useEffect, useRef } from 'react';
import Image from 'next/image';
import type { ProjectShot } from '@/types/project';
import styles from './technique.module.css';
import cs from './case-study.module.css';

interface CaseStudyLightboxProps {
  shots: ProjectShot[];
  current: number;
  onSelect: (index: number) => void;
  onClose: () => void;
}

/**
 * Lightbox plein écran de l'aperçu courant (zoom), avec flèches pour passer d'un
 * aperçu à l'autre. Clic sur le fond ou × pour fermer ; ← / → et Échap sont gérés
 * par la modale parente (case-study.tsx). Le focus va sur × à l'ouverture, Tab
 * boucle sur les boutons du zoom, et le focus revient à la vignette à la fermeture.
 */
export function CaseStudyLightbox({ shots, current, onSelect, onClose }: CaseStudyLightboxProps) {
  const shot = shots[current];
  const many = shots.length > 1;
  const go = (step: number) => onSelect((current + step + shots.length) % shots.length);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    ref.current?.querySelector<HTMLElement>('button')?.focus();
    // Capture sur window : Tab est traité ici, avant le piège à focus de la modale.
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || !ref.current) return;
      const buttons = Array.from(ref.current.querySelectorAll<HTMLElement>('button'));
      const at = buttons.indexOf(document.activeElement as HTMLElement);
      const step = event.shiftKey ? -1 : 1;
      buttons[(at + step + buttons.length) % buttons.length]?.focus();
      event.preventDefault();
      event.stopPropagation();
    };
    window.addEventListener('keydown', onKeyDown, true);
    return () => {
      window.removeEventListener('keydown', onKeyDown, true);
      previouslyFocused?.focus();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cs.caseLightbox}
      role="dialog"
      aria-modal="true"
      aria-label="Image agrandie"
      onClick={(event) => {
        event.stopPropagation();
        onClose();
      }}
    >
      <button
        type="button"
        className={cs.caseLightboxClose}
        aria-label="Fermer le zoom"
        onClick={onClose}
      >
        ×
      </button>
      {many && (
        <button
          type="button"
          className={`${cs.caseCarouselArrow} ${cs.caseLightboxArrow} ${cs.caseLightboxPrev}`}
          aria-label="Image précédente"
          onClick={(event) => {
            event.stopPropagation();
            go(-1);
          }}
        >
          ‹
        </button>
      )}
      <figure className={cs.caseLightboxFig} onClick={(event) => event.stopPropagation()}>
        <div className={cs.caseLightboxImg}>
          <Image src={shot.src} alt={shot.alt} fill sizes="92vw" />
        </div>
        <figcaption className={styles.mono}>
          {shot.caption}
          {many && ` · ${current + 1} / ${shots.length}`}
        </figcaption>
      </figure>
      {many && (
        <button
          type="button"
          className={`${cs.caseCarouselArrow} ${cs.caseLightboxArrow} ${cs.caseLightboxNext}`}
          aria-label="Image suivante"
          onClick={(event) => {
            event.stopPropagation();
            go(1);
          }}
        >
          ›
        </button>
      )}
    </div>
  );
}
