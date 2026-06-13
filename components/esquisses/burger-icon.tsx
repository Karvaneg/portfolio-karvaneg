interface BurgerIconProps {
  /** Ouvert → croix ; fermé → trois traits esquissés. */
  open: boolean;
}

/** Icône burger manuscrite du carnet d'esquisses (hérite la couleur via currentColor). */
export function BurgerIcon({ open }: BurgerIconProps) {
  return (
    <svg viewBox="0 0 36 28" aria-hidden="true">
      {open ? (
        <>
          <path
            d="M 5,5 L 31,23"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 31,5 L 5,23"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
          />
        </>
      ) : (
        <>
          <path
            d="M 4,7 Q 18,5 32,8"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 4,15 Q 20,13 32,16"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 4,23 Q 16,21 32,24"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
          />
        </>
      )}
    </svg>
  );
}
