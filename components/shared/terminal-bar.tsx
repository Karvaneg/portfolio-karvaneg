import type { ReactNode } from 'react';
import styles from './terminal-bar.module.css';

interface TerminalBarProps {
  /** Titre centré (nom de fichier / libellé de session). */
  title: string;
  /** Élément optionnel aligné à droite (badge, bouton copier…). */
  trailing?: ReactNode;
}

/**
 * Barre de fenêtre « terminal » partagée : 3 pastilles + titre centré + slot
 * droite. Mutualise le chrome dupliqué entre le carnet technique et le playbook
 * (cf. audit CSS). Les couleurs viennent de la surface terminal
 * ([data-surface='technique']), posée par chaque page hôte.
 */
export function TerminalBar({ title, trailing }: TerminalBarProps) {
  return (
    <div className={styles.bar}>
      <div className={styles.lights}>
        <span />
        <span />
        <span />
      </div>
      <span className={styles.title}>{title}</span>
      {trailing}
    </div>
  );
}
