/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lou': {
          DEFAULT: '#F0A820',
          light: '#FFF0C8',
          dark: '#C07800',
        },
        'bella': {
          DEFAULT: '#E8607A',
          light: '#FFE4EC',
          dark: '#A82040',
        },
        'kruru': {
          DEFAULT: '#6E8EC8',
          light: '#E4EEF8',
          dark: '#2A4A80',
        },
        'jambo': {
          DEFAULT: '#5BC870',
          light: '#E0F4EA',
          dark: '#1A6030',
        },
        'cream': '#FBF6EE',
        'mint': '#E8F5EF',
        'warm': '#3D2B1F',
        'muted': '#9B7E6A',
      },
      fontFamily: {
        'pen': ['"Nanum Pen Script"', 'cursive'],
        'jua': ['Jua', '"Noto Sans KR"', 'sans-serif'],
        'body': ['"Noto Sans KR"', '"Apple SD Gothic Neo"', '"Malgun Gothic"', 'sans-serif'],
        'sans': ['"Noto Sans KR"', '"Apple SD Gothic Neo"', '"Malgun Gothic"', 'sans-serif'],
      },
      animation: {
        'float-lou': 'floatLou 2.8s ease-in-out infinite',
        'float-bella': 'floatBella 3.2s ease-in-out infinite',
        'float-kruru': 'floatKruru 2.5s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        floatLou: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        floatBella: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        floatKruru: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
}
