import { profile } from '@/content/profile';
import styles from './atrium-colophon.module.css';

export function AtriumColophon() {
  const { socials } = profile;
  return (
    <footer className={styles.colophon}>
      <div className={styles.colophonLinks}>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={profile.phoneHref}>{profile.phoneDisplay}</a>
        <a href={socials.github.url} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <a href={socials.linkedin.url} target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
        {socials.malt && (
          <a href={socials.malt.url} target="_blank" rel="noreferrer">
            Malt ↗
          </a>
        )}
      </div>
      <div className={styles.colophonMeta}>
        <span>{profile.geo}</span>
        <span>© 2026 {profile.name}</span>
      </div>
    </footer>
  );
}
