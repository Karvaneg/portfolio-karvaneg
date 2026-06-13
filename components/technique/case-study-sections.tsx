import type { Project } from '@/types/project';
import styles from './technique.module.css';
import cs from './case-study.module.css';

interface CaseStudySectionsProps {
  project: Project;
}

/** Corps narratif de la modale : sections de texte, stack, AI tooling (optionnel). */
export function CaseStudySections({ project }: CaseStudySectionsProps) {
  return (
    <>
      {project.caseStudy.sections.map((section) => (
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
    </>
  );
}
