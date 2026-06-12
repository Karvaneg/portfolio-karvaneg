import { profile } from '@/content/profile';
import { GithubIcon, ArrowUpRightIcon } from './icons';
import styles from './technique.module.css';
import os from './opensource.module.css';

const TOPICS = ['claude-code', 'custom-skills', 'git-worktrees', 'workflows', 'prompts', 'developer-tooling'];

// Placeholders — à brancher sur les vraies valeurs du repo plus tard.
const STATS = [
  { label: 'Skills', value: '[N]' },
  { label: 'Prompts', value: '[N]' },
  { label: 'Stars', value: '[N]' },
  { label: 'Last commit', value: '—' },
];
const FEATURED = ['./playbooks/001-setup-claude-code', './playbooks/002-skills-workflows', './playbooks/003-worktrees-refactoring'];

export function TechniqueOpenSource() {
  const repo = profile.openSourceRepo;
  return (
    <section className={styles.section} id="opensource">
      <div className={styles.container}>
        <span className={styles.sectionTag}>05 · Open source</span>
        <h2 className={styles.sectionTitle}>Mes workflows en public.</h2>
        <p className={styles.sectionLede}>
          Skills, scripts d'orchestration, prompts système — tout est versionné publiquement.
          Forkable, critiquable, améliorable.
        </p>

        <div className={os.repoCard}>
          <div className={os.repoMain}>
            <div className={`${os.repoHeader} ${styles.mono}`}>
              <GithubIcon className={styles.icon} />
              <span className={os.repoOrg}>karvaneg /</span>
              <span className={os.repoName}>claude-code-dev-workflows</span>
              <span className={os.repoVisibility}>Public</span>
            </div>
            <p className={os.repoDesc}>
              Mes playbooks et skills Claude Code, versionnés : setup d'un environnement reproductible, création de skills invocables, et refactoring asynchrone en Git Worktree.
            </p>
            <div className={os.repoTopics}>
              {TOPICS.map((topic, index) => (
                <span
                  key={topic}
                  className={`${styles.tag} ${styles.mono} ${index === 0 ? styles.tagAccent : ''}`}
                >
                  {topic}
                </span>
              ))}
            </div>
            <div className={`${styles.ctaRow} ${os.repoCta}`}>
              <a href={repo} target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.btnPrimary}`}>
                <GithubIcon className={styles.icon} />
                <span>View on GitHub</span>
              </a>
              <a
                href={`${repo}#readme`}
                target="_blank"
                rel="noreferrer"
                className={`${styles.btn} ${styles.btnGhost}`}
              >
                <span>README</span>
                <ArrowUpRightIcon className={styles.icon} />
              </a>
            </div>
          </div>
          <aside className={os.repoSide}>
            <h4>Repo stats</h4>
            <ul>
              {STATS.map((stat) => (
                <li key={stat.label}>
                  <span>{stat.label}</span>
                  <span className={os.repoNum}>{stat.value}</span>
                </li>
              ))}
            </ul>
            <h4>Featured</h4>
            <ul>
              {FEATURED.map((item) => (
                <li key={item}>
                  <span className={os.repoFeatured}>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
