import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import GaugeBadge from '@/components/GaugeBadge';
import { home, organization, siteUrl, ctaLabels, categories } from '@/data/products';

export async function generateMetadata() {
  return {
    title: home.meta.title,
    description: home.meta.description,
    alternates: { canonical: siteUrl },
    openGraph: {
      title: home.meta.title,
      description: home.meta.description,
      url: siteUrl,
      siteName: organization.name,
      locale: 'cs_CZ',
      type: 'website',
    },
  };
}

export default function HomePage() {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: organization.name,
    legalName: organization.legalName,
    url: organization.url,
    logo: organization.logo,
    email: organization.email,
    telephone: organization.telephone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: organization.address.street,
      addressLocality: organization.address.city,
      postalCode: organization.address.postalCode,
      addressCountry: organization.address.country,
    },
    vatID: organization.dic,
    taxID: organization.ico,
  };

  return (
    <>
      <JsonLd data={organizationJsonLd} />

      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-charcoal text-white blueprint-grid ember-glow">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-ember mb-5">{home.hero.eyebrow}</p>
            <h1 className="font-display font-bold uppercase text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              {home.hero.headline} <span className="text-ember">{home.hero.headlineAccent}</span>
            </h1>
            <p className="mt-6 text-lg text-white/75 max-w-xl leading-relaxed">{home.hero.subtitle}</p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Link href="/katalog" className="btn btn-primary">{ctaLabels.viewCatalog}</Link>
              <Link href="/b2b" className="btn btn-outline">{ctaLabels.becomePartner}</Link>
            </div>

            <dl className="mt-14 flex flex-wrap gap-x-10 gap-y-6">
              {home.hero.stats.map((stat) => (
                <div key={stat.label} className="border-l border-white/15 pl-5">
                  <dt className="font-mono text-[11px] uppercase tracking-wide text-white/50">{stat.label}</dt>
                  <dd className="font-display text-2xl font-semibold text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5 relative hidden sm:block">
            <div className="relative aspect-[4/5] rounded-sm border border-white/10 bg-charcoal-2 flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 200 240" className="w-3/4 h-3/4 opacity-90" fill="none">
                <rect x="40" y="70" width="120" height="140" rx="6" fill="#232629" stroke="#3a3f43" strokeWidth="2" />
                <rect x="55" y="90" width="90" height="90" rx="4" fill="#191b1d" stroke="#d9480f" strokeWidth="2" />
                <path d="M75 160 Q100 110 125 160 Q112 145 100 160 Q88 145 75 160Z" fill="#d9480f" opacity="0.85" />
                <rect x="90" y="55" width="20" height="20" fill="#2d3134" stroke="#3a3f43" strokeWidth="2" />
                <rect x="30" y="205" width="140" height="10" rx="2" fill="#2d3134" />
                <circle cx="60" cy="200" r="4" fill="#3a3f43" />
                <circle cx="140" cy="200" r="4" fill="#3a3f43" />
              </svg>
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 bg-charcoal/80 backdrop-blur border border-white/10 rounded-sm px-4 py-3">
                <GaugeBadge value={home.hero.featuredProduct.power} unit="KW" percent={70} dark />
                <div>
                  <p className="font-display text-sm uppercase tracking-wide">{home.hero.featuredProduct.name}</p>
                  <p className="font-mono text-[11px] text-white/50">Účinnost {home.hero.featuredProduct.efficiency} %</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ KEY BENEFITS ============ */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid sm:grid-cols-3 gap-10">
          {home.benefits.map((benefit) => (
            <div key={benefit.title}>
              <svg className="w-10 h-10 text-ember mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-display uppercase text-lg tracking-wide mb-2">{benefit.title}</h3>
              <p className="text-stone leading-relaxed">{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ FEATURED PRODUCTS ============ */}
      <section className="bg-paper border-y border-ash">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-ember mb-2">Sortiment</p>
              <h2 className="font-display uppercase text-3xl sm:text-4xl tracking-tight">Produktové kategorie</h2>
            </div>
            <Link href="/katalog" className="font-display uppercase text-sm tracking-wide text-ember hover:underline">
              Celý katalog →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/katalog?kategorie=${cat.slug}`}
                className="card-hover group bg-white border border-ash rounded-sm overflow-hidden block"
              >
                <div className="aspect-[4/3] bg-charcoal flex items-center justify-center relative">
                  <CategoryGlyph slug={cat.slug} />
                </div>
                <div className="p-6">
                  <h3 className="font-display uppercase text-lg tracking-wide mb-2">{cat.name}</h3>
                  <p className="text-stone text-sm leading-relaxed mb-4">{cat.description}</p>
                  <span className="font-display text-sm uppercase tracking-wide text-ember">Zobrazit produkty →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ O ZNAČCE ============ */}
      <section id="o-znacce" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="aspect-square bg-charcoal-2 border border-ash rounded-sm flex items-center justify-center">
              <svg viewBox="0 0 120 120" className="w-2/3 h-2/3 opacity-90">
                <rect x="20" y="20" width="80" height="80" rx="4" fill="#232629" stroke="#d9480f" strokeWidth="2" />
                <path d="M45 85 Q60 40 75 85 Q65 68 60 85 Q55 68 45 85Z" fill="#d9480f" />
              </svg>
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-ember mb-3">{home.about.eyebrow}</p>
            <h2 className="font-display uppercase text-3xl sm:text-4xl tracking-tight mb-6">{home.about.heading}</h2>
            {home.about.paragraphs.map((p, i) => (
              <p key={i} className="text-stone leading-relaxed mb-4 last:mb-8">{p}</p>
            ))}
            <Link href="/b2b" className="btn btn-outline-dark">Chci se stát partnerem</Link>
          </div>
        </div>
      </section>

      {/* ============ B2B CTA BANNER ============ */}
      <section className="relative bg-charcoal text-white blueprint-grid overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="max-w-2xl">
            <h2 className="font-display uppercase text-2xl sm:text-3xl tracking-tight mb-3">{home.ctaBanner.heading}</h2>
            <p className="text-white/70 leading-relaxed">{home.ctaBanner.text}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/b2b" className="btn btn-primary">{ctaLabels.becomePartner}</Link>
            <Link href="/katalog" className="btn btn-outline">{ctaLabels.viewCatalog}</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function CategoryGlyph({ slug }) {
  if (slug === 'vymenik') {
    return (
      <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 opacity-90">
        <rect x="20" y="30" width="60" height="55" rx="3" fill="#232629" stroke="#d9480f" strokeWidth="1.5" />
        <circle cx="50" cy="58" r="14" fill="none" stroke="#d9480f" strokeWidth="2" />
        <path d="M50 48v20M40 58h20" stroke="#d9480f" strokeWidth="2" />
      </svg>
    );
  }
  if (slug === 'kachlova') {
    return (
      <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 opacity-90">
        <rect x="25" y="20" width="50" height="65" rx="2" fill="#232629" stroke="#d9480f" strokeWidth="1.5" />
        <line x1="25" y1="40" x2="75" y2="40" stroke="#3a3f43" />
        <line x1="25" y1="60" x2="75" y2="60" stroke="#3a3f43" />
        <line x1="50" y1="20" x2="50" y2="85" stroke="#3a3f43" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 opacity-90">
      <rect x="20" y="30" width="60" height="55" rx="3" fill="#232629" stroke="#d9480f" strokeWidth="1.5" />
      <path d="M38 70 Q50 45 62 70 Q55 60 50 70 Q45 60 38 70Z" fill="#d9480f" />
    </svg>
  );
}