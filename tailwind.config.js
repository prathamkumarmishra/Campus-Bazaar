/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#16203a',
        canvas: '#f8fafc',
        brand: { 50: '#eef2ff', 100: '#e0e7ff', 500: '#6366f1', 600: '#4f46e5', 700: '#4338ca' },
      },
      boxShadow: {
        card: '0 4px 24px rgba(15, 23, 42, 0.07)',
        lift: '0 18px 35px rgba(79, 70, 229, 0.14)',
      },
    },
  },
  plugins: [],
};
