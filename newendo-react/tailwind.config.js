/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ffa000',
          hover: '#e0a800',
        },
        secondary: '#2c3e50',
        text: '#333333',
        background: '#f5f5f5',
        card: '#ffffff',
        accent: '#3498db',
      },
      fontFamily: {
        sans: ['Poppins', 'Roboto', 'sans-serif'],
        display: ['Lobster', 'cursive'],
      },
    },
  },
  plugins: [],
}
