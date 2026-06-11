'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './not-found.module.css';

const COMMAND = 'cd ~/la-page-que-vous-cherchez';

/** Écran 404 : terminal qui « tape » la commande, révèle l'erreur, puis les actions. */
export function NotFoundScreen() {
  const router = useRouter();
  const [typed, setTyped] = useState('');
  const [typingDone, setTypingDone] = useState(false);
  const [revealed, setRevealed] = useState(0);
  const [annOn, setAnnOn] = useState(false);

  // Séquence d'apparition (setState uniquement dans des callbacks asynchrones).
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timers: ReturnType<typeof setTimeout>[] = [];

    if (reduce) {
      timers.push(
        setTimeout(() => {
          setTyped(COMMAND);
          setTypingDone(true);
          setRevealed(4);
          setAnnOn(true);
        }, 0),
      );
      return () => timers.forEach(clearTimeout);
    }

    let i = 0;
    const tick = () => {
      setTyped(COMMAND.slice(0, i));
      i += 1;
      if (i <= COMMAND.length) {
        timers.push(setTimeout(tick, 42));
      } else {
        setTypingDone(true);
        [380, 760, 1080, 1560].forEach((delay, step) =>
          timers.push(setTimeout(() => setRevealed(step + 1), delay)),
        );
        timers.push(setTimeout(() => setAnnOn(true), 1800));
      }
    };
    timers.push(setTimeout(tick, 600));
    return () => timers.forEach(clearTimeout);
  }, []);

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
