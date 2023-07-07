/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        'water-blue': '#36B3E8',
        'bubblegum-pink': '#FF89D3',
        'medium-green': '#6ADB6B',
        lilac: '#C38EFA',
        'pale-muave': '#FDC5FA',
        butterscotch: '#FBBA57',
        'aqua-blue': '#27D7E7',
        'dark-orange': '#F76E35',
        'off-yellow': '#FBF845',
        'red-pink': '#EC1D51',
        strawberry: '#FF2745',
      },
    },
  },
  plugins: [],
};
