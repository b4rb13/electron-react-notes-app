/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
}
