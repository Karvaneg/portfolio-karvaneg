'use client';

import { type ReactNode } from 'react';
import { AccentSwitcher } from './accent-switcher';
import { useAccent, setAccent } from './use-accent';
import styles from './technique.module.css';

interface TechniqueShellProps {
  /** Classe des variables de police (next/font), fournie par le serveur. */
  fontClass: string;
  children: ReactNode;
}

/**
 * Enveloppe la surface technique : porte `data-surface` ET `data-accent` sur le
 * même élément (pour que le switcher l'emporte sur l'accent par défaut), lit
 * l'accent persisté (useSyncExternalStore) et monte le switcher discret.
 */
export function TechniqueShell({ fontClass, children }: TechniqueShellProps) {
  const accent = useAccent();

  return (
    <div data-surface="technique" data-accent={accent} className={`${fontClass} ${styles.page}`}>
      {children}
      <AccentSwitcher value={accent} onChange={setAccent} />
    </div>
  );
}
