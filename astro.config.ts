import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';

import { spectreDark } from './src/ec-theme';

// https://astro.build/config
const config = defineConfig({
  site: 'https://www.benfriedland.com',
  output: 'static',
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: 'Blog.',
      openGraph: {
        home: {
          title: 'Blog.',
          description: 'Explorations in code and beyond.'
        },
        blog: {
          title: 'Blog.',
          description: 'Writings and reflections.'
        },
        projects: {
          title: 'Foundry.'
        }
      }
    })
  ]
});

export default config;
