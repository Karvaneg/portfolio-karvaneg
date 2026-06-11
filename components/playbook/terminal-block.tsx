import { CopyButton } from './copy-button';
import styles from './playbook.module.css';

interface TerminalBlockProps {
  commands: string[];
  title?: string;
  /** Glyphe d'invite (ex. « $ » pour bash). Défaut : invite PowerShell. */
  promptSymbol?: string;
}

/** Bloc terminal (look PowerShell/bash). Les lignes commençant par « # » sont des commentaires grisés. */
export function TerminalBlock({
  commands,
  title = 'PowerShell',
  promptSymbol = 'PS C:\\>',
}: TerminalBlockProps) {
  return (
    <div className={styles.termBlock}>
      <div className={styles.termBar}>
        <div className={styles.termLights}>
          <span />
          <span />
          <span />
        </div>
        <span className={styles.termTitle}>{title}</span>
        <CopyButton text={commands.join('\n')} />
      </div>
      <pre className={styles.termBody}>
        {commands.map((cmd, i) => {
          if (cmd.trim() === '') {
            return (
              <div key={i} className={`${styles.termLine} ${styles.termBlank}`}>
                &nbsp;
              </div>
            );
          }
          if (cmd.trimStart().startsWith('#')) {
            return (
              <div key={i} className={styles.termLine}>
                <span className={styles.termComment}>{cmd}</span>
              </div>
            );
          }
          return (
            <div key={i} className={styles.termLine}>
              <span className={styles.termPrompt}>{promptSymbol}</span>
              <span className={styles.termCmd}>{cmd}</span>
            </div>
          );
        })}
      </pre>
    </div>
  );
}
