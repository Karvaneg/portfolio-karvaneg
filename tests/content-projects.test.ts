import { describe, it, expect } from 'vitest';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { projects, getProjectById } from '@/content/projects';

const PUBLIC_DIR = join(process.cwd(), 'public');

describe('content/projects — intégrité du modèle unifié', () => {
  it('contient les 7 projets', () => {
    expect(projects).toHaveLength(7);
  });

  it("n'a que des id uniques", () => {
    const ids = projects.map((project) => project.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("n'a que des ticketId uniques", () => {
    const ticketIds = projects.map((project) => project.ticketId);
    expect(new Set(ticketIds).size).toBe(ticketIds.length);
  });

  it('est trié du plus récent au plus ancien (order 1→7, strictement croissant)', () => {
    const orders = projects.map((project) => project.order);
    expect(orders).toEqual([...orders].sort((a, b) => a - b));
    expect(new Set(orders).size).toBe(orders.length);
    expect(orders[0]).toBe(1);
  });

  it('référence des images présentes dans public/', () => {
    for (const project of projects) {
      const sources = [
        ...project.shots.map((shot) => shot.src),
        project.esquisses.cardImage,
        project.esquisses.heroImage,
        ...project.esquisses.gallery,
      ];
      for (const src of sources) {
        expect(existsSync(join(PUBLIC_DIR, src)), `${project.id} → ${src}`).toBe(true);
      }
    }
  });

  it('expose chaque projet via getProjectById', () => {
    for (const project of projects) {
      expect(getProjectById(project.id)).toBe(project);
    }
    expect(getProjectById('inconnu')).toBeUndefined();
  });
});
