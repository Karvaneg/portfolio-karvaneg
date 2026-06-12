import type { ReactNode } from 'react';
import techStyles from '@/components/technique/technique.module.css';
import styles from './playbook.module.css';

/** Ligne d'instruction « ↓ Copiez/collez ce prompt… ». */
export function CopyInstruction({ children = '↓ Copiez/collez ce prompt dans Claude Code :' }: { children?: ReactNode }) {
  return <p className={styles.copyInstruction}>{children}</p>;
}

/** Encadré prérequis / cadrage avec tag de section. */
export function Prereq({ tag, children }: { tag: string; children: ReactNode }) {
  return (
    <section className={styles.prereq}>
      <span className={techStyles.sectionTag}>{tag}</span>
      {children}
    </section>
  );
}

/** Conteneur vertical des étapes. */
export function Steps({ children }: { children: ReactNode }) {
  return <div className={styles.steps}>{children}</div>;
}

/** Bloc « résultat attendu » avec label. `spacious` = section autonome (plus d'air au-dessus). */
export function ResultBlock({
  label,
  spacious = false,
  children,
}: {
  label: string;
  spacious?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`${styles.resultBlock} ${spacious ? styles.resultBlockSpacious : ''}`}>
      <p className={styles.resultLabel}>{label}</p>
      {children}
    </div>
  );
}

/** Grille 2 colonnes (diff propre vs. mauvais). */
export function DecisionGrid({ children }: { children: ReactNode }) {
  return <div className={styles.decisionGrid}>{children}</div>;
}

/** Bloc préformaté de prose (diagramme ASCII). */
export function ProsePre({ children }: { children: string }) {
  return <pre className={styles.prosePre}>{children}</pre>;
}

/** Texte de clôture de l'entrée (avant le pager généré par la route). */
export function Wrapup({ children }: { children: ReactNode }) {
  return (
    <div className={styles.wrapup}>
      <div className={styles.wrapupDivider} />
      <div className={styles.wrapupText}>{children}</div>
    </div>
  );
}
