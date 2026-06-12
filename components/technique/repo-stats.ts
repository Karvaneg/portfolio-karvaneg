// Stats du repo open-source, récupérées à la build (SSG) depuis l'API GitHub.
// Fallback figé (snapshot juin 2026) si l'API est indisponible / rate-limitée :
// la build reste verte et la section affiche des valeurs cohérentes.

const REPO = 'Karvaneg/claude-code-dev-workflows';
const API = `https://api.github.com/repos/${REPO}`;
const HEADERS = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'portfolio-karvaneg',
};

export interface RepoStat {
  label: string;
  value: string;
}

export interface RepoData {
  stats: RepoStat[];
  featured: string[];
}

interface GhEntry {
  name: string;
  type: 'file' | 'dir';
  path: string;
}

const FALLBACK: RepoData = {
  stats: [
    { label: 'Playbooks', value: '3' },
    { label: 'Skills', value: '1' },
    { label: 'Stars', value: '0' },
    { label: 'Last commit', value: 'mai 2026' },
  ],
  featured: [
    'docs/playbooks/001-setup-windows.md',
    'docs/playbooks/002-skills-workflows.md',
    'docs/playbooks/003-async-refactor-worktrees.md',
  ],
};

async function ghJson<T>(path: string): Promise<T> {
  // Timeout 5 s : une API lente/injoignable ne doit jamais bloquer la build.
  const res = await fetch(`${API}${path}`, { headers: HEADERS, signal: AbortSignal.timeout(5000) });
  if (!res.ok) throw new Error(`GitHub API ${res.status} sur ${path}`);
  return res.json() as Promise<T>;
}

function formatMonth(iso: string): string {
  return new Intl.DateTimeFormat('fr-FR', { month: 'short', year: 'numeric' }).format(new Date(iso));
}

/** `.md` hors README/index, ou sous-dossier → compte comme une unité de contenu. */
function isContent(e: GhEntry): boolean {
  if (e.type === 'dir') return true;
  return e.name.endsWith('.md') && !/^readme|^index/i.test(e.name);
}

/**
 * Récupère les stats du repo à la build. Toute défaillance réseau / API
 * retombe sur le snapshot `FALLBACK` (la build ne casse jamais pour ça).
 */
export async function getRepoData(): Promise<RepoData> {
  try {
    const [meta, skills, playbooks] = await Promise.all([
      ghJson<{ stargazers_count: number; pushed_at: string }>(''),
      ghJson<GhEntry[]>('/contents/skills'),
      ghJson<GhEntry[]>('/contents/docs/playbooks'),
    ]);
    const playbookFiles = playbooks.filter((e) => e.type === 'file' && e.name.endsWith('.md'));
    return {
      stats: [
        { label: 'Playbooks', value: String(playbookFiles.length) },
        { label: 'Skills', value: String(skills.filter(isContent).length) },
        { label: 'Stars', value: String(meta.stargazers_count) },
        { label: 'Last commit', value: formatMonth(meta.pushed_at) },
      ],
      featured: playbookFiles.map((e) => e.path),
    };
  } catch {
    return FALLBACK;
  }
}
