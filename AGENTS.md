# Screensemble-Site

Marketing + docs site for Screensemble (https://screensemble.com).
Sibling repos: `Screensemble-Addon` (Kodi player), `Screensemble-Server`
(fleet server).

## Stack

- **Astro + Starlight** — static output in `dist/`, zero-JS landing page,
  Pagefind search on docs. Dark-first; brand colors from the logo:
  bg `#0a0f16`, accent `#38b6ff`.
- `npm run dev` / `npm run build` / `npm run preview`. Node 22.
- CI: `.github/workflows/ci.yml` — `astro check` + build on push/PR
  (tags ignored). Deploy: `.github/workflows/deploy.yml` → GitHub Pages
  on push to `main`; `public/CNAME` = screensemble.com.

## Layout & conventions

- Landing is a **custom Astro page** (`src/pages/index.astro` +
  `src/styles/landing.css`), not Starlight. Scroll animations are a tiny
  IntersectionObserver + CSS (`.reveal`), honoring `prefers-reduced-motion`.
- `ScreenFrame.astro` is the 16:9 wall-mount display frame used for feature
  visuals (the analog of stache-site's PhoneFrame). Real display captures
  live in `public/shots/*.webp`; the fleet/library visuals are CSS mocks —
  replace with real captures if a demo instance gets seeded.
- Docs live in `src/content/docs/docs/**` — the doubled `docs/` dir puts
  pages under `/docs/…` URLs. Sidebar is explicit slugs in
  `astro.config.mjs` — add new pages there too.
- `BASE_URL` in Astro has **no trailing slash** — normalize before building
  asset URLs (see `index.astro`).
- Docs copy: plain-language on the landing page; technical is OK in docs.
  Content is ported from the sibling repos' README/AGENTS — update when
  the product changes.
- Branding: "Screensemble", "An ensemble of screens.",
  "Signage That Takes the Stage." Never mention compared/competing
  products anywhere on the site.
