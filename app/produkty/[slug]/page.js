import { notFound } from 'next/navigation';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import GaugeBadge from '@/components/GaugeBadge';
import ProductGallery from '@/components/ProductGallery';
import InquiryForm from '@/components/InquiryForm';
import {
  products,
  getProductBySlug,
  categoryName,
  productsMeta,
  siteUrl,
  organization,
} from '@/data/products';

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) return {};

  const title = productsMeta.title(product);
  const description = productsMeta.description(product);
  const url = `${siteUrl}/produkty/${product.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
    },
  };
}

export default function ProductDetailPage({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    category: categoryName(product.category),
    brand: { '@type': 'Brand', name: 'Blist' },
    sku: product.slug,
    material: product.material,
    weight: { '@type': 'QuantitativeValue', value: product.weight },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Výkon', value: `${product.power.value} ${product.power.unit}` },
      { '@type': 'PropertyValue', name: 'Účinnost', value: `${product.efficiency} %` },
      { '@type': 'PropertyValue', name: 'Průměr kouřovodu', value: `${product.flueDiameter} mm` },
      { '@type': 'PropertyValue', name: 'Rozměry', value: product.dimensions },
    ],
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        description: 'Cena na vyžádání pro velkoobchodní partnery',
      },
      seller: {
        '@type': 'Organization',
        name: organization.name,
      },
    },
  };

  const percent = Math.min(100, Math.round((product.power.value / 18) * 100));

  return (
    <>
      <JsonLd data={productJsonLd} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <p className="font-mono text-xs text-stone">
          <Link href="/" className="hover:text-ember">Úvod</Link> /{' '}
          <Link href="/katalog" className="hover:text-ember">Katalog</Link> /{' '}
          <span className="text-charcoal">{product.name}</span>
        </p>
      </div>

      {/* ============ PRODUCT MAIN ============ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid lg:grid-cols-2 gap-12">
        <ProductGallery images={product.images} />

        <div>
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-ember mb-2">
            {categoryName(product.category)}
          </p>
          <h1 className="font-display uppercase text-3xl sm:text-4xl tracking-tight">{product.name}</h1>
          <p className="text-stone mt-2 text-lg">{product.subtitle}</p>

          <p className="mt-6 text-charcoal/80 leading-relaxed">{product.description}</p>

          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="flex items-center gap-3">
              <GaugeBadge value={product.power.value} unit={product.power.unit.toUpperCase()} percent={percent} />
              <span className="text-sm text-stone leading-tight">Jmenovitý<br />výkon</span>
            </div>
            <div className="flex items-center gap-3">
              <GaugeBadge value={product.efficiency} unit="%" percent={product.efficiency} />
              <span className="text-sm text-stone leading-tight">Účinnost<br />spalování</span>
            </div>
            <div className="flex items-center gap-3">
              <GaugeBadge value={product.flueDiameter} unit="MM" percent={40} />
              <span className="text-sm text-stone leading-tight">Průměr<br />kouřovodu</span>
            </div>
          </div>

          {/* B2B Inquiry form */}
          <div className="mt-10 border border-ash rounded-sm p-6 sm:p-8 bg-white">
            <h2 className="font-display uppercase text-lg tracking-wide mb-1">Poptat velkoobchodní nabídku</h2>
            <p className="text-sm text-stone mb-6">
              Ceny a obchodní podmínky poskytujeme registrovaným velkoobchodním partnerům. Vyplňte poptávku a
              ozveme se vám do 1 pracovního dne.
            </p>
            <InquiryForm productName={product.name} />
          </div>
        </div>
      </section>

      {/* ============ TECHNICAL SPECS ============ */}
      <section className="bg-white border-y border-ash">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-display uppercase text-2xl tracking-tight mb-8">Technické parametry</h2>
          <div className="border border-ash rounded-sm overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                <SpecRow label="Výkon" value={`${product.power.value} kW (rozsah ${product.power.range})`} />
                <SpecRow label="Účinnost" value={`${product.efficiency} %`} />
                <SpecRow label="Průměr kouřovodu" value={`${product.flueDiameter} mm`} />
                <SpecRow label="Rozměry (v × š × h)" value={product.dimensions} />
                <SpecRow label="Hmotnost" value={product.weight} last />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============ DOWNLOADS ============ */}
      <section className="bg-paper">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-display uppercase text-2xl tracking-tight mb-6">Ke stažení</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <DownloadLink href={product.datasheetUrl} title="Technický list (PDF)" filename={product.datasheetUrl.split('/').pop()} />
            <DownloadLink href={product.manualUrl} title="Návod k obsluze (PDF)" filename={product.manualUrl.split('/').pop()} />
          </div>
        </div>
      </section>
    </>
  );
}

function SpecRow({ label, value, last = false }) {
  return (
    <tr className={last ? '' : 'border-b border-ash'}>
      <th scope="row" className="text-left font-display uppercase tracking-wide text-xs text-stone px-5 py-4 bg-paper w-1/3">
        {label}
      </th>
      <td className="px-5 py-4 font-mono">{value}</td>
    </tr>
  );
}

function DownloadLink({ href, title, filename }) {
  return (
    <a href={href} className="flex items-center gap-4 border border-ash bg-white rounded-sm px-5 py-4 hover:border-ember transition-colors">
      <svg className="w-8 h-8 text-ember shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16" />
      </svg>
      <div>
        <p className="font-display uppercase text-sm tracking-wide">{title}</p>
        <p className="text-xs text-stone font-mono mt-0.5">{filename}</p>
      </div>
    </a>
  );
}