'use client';

import { useEffect, useState } from 'react';
import type { Project, ProjectShot } from '@/types/project';
import { useFocusTrap } from '@/components/shared/use-focus-trap';
import { CaseStudyHead } from './case-study-head';
import { CaseStudyFacts } from './case-study-facts';
import { CaseStudyCarousel } from './case-study-carousel';
import { CaseStudySections } from './case-study-sections';
import { CaseStudyLightbox } from './case-study-lightbox';
import cs from './case-study.module.css';

interface CaseStudyProps {
  project: Project;
  onClose: () => void;
}

/** Modale « étude de cas » d'un projet : overlay accessible + carrousel + zoom. */
export function CaseStudy({ project, onClose }: CaseStudyProps) {
  const { caseStudy, shots } = project;
  const [current, setCurrent] = useState(0);
  const [zoomed, setZoomed] = useState<ProjectShot | null>(null);
  // Overlay accessible (scroll-lock, focus-trap, restitution). Échap est géré
  // ici car il doit d'abord fermer le zoom, pas la modale.
  const modalRef = useFocusTrap<HTMLDivElement>();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (zoomed) setZoomed(null);
        else onClose();
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
        <CaseStudyHead project={project} tagline={caseStudy.tagline} onClose={onClose} />

        <div className={cs.caseBody}>
          <CaseStudyFacts caseStudy={caseStudy} />
          {shots.length > 0 && (
            <CaseStudyCarousel
              shots={shots}
              current={current}
              onSelect={setCurrent}
              onZoom={setZoomed}
            />
          )}
          <CaseStudySections project={project} />
        </div>
      </div>

      {zoomed && <CaseStudyLightbox shot={zoomed} onClose={() => setZoomed(null)} />}
    </div>
  );
}
