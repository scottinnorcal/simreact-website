/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,mdx,md}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1C2B3A',
        accent: '#4C8DF6',
        bgNeutral: '#F7F9FC',
        success: '#16A34A',
        warning: '#F59E0B',
        danger: '#DC2626',
        borderSoft: '#E2E8F0',
        textMain: '#111827',
        textSub: '#4B5563'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif']
      },
      boxShadow: {
        subtle: '0 8px 24px rgba(15,23,42,0.06)'
      },
      borderRadius: {
        xl: '1rem'
      }
    }
  },
  plugins: []
};
