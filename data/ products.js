// =========================================================
// data/products.js
// Jediný zdroj pravdy pro veškeré texty, parametry kamen
// a seznam produktů použitý napříč celým webem.
// =========================================================

export const siteUrl = 'https://www.blist-distributor.cz';

export const organization = {
  name: 'Blist Distribution s.r.o.',
  legalName: '[Blist Distribution s.r.o.]',
  alternateName: 'Blist Distributor',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  telephone: '+420123456789',
  email: 'obchod@blist-distributor.cz',
  ico: '[12345678]',
  dic: '[CZ12345678]',
  address: {
    street: '[Ulice 123]',
    city: 'Praha',
    postalCode: '[100 00]',
    country: 'CZ',
  },
  warehouse: {
    street: '[Skladová 45]',
    city: 'Brandýs n. L.',
    postalCode: '[250 01]',
    hours: 'Po–Pá: 7:00–15:30',
    email: 'expedice@blist-distributor.cz',
  },
  sameAs: [],
};

export const nav = [
  { label: 'Úvod', href: '/' },
  { label: 'O značce', href: '/#o-znacce' },
  { label: 'Katalog produktů', href: '/katalog' },
  { label: 'B2B Spolupráce', href: '/b2b' },
  { label: 'Kontakt', href: '/#kontakt' },
];

export const ctaLabels = {
  inquiry: 'Poptat velkoobchodní nabídku',
  becomePartner: 'Staňte se partnerem',
  viewCatalog: 'Prohlédnout katalog',
};

export const categories = [
  {
    slug: 'krbova-kamna',
    name: 'Krbová kamna',
    description:
      'Volně stojící litinová a ocelová kamna s velkým prosklením pro maximální výhled na oheň.',
  },
  {
    slug: 'vymenik',
    name: 'Kamna s výměníkem',
    description:
      'Teplovodní výměník pro přímé napojení na topný systém a ohřev celé domácnosti.',
  },
  {
    slug: 'kachlova',
    name: 'Kachlová kamna',
    description:
      'Akumulační kamna obložená kachlemi s vysokou tepelnou setrvačností a tradičním designem.',
  },
];

export const home = {
  meta: {
    title: 'Blist Distributor — Oficiální velkoobchodní distributor krbových kamen Blist',
    description:
      'Oficiální velkoobchodní distributor krbových kamen Blist v ČR. Certifikovaná kamna, sklad v ČR, rychlé dodání. Staňte se obchodním partnerem.',
  },
  hero: {
    eyebrow: 'Oficiální velkoobchodní distribuce pro ČR',
    headline: 'Oficiální distributor krbových kamen',
    headlineAccent: 'Blist',
    subtitle:
      'Rozšiřte svou nabídku o osvědčenou značku krbových kamen. Jako velkoobchodní partner získáte konkurenceschopné ceny, technickou podporu a zboží skladem v ČR — připravené k okamžité expedici.',
    stats: [
      { label: 'Na trhu', value: '15+ let' },
      { label: 'Obchodních partnerů', value: '200+' },
      { label: 'Expedice ze skladu ČR', value: 'do 48 h' },
    ],
    featuredProduct: { name: 'Blist B10', efficiency: 81, power: 9 },
  },
  benefits: [
    {
      title: 'Skvělý poměr cena/výkon',
      text: 'Velkoobchodní ceny nastavené tak, aby vaše marže zůstala konkurenceschopná i v koncové prodejně.',
    },
    {
      title: 'Certifikace & Ecodesign',
      text: 'Všechna kamna splňují evropskou směrnici Ecodesign 2022 a jsou certifikována pro prodej v EU.',
    },
    {
      title: 'Rychlé dodání ze skladu v ČR',
      text: 'Centrální sklad v České republice zajišťuje expedici objednávek do 48 hodin.',
    },
  ],
  about: {
    eyebrow: 'O značce Blist',
    heading: 'Kamna, na která se váš zákazník může spolehnout',
    paragraphs: [
      'Blist vyrábí krbová kamna už více než patnáct let s důrazem na spolehlivou konstrukci, vysokou účinnost spalování a design, který zapadne do moderního i tradičního interiéru.',
      'Jako oficiální distributor pro Českou republiku zajišťujeme skladovou dostupnost, servisní zázemí i kompletní technickou dokumentaci pro vaše prodejny a e-shopy.',
    ],
  },
  ctaBanner: {
    heading: 'Rozšiřte svůj sortiment o značku Blist',
    text: 'Registrujte se jako velkoobchodní partner a získejte přístup k ceníku, XML feedu a technické podpoře zdarma.',
  },
};

export const catalogPage = {
  meta: {
    title: 'Katalog produktů — Blist Distributor',
    description:
      'Katalog krbových kamen Blist pro velkoobchodní partnery — krbová kamna, kamna s výměníkem a kachlová kamna.',
  },
  heading: 'Katalog produktů',
  intro:
    'Kompletní přehled krbových kamen Blist dostupných skladem pro velkoobchodní partnery.',
  filters: [{ slug: 'all', name: 'Všechny produkty' }, ...categories],
  cardCta: 'Detail produktu / Poptávka',
};

export const b2bPage = {
  meta: {
    title: 'Velkoobchodní spolupráce — Blist Distributor',
    description:
      'Staňte se velkoobchodním partnerem značky Blist. Marketingová podpora, XML feed, technická dokumentace a věrnostní slevy pro obchodní partnery.',
  },
  heading: 'Velkoobchodní spolupráce a distribuce kamen Blist',
  subtitle:
    'Hledáme kamenné prodejny, e-shopy a specializované obchody s krbovými kamny, kteří chtějí rozšířit sortiment o ověřenou značku s podporou oficiálního distributora.',
  advantages: [
    {
      title: 'Marketingová podpora',
      text: 'Poskytneme produktové fotografie, popisky a marketingové materiály pro váš prodejní kanál.',
    },
    {
      title: 'XML feed pro e-shopy',
      text: 'Aktuální ceník, skladové zásoby a produktová data napojíte do svého e-shopu přes XML feed.',
    },
    {
      title: 'Technická dokumentace',
      text: 'Kompletní technické listy, návody a certifikáty ke stažení pro každý model kamen.',
    },
    {
      title: 'Věrnostní velkoobchodní slevy',
      text: 'Odběratelské slevy rostoucí s objemem objednávek a délkou spolupráce.',
    },
  ],
  process: [
    { title: 'Registrace', text: 'Vyplníte poptávkový formulář se základními údaji o vaší firmě.' },
    { title: 'Schválení', text: 'Ověříme údaje a do 2 pracovních dnů vás kontaktujeme.' },
    { title: 'Přístup k cenám', text: 'Zpřístupníme velkoobchodní ceník, XML feed a podklady.' },
    { title: 'Objednávky', text: 'Objednáváte přímo u obchodního zástupce nebo přes e-shop partnera.' },
  ],
  formNote:
    'Formulář je určen pro maloobchodní prodejce a specializované obchody. Neprodáváme koncovým zákazníkům.',
};

export const productsMeta = {
  title: (product) => `${product.name} — ${categoryName(product.category)} | Blist Distributor`,
  description: (product) =>
    `${product.name} — ${product.subtitle}. Výkon ${product.power.value} kW, účinnost ${product.efficiency} %. Technické parametry, ke stažení a poptávka pro velkoobchodní partnery.`,
};

export function categoryName(slug) {
  const found = categories.find((c) => c.slug === slug);
  return found ? found.name : slug;
}

// =========================================================
// PRODUCTS
// =========================================================
export const products = [
  {
    slug: 'blist-b10',
    name: 'Blist B10',
    category: 'krbova-kamna',
    subtitle: 'Litinová krbová kamna s panoramatickým prosklením',
    shortDescription: 'Litinová krbová kamna s panoramatickým prosklením. Účinnost 81 %.',
    description:
      'Blist B10 kombinuje robustní litinovou konstrukci s velkoformátovým panoramatickým sklem, které nabízí téměř nerušený výhled na hořící oheň. Díky systému čistého spalování a promyšlené cirkulaci vzduchu dosahuje kamna vysoké účinnosti při nízkých emisích — splňují požadavky evropské směrnice Ecodesign 2022.',
    power: { value: 9, unit: 'kW', range: '5–11,5 kW' },
    efficiency: 81,
    flueDiameter: 150,
    dimensions: '1010 × 550 × 480 mm',
    weight: '118 kg',
    material: 'Litina',
    images: [
      'Foto 1 — čelní pohled',
      'Foto 2 — boční pohled',
      'Foto 3 — detail spalovací komory',
      'Foto 4 — kamna v interiéru',
    ],
    datasheetUrl: '/downloads/blist-b10-technicky-list.pdf',
    manualUrl: '/downloads/blist-b10-navod.pdf',
  },
  {
    slug: 'blist-b7',
    name: 'Blist B7',
    category: 'krbova-kamna',
    subtitle: 'Kompaktní ocelová krbová kamna',
    shortDescription: 'Kompaktní ocelová kamna vhodná do menších prostor. Účinnost 79 %.',
    description:
      'Blist B7 je kompaktní ocelová krbová kamna navržená pro menší obytné prostory a chaty. I přes svou velikost nabízí velké prosklení a stabilní hoření díky systému sekundárního spalování.',
    power: { value: 7, unit: 'kW', range: '4–9 kW' },
    efficiency: 79,
    flueDiameter: 150,
    dimensions: '920 × 480 × 420 mm',
    weight: '92 kg',
    material: 'Ocel',
    images: [
      'Foto 1 — čelní pohled',
      'Foto 2 — boční pohled',
      'Foto 3 — detail spalovací komory',
      'Foto 4 — kamna v interiéru',
    ],
    datasheetUrl: '/downloads/blist-b7-technicky-list.pdf',
    manualUrl: '/downloads/blist-b7-navod.pdf',
  },
  {
    slug: 'blist-panorama-12',
    name: 'Blist Panorama 12',
    category: 'krbova-kamna',
    subtitle: 'Krbová kamna s trojstranným prosklením',
    shortDescription: 'Velkoformátové trojstranné prosklení pro maximální výhled na plamen. Účinnost 83 %.',
    description:
      'Blist Panorama 12 nabízí trojstranné prosklení spalovací komory a je vlajkovou lodí řady krbových kamen Blist. Výkonný model vhodný pro větší obytné prostory a otevřené dispozice.',
    power: { value: 12, unit: 'kW', range: '7–14 kW' },
    efficiency: 83,
    flueDiameter: 180,
    dimensions: '1120 × 610 × 520 mm',
    weight: '145 kg',
    material: 'Litina a ocel',
    images: [
      'Foto 1 — čelní pohled',
      'Foto 2 — boční pohled',
      'Foto 3 — detail spalovací komory',
      'Foto 4 — kamna v interiéru',
    ],
    datasheetUrl: '/downloads/blist-panorama-12-technicky-list.pdf',
    manualUrl: '/downloads/blist-panorama-12-navod.pdf',
  },
  {
    slug: 'blist-aqua-14',
    name: 'Blist Aqua 14',
    category: 'vymenik',
    subtitle: 'Krbová kamna s teplovodním výměníkem',
    shortDescription: 'Teplovodní výměník pro napojení na ústřední topení. Účinnost 85 %.',
    description:
      'Blist Aqua 14 je vybavena teplovodním výměníkem, který umožňuje napojení na ústřední topný systém a ohřev užitkové vody. Ideální řešení pro kombinaci vytápění krbem a podlahovým topením.',
    power: { value: 14, unit: 'kW', range: '9–17 kW' },
    efficiency: 85,
    flueDiameter: 180,
    dimensions: '1180 × 580 × 550 mm',
    weight: '162 kg',
    material: 'Ocel',
    images: [
      'Foto 1 — čelní pohled',
      'Foto 2 — boční pohled',
      'Foto 3 — detail výměníku',
      'Foto 4 — kamna v interiéru',
    ],
    datasheetUrl: '/downloads/blist-aqua-14-technicky-list.pdf',
    manualUrl: '/downloads/blist-aqua-14-navod.pdf',
  },
  {
    slug: 'blist-aqua-18',
    name: 'Blist Aqua 18',
    category: 'vymenik',
    subtitle: 'Výkonná kamna s výměníkem pro celý dům',
    shortDescription: 'Výkonný výměníkový model pro vytápění celého domu. Účinnost 86 %.',
    description:
      'Blist Aqua 18 je nejvýkonnějším modelem řady s výměníkem, určeným pro vytápění celého domu. Velký akumulační objem výměníku zajišťuje dlouhou dobu hoření a rovnoměrné předávání tepla do topné soustavy.',
    power: { value: 18, unit: 'kW', range: '11–21 kW' },
    efficiency: 86,
    flueDiameter: 200,
    dimensions: '1240 × 620 × 580 mm',
    weight: '188 kg',
    material: 'Ocel',
    images: [
      'Foto 1 — čelní pohled',
      'Foto 2 — boční pohled',
      'Foto 3 — detail výměníku',
      'Foto 4 — kamna v interiéru',
    ],
    datasheetUrl: '/downloads/blist-aqua-18-technicky-list.pdf',
    manualUrl: '/downloads/blist-aqua-18-navod.pdf',
  },
  {
    slug: 'blist-tradice-k200',
    name: 'Blist Tradice K200',
    category: 'kachlova',
    subtitle: 'Akumulační kachlová kamna',
    shortDescription: 'Akumulační kachlová kamna s vysokou tepelnou setrvačností. Účinnost 80 %.',
    description:
      'Blist Tradice K200 spojuje tradiční kachlový obklad s moderní spalovací komorou. Akumulační jádro dlouho drží teplo a plynule jej uvolňuje i několik hodin po dohoření.',
    power: { value: 8, unit: 'kW', range: '5–10 kW' },
    efficiency: 80,
    flueDiameter: 150,
    dimensions: '1450 × 600 × 500 mm',
    weight: '310 kg',
    material: 'Kachle a šamot',
    images: [
      'Foto 1 — čelní pohled',
      'Foto 2 — boční pohled',
      'Foto 3 — detail obkladu',
      'Foto 4 — kamna v interiéru',
    ],
    datasheetUrl: '/downloads/blist-tradice-k200-technicky-list.pdf',
    manualUrl: '/downloads/blist-tradice-k200-navod.pdf',
  },
  {
    slug: 'blist-tradice-k300',
    name: 'Blist Tradice K300',
    category: 'kachlova',
    subtitle: 'Velké akumulační kachlová kamna',
    shortDescription: 'Větší akumulační model vhodný pro celodenní temperování domu. Účinnost 82 %.',
    description:
      'Blist Tradice K300 je větší variantou kachlových kamen s vyšším výkonem a akumulační kapacitou, vhodnou pro celodenní temperování rodinného domu.',
    power: { value: 10, unit: 'kW', range: '6–12 kW' },
    efficiency: 82,
    flueDiameter: 150,
    dimensions: '1600 × 650 × 550 mm',
    weight: '380 kg',
    material: 'Kachle a šamot',
    images: [
      'Foto 1 — čelní pohled',
      'Foto 2 — boční pohled',
      'Foto 3 — detail obkladu',
      'Foto 4 — kamna v interiéru',
    ],
    datasheetUrl: '/downloads/blist-tradice-k300-technicky-list.pdf',
    manualUrl: '/downloads/blist-tradice-k300-navod.pdf',
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug) {
  if (!categorySlug || categorySlug === 'all') return products;
  return products.filter((p) => p.category === categorySlug);
}