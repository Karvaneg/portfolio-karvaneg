import {
  Geist,
  Geist_Mono,
  JetBrains_Mono,
  Caveat,
  Patrick_Hand,
  Special_Elite,
  Shadows_Into_Light_Two,
} from 'next/font/google';

/**
 * Polices de la refonte, exposées en variables CSS (`next/font` = pas de FOUC,
 * pas de requête runtime). Appliquées par surface via `refonteFontVariables`.
 */

export const geist = Geist({ subsets: ['latin'], display: 'swap', variable: '--font-geist' });

export const geistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-mono',
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

export const caveat = Caveat({ subsets: ['latin'], display: 'swap', variable: '--font-caveat' });

export const patrickHand = Patrick_Hand({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-patrick-hand',
});

export const specialElite = Special_Elite({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-special-elite',
});

export const shadowsIntoLightTwo = Shadows_Into_Light_Two({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-shadows',
});

/** Classe à poser sur le conteneur d'une surface refonte pour activer les variables. */
export const refonteFontVariables = [
  geist,
  geistMono,
  jetbrainsMono,
  caveat,
  patrickHand,
  specialElite,
  shadowsIntoLightTwo,
]
  .map((font) => font.variable)
  .join(' ');
