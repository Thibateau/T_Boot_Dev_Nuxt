module.exports = {
  mode: 'jit',
  content: [
    './**/*.{html, js, ts, vue}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lilita: 'Lilita',
        bungee: 'Bungee',
      },
      colors: {
        'magenta-fuchsia': {
          50: '#fcf5ff',
          100: '#f9ebff',
          200: '#f1cdfe',
          300: '#e8aefd',
          400: '#d672fc',
          500: '#c535fa',
          600: '#b130e1',
          700: '#9428bc',
          800: '#762096',
          900: '#611a7b',
        },
        'biloba-flower': {
          50: '#fcfbff',
          100: '#faf7fe',
          200: '#f1eafe',
          300: '#e9ddfd',
          400: '#d9c4fb',
          500: '#c8abf9',
          600: '#b49ae0',
          700: '#9680bb',
          800: '#786795',
          900: '#62547a',
        },
        'dark-blue': {
          50: '#f4f2fc',
          100: '#e8e6f9',
          200: '#c7bff1',
          300: '#a599e8',
          400: '#614dd7',
          500: '#1d00c6',
          600: '#1a00b2',
          700: '#160095',
          800: '#110077',
          900: '#0e0061',
        },
        'blue-ribbon': {
          50: '#f6f7fe',
          100: '#eceefc',
          200: '#d1d5f9',
          300: '#b5bcf5',
          400: '#7d8aed',
          500: '#4558e5',
          600: '#3e4fce',
          700: '#3442ac',
          800: '#293589',
          900: '#222b70',
        },
        'limed-spruce': {
          50: '#f6f6f7',
          100: '#eceeee',
          200: '#d0d4d5',
          300: '#b3b9bc',
          400: '#7b8589',
          500: '#425157',
          600: '#3b494e',
          700: '#323d41',
          800: '#283134',
          900: '#20282b',
        },
        scooter: {
          50: '#f6fdfe',
          100: '#ecfafe',
          200: '#d0f3fc',
          300: '#b3ebfb',
          400: '#7addf7',
          500: '#41cef4',
          600: '#3bb9dc',
          700: '#319bb7',
          800: '#277c92',
          900: '#206578',
        },
      },
    },
  },
  plugins: [],
}
