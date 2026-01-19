import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark Luxury Palette
        dark: {
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
          950: '#0A0A0B',
        },
        // Coral/Orange accent (primary)
        accent: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FFD4AD',
          300: '#FFB088',
          400: '#FF8F5A',
          500: '#FF6B35',
          600: '#F04D1A',
          700: '#C73D12',
          800: '#9E3412',
          900: '#7F2D12',
        },
        // Emerald/Teal (secondary)
        emerald: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        // Blue (tertiary)
        blue: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        // Purple
        purple: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
        },
        // Pink
        pink: {
          50: '#FDF2F8',
          100: '#FCE7F3',
          200: '#FBCFE8',
          300: '#F9A8D4',
          400: '#F472B6',
          500: '#EC4899',
          600: '#DB2777',
          700: '#BE185D',
          800: '#9D174D',
          900: '#831843',
        },
        // Amber
        amber: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        surface: {
          primary: '#0A0A0B',
          secondary: '#111113',
          tertiary: '#1A1A1D',
          card: '#141416',
          elevated: '#1E1E21',
        }
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(3.5rem, 10vw, 7rem)', { lineHeight: '1.05', fontWeight: '700', letterSpacing: '-0.02em' }],
        'display': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.02em' }],
        'title': ['clamp(1.75rem, 4vw, 2.5rem)', { lineHeight: '1.2', fontWeight: '600', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'glow-coral': '0 0 40px rgba(255, 107, 53, 0.25)',
        'glow-emerald': '0 0 40px rgba(16, 185, 129, 0.25)',
        'glow-blue': '0 0 40px rgba(59, 130, 246, 0.25)',
        'glow-purple': '0 0 40px rgba(139, 92, 246, 0.25)',
        'glow-pink': '0 0 40px rgba(236, 72, 153, 0.25)',
        'glow-multi': '0 0 30px rgba(255, 107, 53, 0.2), 0 0 60px rgba(16, 185, 129, 0.15)',
        'glow-sm': '0 0 20px rgba(255, 107, 53, 0.15)',
        'glow-md': '0 0 40px rgba(255, 107, 53, 0.2)',
        'glow-lg': '0 0 60px rgba(255, 107, 53, 0.3)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 40px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-warm': 'linear-gradient(135deg, #FF6B35 0%, #EC4899 100%)',
        'gradient-cool': 'linear-gradient(135deg, #10B981 0%, #3B82F6 100%)',
        'gradient-multi': 'linear-gradient(135deg, #FF6B35 0%, #EC4899 50%, #8B5CF6 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #F59E0B 0%, #FF6B35 50%, #EC4899 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient': 'gradient-shift 15s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 107, 53, 0.2)' },
          '100%': { boxShadow: '0 0 40px rgba(255, 107, 53, 0.4)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
