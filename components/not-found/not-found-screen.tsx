'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useTerminalIntro } from './use-terminal-intro';
import { NotFoundTerminal } from './not-found-terminal';
import styles from './not-found.module.css';

const COMMAND = 'cd ~/la-page-que-vous-cherchez';

/** Écran 404 : terminal qui « tape » la commande, révèle l'erreur, puis les actions. */
export function NotFoundScreen() {
  const router = useRouter();
  const { typed, typingDone, revealed, annOn } = useTerminalIntro(COMMAND);

  // Raccourcis : Entrée / H → accueil.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (event.key === 'Enter' || event.key.toLowerCase() === 'h') router.push('/');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [router]);

  const step = (n: number) => `${styles.step} ${revealed >= n ? styles.shown : ''}`;

  return (
    <div className={`${styles.scene} ${annOn ? styles.annOn : ''}`}>
      <Link href="/" className={styles.mark}>
        karvaneg<span className={styles.markStar}>*</span>
      </Link>

      <NotFoundTerminal typed={typed} typingDone={typingDone} revealed={revealed} />

      <div className={`${styles.actions} ${step(4)}`}>
        <div className={styles.actionsTop}>
          <div className={styles.homeWrap}>
            <Link href="/" className={styles.btnHome}>
              <span>~$</span> retour à l&apos;accueil →
            </Link>
            <div className={`${styles.ann} ${styles.tohome}`} aria-hidden="true">
              ↑ par ici, je te ramène&nbsp;*
            </div>
          </div>
          <nav className={styles.links}>
            <Link href="/esquisses">
              <span className={styles.sym}>›</span> carnet d&apos;esquisses
            </Link>
            <Link href="/technique">
              <span className={styles.sym}>›</span> carnet technique
            </Link>
            <Link href="/playbook">
              <span className={styles.sym}>›</span> playbook
            </Link>
          </nav>
        </div>
      </div>

      <div className={`${styles.ann} ${styles.oups}`} aria-hidden="true">
        oups.
      </div>
      <div className={`${styles.ann} ${styles.margin}`} aria-hidden="true">
        page introuvable&nbsp;!
      </div>

      <p className={`${styles.hint} ${step(4)}`}>
        Appuie sur <kbd>↵ Entrée</kbd> ou <kbd>H</kbd> pour rentrer.
      </p>
    </div>
  );
}
