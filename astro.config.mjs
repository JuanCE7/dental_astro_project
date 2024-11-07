import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  server: {
    port: 3001,
    host: true,
  },

  integrations: [react(), tailwind({applyBaseStyles:false})],
});