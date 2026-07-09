'use client';

import { useState } from 'react';

export default function ProductGallery({ images }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="aspect-[4/3] bg-charcoal border border-ash rounded-sm flex items-center justify-center font-mono text-white/40 text-sm px-4 text-center">
        {images[active]}
      </div>
      <div className="grid grid-cols-4 gap-3 mt-3">
        {images.map((img, i) => (
          <button
            key={img}
            onClick={() => setActive(i)}
            aria-current={active === i}
            aria-label={img}
            className="thumb aspect-square bg-charcoal-2 rounded-sm flex items-center justify-center"
          >
            <svg viewBox="0 0 40 40" className="w-1/2 h-1/2">
              <rect x="8" y="8" width="24" height="24" rx="2" fill="#232629" stroke="#d9480f" />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}