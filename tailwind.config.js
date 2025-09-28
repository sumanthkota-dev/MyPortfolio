/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./pages/**/*.{js,jsx}",
  "./components/**/*.{js,jsx}",
],
  darkMode: 'media', // uses prefers-color-scheme: dark
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: "var(--font-sans)",
        mono: "var(--font-mono)",
      },
    },
  },
  plugins: [],
};
