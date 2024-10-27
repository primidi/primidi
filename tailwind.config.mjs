import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.white'),
            fontWeight: 300,
            h1: {
              margin: 0,
              color: theme('colors.pink.100'),
              fontWeight: 800,
            },
            'h2, h3, h4, h5, h6': {
              margin: 0,
              paddingTop: '1rem',
              paddingBottom: '1rem',
              color: theme('colors.pink.100'),
              fontWeight: 700,
            },
            p: {
              margin: 0,
            },
            a: {
              color: theme('colors.purple.500'),
              '&:hover': {
                color: theme('colors.purple.700'),
              },
            },
            strong: {
              color: theme('colors.white'),
              fontWeight: 600,
            },
            'li::marker': {
              color: theme('colors.pink.100'),
            },
            blockQuote: {
              marginTop: '0.5rem',
              borderLeft: '3px solid',
              borderColor: theme('colors.pink.100'),
            },
            'blockquote p': {
              color: theme('colors.white'),
            },
          },
        },
      }),
      colors: {
        pink: {
          100: '#BA6EB1',
        },
        purple: {
          100: '#9A0680',
          300: '#79018C',
          500: '#4C0070',
          700: '#160040',
        },
        grey: {
          100: '#DBD8E3',
          500: '#5C5470',
          700: '#352F44',
        },
        brand: {
          github: '#333333',
          instagram: '#C13584',
          x: '#14171A',
          linkedin: '#0A66C2',
          spotify: '#1DB954',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [typography],
};
