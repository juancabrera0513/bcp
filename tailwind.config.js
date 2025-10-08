/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f0f7ff',
          100: '#e1effe',
          200: '#c3defd',
          300: '#9ec8fb',
          400: '#72aaf7',
          500: '#4f8ef2',    // azul cielo
          600: '#3c74d6',
          700: '#315fb1',
          800: '#2a4f90',
          900: '#233f73',
        },
        accent: {
          50:  '#fff7e8',
          100: '#ffefcf',
          200: '#fde2a6',
          300: '#f9d473',
          400: '#f2c241',
          500: '#e6ad1a',    // dorado
          600: '#c18c13',
          700: '#9a6d12',
          800: '#7b5614',
          900: '#654514',
        },
      },
      boxShadow: {
        soft: '0 10px 25px -5px rgba(0,0,0,0.08), 0 8px 10px -6px rgba(0,0,0,0.06)',
        glow: '0 0 0 4px rgba(79,142,242,0.15), 0 12px 40px rgba(79,142,242,0.25)',
        gold: '0 0 0 4px rgba(230,173,26,0.15), 0 12px 40px rgba(230,173,26,0.25)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, rgba(79,142,242,0.08), rgba(230,173,26,0.10))',
        'cta-gradient': 'linear-gradient(135deg, #4f8ef2, #e6ad1a)',
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(.2,.8,.2,1)',
      },
    },
  },
  plugins: [],
}
