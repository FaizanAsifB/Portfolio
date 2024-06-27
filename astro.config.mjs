import node from '@astrojs/node'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  integrations: [
    tailwind({
      applyBaseStyles: true
    }),
    react(),
    icon()
  ],
  adapter: node({
    mode: 'standalone'
  })
})
