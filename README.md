# Blist Distributor — Next.js

B2B prezentační web pro velkoobchodního distributora krbových kamen Blist.
Next.js 14 (App Router), React, Tailwind CSS.

## Spuštění

```bash
npm install
npm run dev
```

Otevři http://localhost:3000

Produkční build:

```bash
npm run build
npm start
```

## Struktura projektu

```
app/
  layout.js          – kořenový layout (fonty, Header, Footer, base metadata)
  page.js             – Úvodní stránka (Organization JSON-LD)
  globals.css         – Tailwind + design tokeny (barvy, typografie, komponenty)
  sitemap.js          – dynamická sitemap.xml
  robots.js           – dynamický robots.txt
  not-found.js         – vlastní 404 stránka
  katalog/page.js      – Katalog produktů (filtrování dle kategorie)
  produkty/[slug]/page.js – Detail produktu (generateMetadata + Product JSON-LD)
  b2b/page.js          – B2B partnerská stránka (výhody, proces, formulář)

components/
  Header.js            – hlavička + mobilní menu (client component)
  Footer.js             – patička se sdílenými firemními údaji
  ProductCard.js         – karta produktu pro katalog i homepage
  CatalogGrid.js          – filtr kategorií + grid produktů (client component)
  ProductGallery.js        – galerie s přepínáním náhledů (client component)
  InquiryForm.js            – B2B poptávkový formulář na detailu produktu
  B2BForm.js                 – rozšířený lead-gen formulář na B2B stránce
  GaugeBadge.js               – vizuální "gauge" odznak pro kW / % / mm
  JsonLd.js                    – pomocná komponenta pro vkládání JSON-LD

data/
  products.js  – JEDINÝ ZDROJ PRAVDY pro veškeré texty webu, kategorie
                 a parametry jednotlivých modelů kamen. Uprav zde název,
                 popisky, ceny, výkony atd. — změna se promítne všude.
```

## SEO

- Každá route má vlastní `generateMetadata()` (title, description, canonical, Open Graph),
  generovanou dynamicky z `data/products.js`.
- Homepage vkládá JSON-LD typu `Organization`.
- Každý produkt (`/produkty/[slug]`) vkládá JSON-LD typu `Product` včetně parametrů,
  materiálu a nabídky (`offers`).
- `app/sitemap.js` a `app/robots.js` generují `/sitemap.xml` a `/robots.txt` automaticky.
- Sémantická struktura: jedno `<h1>` na stránku, `<h2>`/`<h3>` pro sekce a karty,
  `<table>` se `<th scope="row">` pro technické parametry.

## Poznámky k obsahu

- PDF soubory (technický list, návod) očekávejte ve složce `public/downloads/` —
  aktuálně jsou v datech jen ukázkové cesty.
- Formuláře (`InquiryForm`, `B2BForm`) zatím pouze simulují odeslání na frontendu
  (`TODO` v kódu) — pro produkční nasazení je potřeba napojit na skutečný
  endpoint / CRM (např. API route v `app/api/...` nebo externí služba).
- Placeholder texty v hranatých závorkách (IČO, adresa apod.) v `data/products.js`
  nahraď reálnými fakturačními údaji společnosti.
