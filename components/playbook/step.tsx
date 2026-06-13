import type { ReactNode } from 'react';
import styles from './playbook.module.css';

interface StepProps {
  num: number;
  total: number;
  title: string;
  children: ReactNode;
}

/** Une étape numérotée du tutoriel. */
export function Step({ num, total, title, children }: StepProps) {
  return (
    <article className={styles.step} id={`step-${num}`}>
      <header className={styles.stepHeader}>
        <div className={styles.stepNum}>
          <span className={styles.stepNumLabel}>Étape</span>
          <span className={styles.stepNumValue}>{String(num).padStart(2, '0')}</span>
          <span className={styles.stepNumTotal}>/ {String(total).padStart(2, '0')}</span>
        </div>
        <h2 className={styles.stepTitle}>{title}</h2>
      </header>
      <div className={styles.stepBody}>{children}</div>
    </article>
  );
}

interface SubStepProps {
  marker: ReactNode;
  title: string;
  children: ReactNode;
}

/** Sous-étape (puce + corps), imbriquée dans une étape. */
export function SubStep({ marker, title, children }: SubStepProps) {
  return (
    <div className={styles.substep}>
      <div className={styles.substepNum}>{marker}</div>
      <div className={styles.substepBody}>
        <h4>{title}</h4>
        {children}
      </div>
    </div>
  );
}
