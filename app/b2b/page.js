import B2BForm from '@/components/B2BForm';
import { b2bPage, siteUrl } from '@/data/products';

export async function generateMetadata() {
  return {
    title: b2bPage.meta.title,
    description: b2bPage.meta.description,
    alternates: { canonical: `${siteUrl}/b2b` },
    openGraph: {
      title: b2bPage.meta.title,
      description: b2bPage.meta.description,
      url: `${siteUrl}/b2b`,
      type: 'website',
    },
  };
}

export default function B2BPage() {
  return (
    <>
      {/* ============ HEADER ============ */}
      <section className="bg-charcoal text-white blueprint-grid ember-glow relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="font-mono text-xs tracking-wide text-white/50 mb-2">
            <a href="/" className="hover:text-ember">Úvod</a> / B2B spolupráce
          </p>
          <h1 className="font-display uppercase text-3xl sm:text-4xl lg:text-5xl tracking-tight max-w-3xl">
            {b2bPage.heading}
          </h1>
          <p className="text-white/70 mt-5 max-w-2xl text-lg leading-relaxed">{b2bPage.subtitle}</p>
        </div>
      </section>

      {/* ============ ADVANTAGES ============ */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="font-display uppercase text-2xl sm:text-3xl tracking-tight mb-10">
            Výhody velkoobchodní spolupráce
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {b2bPage.advantages.map((a) => (
              <div key={a.title} className="border border-ash rounded-sm p-6 bg-paper">
                <h3 className="font-display uppercase text-lg tracking-wide mb-2 text-ember">{a.title}</h3>
                <p className="text-stone leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="bg-paper border-y border-ash">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="font-display uppercase text-2xl sm:text-3xl tracking-tight mb-10">Jak spolupráce probíhá</h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {b2bPage.process.map((step, i) => (
              <li key={step.title} className="relative pl-2">
                <span className="font-mono text-4xl text-ember/30 font-medium">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-display uppercase text-base tracking-wide mt-2 mb-2">{step.title}</h3>
                <p className="text-sm text-stone leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ LEAD FORM ============ */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="border border-ash rounded-sm p-6 sm:p-10 bg-paper">
            <h2 className="font-display uppercase text-2xl tracking-tight mb-2">Poptávka o spolupráci</h2>
            <p className="text-stone mb-8">Vyplňte formulář a náš obchodní tým se vám ozve do 2 pracovních dnů.</p>
            <B2BForm />
          </div>
        </div>
      </section>
    </>
  );
}