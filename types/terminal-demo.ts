/** Rôle d'une ligne dans une reconstitution terminal animée (cf. TerminalDemo). */
export type TerminalLineKind =
  | 'cmd' // commande shell, préfixe « $ », tapée caractère par caractère
  | 'out' // sortie neutre (gris)
  | 'ok' // succès, couleur accent
  | 'step' // étape produite par l'agent (indentée)
  | 'agent' // bandeau / lancement de l'agent
  | 'comment' // commentaire « # » en italique atténué
  | 'gap'; // ligne vide d'espacement (sans texte)

export interface TerminalDemoLine {
  kind: TerminalLineKind;
  /** Texte affiché. Absent pour les lignes `gap`. */
  text?: string;
}
