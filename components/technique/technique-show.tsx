import { TerminalBar } from '@/components/shared/terminal-bar';
import { TERMINAL_DEMO_003 } from '@/content/terminal-demo-script';
import { TerminalDemo } from './terminal-demo';
import styles from './technique.module.css';
import sh from './show.module.css';

/** Section « Show, don't tell » : aperçu animé (reconstitution honnête) d'une
    session de refactoring asynchrone en git worktree — cf. Playbook 003. */
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
          <TerminalBar title="bash · refactoring asynchrone en git worktree" />
          <TerminalDemo lines={TERMINAL_DEMO_003} />
        </div>
      </div>
    </section>
  );
}
