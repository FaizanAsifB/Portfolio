/** @type {import('tailwindcss').Config} */

const svgToDataUri = require('mini-svg-data-uri')

const defaultTheme = require('tailwindcss/defaultTheme')
const {
  default: flattenColorPalette
} = require('tailwindcss/lib/util/flattenColorPalette')

export default {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        badge: {
          DEFAULT: 'hsl(var(--badge))',
          foreground: 'hsl(var(--badge-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        mada: ['Mada', ...defaultTheme.fontFamily.sans],
        crimsonText: ['CrimsonText', ...defaultTheme.fontFamily.sans]
      },
      padding: {
        'section-t': 'var(--section-padding-t)',
        'section-b': 'var(--section-padding-b)'
      },
      screens: { nav: { max: '1023px' } },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'slide-up': {
          '0%': {
            opacity: '0',
            display: 'none'
          },
          '1%': {
            display: 'block',
            opacity: '0'
          },
          '100%': {
            display: 'block',
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'open-nav': {
          '0%': {
            display: 'none'
          },
          '1%': {
            display: 'flex',
            opacity: '0',
            transform: 'scaleY(0)'
          },
          '100%': {
            display: 'flex',
            opacity: '1',
            transform: 'scaleY(1)'
          }
          // from: { opacity: "0", transform: "scaleY(0)" },
          // to: { opacity: "1", transform: "scaleY(1)" },
        },
        'close-nav': {
          from: { transform: 'scaleY(1)' },
          to: { transform: 'scaleY(0)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'slide-up': 'slide-up 0.35s ease-out forwards',
        'open-nav': 'open-nav 0.35s ease-out forwards',
        'close-nav': 'close-nav 0.35s 1s ease-out forwards'
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar')({
      nocompatible: true,
      preferredStrategy: 'pseudoelements'
    }),
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-grid': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`
          }),
          'bg-grid-small': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`
          }),
          'bg-dot': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`
          })
        },
        {
          values: flattenColorPalette(theme('backgroundColor')),
          type: 'color'
        }
      )
    }
  ]
}
