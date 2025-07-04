module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'website-gradient-start': '#66CBFB',
        'website-gradient-end': '#53BFDA',
      }
    }
  },

  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}