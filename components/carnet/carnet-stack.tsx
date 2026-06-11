import { stack } from '@/content/stack';
import styles from './carnet.module.css';

/** Section « Stack » : catégories d'outils en boîtes esquissées. */
export function CarnetStack() {
  return (
    <section className={styles.stack} id="stack">
      <div className={styles.stackHeader}>
        <div>
          <span className={styles.eyebrow}>§ 02 — Outils</span>
          <h2 className={styles.sectionTitle}>
            Stack &amp;
            <br />
            <em className={styles.scriptAccent}>terrain de jeu.</em>
          </h2>
        </div>
        <p className={styles.sectionIntro}>
          Une carte des outils que j&apos;utilise — pas une démonstration. Je choisis l&apos;outil
          pour le problème, jamais l&apos;inverse.
        </p>
      </div>

      <div className={styles.stackList}>
        {stack.map((category) => (
          <div className={styles.stackCat} key={category.name}>
            <div className={styles.num}>{category.num}</div>
            <div className={styles.name}>{category.name}</div>
            <ul>
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
