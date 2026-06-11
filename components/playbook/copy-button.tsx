'use client';

import { useRef, useState } from 'react';
import styles from './playbook.module.css';

interface CopyButtonProps {
  text: string;
  label?: string;
}

/** Copie un bloc de prompt/commande avec retour visuel inline (Copié / Erreur). */
export function CopyButton({ text, label = 'Copier' }: CopyButtonProps) {
  const [state, setState] = useState<'idle' | 'copied' | 'error'>('idle');
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copy = async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(text);
      ok = true;
    } catch {
      ok = false;
    }

    setState(ok ? 'copied' : 'error');
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setState('idle'), 1800);
  };

  const className = `${styles.copyBtn} ${
    state === 'copied' ? styles.copyBtnCopied : state === 'error' ? styles.copyBtnError : ''
  }`;

  return (
    <button type="button" className={className} onClick={copy} aria-label={label}>
      {state === 'copied' ? (
        <>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
          <span>Copié</span>
        </>
      ) : state === 'error' ? (
        <span>Erreur</span>
      ) : (
        <>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="9" y="9" width="12" height="12" rx="2" />
            <path d="M5 15V5a2 2 0 0 1 2-2h10" />
          </svg>
          <span>{label}</span>
        </>
      )}
    </button>
  );
}
