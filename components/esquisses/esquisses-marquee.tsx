import styles from './esquisses-marquee.module.css';

/** Un segment du bandeau (répété pour la boucle de défilement). */
function Segment() {
  return (
    <span>
      Code propre <span className={styles.star}>*</span>
      Design assumé <span className={styles.star}>*</span>
      Accessibilité non négociable <span className={styles.star}>*</span>
      Documentation aimée <span className={styles.star}>*</span>
      Bugs poursuivis avec entêtement <span className={styles.star}>*</span>
    </span>
  );
}

/** Bandeau manifeste défilant (décoratif). */
export function EsquissesMarquee() {
  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.marqueeTrack}>
        <Segment />
        <Segment />
        <Segment />
        <Segment />
      </div>
    </div>
  );
}
