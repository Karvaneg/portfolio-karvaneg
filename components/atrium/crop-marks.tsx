import styles from './crop-marks.module.css';

/** Repères de coupe aux 4 coins (décoratifs, masqués < 860px). */
export function CropMarks() {
  return (
    <>
      <span className={`${styles.crop} ${styles.tl}`} aria-hidden="true" />
      <span className={`${styles.crop} ${styles.tr}`} aria-hidden="true" />
      <span className={`${styles.crop} ${styles.bl}`} aria-hidden="true" />
      <span className={`${styles.crop} ${styles.br}`} aria-hidden="true" />
    </>
  );
}
