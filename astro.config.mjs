import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  integrations: [tailwind({
    applyBaseStyles: true
  }), react(), icon()],
  adapter: node({
    mode: "standalone"
  })
});