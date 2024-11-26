/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 2px 12px -4px rgba(0, 0, 0, 0.25)',
      },
      colors:{
        'primary-green': 'var(--primary-green)',
        
        'secondary-green': 'var(--secondary-green)',

        'dark-blue': 'var(--dark-blue)',

        'text-primary': 'var(--text-color-gray)',

        'light-green-50': 'var(--light-green-50)',

        'light-green-200': 'var(--light-green-200)',

        red: 'var(--red)',

        blue: 'var(--blue)',

      }
    },
  },
  plugins: [],
}

