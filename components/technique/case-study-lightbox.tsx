import Image from 'next/image';
import type { ProjectShot } from '@/types/project';
import styles from './technique.module.css';
import cs from './case-study.module.css';

interface CaseStudyLightboxProps {
  shot: ProjectShot;
  onClose: () => void;
}

/** Lightbox plein écran d'un aperçu (zoom). Clic sur le fond ou × pour fermer. */
export function CaseStudyLightbox({ shot, onClose }: CaseStudyLightboxProps) {
  return (
    <div
      className={cs.caseLightbox}
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
      <figure className={cs.caseLightboxFig} onClick={(event) => event.stopPropagation()}>
        <div className={cs.caseLightboxImg}>
          <Image src={shot.src} alt={shot.alt} fill sizes="92vw" />
        </div>
        <figcaption className={styles.mono}>{shot.caption}</figcaption>
      </figure>
    </div>
  );
}
