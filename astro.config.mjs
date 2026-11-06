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
});
