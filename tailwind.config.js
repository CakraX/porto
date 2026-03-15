/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      colors: {
        ink: '#111827',
        slate: '#334155',
        peach: '#ff8a5b',
        amber: '#ffb703',
        mint: '#5eead4',
        sky: '#38bdf8',
      },
      boxShadow: {
        glow: '0 20px 60px -20px rgba(17, 24, 39, 0.35)',
      },
      keyframes: {
        rise: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        rise: 'rise 700ms ease-out both',
      },
    },
  },
  plugins: [],
}
