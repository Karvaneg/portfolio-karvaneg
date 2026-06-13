import { buildMetadata } from '@/app/lib/metadata';
import { refonteFontVariables } from '@/app/lib/refonte-fonts';
import { CropMarks } from '@/components/atrium/crop-marks';
import { AtriumTopbar } from '@/components/atrium/atrium-topbar';
import { AtriumHero } from '@/components/atrium/atrium-hero';
import { EditionSketch } from '@/components/atrium/edition-sketch';
import { EditionTechnical } from '@/components/atrium/edition-technical';
import { PlaybookFeature } from '@/components/atrium/playbook-feature';
import { AtriumColophon } from '@/components/atrium/atrium-colophon';
import { KeyboardShortcuts } from '@/components/atrium/keyboard-shortcuts';
import styles from '@/components/atrium/atrium-base.module.css';

export const metadata = buildMetadata({
  path: '/',
  title: 'Karvaneg — Marie Le Carvennec · Développeuse Web Fullstack',
  description:
    "Portfolio de Marie Le Carvennec, développeuse web fullstack. Deux éditions — carnet d'esquisses ou carnet technique — et un playbook d'ingénierie augmentée par l'IA.",
});

export default function AtriumPage() {
  return (
    <div data-surface="atrium" className={`${refonteFontVariables} ${styles.page}`}>
      <CropMarks />
      <div className={styles.cover}>
        <header className={styles.masthead}>
          <AtriumTopbar />
          <AtriumHero />
        </header>
        <main className={styles.editions}>
          <EditionSketch />
          <EditionTechnical />
        </main>
        <PlaybookFeature />
        <AtriumColophon />
        <KeyboardShortcuts />
      </div>
    </div>
  );
}
