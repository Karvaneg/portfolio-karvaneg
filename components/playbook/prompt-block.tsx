import { CopyButton } from './copy-button';
import styles from './playbook.module.css';

interface PromptBlockProps {
  /** Texte du prompt (passé en string pour une copie propre). */
  children: string;
  label?: string;
}

/** Bloc « prompt à coller » — l'élément phare du playbook. */
export function PromptBlock({ children, label = 'Prompt à coller dans Claude Code' }: PromptBlockProps) {
  return (
    <div className={styles.promptBlock}>
      <div className={styles.promptBar}>
        <span className={styles.promptTag}>
          <span className={styles.promptIcon} aria-hidden="true">
            ✺
          </span>
          {label}
        </span>
        <CopyButton text={children} />
      </div>
      <pre className={styles.promptBody}>{children}</pre>
    </div>
  );
}
