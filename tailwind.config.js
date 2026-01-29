/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00A8CC',
        dark: '#1A1A1A',
        'text-medium': '#666666',
        'text-light': '#999999',
        'border-light': '#E0E0E0',
        'bg-light': '#FAFAFA',
        yellow: '#F4D03F'
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
      borderRadius: {
        'small': '6px',
        'medium': '12px',
        'large': '16px',
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(0,0,0,0.08)',
        'medium': '0 4px 16px rgba(0,0,0,0.12)',
        'strong': '0 8px 24px rgba(0,0,0,0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}