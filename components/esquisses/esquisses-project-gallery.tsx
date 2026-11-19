'use client';

import { useRef, useState, type CSSProperties } from 'react';
import Image from 'next/image';
import type { Project } from '@/types/project';
import { EsquissesLightbox } from './esquisses-lightbox';
import detail from './esquisses-project-detail.module.css';
import styles from './esquisses-project-gallery.module.css';

interface EsquissesProjectGalleryProps {
  project: Project;
  frameStyle: CSSProperties;
}

/** Galerie du détail projet (esquisses) : chaque visuel s'ouvre en grand dans une lightbox. */
export function EsquissesProjectGallery({ project, frameStyle }: EsquissesProjectGalleryProps) {
  const [open, setOpen] = useState<number | null>(null);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  // Texte alternatif repris de la capture technique correspondante, s'il en existe une.
  const images = project.esquisses.gallery.map((src) => ({
    src,
    alt: project.shots.find((shot) => shot.src === src)?.alt ?? `${project.title}, illustration`,
  }));

  const close = () => {
    const last = open;
    setOpen(null);
    if (last !== null) buttons.current[last]?.focus();
  };

  if (images.length === 0) return null;

  return (
    <div className={`${detail.detailImageBlock} ${detail.detailGallery}`}>
      {images.map((image, index) => (
        <button
          type="button"
          key={image.src}
          ref={(el) => {
            buttons.current[index] = el;
          }}
          className={`${detail.detailImageFrame} ${styles.zoomButton}`}
          aria-label={`Agrandir : ${image.alt}`}
          onClick={() => setOpen(index)}
        >
          <span className={detail.detailImage} style={frameStyle}>
            <Image src={image.src} alt="" fill sizes="(max-width: 960px) 100vw, 380px" />
          </span>
        </button>
      ))}

      {open !== null && (
        <EsquissesLightbox images={images} index={open} onIndex={setOpen} onClose={close} />
      )}
    </div>
  );
}
