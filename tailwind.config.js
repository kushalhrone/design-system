/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './hrone-design/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#02563D',
        'brand-primary-dark': '#013E2C',
        'brand-primary-mid': '#3DAB87',
        'brand-primary-light': '#E8F4F0',
        'brand-secondary': '#ff674d',
        'brand-secondary-dark': '#e55c44',
        'brand-secondary-mid': '#ffa090',
        'brand-secondary-light': '#fff1ee',
        'neutral-50': '#F8FAFB',
        'neutral-100': '#F1F5F7',
        'neutral-200': '#E2E8ED',
        'neutral-300': '#CBD5DD',
        'neutral-400': '#94A3B5',
        'neutral-500': '#64748B',
        'neutral-600': '#475569',
        'neutral-700': '#334155',
        'neutral-800': '#1E293B',
        'neutral-900': '#0F172A',
      },
      fontFamily: {
        sans: ['Noto Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        xs: '2px',
        sm: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px',
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
    },
  },
  plugins: [],
}
