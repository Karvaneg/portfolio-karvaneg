'use client';

import { useState } from 'react';
import { projects, getProjectById } from '@/content/projects';
import { Ticket } from './ticket';
import { CaseStudy } from './case-study';
import styles from './technique.module.css';

export function TechniqueProjects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const openProject = openId ? getProjectById(openId) : null;

  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        <span className={styles.sectionTag}>04 · Case studies</span>
        <h2 className={styles.sectionTitle}>Projets &amp; ROI</h2>
        <p className={styles.sectionLede}>
          Format ticket — comme dans la vraie vie. ID, statut, labels, stack, AI tooling, impact
          mesuré.
        </p>
        <div className={styles.tickets}>
          {projects.map((project) => (
            <Ticket key={project.id} project={project} onOpen={() => setOpenId(project.id)} />
          ))}
        </div>
      </div>
      {openProject && <CaseStudy project={openProject} onClose={() => setOpenId(null)} />}
    </section>
  );
}
