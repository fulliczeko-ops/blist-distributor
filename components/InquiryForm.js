'use client';

import { useState } from 'react';

export default function InquiryForm({ productName }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: napojit na skutečný endpoint / CRM pro zpracování poptávek
    setSent(true);
  }

  if (sent) {
    return (
      <div className="text-center py-6">
        <svg className="w-10 h-10 text-ember mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="font-display uppercase tracking-wide">Poptávka odeslána</p>
        <p className="text-sm text-stone mt-1">Ozveme se vám co nejdříve na uvedený e-mail.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wide text-stone mb-1">
            Jméno a příjmení
          </label>
          <input id="name" name="name" type="text" required className="w-full border border-ash rounded-sm px-3 py-2.5 focus:outline-none focus:border-ember" />
        </div>
        <div>
          <label htmlFor="ico" className="block text-xs font-mono uppercase tracking-wide text-stone mb-1">
            IČO společnosti
          </label>
          <input id="ico" name="ico" type="text" required className="w-full border border-ash rounded-sm px-3 py-2.5 focus:outline-none focus:border-ember" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wide text-stone mb-1">
          E-mail
        </label>
        <input id="email" name="email" type="email" required className="w-full border border-ash rounded-sm px-3 py-2.5 focus:outline-none focus:border-ember" />
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wide text-stone mb-1">
          Poptávka / poznámka
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Např. odhadované měsíční množství, region prodeje…"
          defaultValue={productName ? `Mám zájem o poptávku modelu ${productName}.` : ''}
          className="w-full border border-ash rounded-sm px-3 py-2.5 focus:outline-none focus:border-ember"
        />
      </div>
      <button type="submit" className="btn btn-primary w-full sm:w-auto">
        Odeslat poptávku
      </button>
    </form>
  );
}