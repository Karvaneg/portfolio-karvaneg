import type { ReactNode } from 'react';
import styles from './playbook.module.css';

interface CalloutProps {
  tone?: 'info' | 'warn';
  icon?: string;
  children: ReactNode;
}

/** Encart d'information ou d'avertissement. */
export function Callout({ tone = 'info', icon = '💡', children }: CalloutProps) {
  return (
    <div className={`${styles.callout} ${tone === 'warn' ? styles.calloutWarn : styles.calloutInfo}`}>
      <span className={styles.calloutIcon} aria-hidden="true">
        {icon}
      </span>
      <div className={styles.calloutBody}>{children}</div>
    </div>
  );
}
