import Link from 'next/link';
import type { PlaybookEntry } from '@/types/playbook';
import ui from '@/components/shared/ui.module.css';
import styles from './playbook-article-footer.module.css';

interface PlaybookArticleFooterProps {
  prev: PlaybookEntry | null;
  next: PlaybookEntry | null;
}

/** Pied d'entrée : pager prev/next (dérivé de l'index) + CTA contact / retour. */
export function PlaybookArticleFooter({ prev, next }: PlaybookArticleFooterProps) {
  return (
    <div className={styles.articleFooter}>
      <nav className={styles.pager} aria-label="Navigation entre entrées">
        {prev ? (
          <Link href={`/playbook/${prev.slug}`} className={styles.pagerLink}>
            <span className={styles.pagerDir}>← Précédent</span>
            <span className={styles.pagerTitle}>
              {prev.num} · {prev.title}
            </span>
          </Link>
        ) : (
          <span className={`${styles.pagerLink} ${styles.pagerDisabled}`}>
            <span className={styles.pagerDir}>← Précédent</span>
            <span className={styles.pagerTitle}>— premier de la série</span>
          </span>
        )}
        {next ? (
          <Link href={`/playbook/${next.slug}`} className={`${styles.pagerLink} ${styles.pagerNext}`}>
            <span className={styles.pagerDir}>Suivant →</span>
            <span className={styles.pagerTitle}>
              {next.num} · {next.title}
            </span>
          </Link>
        ) : (
          <span className={`${styles.pagerLink} ${styles.pagerNext} ${styles.pagerDisabled}`}>
            <span className={styles.pagerDir}>Suivant →</span>
            <span className={styles.pagerTitle}>— dernière entrée publiée</span>
          </span>
        )}
      </nav>

      <div className={ui.ctaRow}>
        <Link href="/technique#contact" className={`${ui.btn} ${ui.btnPrimary}`}>
          <span>Discuter de votre setup</span>
        </Link>
        <Link href="/" className={`${ui.btn} ${ui.btnSecondary}`}>
          <span>← Retour au portfolio</span>
        </Link>
      </div>
    </div>
  );
}
