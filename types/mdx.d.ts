declare module '*.mdx' {
  import type { ComponentType } from 'react';

  /** Composant rendu par un fichier MDX compilé via @next/mdx. */
  const MDXComponent: ComponentType;
  export default MDXComponent;
}
