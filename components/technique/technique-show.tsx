import { TerminalBar } from '@/components/shared/terminal-bar';
import { PlayIcon } from './icons';
import styles from './technique.module.css';
import sh from './show.module.css';

/** Section « Show, don't tell ». La vidéo est un placeholder (à brancher plus tard). */
export function TechniqueShow() {
  return (
    <section className={styles.section} id="show">
      <div className={styles.container}>
        <span className={styles.sectionTag}>02 · Show, don&rsquo;t tell</span>
        <div className={sh.showGrid}>
          <div>
            <h2 className={styles.sectionTitle}>Comment je code au quotidien avec Claude Code</h2>
            <p className={styles.sectionLede}>
              Des playbooks publics documentent ma façon de travailler avec Claude Code. Du setup d'un environnement versionné jusqu'au refactoring asynchrone, méthode par méthode.
            </p>
            <ul className={sh.showBullets}>
              <li>
                <span className={`${sh.showKbd} ${styles.mono}`}>01</span>
                <span>Environnement Claude Code versionné, reproductible en un <code className={styles.mono}>git clone</code>.</span>
              </li>
              <li>
                <span className={`${sh.showKbd} ${styles.mono}`}>02</span>
                <span>
                  Mes méthodes deviennent des skills invocables et partageables.
                </span>
              </li>
              <li>
                <span className={`${sh.showKbd} ${styles.mono}`}>03</span>
                <span>Refactoring asynchrone en <code className={styles.mono}>git worktree</code>, validé par le diff.</span>
              </li>
            </ul>
          </div>
          <div />
        </div>

        <div className={sh.videoFrame}>
          <TerminalBar
            title="claude-code-demo.mp4 · 3min12"
            trailing={<div className={`${sh.terminalBadge} ${styles.mono}`}>REC ●</div>}
          />
          <div className={sh.videoArea}>
            <button type="button" className={sh.videoPlay} aria-label="Lire la démo (à venir)">
              <PlayIcon />
            </button>
            <div className={`${sh.videoCaption} ${styles.mono}`}>
              <span className={styles.accent}>$</span> claude --skill twig-to-react ./templates
            </div>
            <div className={`${sh.videoTimer} ${styles.mono}`}>00:00 / 03:12</div>
          </div>
        </div>
      </div>
    </section>
  );
}
