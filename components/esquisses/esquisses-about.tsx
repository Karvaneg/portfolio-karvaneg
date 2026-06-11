import { about } from '@/content/about';
import styles from './esquisses.module.css';

/** Section « À propos » : narratif manuscrit + citation de recommandation. */
export function EsquissesAbout() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.aboutGrid}>
        <div className={styles.aboutLabel}>
          <span className={`${styles.eyebrow} ${styles.eyebrowRed}`}>§ 01 — À propos</span>
        </div>
        <div>
          {about.paragraphs.map((paragraph) => (
            <p
              className={styles.aboutText}
              key={paragraph
                .map((seg) => seg.text)
                .join('')
                .slice(0, 32)}
            >
              {paragraph.map((seg) =>
                seg.accent ? (
                  <span className={styles.accent} key={seg.text}>
                    {seg.text}
                  </span>
                ) : (
                  <span key={seg.text}>{seg.text}</span>
                ),
              )}
            </p>
          ))}

          <figure className={styles.aboutQuote}>
            <span className={styles.aboutQuoteMark} aria-hidden="true">
              “
            </span>
            <blockquote className={styles.aboutQuoteText}>{about.quote.text}</blockquote>
            <figcaption className={styles.aboutQuoteAuthor}>
              {about.quote.author} — {about.quote.role}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
