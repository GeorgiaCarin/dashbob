/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-green': 'var(--primary-green)',
        
        'secondary-green': 'var(--secondary-green)',

        'dark-blue': 'var(--dark-blue)',

        'text-primary': 'var(--text-color-gray)',

        'light-green-50': 'var(--light-green-50)',

        'light-green-400': 'var(--light-green-400)',

        red: 'var(--red)',

        blue: 'var(--blue)',

      }
    },
  },
  plugins: [],
}

