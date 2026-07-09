'use client';

import { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { catalogPage } from '@/data/products';

export default function CatalogGrid({ products }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const list = useMemo(() => {
    if (activeFilter === 'all') return products;
    return products.filter((p) => p.category === activeFilter);
  }, [products, activeFilter]);

  return (
    <>
      <section className="bg-white border-b border-ash sticky top-[80px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-wrap gap-3">
          {catalogPage.filters.map((f) => (
            <button
              key={f.slug}
              className="chip"
              aria-pressed={activeFilter === f.slug}
              onClick={() => setActiveFilter(f.slug)}
            >
              {f.name}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {list.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}