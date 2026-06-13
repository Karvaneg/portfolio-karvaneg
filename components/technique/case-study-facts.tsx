import type { ProjectCaseStudy } from '@/types/project';
import styles from './technique.module.css';
import cs from './case-study.module.css';

interface CaseStudyFactsProps {
  caseStudy: ProjectCaseStudy;
}

/** Bandeau de faits clés + grille de métriques (optionnelle) de la modale. */
export function CaseStudyFacts({ caseStudy }: CaseStudyFactsProps) {
  return (
    <>
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
          <div className={`${cs.caseMetricsHead} ${styles.mono}`}>{caseStudy.metrics.label}</div>
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
    </>
  );
}
