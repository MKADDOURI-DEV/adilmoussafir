// Centralized hotel configuration.
// Values marked VALIDATE come from public directories and MUST be confirmed by the hotel.

export const siteConfig = {
  name: 'Hôtel Adil Moussafir',
  shortName: 'Adil Moussafir',
  city: 'Guelmim',
  country: 'Maroc',
  address: 'N° 869, Quartier Al Qods, avenue Mohammed VI, Guelmim',
  phone: '+212 5 28 77 29 30',
  phoneHref: 'tel:+212528772930',
  email: '', // VALIDATE: not provided by client — never invent
  gps: { lat: 29.002613, lng: -10.046954 },
  mapsLink:
    'https://www.google.com/maps/dir/?api=1&destination=29.002613,-10.046954',
  mapsEmbed:
    'https://www.google.com/maps?q=29.002613,-10.046954&z=15&output=embed',
  domain: 'hoteladilmoussafir.com', // VALIDATE ownership before any DNS action
  social: {} as Record<string, string>, // VALIDATE: no accounts confirmed
};

export const bookingConfig = {
  // Provider is unknown until the hotel confirms its PMS / booking engine.
  provider: 'unconfigured' as 'unconfigured' | 'external-link' | 'widget' | 'api',
  externalUrl: '', // VALIDATE: direct booking URL from the PMS vendor
  widgetScript: '', // VALIDATE: official widget script from the vendor
  // Credentials must live in server env vars, never in frontend code.
};

export const pendingInfo = [
  'Adresse email officielle',
  'Comptes réseaux sociaux officiels',
  'Fournisseur du PMS / moteur de réservation et lien de réservation directe',
  'Catégories de chambres réelles, capacités, lits, surfaces, équipements',
  'Tarifs et conditions d’annulation',
  'Horaires du restaurant et du café, carte ou menu',
  'Photographies authentiques et logo',
  'Confirmation des 44 chambres / 4 suites mentionnées par les annuaires',
];