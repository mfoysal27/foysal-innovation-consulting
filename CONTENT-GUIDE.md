# Content Editing Guide

Everything visitors read is driven by plain TypeScript files in `src/config/`.
You do not need to touch components or pages for routine edits. After any edit,
run `npm run build` to confirm it still compiles, then redeploy (push to Git).

---

## Change the brand name

`src/config/site.ts`

```ts
brandName: "Foysal Innovation Consulting",   // full name
brandNameShort: "Foysal Innovation",         // compact name
monogram: "KF",                              // monogram letters
```

The monogram letters drawn in the logo are in
`src/components/BrandMark.astro` and `public/favicon.svg` (edit the SVG paths if
you change the initials).

---

## Change contact details

`src/config/site.ts`

```ts
contactEmail: "",      // set your verified business email here
bookingUrl: "",        // optional scheduling link; leave empty to hide the button
```

- When `contactEmail` is empty: the form shows an honest "being configured"
  notice and no direct-email link appears.
- When set: the form's "Prepare Email Inquiry" button opens a pre-filled draft
  to that address, and the email appears in the footer and contact page.

### Free business email options

- A *custom* address (you@yourbrand.com) needs a domain you own — not free.
- **Free now:** a dedicated mailbox like `foysal.innovation.consulting@gmail.com`
  (Gmail/Proton). Paste it into `contactEmail`.
- **Free forwarding later:** if you buy a domain, Cloudflare Email Routing
  forwards `you@yourdomain` to your inbox at no cost.

---

## Edit services

`src/config/services.ts` — an array of five service groups. Each has a `title`,
`summary`, `audience`, `problem`, `deliverables` (bullet list), an honest
`note`, and a `nextStep`. Editing text here updates both the services overview
and the individual service page automatically. The `slug` becomes the page URL
(`/services/<slug>`), so change it only if you also want the URL to change.

To **add** a service: copy one object in the array, give it a new unique `slug`,
and fill in the fields. A new detail page is generated automatically.

---

## Edit the starting offers

`src/config/offers.ts` — the three packages plus the custom option. Pricing is
intentionally "Request a scoped proposal" (`priceLabel`). Do not publish fixed
prices or retainers unless you want them public.

---

## Edit the biography & credentials

`src/config/bio.ts`

- `CREDIBILITY_SUMMARY` — one-liner on the home page.
- `BIO_PARAGRAPHS` — the About page biography.
- `EDUCATION`, `EXPERTISE`, `BACKGROUND_HIGHLIGHTS` — structured lists.

Keep to supported facts. No invented startup names, dates, revenue, or metrics.

---

## Edit selected experience

`src/config/experience.ts` — public, non-confidential summaries of prior work.
`EXPERIENCE_NOTE` is the disclaimer that separates background from client work.

---

## Edit the FAQ, pathways, and process

- `src/config/faq.ts` — questions and answers.
- `src/config/pathways.ts` — the three journey stages.
- `src/config/process.ts` — the engagement steps.

---

## Verified social / profile links

`src/config/site.ts` → `social`. Each link has a `verified` flag. Links only
appear on the site when `verified: true`. Confirm a profile resolves and belongs
to the founder before flipping it to `true`.

---

## Design tokens (colors, spacing, fonts)

`src/styles/global.css`, under `:root`. Change CSS variables like `--c-accent`
to adjust the palette site-wide.
