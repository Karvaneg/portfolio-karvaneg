import type { TerminalDemoLine as Line, TerminalLineKind } from '@/types/terminal-demo';
import styles from './terminal-demo.module.css';

/** Classe de style par type de ligne non-commande. */
const ROW_STYLE: Record<Exclude<TerminalLineKind, 'cmd' | 'gap'>, string> = {
  out: styles.out,
  ok: styles.ok,
  step: styles.step,
  agent: styles.agent,
  comment: styles.comment,
};

interface TerminalDemoLineProps {
  line: Line;
  /** Caractères déjà tapés de la commande en cours. */
  typed: number;
  /** Vrai si cette ligne est celle en cours de jeu. */
  current: boolean;
  /** Vrai si le curseur clignotant doit s'afficher en bout de ligne. */
  showCursor: boolean;
}

/** Rendu d'une ligne du terminal selon son `kind`. */
export function TerminalDemoLine({ line, typed, current, showCursor }: TerminalDemoLineProps) {
  if (line.kind === 'gap') return <div className={`${styles.row} ${styles.gap}`}>&nbsp;</div>;

  const cursor = showCursor ? <span className={styles.cursor} /> : null;

  if (line.kind === 'cmd') {
    // Seule une commande EN COURS est tronquée à `typed` caractères.
    const text = current ? (line.text ?? '').slice(0, typed) : line.text;
    return (
      <div className={styles.row}>
        <span className={styles.prompt}>$</span> <span className={styles.cmd}>{text}</span>
        {cursor}
      </div>
    );
  }

  return (
    <div className={`${styles.row} ${ROW_STYLE[line.kind]}`}>
      {line.text}
      {cursor}
    </div>
  );
}
