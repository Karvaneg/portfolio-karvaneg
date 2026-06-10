import type { Project } from '@/types/project';
import { inclusishield } from './inclusishield';
import { astroBassin } from './astro-bassin';
import { karvaneg } from './karvaneg';
import { crazeeBurger } from './crazee-burger';
import { cbnsa } from './cbnsa';
import { portails } from './portails';
import { openclassrooms } from './openclassrooms';

/** Tous les projets, triés du plus récent au plus ancien (champ `order`). */
export const projects: Project[] = [
  inclusishield,
  astroBassin,
  karvaneg,
  crazeeBurger,
  cbnsa,
  portails,
  openclassrooms,
].sort((a, b) => a.order - b.order);

export const getProjectById = (id: string): Project | undefined =>
  projects.find((project) => project.id === id);
