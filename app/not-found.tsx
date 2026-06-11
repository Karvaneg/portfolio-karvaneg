import { refonteFontVariables } from '@/app/lib/refonte-fonts';
import { CropMarks } from '@/components/atrium/crop-marks';
import { NotFoundScreen } from '@/components/not-found/not-found-screen';
import styles from '@/components/not-found/not-found.module.css';

/** Page 404 : couverture atrium + terminal « 404.log » (cf. maquette Karvaneg 404). */
export default function NotFound() {
  return (
    <div data-surface="atrium" className={`${refonteFontVariables} ${styles.root}`}>
      <CropMarks />
      <NotFoundScreen />
    </div>
  );
}
