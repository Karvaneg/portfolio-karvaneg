import { type ReactNode } from 'react';
import { EsquissesCursor } from './esquisses-cursor';
import styles from './esquisses.module.css';

interface EsquissesShellProps {
  /** Classe des variables de police (next/font), fournie par le serveur. */
  fontClass: string;
  children: ReactNode;
}

/**
 * Enveloppe la surface esquisses : porte `data-surface="esquisses"`
 * (tokens papier/graphite/crayon) + les variables de police, et monte le
 * curseur crayon custom.
 */
export function EsquissesShell({ fontClass, children }: EsquissesShellProps) {
  return (
    <div data-surface="esquisses" className={`${fontClass} ${styles.page}`}>
      <EsquissesCursor />
      {children}
    </div>
  );
}
