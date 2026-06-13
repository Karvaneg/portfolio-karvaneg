import styles from './not-found.module.css';

interface NotFoundTerminalProps {
  typed: string;
  typingDone: boolean;
  revealed: number;
}

/** Fenêtre terminal du 404 : commande tapée, erreur, gros « 4*4 », verdict. */
export function NotFoundTerminal({ typed, typingDone, revealed }: NotFoundTerminalProps) {
  const step = (n: number) => `${styles.step} ${revealed >= n ? styles.shown : ''}`;

  return (
    <div className={styles.term}>
      <div className={styles.termBar}>
        <span className={styles.lights}>
          <i />
          <i />
          <i />
        </span>
        marie@karvaneg: ~<span className={styles.file}>404.log</span>
      </div>
      <div className={styles.termBody}>
        <div className={`${styles.ln} ${styles.step} ${styles.shown}`}>
          <span className={styles.u}>marie@karvaneg</span>
          <span className={styles.p}>:~$</span> <span className={styles.cmd}>{typed}</span>
          {!typingDone && <span className={styles.cursor} aria-hidden="true" />}
        </div>

        <div className={`${styles.ln} ${styles.err} ${step(1)}`}>
          cd: la-page-que-vous-cherchez : Aucun fichier ou dossier de ce type
        </div>

        <div className={`${styles.ln} ${step(2)}`}>
          <span className={styles.u}>marie@karvaneg</span>
          <span className={styles.p}>:~$</span> <span className={styles.cmd}>cat erreur.log</span>
        </div>

        <div className={`${styles.bigWrap} ${step(3)}`}>
          <div className={styles.big}>
            <span className={styles.bigD}>4</span>
            <span className={styles.bigStar}>*</span>
            <span className={styles.bigD}>4</span>
          </div>
          <div className={`${styles.ann} ${styles.note}`} aria-hidden="true">
            ← introuvable&nbsp;*
          </div>
        </div>

        <div className={`${styles.verdict} ${step(3)}`}>
          <p className={styles.t1}>Cette page a été arrachée du carnet.</p>
          <p className={styles.t2}>{"// elle a changé d'adresse — ou n'a jamais existé."}</p>
        </div>

        <div className={`${styles.ln} ${styles.restore} ${step(4)}`}>
          <span className={styles.u}>marie@karvaneg</span>
          <span className={styles.p}>:~$</span> <span className={styles.cmd}>cd ~</span>{' '}
          <span className={styles.cursor} aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
