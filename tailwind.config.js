/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6', // blue-500
        secondary: '#f97316', // orange-500
        dark: '#1f2937', // gray-800
        light: '#f3f4f6', // gray-100
      }
    },
  },
  plugins: [],
}
