export const HOMEPAGE_MARKUP = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: 'Clinique Muller - Épilation définitive',
  image: 'https://cliniquemuller.ch/images/homepage/hero.webp',
  '@id': 'https://cliniquemuller.ch/epilation-definitive',
  url: 'https://cliniquemuller.ch/epilation-definitive',
  telephone: '+41213118495',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: "Rue du Lion d'Or 4",
    addressLocality: 'Lausanne',
    postalCode: '1003',
    addressCountry: 'CH',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday'],
      opens: '08:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Thursday', 'Friday'],
      opens: '08:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/cliniquemuller',
    'https://twitter.com/cliniquemuller',
    'https://www.instagram.com/cliniquemuller',
    'https://ch.linkedin.com/company/cliniquemuller',
    'https://www.cliniquemuller.ch/epilation-definitive',
  ],
};

export const PRICING_MARKUP = {
  '@context': ['https://schema.org', { csvw: 'https://www.w3.org/ns/csvw#' }],
  '@type': 'Dataset',
  name: 'Prix Épilation Laser Lausanne Femmes',
  description:
    "Les prix de l'épilation laser par séance et pour femmes selon la zone",
  mainEntity: {
    '@type': 'csvw:Table',
    'csvw:tableSchema': {
      'csvw:columns': [
        {
          'csvw:name': 'Zone à épiler',
          'csvw:datatype': 'string',
          'csvw:cells': [
            {
              'csvw:value': 'Jambes complètes',
              'csvw:primaryKey': 'Jambes complètes',
            },
            {
              'csvw:value': 'Bras complet',
              'csvw:primaryKey': 'Bras complet',
            },
            {
              'csvw:value': 'Aisselles',
              'csvw:primaryKey': 'Aisselles',
            },
            {
              'csvw:value': 'Demi-Jambes',
              'csvw:primaryKey': 'Demi-Jambes',
            },
            {
              'csvw:value': 'Aisselles + Maillot',
              'csvw:primaryKey': 'Aisselles + Maillot',
            },
            {
              'csvw:value': 'Maillot',
              'csvw:primaryKey': 'Maillot',
            },
          ],
        },
        {
          'csvw:name': 'Prix 1 séance',
          'csvw:datatype': 'string',
          'csvw:cells': [
            {
              'csvw:value': '399 CHF',
              'csvw:primaryKey': 'Jambes complètes',
            },
            {
              'csvw:value': '249 CHF',
              'csvw:primaryKey': 'Bras complet',
            },
            {
              'csvw:value': '99 CHF',
              'csvw:primaryKey': 'Aisselles',
            },
            {
              'csvw:value': '249 CHF',
              'csvw:primaryKey': 'Demi-Jambes',
            },
            {
              'csvw:value': '298 CHF',
              'csvw:primaryKey': 'Aisselles + Maillot',
            },
            {
              'csvw:value': '199 CHF',
              'csvw:primaryKey': 'Maillot',
            },
          ],
        },
        {
          'csvw:name': 'Prix Séances illimitées',
          'csvw:datatype': 'string',
          'csvw:cells': [
            {
              'csvw:value': '3052 CHF',
              'csvw:primaryKey': 'Jambes complètes',
            },
            {
              'csvw:value': '1905 CHF',
              'csvw:primaryKey': 'Bras complet',
            },
            {
              'csvw:value': '757 CHF',
              'csvw:primaryKey': 'Aisselles',
            },
            {
              'csvw:value': '1905 CHF',
              'csvw:primaryKey': 'Demi-Jambes',
            },
            {
              'csvw:value': '2026 CHF',
              'csvw:primaryKey': 'Aisselles + Maillot',
            },
            {
              'csvw:value': '1522 CHF',
              'csvw:primaryKey': 'Maillot',
            },
          ],
        },
      ],
    },
  },
};
