/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],  // Fonte padrão (Inter)
        serif: ['Playfair Display', 'serif'],  // Fonte para títulos (Playfair Display)
      },
      
    },
  },
  plugins: [],
}