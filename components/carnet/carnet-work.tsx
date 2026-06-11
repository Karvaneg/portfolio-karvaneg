'use client';

import { useState, type CSSProperties } from 'react';
import Image from 'next/image';
import { projects } from '@/content/projects';
import { CarnetProjectDetail } from './carnet-project-detail';
import styles from './carnet.module.css';

const COUNT_WORDS = [
  'Zéro',
  'Un',
  'Deux',
  'Trois',
  'Quatre',
  'Cinq',
  'Six',
  'Sept',
  'Huit',
  'Neuf',
  'Dix',
];

/** Section « Projets » : sommaire esquissé + aperçu flottant + overlay détail. */
export function CarnetWork() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  const count = COUNT_WORDS[projects.length] ?? String(projects.length);

  return (
    <>
      <section className={styles.work} id="work">
        <div className={styles.workHeader}>
          <div>
            <span className={`${styles.eyebrow} ${styles.eyebrowRed}`}>§ 03 — Sélection</span>
            <h2 className={styles.sectionTitle}>
              {count} projets,
              <br />
              <em className={styles.scriptAccent}>chacun son histoire.</em>
            </h2>
          </div>
          <p className={styles.sectionIntro}>
            De l&apos;API minimaliste à la plateforme SaaS. Cliquer pour ouvrir le carnet.
          </p>
        </div>

        <ul className={styles.workList}>
          {projects.map((project) => (
            <li key={project.id}>
              <button
                type="button"
                className={styles.projectRow}
                data-cursor="large"
                // Rotation propre au projet (donnée) → variable CSS dynamique.
                style={{ '--rot': project.carnet.rotation } as CSSProperties}
                onClick={() => setOpenId(project.id)}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <span className={styles.projectNum}>
                  {String(project.order).padStart(2, '0')} /
                </span>
                <span className={styles.projectTitle}>{project.title}</span>
                <span className={styles.projectTagline}>{project.tagline}</span>
                <span className={styles.projectMeta}>
                  <span>{project.period}</span>
                  <span>{project.role}</span>
                </span>
                <span className={styles.projectArrow}>→</span>
              </button>
            </li>
          ))}
        </ul>

        {projects.map((project) => (
          <div
            key={`${project.id}-preview`}
            className={`${styles.projectPreview} ${
              hoveredId === project.id ? styles.projectPreviewActive : ''
            }`}
            style={{ '--rot': project.carnet.rotation } as CSSProperties}
            aria-hidden="true"
          >
            <div className={styles.projectPreviewMock}>
              <Image src={project.carnet.cardImage} alt="" fill sizes="400px" />
            </div>
            <div className={styles.projectPreviewCaption}>
              {project.carnet.caption ?? `${project.title} · ${project.period}`}
            </div>
          </div>
        ))}
      </section>

      {openId && (
        <CarnetProjectDetail
          projectId={openId}
          onClose={() => setOpenId(null)}
          onNavigate={setOpenId}
        />
      )}
    </>
  );
}
