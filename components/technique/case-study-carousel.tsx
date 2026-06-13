import Image from 'next/image';
import type { ProjectShot } from '@/types/project';
import styles from './technique.module.css';
import cs from './case-study.module.css';

interface CaseStudyCarouselProps {
  shots: ProjectShot[];
  current: number;
  onSelect: (index: number) => void;
  onZoom: (shot: ProjectShot) => void;
}

/** Carrousel d'aperçus de la modale : flèches, vignette zoomable, pagination + points. */
export function CaseStudyCarousel({ shots, current, onSelect, onZoom }: CaseStudyCarouselProps) {
  const shot = shots[current];
  if (!shot) return null;
  const many = shots.length > 1;

  return (
    <div className={cs.caseCarousel}>
      <div className={cs.caseCarouselStage}>
        {many && (
          <button
            type="button"
            className={cs.caseCarouselArrow}
            onClick={() => onSelect((current - 1 + shots.length) % shots.length)}
            aria-label="Image précédente"
          >
            ‹
          </button>
        )}
        <figure className={cs.caseCarouselFig}>
          <button
            type="button"
            className={cs.caseShotBtn}
            onClick={() => onZoom(shot)}
            aria-label={`Agrandir : ${shot.caption}`}
          >
            <Image src={shot.src} alt={shot.alt} fill sizes="(max-width: 940px) 100vw, 880px" />
            <span className={`${cs.caseShotZoom} ${styles.mono}`}>⤢ zoom</span>
          </button>
        </figure>
        {many && (
          <button
            type="button"
            className={cs.caseCarouselArrow}
            onClick={() => onSelect((current + 1) % shots.length)}
            aria-label="Image suivante"
          >
            ›
          </button>
        )}
      </div>
      <div className={cs.caseCarouselFoot}>
        <figcaption className={styles.mono}>{shot.caption}</figcaption>
        {many && (
          <div className={cs.caseCarouselMeta}>
            <span className={`${cs.caseCarouselCount} ${styles.mono}`}>
              {current + 1} / {shots.length}
            </span>
            <div className={cs.caseCarouselDots}>
              {shots.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  className={`${cs.caseDot} ${index === current ? styles.active : ''}`}
                  onClick={() => onSelect(index)}
                  aria-label={`Image ${index + 1} sur ${shots.length}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
