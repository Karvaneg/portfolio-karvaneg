import { describe, it, expect } from 'vitest';
import { experiences } from '@/content/experience';
import { stack } from '@/content/stack';
import { profile } from '@/content/profile';

describe('content/experience', () => {
  it('contient les 3 postes', () => {
    expect(experiences).toHaveLength(3);
  });

  it('a des champs non vides', () => {
    for (const xp of experiences) {
      expect(xp.role).not.toBe('');
      expect(xp.company).not.toBe('');
      expect(xp.tags.length).toBeGreaterThan(0);
    }
  });
});

describe('content/stack', () => {
  it('contient les 6 catégories', () => {
    expect(stack).toHaveLength(6);
  });

  it('a des num uniques et des items', () => {
    const nums = stack.map((category) => category.num);
    expect(new Set(nums).size).toBe(nums.length);
    for (const category of stack) {
      expect(category.items.length).toBeGreaterThan(0);
    }
  });
});

describe('content/profile', () => {
  it("unifie l'email sur l'adresse officielle", () => {
    expect(profile.email).toBe('marie.lecarvennec@gmail.com');
  });

  it('expose des liens sociaux en https', () => {
    expect(profile.socials.github.url).toMatch(/^https:\/\//);
    expect(profile.socials.linkedin.url).toMatch(/^https:\/\//);
    expect(profile.openSourceRepo).toMatch(/^https:\/\/github\.com\//);
  });
});
