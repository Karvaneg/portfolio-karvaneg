import { profile } from '@/content/profile';
import styles from './carnet.module.css';

/** Section « Contact » : titre massif, coordonnées et liens. */
export function CarnetContact() {
  const { github, linkedin } = profile.socials;

  return (
    <section className={styles.contact} id="contact">
      <span className={styles.eyebrow}>§ 05 — Contact</span>
      <h2 className={styles.contactMassive}>
        On <span className={styles.it}>parle ?</span>
      </h2>

      <p className={styles.contactIntro}>
        Actuellement à la recherche de nouvelles opportunités. Que vous ayez une question, un
        projet, ou simplement envie d&apos;échanger — n&apos;hésitez pas. Je ferai de mon mieux pour
        vous répondre rapidement.
      </p>

      <div className={styles.contactGrid}>
        <div>
          <div className={styles.contactLabel}>Téléphone</div>
          <a className={styles.contactValue} href={profile.phoneHref}>
            {profile.phoneDisplay}
          </a>
          <div className={styles.contactGroup}>
            <div className={styles.contactLabel}>Localisation</div>
            <div className={`${styles.contactValue} ${styles.contactLocation}`}>
              Le Teich — Nouvelle-Aquitaine
            </div>
          </div>
          <div className={styles.contactGroupWide}>
            <a href={`mailto:${profile.email}`} className={styles.cta}>
              <span>Démarrer un projet</span>
              <span className={styles.arrow}>→</span>
            </a>
          </div>
        </div>

        <div>
          <div className={styles.contactLabel}>Ailleurs</div>
          <div className={styles.contactElsewhere}>
            <a className={styles.contactValue} href={github.url} target="_blank" rel="noreferrer">
              ↗ {github.label}
            </a>
            <a className={styles.contactValue} href={linkedin.url} target="_blank" rel="noreferrer">
              ↗ {linkedin.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
