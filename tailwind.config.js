/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "wiggle": 'wiggle 1s ease-in-out infinite',
        "slideLeft": 'slideLeft 1.1s ease-in-out ',
        "slideRight": 'slideRight 1.1s ease-in ',



      },
      keyframes: {
        slideLeft: {
          '0%, 50%': { transform: ' translateX(-1000px)' },
          '100%': { transform: ' translateX(0px)' },
        },
        slideRight: {
          '0%, 50%': { transform: ' translateX(1000px)' },
          '100%': { transform: ' translateX(0px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  screens: {
    'xs' : '300px',
    // 'xm' : '540px',
    'xm': '330px',
    'sm': '680px',


    'md': '780px',
    // => @media (min-width: 640px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }
  },
  plugins: [],
}