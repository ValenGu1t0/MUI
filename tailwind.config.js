/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {  // Modifico mis propios breakpoints
        'celu-s': { min: '320px', max: '425px' },  
        'celu': { min: '426px', max: '639px'},
        'sm': { min: '640px', max: '767px'},
        'md': { min: '768px', max: '1024px' },
      },
    },
  },
  plugins: [],
};


