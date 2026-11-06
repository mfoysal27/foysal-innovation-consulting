// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config/site";

// The canonical production URL is derived from central config so that
// sitemap, canonical tags, and robots.txt all stay in sync.
// Update `SITE.url` in `src/config/site.ts` after the real deployment URL is known.
export default defineConfig({
  site: SITE.url,
  output: "static",
  trailingSlash: "ignore",
  integrations: [sitemap()],
  build: {
    // Emit `/about/index.html` style directories for clean URLs.
    format: "directory",
  },
  compressHTML: true,
  redirects: {
    "/services/business-discovery-commercialization": "/services/idea-validation",
    "/services/proposals-funding-preparation": "/services/idea-validation",
    "/services/ai-data-science-software": "/services/biological-biomedical-software",
    "/services/mvp-on-demand-engineering": "/services/mvp-development",
    "/services/3d-printing-physical-prototyping": "/services/mvp-development",
  },
});
