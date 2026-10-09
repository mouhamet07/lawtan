/**
 * Navigation principale (réutilisable par le Footer).
 * TODO routes : adapter les chemins ci-dessous à ceux déclarés dans vos fichiers de routes.
 * Les routes marquées « temporaire » n'existent pas encore.
 */
export interface NavChild {
  label: string;
  description: string;
  route: string;
}

export interface NavItem {
  label: string;
  route?: string;
  exact?: boolean;
  children?: NavChild[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Accueil', route: '/', exact: true },
  { label: 'À propos', route: '/a-propos' }, // temporaire
  {
    label: 'Nos activités',
    children: [
      {
        label: 'Transformation agricole & services mécanisés',
        description: 'Valorisation du riz et prestations agricoles',
        route: '/activites/pole-1',
      },
      {
        label: 'Ferme LAWTAN & produits laitiers',
        description: 'Élevage et production laitière',
        route: '/activites/pole-2', // temporaire
      },
    ],
  },
  { label: 'Qualité & traçabilité', route: '/qualite-tracabilite' }, // temporaire
  { label: 'Actualités', route: '/actualites' }, // temporaire
  { label: 'Contact', route: '/contact' }, // temporaire
];

export const HEADER_CTA = { label: 'Demander un devis', route: '/contact' }; // temporaire

export interface FooterLink {
  label: string;
  route: string;
  fragment?: string;
}

export const FOOTER_NAV: FooterLink[] = NAV_ITEMS
  .filter((item): item is NavItem & { route: string } => !!item.route)
  .map(({ label, route }) => ({ label, route }));

export const FOOTER_ACTIVITIES: FooterLink[] = NAV_ITEMS
  .flatMap((item) => item.children ?? [])
  .map(({ label, route }) => ({ label, route }));

export const LEGAL_LINKS: FooterLink[] = [
  { label: 'Mentions légales', route: '/mentions-legales' },
  { label: 'Politique de confidentialité', route: '/politique-de-confidentialite' },
];
