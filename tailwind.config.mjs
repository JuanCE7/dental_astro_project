/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#2781C5",
        secondary: '#1A1A1A'
      },
	  fontFamily: {
        cormo: ['"cormorant-garamond"', 'serif'], // defines una familia "libre"
      },
    },
  },
  plugins: [],
};
