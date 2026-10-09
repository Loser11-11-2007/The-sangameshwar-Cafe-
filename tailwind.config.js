/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          DEFAULT: '#5C4033',
          dark: '#43281C',
          light: '#7A5A48',
        },
        cream: {
          DEFAULT: '#FFF8ED',
          light: '#FFFDF9',
          dark: '#F5ECE0',
        },
        beige: {
          DEFAULT: '#D8C3A5',
          dark: '#BFA889',
          light: '#EADDCB',
        },
        darkBrown: {
          DEFAULT: '#2B2118',
          soft: '#3E3125',
          deep: '#1A140F',
        },
        sage: {
          DEFAULT: '#87986A',
          dark: '#6A7B4F',
          light: '#A3B487',
          bg: '#EAF0E2',
        },
        terracotta: {
          DEFAULT: '#C86D51',
          light: '#E28B71',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Poppins"', 'system-ui', '-apple-system', 'sans-serif'],
        handwriting: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        'warm-sm': '0 2px 8px rgba(43, 33, 24, 0.04)',
        'warm': '0 8px 24px rgba(43, 33, 24, 0.06), 0 2px 6px rgba(43, 33, 24, 0.04)',
        'warm-lg': '0 16px 36px rgba(43, 33, 24, 0.09), 0 4px 12px rgba(43, 33, 24, 0.05)',
        'warm-xl': '0 24px 48px rgba(43, 33, 24, 0.12), 0 8px 16px rgba(43, 33, 24, 0.06)',
      },
      keyframes: {
        steam: {
          '0%': { transform: 'translateY(0) scaleX(1)', opacity: '0.2' },
          '50%': { transform: 'translateY(-12px) scaleX(1.15)', opacity: '0.6' },
          '100%': { transform: 'translateY(-24px) scaleX(1.3)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(3deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(-4deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.04)' },
        }
      },
      animation: {
        steam: 'steam 3s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        float: 'float 4s ease-in-out infinite',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
        marquee: 'marquee 25s linear infinite',
        pulseSoft: 'pulseSoft 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
