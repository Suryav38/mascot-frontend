/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors - Change once, applies everywhere
        brand: {
          primary: '#3b82f6',      // Blue
          secondary: '#8b5cf6',    // Purple
          accent: '#f97316',       // Orange
          success: '#10b981',      // Green
          warning: '#f59e0b',      // Amber
          danger: '#ef4444',       // Red
        },
        
        // Background Colors
        bg: {
          primary: '#0f172a',      // slate-900
          secondary: '#1e293b',    // slate-800
          tertiary: '#334155',     // slate-700
        },
        
        // Glass morphism
        glass: {
          light: 'rgba(255, 255, 255, 0.05)',
          medium: 'rgba(255, 255, 255, 0.10)',
          dark: 'rgba(0, 0, 0, 0.20)',
        }
      },
      
      // Consistent shadows
      boxShadow: {
        'glow-blue': '0 0 30px rgba(59, 130, 246, 0.5)',
        'glow-purple': '0 0 30px rgba(139, 92, 246, 0.5)',
        'glow-orange': '0 0 30px rgba(249, 115, 22, 0.5)',
        'glow-green': '0 0 30px rgba(16, 185, 129, 0.5)',
        'card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'card-hover': '0 12px 48px 0 rgba(0, 0, 0, 0.5)',
      },
      
      // Consistent animations
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'gradient': 'gradient 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradient: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.8)' },
        },
      },
      
      // Consistent backdrop blur
      backdropBlur: {
        'glass': '20px',
      },
      
      // Consistent border radius
      borderRadius: {
        'card': '16px',
        'button': '12px',
      },
    },
  },
  plugins: [],
}