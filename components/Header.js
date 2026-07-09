'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { nav, ctaLabels, organization } from '@/data/products';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return false;
    return pathname.startsWith(href);
  };

  return (
    <>
      <div className="bg-charcoal text-white text-xs font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          <p className="hidden sm:block tracking-wide text-white/70">
            Pro velkoobchodní partnery a specializované prodejny kamen
          </p>
          <div className="flex items-center gap-4 text-white/80 mx-auto sm:mx-0">
            <a href={`tel:${organization.telephone}`} className="hover:text-ember transition-colors">
              {formatPhone(organization.telephone)}
            </a>
            <span className="text-white/30">/</span>
            <a href={`mailto:${organization.email}`} className="hover:text-ember transition-colors">
              {organization.email}
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-ash">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-baseline gap-2 shrink-0">
            <span className="font-display font-bold text-2xl tracking-wide text-charcoal">BLIST</span>
            <span className="font-mono text-[10px] tracking-[0.2em] text-stone uppercase border-l border-ash pl-2">
              Distributor
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 font-display text-sm uppercase tracking-wide text-charcoal">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={isActive(item.href) ? 'text-ember' : 'hover:text-ember transition-colors'}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link href="/b2b" className="btn btn-primary">
              {ctaLabels.inquiry}
            </Link>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Otevřít menu"
            className="lg:hidden p-2 -mr-2 text-charcoal"
          >
            {open ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <nav
          id="mobile-nav"
          className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-ash shadow-xl transition-all duration-200 ${
            open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <div className="px-6 py-6 flex flex-col gap-5 font-display text-base uppercase tracking-wide">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={isActive(item.href) ? 'text-ember' : ''}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/b2b" onClick={() => setOpen(false)} className="btn btn-primary w-full mt-2">
              {ctaLabels.inquiry}
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

function formatPhone(phone) {
  // +420123456789 -> +420 123 456 789
  const digits = phone.replace('+420', '');
  const groups = digits.match(/.{1,3}/g) || [];
  return `+420 ${groups.join(' ')}`;
}