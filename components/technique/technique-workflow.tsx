import type { WorkflowIcon } from '@/types/workflow';
import { workflowSkills } from '@/content/workflow';
import { SkillIcon, TestIcon, ArchitectureIcon } from './icons';
import styles from './technique.module.css';
import wf from './workflow.module.css';

function WorkflowSkillIcon({ icon }: { icon: WorkflowIcon }) {
  if (icon === 'skill') return <SkillIcon />;
  if (icon === 'test') return <TestIcon />;
  return <ArchitectureIcon />;
}

export function TechniqueWorkflow() {
  return (
    <section className={styles.section} id="workflow">
      <div className={styles.container}>
        <span className={styles.sectionTag}>03 · Workflow</span>
        <h2 className={styles.sectionTitle}>Trois pratiques. Une discipline.</h2>
        <p className={styles.sectionLede}>
          L'IA n'écrit pas mon code — elle accélère les boucles. Voici les trois axes sur lesquels
          j'investis le plus de pratique.
        </p>
        <div className={wf.cardsGrid}>
          {workflowSkills.map((skill) => (
            <div key={skill.id} className={wf.card}>
              <div className={wf.cardIcon}>
                <WorkflowSkillIcon icon={skill.icon} />
              </div>
              <div className={`${wf.cardId} ${styles.mono}`}>{skill.id}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <div className={wf.cardTags}>
                {skill.tags.map((tag) => (
                  <span key={tag} className={`${styles.tag} ${styles.mono}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
