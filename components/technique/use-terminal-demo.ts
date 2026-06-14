'use client';

import { useEffect, useState } from 'react';
import type { TerminalDemoLine } from '@/types/terminal-demo';

export type TerminalDemoStatus = 'idle' | 'playing' | 'paused' | 'done';

/* Rythme de frappe et pauses (ms). */
const TYPE_MIN = 18; // délai mini entre deux caractères d'une commande
const TYPE_JITTER = 34; // aléa ajouté (frappe « humaine »)
const AFTER_CMD = 440; // pause après une commande terminée
const WAIT_GAP = 110; // pause d'une ligne vide
const WAIT_AGENT = 520; // pause d'une ligne agent (effet de « démarrage »)
const WAIT_DEFAULT = 300; // pause des autres lignes (out / ok / step / comment)

/**
 * Machine à états d'une reconstitution terminal : idle → playing ⇄ paused → done.
 * Les commandes sont « tapées » caractère par caractère ; aucune relecture auto.
 * `prefers-reduced-motion: reduce` → tout est figé sur le résultat (après hydratation,
 * pour éviter tout écart SSR/client). setState n'est appelé que dans des timers.
 */
export function useTerminalDemo(lines: TerminalDemoLine[]) {
  const [status, setStatus] = useState<TerminalDemoStatus>('idle');
  const [index, setIndex] = useState(0); // ligne courante
  const [typed, setTyped] = useState(0); // caractères tapés de la commande courante
  const [reduce, setReduce] = useState(false);

  // Respect du réglage système : on fige tout sur le résultat, sans animation.
  // setState seulement dans un timer (cf. react-hooks/set-state-in-effect).
  useEffect(() => {
    const t = setTimeout(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setReduce(true);
        setIndex(lines.length);
        setStatus('done');
      }
    }, 0);
    return () => clearTimeout(t);
  }, [lines.length]);

  // Boucle d'avancement : ne tourne QUE pendant 'playing'. Tout setState passe par
  // un timer — y compris la fin de séquence (→ 'done'), jamais de relance auto.
  useEffect(() => {
    if (status !== 'playing') return undefined;
    const line = lines[index];
    if (!line) return undefined;

    const next = () => {
      setTyped(0);
      if (index + 1 >= lines.length) setStatus('done');
      else setIndex(index + 1);
    };

    if (line.kind === 'cmd' && line.text && typed < line.text.length) {
      const t = setTimeout(() => setTyped((n) => n + 1), TYPE_MIN + Math.random() * TYPE_JITTER);
      return () => clearTimeout(t);
    }

    const wait =
      line.kind === 'cmd'
        ? AFTER_CMD
        : line.kind === 'gap'
          ? WAIT_GAP
          : line.kind === 'agent'
            ? WAIT_AGENT
            : WAIT_DEFAULT;
    const t = setTimeout(next, wait);
    return () => clearTimeout(t);
  }, [status, index, typed, lines]);

  const start = () => {
    setIndex(0);
    setTyped(0);
    setStatus('playing');
  };

  const visibleCount = status === 'idle' ? 0 : Math.min(index + 1, lines.length);

  return {
    status,
    reduce,
    typed,
    index,
    visibleCount,
    start,
    pause: () => setStatus('paused'),
    resume: () => setStatus('playing'),
  };
}
