'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { Project, ProjectShot } from '@/types/project';
import { ArrowUpRightIcon } from './icons';
import styles from './technique.module.css';
import cs from './case-study.module.css';

const STATUS_CLASS: Record<Project['status'], string> = {
  shipped: styles.shipped,
  'in-progress': styles.inProgress,
  certified: styles.certified,
  growing: styles.growing,
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
    <div className={cs.caseOverlay} onClick={onClose}>
      <div
        ref={modalRef}
        className={cs.caseModal}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(event) => event.stopPropagation()}
      >
        <header className={cs.caseHead}>
          <div>
            <div className={cs.caseHeadMeta}>
              <span className={styles.ticketId}>{project.ticketId}</span>
              <span className={`${styles.ticketStatus} ${STATUS_CLASS[project.status]}`}>
                <span className={styles.statusDot} /> {project.statusLabel}
              </span>
              <span className={styles.ticketPeriod}>{project.period}</span>
            </div>
            <h3 className={cs.caseTitle}>{project.headline}</h3>
            <p className={cs.caseTagline}>{caseStudy.tagline}</p>
            {project.website && (
              <a
                className={`${cs.caseSiteLink} ${styles.mono}`}
                href={project.website}
                target="_blank"
                rel="noreferrer"
              >
                {project.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                <ArrowUpRightIcon />
              </a>
            )}
          </div>
          <button type="button" className={cs.caseClose} onClick={onClose} aria-label="Fermer">
            ×
          </button>
        </header>

        <div className={cs.caseBody}>
          <div className={cs.caseFacts}>
            {caseStudy.facts.map((fact) => (
              <div className={cs.caseFact} key={fact.label}>
                <span className={`${cs.factK} ${styles.mono}`}>{fact.label}</span>
                <span className={cs.factV}>{fact.value}</span>
              </div>
            ))}
          </div>

          {caseStudy.metrics && (
            <div className={cs.caseMetrics}>
              <div className={`${cs.caseMetricsHead} ${styles.mono}`}>
                {caseStudy.metrics.label}
              </div>
              <div className={cs.caseMetricsGrid}>
                {caseStudy.metrics.items.map((metric) => (
                  <div className={cs.caseMetric} key={metric.label}>
                    <span className={cs.caseMetricV}>{metric.value}</span>
                    <span className={cs.caseMetricK}>{metric.label}</span>
                    {metric.sub && (
                      <span className={`${cs.caseMetricSub} ${styles.mono}`}>{metric.sub}</span>
                    )}
                  </div>
                ))}
              </div>
              {caseStudy.metrics.note && (
                <p className={`${cs.caseMetricsNote} ${styles.mono}`}>{caseStudy.metrics.note}</p>
              )}
            </div>
          )}

          {shot && (
            <div className={cs.caseCarousel}>
              <div className={cs.caseCarouselStage}>
                {shots.length > 1 && (
                  <button
                    type="button"
                    className={cs.caseCarouselArrow}
                    onClick={() => setCurrent((c) => (c - 1 + shots.length) % shots.length)}
                    aria-label="Image précédente"
                  >
                    ‹
                  </button>
                )}
                <figure className={cs.caseCarouselFig}>
                  <button
                    type="button"
                    className={cs.caseShotBtn}
                    onClick={() => setZoomed(shot)}
                    aria-label={`Agrandir : ${shot.caption}`}
                  >
                    <Image src={shot.src} alt={shot.alt} fill sizes="(max-width: 940px) 100vw, 880px" />
                    <span className={`${cs.caseShotZoom} ${styles.mono}`}>⤢ zoom</span>
                  </button>
                </figure>
                {shots.length > 1 && (
                  <button
                    type="button"
                    className={cs.caseCarouselArrow}
                    onClick={() => setCurrent((c) => (c + 1) % shots.length)}
                    aria-label="Image suivante"
                  >
                    ›
                  </button>
                )}
              </div>
              <div className={cs.caseCarouselFoot}>
                <figcaption className={styles.mono}>{shot.caption}</figcaption>
                {shots.length > 1 && (
                  <div className={cs.caseCarouselMeta}>
                    <span className={`${cs.caseCarouselCount} ${styles.mono}`}>
                      {current + 1} / {shots.length}
                    </span>
                    <div className={cs.caseCarouselDots}>
                      {shots.map((item, index) => (
                        <button
                          key={item.src}
                          type="button"
                          className={`${cs.caseDot} ${index === current ? styles.active : ''}`}
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
            <div className={cs.caseSection} key={section.title}>
              <h4>{section.title}</h4>
              {section.body.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          ))}

          <div className={cs.caseSection}>
            <h4>Stack</h4>
            <div className={`${styles.stack} ${cs.caseStack}`}>
              {project.stack.map((tech) => (
                <span key={tech} className={`${styles.tag} ${styles.mono}`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.aiTooling && (
            <div className={cs.caseSection}>
              <h4>{project.metaLabel ?? 'AI Tooling'}</h4>
              <p>{project.aiTooling}</p>
            </div>
          )}
        </div>
      </div>

      {zoomed && (
        <div
          className={cs.caseLightbox}
          onClick={(event) => {
            event.stopPropagation();
            setZoomed(null);
          }}
        >
          <button
            type="button"
            className={cs.caseLightboxClose}
            aria-label="Fermer le zoom"
            onClick={() => setZoomed(null)}
          >
            ×
          </button>
          <figure className={cs.caseLightboxFig} onClick={(event) => event.stopPropagation()}>
            <div className={cs.caseLightboxImg}>
              <Image src={zoomed.src} alt={zoomed.alt} fill sizes="92vw" />
            </div>
            <figcaption className={styles.mono}>{zoomed.caption}</figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
