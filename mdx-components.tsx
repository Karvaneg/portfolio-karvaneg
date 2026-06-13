import type { MDXComponents } from 'mdx/types';
import type { AnchorHTMLAttributes } from 'react';
import Link from 'next/link';
import { ArticleHeader } from '@/components/playbook/article-header';
import { Callout } from '@/components/playbook/callout';
import { CopyButton } from '@/components/playbook/copy-button';
import { PromptBlock } from '@/components/playbook/prompt-block';
import { TerminalBlock } from '@/components/playbook/terminal-block';
import { StatusLinePreview } from '@/components/playbook/statusline-preview';
import { Step, SubStep } from '@/components/playbook/step';
import {
  CopyInstruction,
  DecisionGrid,
  Prereq,
  ProsePre,
  ResultBlock,
  Steps,
  Wrapup,
} from '@/components/playbook/layout';

/** Lien interne → next/link (transitions client) ; lien externe → <a> standard. */
function MdxLink({ href = '', ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (href.startsWith('/')) {
    return <Link href={href} {...props} />;
  }
  const external = href.startsWith('http');
  return <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...props} />;
}

/**
 * Composants disponibles dans tous les fichiers `.mdx` du playbook, sans import.
 * Le contenu prose (p, ul, code…) est stylé contextuellement via `.article` et
 * les classes des composants (cf. playbook.module.css).
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: MdxLink,
    ArticleHeader,
    Callout,
    CopyButton,
    CopyInstruction,
    DecisionGrid,
    Prereq,
    PromptBlock,
    ProsePre,
    ResultBlock,
    StatusLinePreview,
    Step,
    Steps,
    SubStep,
    TerminalBlock,
    Wrapup,
    ...components,
  };
}
