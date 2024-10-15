/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
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
        sans: ['Poppins', 'sans-serif', 'system-ui'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};
