'use client';

import { useEffect, useRef, type CSSProperties } from 'react';
import Image from 'next/image';
import { projects, getProjectById } from '@/content/projects';
import styles from './carnet.module.css';

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

interface CarnetProjectDetailProps {
  projectId: string;
  onClose: () => void;
  onNavigate: (id: string) => void;
}

/**
 * Overlay plein écran d'un projet (carnet) : récit, galerie, projet suivant.
 * Verrou de scroll, fermeture Esc, focus-trap + restitution du focus (cf.
 * components/technique/case-study.tsx).
 */
export function CarnetProjectDetail({ projectId, onClose, onNavigate }: CarnetProjectDetailProps) {
  const project = getProjectById(projectId);
  const ref = useRef<HTMLDivElement>(null);

  // Montage : verrou du scroll + focus initial + restitution du focus.
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    ref.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();
    return () => {
      document.body.style.overflow = '';
      previouslyFocused?.focus();
    };
  }, []);

  // Clavier : Esc + piège à focus (Tab).
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key === 'Tab' && ref.current) {
        const items = Array.from(ref.current.querySelectorAll<HTMLElement>(FOCUSABLE));
        if (items.length === 0) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  if (!project) return null;

  const { carnet, description } = project;
  const index = projects.findIndex((item) => item.id === project.id);
  const next = projects[(index + 1) % projects.length];
  const stackList = project.stackCarnet ?? project.stack;
  const impact = project.impactCarnet ?? project.impact;
  const num = String(project.order).padStart(2, '0');
  // Couleur de cadre pilotée par la donnée projet → variable CSS dynamique.
  const frameStyle = {
    '--frame-bg': carnet.lightFrame ? 'var(--paper-2)' : carnet.background,
  } as CSSProperties;

  return (
    <div
      className={styles.projectDetail}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      ref={ref}
    >
      <button type="button" className={styles.detailClose} onClick={onClose}>
        <span aria-hidden="true">✕</span> Fermer
      </button>

      <div className={styles.detailHero}>
        <div className={styles.detailEyebrow}>
          {num} / {project.period} · {project.role}
        </div>
        <h1 className={styles.detailTitle}>
          {project.title}
          <span className={styles.it}>.</span>
        </h1>
        <p className={styles.detailTagline}>{project.tagline}</p>

        <div className={styles.detailMetaGrid}>
          <div>
            <span className={styles.detailMetaLabel}>Rôle</span>
            <div className={styles.detailMetaValue}>{project.role}</div>
          </div>
          <div>
            <span className={styles.detailMetaLabel}>Période</span>
            <div className={styles.detailMetaValue}>{project.duration ?? project.period}</div>
          </div>
          <div>
            <span className={styles.detailMetaLabel}>Stack</span>
            <div className={styles.detailMetaStack}>{stackList.join(' · ')}</div>
          </div>
          <div>
            <span className={styles.detailMetaLabel}>Impact</span>
            <div className={styles.detailMetaRed}>{impact}</div>
          </div>
        </div>
      </div>

      <div className={styles.detailImageBlock}>
        <div className={styles.detailImageFrame}>
          <div className={styles.detailImage} style={frameStyle}>
            <Image
              src={carnet.heroImage}
              alt={`${project.title} — aperçu principal`}
              fill
              sizes="(max-width: 960px) 100vw, 1100px"
            />
          </div>
        </div>
      </div>

      <div className={styles.detailBody}>
        <div>
          <h3>Le projet —</h3>
        </div>
        <div>
          {description.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>

      {carnet.gallery.length > 0 && (
        <div className={`${styles.detailImageBlock} ${styles.detailGallery}`}>
          {carnet.gallery.slice(0, 3).map((src) => (
            <div className={styles.detailImageFrame} key={src}>
              <div className={styles.detailImage} style={frameStyle}>
                <Image
                  src={src}
                  alt={`${project.title} — illustration`}
                  fill
                  sizes="(max-width: 960px) 100vw, 380px"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      <div className={styles.detailNext}>
        <div>
          <div className={styles.detailNextLabel}>Projet suivant</div>
          <button
            type="button"
            className={styles.detailNextTitle}
            onClick={() => onNavigate(next.id)}
          >
            {next.title} →
          </button>
        </div>
        <button type="button" className={styles.cta} onClick={onClose}>
          Retour à l&apos;index <span className={styles.arrow}>↑</span>
        </button>
      </div>
    </div>
  );
}
