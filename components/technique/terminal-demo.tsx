'use client';

import { useEffect, useRef } from 'react';
import type { TerminalDemoLine as Line } from '@/types/terminal-demo';
import { PlayIcon } from './icons';
import { TerminalDemoLine } from './terminal-demo-line';
import { useTerminalDemo } from './use-terminal-demo';
import styles from './terminal-demo.module.css';

interface TerminalDemoProps {
  lines: Line[];
}

/**
 * Reconstitution terminal scriptée (pas une vidéo) : du DOM animé, démarré au
 * clic et joué une seule fois. Libellé honnête « aperçu animé · reconstitution ».
 * Le parent fournit le cadre ; ce composant impose le ratio 16/9 de la zone.
 */
export function TerminalDemo({ lines }: TerminalDemoProps) {
  const { status, reduce, typed, index, visibleCount, start, pause, resume } =
    useTerminalDemo(lines);
  const bodyRef = useRef<HTMLDivElement>(null);

  // Auto-scroll vers le bas à chaque nouvelle ligne / frappe.
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [visibleCount, typed]);

  return (
    <div className={styles.demo}>
      <div className={styles.body} ref={bodyRef}>
        {lines.slice(0, visibleCount).map((line, i) => (
          <TerminalDemoLine
            key={i}
            line={line}
            typed={typed}
            current={status !== 'done' && i === index}
            showCursor={status === 'playing' && i === index}
          />
        ))}
      </div>

      {status === 'idle' && (
        <button
          type="button"
          className={styles.play}
          onClick={start}
          aria-label="Lancer l’aperçu animé"
        >
          <PlayIcon />
        </button>
      )}

      <span className={styles.tag}>aperçu animé · reconstitution</span>

      {status === 'playing' && (
        <button type="button" className={styles.toggle} onClick={pause}>
          ⏸ pause
        </button>
      )}
      {status === 'paused' && (
        <button type="button" className={styles.toggle} onClick={resume}>
          ▶ reprendre
        </button>
      )}
      {status === 'done' && !reduce && (
        <button type="button" className={styles.toggle} onClick={start}>
          ↻ rejouer
        </button>
      )}
    </div>
  );
}
