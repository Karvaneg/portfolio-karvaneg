import { TerminalBar } from '@/components/shared/terminal-bar';
import styles from './playbook.module.css';

/** Aperçu de la status line attendue en bas du terminal (résultat de l'étape 3). */
export function StatusLinePreview() {
  return (
    <div className={styles.statusline}>
      <TerminalBar title="Résultat attendu — bas du terminal" />
      <div className={styles.statusLine}>
        <span className={styles.slPath}>~/mon-projet</span>
        <span className={styles.slSep}>|</span>
        <span className={styles.slModel}>Claude Sonnet 4.6</span>
        <span className={styles.slSep}>|</span>
        <span className={styles.slCtx}>
          ctx:<strong>25%</strong>
        </span>
        <span className={styles.slSep}>|</span>
        <span className={styles.slFive}>
          5h:
          <span className={styles.slBar}>
            <span className={styles.slBarFill} />
          </span>
          <strong>40%</strong>
        </span>
      </div>
    </div>
  );
}
