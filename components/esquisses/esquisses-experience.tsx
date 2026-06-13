import { experiences } from '@/content/experience';
import styles from './esquisses-experience.module.css';
import base from './esquisses-base.module.css';

/** Section « Parcours » : timeline en fiches esquissées. */
export function EsquissesExperience() {
  return (
    <section className={styles.experience} id="experience">
      <div className={styles.experienceHeader}>
        <span className={`${base.eyebrow} ${base.eyebrowRed}`}>§ 04 — Parcours</span>
        <h2 className={base.sectionTitle}>
          Du diagnostic matériel
          <br />
          <em className={base.scriptAccent}>au code propre.</em>
        </h2>
      </div>

      <ul className={styles.expList}>
        {experiences.map((item) => (
          <li className={styles.expItem} key={`${item.company}-${item.period}`}>
            <div className={styles.expPeriod}>{item.period}</div>
            <div className={styles.expRole}>{item.role}</div>
            <div className={styles.expCompany}>{item.company}</div>
            <p className={styles.expDesc}>{item.description}</p>
            <div className={styles.expTags}>
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
