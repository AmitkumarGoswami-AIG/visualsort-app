/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-light': '#FAFAFA',
        'primary-light': '#E3F2FD',
        'secondary-light': '#F5F5F5',
        'accent-green': '#81C784',
        'text-dark': '#424242',
        'border-light': '#E0E0E0',
        'compare-yellow': '#FFE082',
        'sorted-green': '#A5D6A7',
        'pivot-red': '#FFAB91',
      }
    },
  },
  plugins: [],
}