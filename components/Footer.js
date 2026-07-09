import Link from 'next/link';
import { organization, nav } from '@/data/products';

export default function Footer() {
  return (
    <footer id="kontakt" className="bg-charcoal-2 text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link href="/" className="flex items-baseline gap-2 mb-4">
            <span className="font-display font-bold text-xl tracking-wide text-white">BLIST</span>
            <span className="font-mono text-[10px] tracking-[0.2em] text-white/50 uppercase">Distributor</span>
          </Link>
          <p className="text-sm leading-relaxed text-white/60">
            Oficiální velkoobchodní distributor krbových kamen Blist pro Českou republiku.
          </p>
        </div>

        <div>
          <h4 className="font-display uppercase text-sm tracking-wide text-white mb-4">Fakturační údaje</h4>
          <p className="text-sm leading-relaxed text-white/60">
            Dovozce: {organization.legalName}
            <br />
            Sídlo: {organization.address.street}, {organization.address.postalCode} {organization.address.city}
            <br />
            IČO: {organization.ico}
            <br />
            DIČ: {organization.dic}
          </p>
        </div>

        <div>
          <h4 className="font-display uppercase text-sm tracking-wide text-white mb-4">Sklad a expedice</h4>
          <p className="text-sm leading-relaxed text-white/60">
            {organization.warehouse.street}, {organization.warehouse.postalCode} {organization.warehouse.city}
            <br />
            {organization.warehouse.hours}
            <br />
            {organization.warehouse.email}
          </p>
        </div>

        <div>
          <h4 className="font-display uppercase text-sm tracking-wide text-white mb-4">Navigace</h4>
          <ul className="space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-ember transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/45 font-mono">
          <p>© 2026 {organization.name}. Všechna práva vyhrazena.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-white transition-colors">Obchodní podmínky</Link>
            <Link href="#" className="hover:text-white transition-colors">Ochrana osobních údajů</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}