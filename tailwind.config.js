/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      title: `2.6rem;`,
      paragraph: `1rem;`
    },
    extend: {
      fontFamily: {
        'ubuntu': ['ubuntu', 'sans-serif'],
        'openSans': ['open-sans', 'sans-serif']
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary-font-color': '#0f0c13',
        'secondary-font-color': '#ffffff',
        'button-color': '#ED6D36',
        'primary-background-color': '#F8EED4',
        'secondary-background-color': '#E6CF93',
        'black-background-color': '#000000'
      },
      
    },
  },
  plugins: [],
}
