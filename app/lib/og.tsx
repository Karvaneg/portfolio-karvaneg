import { ImageResponse } from 'next/og';

/** Dimensions et type partagés par toutes les images OpenGraph. */
export const ogSize = { width: 1200, height: 630 };
export const ogContentType = 'image/png';

type Surface = 'atrium' | 'carnet' | 'technique';

const themes: Record<Surface, { bg: string; fg: string; accent: string; dim: string }> = {
  atrium: { bg: '#15120d', fg: '#f3ede2', accent: '#c4392a', dim: 'rgba(243,237,226,0.55)' },
  carnet: { bg: '#f1ead8', fg: '#2c2a28', accent: '#c4392a', dim: 'rgba(44,42,40,0.55)' },
  technique: { bg: '#0a0a0a', fg: '#fafafa', accent: '#34d399', dim: 'rgba(161,161,170,0.85)' },
};

interface OgImageOptions {
  surface: Surface;
  /** Étiquette en surtitre (ex. « Carnet technique »). */
  eyebrow: string;
  title: string;
}

/** Génère une image OpenGraph (1200×630) brandée selon la surface. */
export function ogImage({ surface, eyebrow, title }: OgImageOptions) {
  const t = themes[surface];

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background: t.bg,
          color: t.fg,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '40px', height: '4px', background: t.accent }} />
          <div
            style={{
              fontSize: '26px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: t.accent,
            }}
          >
            {eyebrow}
          </div>
        </div>

        <div style={{ fontSize: '70px', fontWeight: 700, lineHeight: 1.08, maxWidth: '960px' }}>
          {title}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ fontSize: '30px', fontWeight: 600 }}>Marie Le Carvennec</div>
            <div style={{ fontSize: '24px', color: t.dim }}>
              Développeuse fullstack &amp; AI-augmented engineer
            </div>
          </div>
          <div style={{ fontSize: '30px', color: t.accent }}>karvaneg*</div>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
