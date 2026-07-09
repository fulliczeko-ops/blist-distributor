import Link from 'next/link';
import GaugeBadge from './GaugeBadge';
import { catalogPage } from '@/data/products';

export default function ProductCard({ product }) {
  const percent = Math.min(100, Math.round((product.power.value / 18) * 100));

  return (
    <article className="card-hover bg-white border border-ash rounded-sm overflow-hidden flex flex-col">
      <div className="aspect-[4/3] bg-charcoal flex items-center justify-center">
        <ProductGlyph category={product.category} />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-display uppercase text-lg tracking-wide">{product.name}</h3>
          <GaugeBadge value={product.power.value} unit={product.power.unit.toUpperCase()} percent={percent} />
        </div>
        <p className="text-sm text-stone mb-4">{product.shortDescription}</p>
        <Link href={`/produkty/${product.slug}`} className="btn btn-outline-dark mt-auto w-full">
          {catalogPage.cardCta}
        </Link>
      </div>
    </article>
  );
}

function ProductGlyph({ category }) {
  if (category === 'vymenik') {
    return (
      <svg viewBox="0 0 100 100" className="w-1/2 h-1/2">
        <rect x="20" y="30" width="60" height="55" rx="3" fill="#232629" stroke="#d9480f" strokeWidth="1.5" />
        <circle cx="50" cy="58" r="14" fill="none" stroke="#d9480f" strokeWidth="2" />
        <path d="M50 48v20M40 58h20" stroke="#d9480f" strokeWidth="2" />
      </svg>
    );
  }
  if (category === 'kachlova') {
    return (
      <svg viewBox="0 0 100 100" className="w-1/2 h-1/2">
        <rect x="25" y="18" width="50" height="66" rx="2" fill="#232629" stroke="#d9480f" strokeWidth="1.5" />
        <line x1="25" y1="38" x2="75" y2="38" stroke="#3a3f43" />
        <line x1="25" y1="58" x2="75" y2="58" stroke="#3a3f43" />
        <line x1="50" y1="18" x2="50" y2="84" stroke="#3a3f43" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 100 100" className="w-1/2 h-1/2">
      <rect x="20" y="30" width="60" height="55" rx="3" fill="#232629" stroke="#d9480f" strokeWidth="1.5" />
      <path d="M38 70 Q50 45 62 70 Q55 60 50 70 Q45 60 38 70Z" fill="#d9480f" />
    </svg>
  );
}