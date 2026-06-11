import { type ReactNode } from 'react';
import { CarnetCursor } from './carnet-cursor';
import styles from './carnet.module.css';

interface CarnetShellProps {
  /** Classe des variables de police (next/font), fournie par le serveur. */
  fontClass: string;
  children: ReactNode;
}

/**
 * Enveloppe la surface carnet d'esquisses : porte `data-surface="carnet"`
 * (tokens papier/graphite/crayon) + les variables de police, et monte le
 * curseur crayon custom.
 */
export function CarnetShell({ fontClass, children }: CarnetShellProps) {
  return (
    <div data-surface="carnet" className={`${fontClass} ${styles.page}`}>
      <CarnetCursor />
      {children}
    </div>
  );
}
