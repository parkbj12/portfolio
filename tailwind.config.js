/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Outfit', 'Noto Sans KR', 'sans-serif'],
        'display': ['Outfit', 'sans-serif'],
      },
      colors: {
        'dark': {
          900: '#0a0a0b',
          800: '#121214',
          700: '#1a1a1f',
          600: '#252529',
        },
        'cream': '#f5f0e8',
        'accent': {
          DEFAULT: '#e8a849',
          light: '#f0c078',
          dark: '#c98a2e',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}

