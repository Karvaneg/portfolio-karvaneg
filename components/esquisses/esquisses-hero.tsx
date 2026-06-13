'use client';

import { useState } from 'react';
import { about } from '@/content/about';
import styles from './esquisses-hero.module.css';
import base from './esquisses-base.module.css';

/** Hero manuscrit : titre « Marie Le Carvennec », easter-egg astérisque, méta. */
export function EsquissesHero() {
  const [showEgg, setShowEgg] = useState(false);

  return (
    <section className={styles.hero} id="top">
      <div className={styles.heroMarquee}>
        <span>Carnet d&apos;esquisses · 2026</span>
        <span>
          <span className={styles.marqueeDev}>Développeuse</span>{' '}
          <em className={styles.marqueeWeb}>Web</em>{' '}
          <span className={styles.marqueeFull}>Fullstack</span>
        </span>
        <span>n°4</span>
      </div>

      <h1 className={`${styles.heroTitle} ${base.hand} ${base.h1}`}>
        <span className={`${styles.line} ${styles.marie}`}>Marie</span>
        <span className={`${styles.line} ${styles.carvennecLine}`}>
          <span className={styles.leParticule}>
            Le
            <svg
              className={styles.leUnderline}
              viewBox="0 0 100 18"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M 3,9 Q 18,3 35,8 T 68,10 Q 84,7 97,11"
                stroke="currentColor"
                strokeWidth="2.2"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 6,14 Q 24,11 44,14 T 78,15 Q 88,13 95,15"
                stroke="currentColor"
                strokeWidth="1.4"
                fill="none"
                strokeLinecap="round"
                opacity="0.7"
              />
            </svg>
          </span>
          <span className={styles.carvennecWord}>Carvennec.</span>
        </span>

        <button
          type="button"
          className={styles.heroAsterisk}
          aria-label="Origine du nom Karvaneg"
          aria-expanded={showEgg}
          onClick={() => setShowEgg((value) => !value)}
        >
          *
        </button>
        <span className={styles.heroAnnotation} aria-hidden="true">
          ← clique sur l&apos;étoile
        </span>
      </h1>

      {showEgg && (
        <button
          type="button"
          className={styles.egg}
          onClick={() => setShowEgg(false)}
          aria-label="Fermer la note"
        >
          <span className={styles.eggTape} aria-hidden="true" />
          <span className={styles.eggLabel}>* karvaneg</span>
          <span className={styles.eggText}>
            Origine celtique : « celui qui a une forte mâchoire ». Une métaphore de la ténacité et
            de l&apos;engagement dans mon travail.
          </span>
        </button>
      )}

      <div className={styles.heroMeta}>
        {about.heroMeta.map((block) => (
          <div className={styles.heroMetaBlock} key={block.label}>
            <span className={styles.heroMetaLabel}>{block.label}</span>
            <span className={styles.heroMetaValue}>
              {block.parts.map((part) =>
                part.emphasis ? (
                  <em key={part.text}>{part.text}</em>
                ) : (
                  <span key={part.text}>{part.text}</span>
                ),
              )}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
