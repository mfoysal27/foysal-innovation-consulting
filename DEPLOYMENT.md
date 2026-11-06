# Deployment Guide

This site is a **static** Astro build. The recommended zero-cost hosting is
**Cloudflare Pages** with source in a **Git repository** and automatic deploys.

> Always confirm current free-tier limits and commercial-use terms on the
> provider's official documentation before launch — these change over time.

---

## 0. Before you deploy — the one launch blocker

Set a **verified business email** in `src/config/site.ts`:

```ts
contactEmail: "you@example.com",
```

Until this is set, the inquiry form shows an honest "being configured" message
and the direct-email link stays hidden. Do **not** invent an address. See
CONTENT-GUIDE.md for free email options.

---

## 1. Put the source in a Git repository

> Never commit `.env`, the resume, the biosketch, or any confidential file.
> `.gitignore` already blocks these.

```bash
git init
git add .
git commit -m "Initial site"
```

Then create an empty repository on your Git host and push. For GitHub:

```bash
git branch -M main
git remote add origin https://github.com/<your-account>/<your-repo>.git
git push -u origin main
```

A **private** repository is recommended (public is fine if you prefer — the
repo contains no secrets). Public *hosting* does not require public source.

---

## 2. Deploy on Cloudflare Pages (recommended, free tier)

1. Sign in at <https://dash.cloudflare.com/> (free account).
2. **Workers & Pages → Create → Pages → Connect to Git**.
3. Authorize Cloudflare to access your Git account and pick the repository.
4. Configure the build:
   - **Framework preset:** Astro
   - **Build command:** `npm run build:ci`
   - **Build output directory:** `dist`
   - **Node version:** set an environment variable `NODE_VERSION` = `22` if the
     default build image uses an older Node.
5. **Save and Deploy.** Cloudflare assigns a URL like
   `https://<project>.pages.dev`. HTTPS is automatic.
6. Every push to the production branch now redeploys automatically.

Security headers in `public/_headers` are applied automatically by Cloudflare
Pages.

### After the first deploy — set the real URL

1. Copy the real `*.pages.dev` URL Cloudflare assigned.
2. Update `src/config/site.ts` → `url: "https://<project>.pages.dev"`.
3. Update the `Sitemap:` line in `public/robots.txt` to match.
4. Commit and push — this fixes canonical tags, Open Graph URLs, and the
   sitemap to point at the live address.

### Verify

- Visit each route directly: `/`, `/services`, each `/services/<slug>`,
  `/about`, `/experience`, `/contact`, `/privacy`.
- Visit a made-up path (e.g. `/nope`) to confirm the custom **404** renders.
- Confirm `/sitemap-index.xml` and `/robots.txt` load.

---

## 3. Alternative hosts

Any static host works (`dist/` is plain HTML/CSS/JS). Notes:

- **GitHub Pages:** review its current terms before using it for a commercial
  site; it was not chosen by default for that reason. If used, the `_headers`
  file is ignored (GitHub Pages does not support custom headers).
- **Netlify:** supports `_headers` and `_redirects`; free tier available.
- **Vercel:** works, but a paid plan is **not** required for this static site;
  avoid features that push you onto a paid tier.

No paid plan, purchased domain, or subscription is required for the recommended
setup.

---

## 4. Custom domain (optional, not free)

A provider subdomain (`*.pages.dev`) is free. A custom `.com` requires buying a
domain. If you add one later in Cloudflare Pages, repeat the "set the real URL"
step with the custom domain.
