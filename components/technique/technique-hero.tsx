import { profile } from '@/content/profile';
import { PlayIcon, GithubIcon, ArrowIcon } from './icons';
import styles from './technique.module.css';

const META = [
  { label: 'Localisation', value: 'Le Teich, FR · remote-first' },
  { label: 'Stack principale', value: 'TS · React · Next · Symfony' },
  { label: 'AI tooling', value: 'Claude Code · Custom Skills' },
  { label: 'Expérience', value: '3+ ans · OpenClassrooms certif.' },
];

export function TechniqueHero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.container}>
        <div className={styles.heroEyebrow}>
          <span className={styles.pulse} />
          <span>{profile.availability.technique}</span>
        </div>

        <h1 className={styles.heroTitle}>
          Développeuse <span className={styles.accent}>Fullstack</span>
          <br />
          &amp; <span className={styles.monoInline}>AI-Augmented Engineer</span>
        </h1>

        <p className={styles.heroSub}>
          J&rsquo;allie l&rsquo;ingénierie logicielle classique à la puissance de{' '}
          <code>Claude Code</code> pour livrer des architectures robustes, testées et scalables — au
          quotidien, sur du code réel.
        </p>

        <div className={styles.ctaRow}>
          <a href="#show" className={`${styles.btn} ${styles.btnPrimary}`}>
            <PlayIcon className={styles.icon} />
            <span>Voir mon workflow</span>
          </a>
          <a
            href={profile.openSourceRepo}
            target="_blank"
            rel="noreferrer"
            className={`${styles.btn} ${styles.btnSecondary}`}
          >
            <GithubIcon className={styles.icon} />
            <span>GitHub · AI Skills</span>
          </a>
          <a href="#contact" className={`${styles.btn} ${styles.btnGhost}`}>
            <span>ou écrivez-moi</span>
            <ArrowIcon className={styles.icon} />
          </a>
        </div>

        <div className={styles.heroMeta}>
          {META.map((item) => (
            <div key={item.label}>
              <span className={styles.heroMetaLabel}>{item.label}</span>
              <span className={styles.heroMetaValue}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
