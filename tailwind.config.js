/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Oxanium: ["Oxanium", "sans-serif"]
      },
      width: {
        '40-r': '40rem',
        '35-r': '35rem',
        '30-r': '30rem'
      },
      height: {
        '40-r': '40rem',
        '35-r': '35rem',
        '30-r': '30rem'
      },
      boxShadow: {
        '5xl': '20px 20px 50px rgba(0, 0, 0, 0.5)',
      }
    }

  },
  plugins: [],
}