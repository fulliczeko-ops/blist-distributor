import CatalogGrid from '@/components/CatalogGrid';
import { catalogPage, products, siteUrl } from '@/data/products';

export async function generateMetadata() {
  return {
    title: catalogPage.meta.title,
    description: catalogPage.meta.description,
    alternates: { canonical: `${siteUrl}/katalog` },
    openGraph: {
      title: catalogPage.meta.title,
      description: catalogPage.meta.description,
      url: `${siteUrl}/katalog`,
      type: 'website',
    },
  };
}

export default function CatalogPage() {
  return (
    <>
      <section className="bg-charcoal text-white blueprint-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="font-mono text-xs tracking-wide text-white/50 mb-2">
            <a href="/" className="hover:text-ember">Úvod</a> / {catalogPage.heading}
          </p>
          <h1 className="font-display uppercase text-3xl sm:text-4xl tracking-tight">{catalogPage.heading}</h1>
          <p className="text-white/70 mt-3 max-w-2xl">{catalogPage.intro}</p>
        </div>
      </section>

      <CatalogGrid products={products} />
    </>
  );
}