'use client';

import { useEffect, useState } from 'react';

/**
 * Chorégraphie d'entrée de l'écran 404 : « tape » la commande caractère par
 * caractère, puis révèle les étapes (1→4) et active les annotations. Respecte
 * `prefers-reduced-motion` (tout est affiché d'emblée, sans animation).
 * setState n'est appelé que dans des callbacks asynchrones (timers).
 *
 * @returns l'état d'avancement : texte tapé, fin de frappe, étape révélée, annotations.
 */
export function useTerminalIntro(command: string) {
  const [typed, setTyped] = useState('');
  const [typingDone, setTypingDone] = useState(false);
  const [revealed, setRevealed] = useState(0);
  const [annOn, setAnnOn] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timers: ReturnType<typeof setTimeout>[] = [];

    if (reduce) {
      timers.push(
        setTimeout(() => {
          setTyped(command);
          setTypingDone(true);
          setRevealed(4);
          setAnnOn(true);
        }, 0),
      );
      return () => timers.forEach(clearTimeout);
    }

    let i = 0;
    const tick = () => {
      setTyped(command.slice(0, i));
      i += 1;
      if (i <= command.length) {
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
  }, [command]);

  return { typed, typingDone, revealed, annOn };
}
