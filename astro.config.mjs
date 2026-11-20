// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
export default defineConfig({
 site: process.env.SITE_URL ?? 'https://screensemble.com',
 base: process.env.BASE_PATH ?? '/',
 integrations: [starlight({
  title: 'Screensemble',
  description: 'Signage That Takes the Stage. A self-hosted, offline-first digital signage system — an ensemble of screens that always show an intentional state.',
  logo: { src: './src/assets/logo-mark.png', replacesTitle: false },
  social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Screensemble' }],
  customCss: ['./src/styles/starlight-custom.css'],
  sidebar: [
   { label: 'Introduction', items: [{ label: 'Documentation home', slug: 'docs' }, { label: 'How Screensemble works', slug: 'docs/concepts' }] },
   { label: 'Get started', items: [
    { label: 'Choose an installation', slug: 'docs/getting-started' },
    { label: 'Server', slug: 'docs/getting-started/server' },
    { label: 'Player', slug: 'docs/getting-started/player' },
    { label: 'Pairing a display', slug: 'docs/getting-started/pairing' },
    { label: 'Your first playlist', slug: 'docs/getting-started/first-display' },
   ]},
   { label: 'Using Screensemble', items: [
    { label: 'Fleet dashboard', slug: 'docs/using/dashboard' },
    { label: 'Media library', slug: 'docs/using/library' },
    { label: 'Shared playlists', slug: 'docs/using/playlists' },
    { label: 'The player UI', slug: 'docs/using/player-ui' },
    { label: 'Timing and schedules', slug: 'docs/using/scheduling' },
   ]},
   { label: 'Reference', items: [
    { label: 'Operating modes', slug: 'docs/reference/modes' },
    { label: 'Player settings', slug: 'docs/reference/player-settings' },
    { label: 'Server API', slug: 'docs/reference/server-api' },
    { label: 'Deployment', slug: 'docs/reference/deployment' },
    { label: 'Troubleshooting and FAQ', slug: 'docs/reference/faq' },
   ]},
  ],
 })],
});
