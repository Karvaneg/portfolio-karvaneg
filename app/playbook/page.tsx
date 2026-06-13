import Link from 'next/link';
import { buildMetadata } from '@/app/lib/metadata';
import { refonteFontVariables } from '@/app/lib/refonte-fonts';
import { TechniqueShell } from '@/components/technique/technique-shell';
import { TechniqueFooter } from '@/components/technique/technique-footer';
import { PlaybookNav } from '@/components/playbook/playbook-nav';
import { playbookEntries } from '@/content/playbook-index';
import techStyles from '@/components/technique/technique.module.css';
import styles from '@/components/playbook/playbook-index.module.css';

export const metadata = buildMetadata({
  path: '/playbook',
  title: 'Playbook — Marie Le Carvennec · Ingénierie augmentée par l’IA',
  description:
    "Le playbook de Marie Le Carvennec : tutoriels long-form sur l'ingénierie augmentée par l'IA — setup Claude Code, skills sur-mesure, refactoring asynchrone en Git Worktrees.",
});

export default function PlaybookIndexPage() {
  return (
    <TechniqueShell fontClass={refonteFontVariables}>
      <PlaybookNav command="ls playbook/" />
      <main className={styles.index}>
        <header className={styles.indexHead}>
          <span className={techStyles.sectionTag}>~/playbook · index</span>
          <h1 className={styles.indexTitle}>
            Playbook — <em>ingénierie augmentée par l’IA</em>
          </h1>
          <p className={styles.indexLede}>
            Des tutoriels long-form sur ma façon de travailler avec les agents IA : orchestration,
            skills sur-mesure, économie de tokens. Le terrain où je teste — et documente — mes
            méthodes. Nouvelle entrée régulièrement.
          </p>
        </header>
        <div className={styles.indexList}>
          {playbookEntries.map((entry) => {
            const live = entry.status === 'live';
            const inner = (
              <>
                <span className={styles.entryNum}>{entry.num}</span>
                <div className={styles.entryMain}>
                  <span className={styles.entryTitle}>{entry.title}</span>
                  <div className={styles.entryMeta}>
                    <span>{entry.category}</span>
                    <span className={styles.entryMetaSep}>·</span>
                    <span>{entry.readingTime}</span>
                  </div>
                  <p className={styles.entrySummary}>{entry.summary}</p>
                </div>
                <span className={`${styles.entryStatus} ${live ? styles.entryLive : styles.entrySoonTag}`}>
                  {live ? '● live' : 'à venir'}
                </span>
              </>
            );

            return live ? (
              <Link key={entry.num} href={`/playbook/${entry.slug}`} className={styles.entry}>
                {inner}
              </Link>
            ) : (
              <div key={entry.num} className={`${styles.entry} ${styles.entrySoon}`}>
                {inner}
              </div>
            );
          })}
        </div>
      </main>
      <TechniqueFooter />
    </TechniqueShell>
  );
}
