// DEMO / PLACEHOLDER DATA — categories below are provisional and MUST be replaced by
// the hotel's real categories. No prices, surfaces or availabilities are invented.

export type RoomCategory = {
  slug: string;
  type: 'chambre' | 'suite';
  name: { fr: string; en: string; ar: string };
  description: { fr: string; en: string; ar: string };
  capacity: number | null; // null = to confirm
  beds: { fr: string; en: string; ar: string } | null;
  surface: number | null;
  amenities: string[]; // keys of confirmed amenities only
  validated: boolean;
  photoLabel: string;
  span: string; // bento span classes
};

export const rooms: RoomCategory[] = [
  {
    slug: 'chambre-standard',
    type: 'chambre',
    name: { fr: 'Chambre standard', en: 'Standard room', ar: 'غرفة عادية' },
    description: {
      fr: 'Une chambre simple et reposante pour une étape à Guelmim. Description à valider par l’hôtel.',
      en: 'A calm, simple room for a stopover in Guelmim. Description to be validated by the hotel.',
      ar: 'غرفة هادئة وبسيطة للإقامة في كلميم. الوصف في انتظار موافقة الفندق.',
    },
    capacity: null,
    beds: null,
    surface: null,
    amenities: ['wifi', 'ac'],
    validated: false,
    photoLabel: 'Photo chambre standard — à fournir',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    slug: 'chambre-double',
    type: 'chambre',
    name: { fr: 'Chambre double', en: 'Double room', ar: 'غرفة مزدوجة' },
    description: {
      fr: 'Catégorie provisoire pour deux voyageurs. Capacité et literie à confirmer.',
      en: 'Provisional category for two travelers. Capacity and bedding to be confirmed.',
      ar: 'فئة مؤقتة لمسافرين اثنين. السعة والأسرّة في انتظار التأكيد.',
    },
    capacity: null,
    beds: null,
    surface: null,
    amenities: ['wifi', 'ac'],
    validated: false,
    photoLabel: 'Photo chambre double — à fournir',
    span: 'md:col-span-2',
  },
  {
    slug: 'chambre-familiale',
    type: 'chambre',
    name: { fr: 'Chambre familiale', en: 'Family room', ar: 'غرفة عائلية' },
    description: {
      fr: 'Catégorie provisoire pour les familles. Existence et caractéristiques à confirmer.',
      en: 'Provisional category for families. Existence and features to be confirmed.',
      ar: 'فئة مؤقتة للعائلات. الوجود والمواصفات في انتظار التأكيد.',
    },
    capacity: null,
    beds: null,
    surface: null,
    amenities: ['wifi', 'ac'],
    validated: false,
    photoLabel: 'Photo chambre familiale — à fournir',
    span: 'md:col-span-1',
  },
  {
    slug: 'suite',
    type: 'suite',
    name: { fr: 'Suite', en: 'Suite', ar: 'جناح' },
    description: {
      fr: 'Les annuaires mentionnent des suites. Nombre, agencement et équipements à confirmer.',
      en: 'Directories mention suites. Number, layout and amenities to be confirmed.',
      ar: 'تشير الأدلة إلى وجود أجنحة. العدد والتصميم والتجهيزات في انتظار التأكيد.',
    },
    capacity: null,
    beds: null,
    surface: null,
    amenities: ['wifi', 'ac'],
    validated: false,
    photoLabel: 'Photo suite — à fournir',
    span: 'md:col-span-1',
  },
];

// Bento map (md:grid-cols-4, 4 cards)
// Row 1: [col-1: standard cs-2 rs-2] [col-2: standard] [col-3: double cs-2] [col-4: double]
// Row 2: [col-1: standard] [col-2: standard] [col-3: familiale cs-1] [col-4: suite cs-1]
// Placed 4/4 cards.

export function getRoom(slug: string | null | undefined) {
  return rooms.find((r) => r.slug === slug) ?? rooms[0];
}