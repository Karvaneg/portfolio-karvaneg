'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { Project, ProjectShot } from '@/types/project';
import { ArrowUpRightIcon } from './icons';
import styles from './technique.module.css';

const STATUS_CLASS: Record<Project['status'], string> = {
  shipped: styles.shipped,
  'in-progress': styles.inProgress,
  certified: styles.certified,
};

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

interface CaseStudyProps {
  project: Project;
  onClose: () => void;
}

export function CaseStudy({ project, onClose }: CaseStudyProps) {
  const { caseStudy, shots } = project;
  const [current, setCurrent] = useState(0);
  const [zoomed, setZoomed] = useState<ProjectShot | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const shot = shots[current] ?? null;

  // Montage : verrou du scroll + focus initial + restitution du focus.
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    modalRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();
    return () => {
      document.body.style.overflow = '';
      previouslyFocused?.focus();
    };
  }, []);

  // Clavier : Esc, flèches du carrousel, et piège à focus (Tab).
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (zoomed) setZoomed(null);
        else onClose();
        return;
      }
      if (event.key === 'Tab' && modalRef.current) {
        const items = Array.from(modalRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
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
        return;
      }
      if (zoomed || shots.length < 2) return;
      if (event.key === 'ArrowLeft') setCurrent((c) => (c - 1 + shots.length) % shots.length);
      if (event.key === 'ArrowRight') setCurrent((c) => (c + 1) % shots.length);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [zoomed, shots.length, onClose]);

  return (
    <div className={styles.caseOverlay} onClick={onClose}>
      <div
        ref={modalRef}
        className={styles.caseModal}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(event) => event.stopPropagation()}
      >
        <header className={styles.caseHead}>
          <div>
            <div className={styles.caseHeadMeta}>
              <span className={styles.ticketId}>{project.ticketId}</span>
              <span className={`${styles.ticketStatus} ${STATUS_CLASS[project.status]}`}>
                <span className={styles.statusDot} /> {project.statusLabel}
              </span>
              <span className={styles.ticketPeriod}>{project.period}</span>
            </div>
            <h3 className={styles.caseTitle}>{project.headline}</h3>
            <p className={styles.caseTagline}>{caseStudy.tagline}</p>
            {project.website && (
              <a
                className={`${styles.caseSiteLink} ${styles.mono}`}
                href={project.website}
                target="_blank"
                rel="noreferrer"
              >
                {project.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                <ArrowUpRightIcon />
              </a>
            )}
          </div>
          <button type="button" className={styles.caseClose} onClick={onClose} aria-label="Fermer">
            ×
          </button>
        </header>

        <div className={styles.caseBody}>
          <div className={styles.caseFacts}>
            {caseStudy.facts.map((fact) => (
              <div className={styles.caseFact} key={fact.label}>
                <span className={`${styles.factK} ${styles.mono}`}>{fact.label}</span>
                <span className={styles.factV}>{fact.value}</span>
              </div>
            ))}
          </div>

          {caseStudy.metrics && (
            <div className={styles.caseMetrics}>
              <div className={`${styles.caseMetricsHead} ${styles.mono}`}>
                {caseStudy.metrics.label}
              </div>
              <div className={styles.caseMetricsGrid}>
                {caseStudy.metrics.items.map((metric) => (
                  <div className={styles.caseMetric} key={metric.label}>
                    <span className={styles.caseMetricV}>{metric.value}</span>
                    <span className={styles.caseMetricK}>{metric.label}</span>
                    {metric.sub && (
                      <span className={`${styles.caseMetricSub} ${styles.mono}`}>{metric.sub}</span>
                    )}
                  </div>
                ))}
              </div>
              {caseStudy.metrics.note && (
                <p className={`${styles.caseMetricsNote} ${styles.mono}`}>{caseStudy.metrics.note}</p>
              )}
            </div>
          )}

          {shot && (
            <div className={styles.caseCarousel}>
              <div className={styles.caseCarouselStage}>
                {shots.length > 1 && (
                  <button
                    type="button"
                    className={styles.caseCarouselArrow}
                    onClick={() => setCurrent((c) => (c - 1 + shots.length) % shots.length)}
                    aria-label="Image précédente"
                  >
                    ‹
                  </button>
                )}
                <figure className={styles.caseCarouselFig}>
                  <button
                    type="button"
                    className={styles.caseShotBtn}
                    onClick={() => setZoomed(shot)}
                    aria-label={`Agrandir : ${shot.caption}`}
                  >
                    <Image src={shot.src} alt={shot.alt} fill sizes="(max-width: 940px) 100vw, 880px" />
                    <span className={`${styles.caseShotZoom} ${styles.mono}`}>⤢ zoom</span>
                  </button>
                </figure>
                {shots.length > 1 && (
                  <button
                    type="button"
                    className={styles.caseCarouselArrow}
                    onClick={() => setCurrent((c) => (c + 1) % shots.length)}
                    aria-label="Image suivante"
                  >
                    ›
                  </button>
                )}
              </div>
              <div className={styles.caseCarouselFoot}>
                <figcaption className={styles.mono}>{shot.caption}</figcaption>
                {shots.length > 1 && (
                  <div className={styles.caseCarouselMeta}>
                    <span className={`${styles.caseCarouselCount} ${styles.mono}`}>
                      {current + 1} / {shots.length}
                    </span>
                    <div className={styles.caseCarouselDots}>
                      {shots.map((item, index) => (
                        <button
                          key={item.src}
                          type="button"
                          className={`${styles.caseDot} ${index === current ? styles.active : ''}`}
                          onClick={() => setCurrent(index)}
                          aria-label={`Image ${index + 1} sur ${shots.length}`}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {caseStudy.sections.map((section) => (
            <div className={styles.caseSection} key={section.title}>
              <h4>{section.title}</h4>
              {section.body.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          ))}

          <div className={styles.caseSection}>
            <h4>Stack</h4>
            <div className={`${styles.stack} ${styles.caseStack}`}>
              {project.stack.map((tech) => (
                <span key={tech} className={`${styles.tag} ${styles.mono}`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.aiTooling && (
            <div className={styles.caseSection}>
              <h4>{project.metaLabel ?? 'AI Tooling'}</h4>
              <p>{project.aiTooling}</p>
            </div>
          )}
        </div>
      </div>

      {zoomed && (
        <div
          className={styles.caseLightbox}
          onClick={(event) => {
            event.stopPropagation();
            setZoomed(null);
          }}
        >
          <button
            type="button"
            className={styles.caseLightboxClose}
            aria-label="Fermer le zoom"
            onClick={() => setZoomed(null)}
          >
            ×
          </button>
          <figure className={styles.caseLightboxFig} onClick={(event) => event.stopPropagation()}>
            <div className={styles.caseLightboxImg}>
              <Image src={zoomed.src} alt={zoomed.alt} fill sizes="92vw" />
            </div>
            <figcaption className={styles.mono}>{zoomed.caption}</figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
