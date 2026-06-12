import { TerminalBar } from '@/components/shared/terminal-bar';
import { PlayIcon } from './icons';
import styles from './technique.module.css';

/** Section « Show, don't tell ». La vidéo est un placeholder (à brancher plus tard). */
export function TechniqueShow() {
  return (
    <section className={styles.section} id="show">
      <div className={styles.container}>
        <span className={styles.sectionTag}>02 · Show, don&rsquo;t tell</span>
        <div className={styles.showGrid}>
          <div>
            <h2 className={styles.sectionTitle}>Comment je code au quotidien avec Claude Code</h2>
            <p className={styles.sectionLede}>
              Démonstration en 3 minutes : génération de boilerplate, TDD automatisé, et refactoring
              assisté via mes Custom Skills.
            </p>
            <ul className={styles.showBullets}>
              <li>
                <span className={`${styles.showKbd} ${styles.mono}`}>01</span>
                <span>Spec en français → tests → implémentation guidée.</span>
              </li>
              <li>
                <span className={`${styles.showKbd} ${styles.mono}`}>02</span>
                <span>
                  Custom Skill <code className={styles.mono}>twig-to-react</code> pour migrer 40
                  templates en une session.
                </span>
              </li>
              <li>
                <span className={`${styles.showKbd} ${styles.mono}`}>03</span>
                <span>Boucle CI locale — l&rsquo;IA itère seule jusqu&rsquo;au build vert.</span>
              </li>
            </ul>
          </div>
          <div />
        </div>

        <div className={styles.videoFrame}>
          <TerminalBar
            title="claude-code-demo.mp4 · 3min12"
            trailing={<div className={`${styles.terminalBadge} ${styles.mono}`}>REC ●</div>}
          />
          <div className={styles.videoArea}>
            <button type="button" className={styles.videoPlay} aria-label="Lire la démo (à venir)">
              <PlayIcon />
            </button>
            <div className={`${styles.videoCaption} ${styles.mono}`}>
              <span className={styles.accent}>$</span> claude --skill twig-to-react ./templates
            </div>
            <div className={`${styles.videoTimer} ${styles.mono}`}>00:00 / 03:12</div>
          </div>
        </div>
      </div>
    </section>
  );
}
