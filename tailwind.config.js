/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a1428",
        card: "#0a1428",
        cardHover: "#3b4353",
        bg_footer: "#111111",
        bg_prefooter: "#292929",
      }
    },
  },
  plugins: [],
};
