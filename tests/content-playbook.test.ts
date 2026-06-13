import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { describe, it, expect } from 'vitest';
import { playbookEntries } from '@/content/playbook-index';
import { getAdjacentEntries, registeredSlugs } from '@/content/playbook/registry';

const contentDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'content', 'playbook');
const liveEntries = playbookEntries.filter((entry) => entry.status === 'live');

describe('content/playbook-index', () => {
  it('a des num et slugs uniques', () => {
    const nums = playbookEntries.map((entry) => entry.num);
    const slugs = playbookEntries.map((entry) => entry.slug);
    expect(new Set(nums).size).toBe(nums.length);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('renseigne les champs éditoriaux de chaque entrée', () => {
    for (const entry of playbookEntries) {
      expect(entry.title).not.toBe('');
      expect(entry.category).not.toBe('');
      expect(entry.readingTime).not.toBe('');
      expect(entry.summary.length).toBeGreaterThan(20);
    }
  });
});

describe('content/playbook registry', () => {
  it('associe chaque entrée publiée à un fichier MDX existant', () => {
    for (const entry of liveEntries) {
      expect(registeredSlugs).toContain(entry.slug);
      expect(existsSync(join(contentDir, `${entry.slug}.mdx`))).toBe(true);
    }
  });

  it("n'enregistre aucun slug orphelin (sans entrée d'index)", () => {
    const knownSlugs = new Set(playbookEntries.map((entry) => entry.slug));
    for (const slug of registeredSlugs) {
      expect(knownSlugs.has(slug)).toBe(true);
    }
  });

  it("garde l'accent de l'en-tête comme sous-chaîne du titre (rendu H1 fiable)", () => {
    // Le titre n'est plus écrit dans le MDX (lu depuis l'index). Seul l'accent y
    // est déclaré : il doit exister dans le titre, sinon le H1 perd son emphase.
    for (const entry of liveEntries) {
      const mdx = readFileSync(join(contentDir, `${entry.slug}.mdx`), 'utf8');
      const accent = mdx.match(/accent="([^"]+)"/)?.[1];
      expect(accent, `accent manquant dans ${entry.slug}.mdx`).toBeTruthy();
      expect(entry.title).toContain(accent!);
    }
  });
});

describe('content/playbook tags', () => {
  it('renseigne au moins un tag par entrée', () => {
    for (const entry of playbookEntries) {
      expect(entry.tags.length).toBeGreaterThan(0);
    }
  });
});

describe('content/playbook navigation', () => {
  it('borne le pager : pas de précédent au début, pas de suivant à la fin', () => {
    const first = getAdjacentEntries(liveEntries[0].slug);
    const last = getAdjacentEntries(liveEntries[liveEntries.length - 1].slug);
    expect(first.prev).toBeNull();
    expect(last.next).toBeNull();
  });

  it('chaîne les entrées intermédiaires dans les deux sens', () => {
    if (liveEntries.length < 3) return;
    const middle = getAdjacentEntries(liveEntries[1].slug);
    expect(middle.prev?.slug).toBe(liveEntries[0].slug);
    expect(middle.next?.slug).toBe(liveEntries[2].slug);
  });
});
