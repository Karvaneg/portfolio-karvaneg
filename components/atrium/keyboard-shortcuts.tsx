'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './atrium.module.css';

/** Raccourcis : 1 → carnet, 2 → technique, P → playbook (+ rappel visuel). */
const ROUTES: Record<string, string> = {
  '1': '/carnet',
  '2': '/technique',
  p: '/playbook',
};

export function KeyboardShortcuts() {
  const router = useRouter();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      if (target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return;
      const route = ROUTES[event.key.toLowerCase()];
      if (route) router.push(route);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [router]);

  return (
    <div className={styles.kbdHint} aria-hidden="true">
      Raccourcis&nbsp;: <kbd>1</kbd> carnet d&rsquo;esquisses · <kbd>2</kbd> carnet technique ·{' '}
      <kbd>P</kbd> playbook
    </div>
  );
}
