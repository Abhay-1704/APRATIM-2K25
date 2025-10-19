/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ccet-background': '#0A0E16',
        'ccet-primary': '#3B82F6',
        'ccet-secondary': '#10B981',
        'ccet-accent': '#6366F1',
        'ccet-text': '#E2E8F0',
        'ccet-card': '#1E293B',
        'ccet-gradient-start': '#4568DC',
        'ccet-gradient-end': '#B06AB3'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at 30% 107%, #4568DC 0%, #B06AB3 50%, #0A0E16 100%)',
        'gradient-tech': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-neon': 'linear-gradient(45deg, #3B82F6, #6366F1, #10B981)',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(59, 130, 246, 0.6)',
        'glassmorphism': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'tech-glow': '0 0 30px rgba(59, 130, 246, 0.4), 0 0 60px rgba(16, 185, 129, 0.3)'
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'gradient-flow': 'gradient-flow 10s ease infinite',
        'tech-pulse': 'tech-pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-flow': {
          '0%, 100%': { 
            'background-position': '0% 50%' 
          },
          '50%': { 
            'background-position': '100% 50%' 
          }
        },
        'tech-pulse': {
          '0%, 100%': { 
            transform: 'scale(1)',
            opacity: 0.7
          },
          '50%': { 
            transform: 'scale(1.05)',
            opacity: 1
          }
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
