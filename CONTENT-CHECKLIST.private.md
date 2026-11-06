# Private Content Verification Checklist (internal — not part of the public site)

This file is a working checklist. It lives in the repo root and is **never
included in the public build output** (`dist/`). It is not published to the
website. Do not add secrets here.

---

## Blockers before public launch

- [ ] **Verified business email** set in `src/config/site.ts` → `contactEmail`.
      (Do NOT reuse the old resume/university email. See CONTENT-GUIDE.md for
      free options.)
- [ ] **Real deployment URL** set in `src/config/site.ts` → `url` after the
      first Cloudflare Pages deploy, and matching `Sitemap:` line in
      `public/robots.txt`.

## Links to verify before enabling

- [ ] GitHub `https://github.com/mfoysal27` resolves AND belongs to the founder
      → set `verified: true` in `site.ts`.
- [ ] LinkedIn `https://www.linkedin.com/in/kamrulhasanfoysal` resolves AND
      belongs to the founder → set `verified: true`. (Do not treat a login wall
      as proof it is invalid.)

## Facts to confirm / supply (kept OUT of the public site until confirmed)

- [ ] CEO/CTO roles — described qualitatively in bio. Add startup names, dates,
      exits, revenue, investment, or customer counts ONLY if confirmed and
      permitted. Currently intentionally omitted.
- [ ] Resume numerical performance claims (e.g., citation counts, percentages) —
      left out pending confirmation of context and permitted public use.
- [ ] Mayo role start date — intentionally shown as "currently" with no date.
- [ ] Any client testimonials, named projects, partnerships, certifications,
      awards — NONE published; add only real, permissioned ones.
- [ ] 3D printing specifics (printer models, materials, build volume, tolerances,
      capacity, fulfillment/shipping) — NONE advertised; service is inquiry-and-
      quote only until real specs are supplied.
- [ ] Program-specific SBIR/STTR deadlines or eligibility details — NONE shown;
      verify against the official solicitation before adding any.

## Optional, hidden until supplied

- [ ] Booking/scheduling link → `site.ts` `bookingUrl` (button stays hidden
      while empty).
- [ ] Approved founder headshot (currently a monogram treatment is used; no
      fabricated photo).
- [ ] Hosted form endpoint → `.env` `PUBLIC_FORM_ENDPOINT` (optional; email-draft
      fallback is used otherwise).

## Must-stay-true guardrails (do not regress)

- [ ] No employer/university/NSF/NIH logos used without permission.
- [ ] Independence/non-endorsement notice present (footer + about).
- [ ] Engineering degrees not presented as PE licensure.
- [ ] Research/prototyping kept distinct from clinical/diagnostic use.
- [ ] No resume/biosketch/credentials committed to the repo or build.
- [ ] Structured data contains no ratings, reviews, street address, or license.
