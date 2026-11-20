<div align="center">
  <img src="src/assets/logo-mark.png" width="128" alt="Screensemble logo" />
  <h1>Screensemble Site</h1>
  <p><strong>Signage That Takes the Stage.</strong></p>
  <p><em>An ensemble of screens.</em></p>
  <p>
    <a href="https://github.com/Screensemble/Screensemble-Site/releases/latest"><img src="https://img.shields.io/github/v/release/Screensemble/Screensemble-Site" alt="Latest release" /></a>
    <a href="https://github.com/Screensemble/Screensemble-Site/actions/workflows/ci.yml"><img src="https://github.com/Screensemble/Screensemble-Site/actions/workflows/ci.yml/badge.svg" alt="CI" /></a>
    <a href="https://github.com/Screensemble/Screensemble-Site/actions/workflows/deploy.yml"><img src="https://github.com/Screensemble/Screensemble-Site/actions/workflows/deploy.yml/badge.svg" alt="Deploy" /></a>
  </p>
</div>

The marketing and documentation site for **Screensemble** — a self-hosted,
offline-first digital signage system. Live at **https://screensemble.com**.

## Stack

- **Astro + Starlight** — fully static output, Pagefind search on the docs,
  zero client JS on the landing page.
- Custom landing page (`src/pages/index.astro` + `src/styles/landing.css`),
  not a Starlight page.
- Docs in `src/content/docs/docs/**` — served under `/docs/`; the sidebar is
  explicit slugs in `astro.config.mjs`.

## Development

```bash
npm ci
npm run dev       # local dev server
npm run build     # static build → dist/
npm run preview   # serve the build locally
```

Node 22. `SITE_URL` / `BASE_PATH` env vars override the deploy origin/base.

## Deployment

`.github/workflows/deploy.yml` builds `dist/` and deploys to GitHub Pages on
every push to `main`; `public/CNAME` pins the custom domain. CI
(`.github/workflows/ci.yml`) runs `astro check` + build on pushes and PRs.

## Related

- [Screensemble Player](../Screensemble-Addon) — the Kodi addon
- [Screensemble Server](../Screensemble-Server) — the fleet server

## License

MIT — see [LICENSE](LICENSE).
