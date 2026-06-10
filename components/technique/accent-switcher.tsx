'use client';

import styles from './technique.module.css';

const ACCENTS = [
  { value: 'emerald', label: 'Emerald' },
  { value: 'cyan', label: 'Cyan' },
  { value: 'red', label: 'Rouge' },
] as const;

interface AccentSwitcherProps {
  value: string;
  onChange: (value: string) => void;
}

/** Sélecteur d'accent discret (emerald / cyan / rouge). */
export function AccentSwitcher({ value, onChange }: AccentSwitcherProps) {
  return (
    <div className={styles.accentSwitcher} role="group" aria-label="Couleur d'accent">
      {ACCENTS.map((accent) => (
        <button
          key={accent.value}
          type="button"
          data-accent-value={accent.value}
          className={`${styles.accentSwatch} ${value === accent.value ? styles.accentActive : ''}`}
          aria-label={`Accent ${accent.label}`}
          aria-pressed={value === accent.value}
          onClick={() => onChange(accent.value)}
        />
      ))}
    </div>
  );
}
