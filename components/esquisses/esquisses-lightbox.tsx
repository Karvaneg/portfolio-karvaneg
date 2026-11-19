'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './esquisses-lightbox.module.css';

export interface LightboxImage {
  src: string;
  alt: string;
}

interface EsquissesLightboxProps {
  images: LightboxImage[];
  index: number;
  onIndex: (index: number) => void;
  onClose: () => void;
}

/**
 * Agrandissement d'un visuel de la galerie esquisses, avec navigation par flèches.
 * Le clavier est écouté en phase de capture sur `window` : Échap et les flèches
 * sont consommés ici, avant l'overlay projet qui fermerait sinon tout le détail.
 * Tab boucle sur les boutons de la lightbox.
 */
export function EsquissesLightbox({ images, index, onIndex, onClose }: EsquissesLightboxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const image = images[index];
  const many = images.length > 1;
  const prev = () => onIndex((index - 1 + images.length) % images.length);
  const next = () => onIndex((index + 1) % images.length);

  useEffect(() => {
    ref.current?.querySelector<HTMLElement>('button')?.focus();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      else if (event.key === 'ArrowLeft' && many) prev();
      else if (event.key === 'ArrowRight' && many) next();
      else if (event.key === 'Tab' && ref.current) {
        const buttons = Array.from(ref.current.querySelectorAll<HTMLElement>('button'));
        const at = buttons.indexOf(document.activeElement as HTMLElement);
        const step = event.shiftKey ? -1 : 1;
        buttons[(at + step + buttons.length) % buttons.length]?.focus();
        event.preventDefault();
      } else return;
      event.stopPropagation();
    };
    window.addEventListener('keydown', onKeyDown, true);
    return () => window.removeEventListener('keydown', onKeyDown, true);
  });

  return (
    <div
      ref={ref}
      className={styles.lightbox}
      role="dialog"
      aria-modal="true"
      aria-label="Visuel agrandi"
      onClick={onClose}
    >
      <button type="button" className={styles.close} onClick={onClose}>
        <span aria-hidden="true">✕</span> Fermer
      </button>

      <figure className={styles.figure} onClick={(event) => event.stopPropagation()}>
        <div className={styles.image}>
          <Image src={image.src} alt={image.alt} fill sizes="92vw" />
        </div>
        {many && (
          <figcaption className={styles.counter}>
            {index + 1} / {images.length}
          </figcaption>
        )}
      </figure>

      {many && (
        <>
          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowPrev}`}
            aria-label="Visuel précédent"
            onClick={(event) => {
              event.stopPropagation();
              prev();
            }}
          >
            ←
          </button>
          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowNext}`}
            aria-label="Visuel suivant"
            onClick={(event) => {
              event.stopPropagation();
              next();
            }}
          >
            →
          </button>
        </>
      )}
    </div>
  );
}
