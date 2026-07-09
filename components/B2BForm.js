'use client';

import { useState } from 'react';
import { b2bPage } from '@/data/products';

const fields = [
  { id: 'company', label: 'Název společnosti', type: 'text', required: true },
  { id: 'ico', label: 'IČO', type: 'text', required: true },
  { id: 'dic', label: 'DIČ', type: 'text', required: false },
  { id: 'contact', label: 'Kontaktní osoba', type: 'text', required: true },
  { id: 'phone', label: 'Telefon', type: 'tel', required: true },
  { id: 'email', label: 'E-mail', type: 'email', required: true },
  { id: 'website', label: 'Web / e-shop', type: 'url', required: false },
];

export default function B2BForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: napojit na skutečný endpoint / CRM pro zpracování B2B poptávek
    setSent(true);
  }

  if (sent) {
    return (
      <div className="text-center py-10">
        <svg className="w-12 h-12 text-ember mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="font-display uppercase text-lg tracking-wide">Poptávka o spolupráci odeslána</p>
        <p className="text-sm text-stone mt-2">Ozveme se vám do 2 pracovních dnů na uvedený e-mail nebo telefon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        {fields.map((f) => (
          <div key={f.id}>
            <label htmlFor={f.id} className="block text-xs font-mono uppercase tracking-wide text-stone mb-1">
              {f.label}
              {!f.required && <span className="normal-case text-stone/60"> (nepovinné)</span>}
            </label>
            <input
              id={f.id}
              name={f.id}
              type={f.type}
              required={f.required}
              className="w-full border border-ash rounded-sm px-3 py-2.5 focus:outline-none focus:border-ember"
            />
          </div>
        ))}
      </div>
      <div>
        <label htmlFor="note" className="block text-xs font-mono uppercase tracking-wide text-stone mb-1">
          Poznámka
        </label>
        <textarea
          id="note"
          name="note"
          rows={5}
          placeholder="Např. typ prodejny, region působení, předpokládaný odběr…"
          className="w-full border border-ash rounded-sm px-3 py-2.5 focus:outline-none focus:border-ember"
        />
      </div>
      <p className="text-xs text-stone">{b2bPage.formNote}</p>
      <button type="submit" className="btn btn-primary w-full sm:w-auto">
        Odeslat poptávku o spolupráci
      </button>
    </form>
  );
}