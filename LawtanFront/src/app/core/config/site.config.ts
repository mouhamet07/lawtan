/**
 * Configuration centrale du site.
 * Les coordonnées sont VOLONTAIREMENT vides : elles doivent être validées par LAWTAN.
 * Tant qu'un champ est vide, il n'est pas affiché (la barre supérieure se masque d'elle-même).
 */
export interface SiteConfig {
  name: string;
  logo: { src: string; src2x: string; alt: string; width: number; height: number };
  contact: { phone: string; whatsapp: string; email: string; address: string };
  social: { label: string; url: string }[];
}

export const SITE_CONFIG: SiteConfig = {
  name: 'GIE LAWTAN',
  logo: {
    src: 'logo.jpg',
    src2x: '',
    alt: 'LAWTAN Agro Industries',
    width: 640,
    height: 351,
  },
  contact: {
    phone: '',     // ex. '+221 77 000 00 00'
    whatsapp: '',  // ex. '+221 77 000 00 00'
    email: '',
    address: '',   // ex. 'Ville, Région'
  },
  social: [],      // uniquement des comptes officiels confirmés
};

export function toTelHref(phone: string): string | null {
  const normalized = phone.replace(/[^\d+]/g, '');
  return normalized ? `tel:${normalized}` : null;
}

export function toWhatsappHref(phone: string): string | null {
  const normalized = phone.replace(/\D/g, '');
  return normalized ? `https://wa.me/${normalized}` : null;
}
