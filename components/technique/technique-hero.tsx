import { profile } from '@/content/profile';
import { PlayIcon, GithubIcon, ArrowIcon } from './icons';
import styles from './technique.module.css';

const META = [
  { label: 'Localisation', value: 'Gironde, FR · remote / hybride' },
  { label: 'Stack principale', value: 'TS · React · Node · Python' },
  { label: 'AI tooling', value: 'Claude Code · agents · MCP' },
  { label: 'Expérience', value: '3+ ans de dev · Bac+5' },
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
          Développeuse <span className={styles.accent}>Agentique Fullstack</span>
          <br />
          &amp; <span className={styles.monoInline}>Forward Deployed Engineer</span>
        </h1>

        <p className={styles.heroSub}>
          Je travaille au plus près du métier, du cadrage à la mise en production, et je livre des
          applications robustes et testées en orchestrant des agents IA avec{' '}
          <code>Claude Code</code>.
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
