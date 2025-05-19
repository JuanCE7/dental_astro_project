/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#2781C5',
        secondary: '#1A1A1A',
        sand: {
          50: '#FAF5F0',
          100: '#F5EBE1',
          200: '#E6D5C3',
          300: '#D4BA9E',
          400: '#2781C5',
          500: '#B07F55',
          600: '#8E6544',
          700: '#6B4C33',
          800: '#483322',
          900: '#251A11'
        }
      },
      backgroundImage: {
        'sand-pattern': "url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%232781C5\" fill-opacity=\"0.05\" fill-rule=\"evenodd\"%3E%3Ccircle cx=\"3\" cy=\"3\" r=\"3\"/%3E%3Ccircle cx=\"13\" cy=\"13\" r=\"3\"/%3E%3C/g%3E%3C/svg%3E')"
      }
    }
  },
  plugins: []
}