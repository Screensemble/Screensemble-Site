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
    { label: 'Conductor', slug: 'docs/getting-started/conductor' },
    { label: 'Performer', slug: 'docs/getting-started/performer' },
    { label: 'Pairing a display', slug: 'docs/getting-started/pairing' },
    { label: 'Your first playlist', slug: 'docs/getting-started/first-display' },
   ]},
   { label: 'Using Screensemble', items: [
    { label: 'Control Room', slug: 'docs/using/dashboard' },
    { label: 'Media library', slug: 'docs/using/library' },
    { label: 'Shared playlists', slug: 'docs/using/playlists' },
    { label: 'The performer UI', slug: 'docs/using/performer-ui' },
    { label: 'Timing and schedules', slug: 'docs/using/scheduling' },
   ]},
   { label: 'Reference', items: [
    { label: 'Operating modes', slug: 'docs/reference/modes' },
    { label: 'Performer settings', slug: 'docs/reference/performer-settings' },
    { label: 'Conductor API', slug: 'docs/reference/conductor-api' },
    { label: 'Deployment', slug: 'docs/reference/deployment' },
    { label: 'Troubleshooting and FAQ', slug: 'docs/reference/faq' },
   ]},
  ],
 })],
});
