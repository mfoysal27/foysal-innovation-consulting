# Foysal Innovation Consulting — Website

Marketing website for **Foysal Innovation Consulting** (a working trade name of
an independent consultancy led by Kamrul Foysal, Ph.D.). Built with
[Astro](https://astro.build/) + TypeScript as a fast, static, low-maintenance
site with minimal client-side JavaScript.

> **Working brand name.** "Foysal Innovation Consulting" is a proposed trade
> name, not a claim of a registered business or LLC. Change it anytime in
> `src/config/site.ts`.

---

## Quick start

```bash
npm install
npm run dev       # local dev server at http://localhost:4321
npm run build     # type-check + production build to ./dist
npm run preview   # preview the production build locally
```

Requires Node.js 18.20+, 20.3+, or 22+ (developed on Node 22).

---

## Project structure

```
src/
  config/        <- EDIT HERE: brand, contact, services, offers, bio, etc.
    site.ts        brand name, contact email, links, deploy URL, SEO defaults
    services.ts    the five service groups (one detail page each)
    offers.ts      productized starting offers
    pathways.ts    the three product-development pathways
    process.ts     the engagement process steps
    experience.ts  selected experience summaries
    bio.ts         founder biography, education, expertise
    faq.ts         frequently asked questions
  components/    reusable UI (Header, Footer, Hero, cards, InquiryForm, ...)
  layouts/       BaseLayout.astro (SEO, OG, structured data, chrome)
  pages/         routes (index, services, about, experience, contact, privacy, 404)
  styles/        global.css (design tokens + base styles)
public/          static assets (favicon, og-image, robots.txt, _headers)
```

All editable content lives in `src/config`. See **CONTENT-GUIDE.md** for a
plain-language walkthrough of common edits.

---

## Deployment

The site is a static build deployable to any static host. The recommended
zero-cost setup is **Cloudflare Pages** connected to a Git repository, with
automatic deploys on push. Full instructions, including the exact dashboard
steps and free-tier notes, are in **DEPLOYMENT.md**.

Build command: `npm run build:ci` · Output directory: `dist`

---

## Important content & accuracy rules

This site is intentionally conservative about claims. When editing, keep to
these rules (details in `CONTENT-CHECKLIST.private.md`):

- No invented metrics, testimonials, clients, partnerships, awards, or pricing.
- Institutional names describe the founder's background only — no logos, no
  implied endorsement.
- NSF I-Corps (customer discovery) is kept distinct from SBIR/STTR and NIH work;
  no grant is described as personally awarded unless confirmed.
- Research/prototyping is kept distinct from clinical use.
- No real contact email, resume, or biosketch is committed to this repository.

---

## License / assets

Source and brand artwork in this repository are for the Foysal Innovation
Consulting website. The repository intentionally contains **no** proprietary
research assets, employer materials, resume, or biosketch.
