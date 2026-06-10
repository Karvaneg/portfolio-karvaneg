import { useSyncExternalStore } from 'react';

const STORAGE_KEY = 'karvaneg-accent';
const ACCENTS = ['emerald', 'cyan', 'red'];
const listeners = new Set<() => void>();

function getSnapshot(): string {
  const value = localStorage.getItem(STORAGE_KEY);
  return value && ACCENTS.includes(value) ? value : 'emerald';
}

function getServerSnapshot(): string {
  return 'emerald';
}

function subscribe(callback: () => void): () => void {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

/** Met à jour l'accent (persisté) et notifie les abonnés. */
export function setAccent(value: string): void {
  localStorage.setItem(STORAGE_KEY, value);
  listeners.forEach((listener) => listener());
}

/** Lit l'accent courant (emerald par défaut, y compris côté serveur). */
export function useAccent(): string {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
