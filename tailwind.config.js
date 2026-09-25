/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Tema claro (migrado do dark). Nomes mantidos para nao quebrar componentes.
        bg:          '#F4F5F7',
        surface:     '#FFFFFF',
        'surface-2': '#F7F8FA',
        'surface-3': '#F1F3F6',
        border:      '#E6E8EC',
        'border-2':  '#DADDE3',
        ink:         '#111827',
        accent:      '#1E6BFF',
        'accent-2':  '#3D7BFF',
        'accent-glow':'#0A4FD4',
        cyan:        '#0891B2',
        'cyan-dim':  '#0E7490',
        success:     '#16A34A',
        'success-dim':'#15803D',
        danger:      '#DC2626',
        warning:     '#D97706',
        muted:       '#6B7280',
        'muted-2':   '#4B5563',
        meta:        '#1877F2',
        google:      '#EA4335',
        tiktok:      '#111318',
        whatsapp:    '#1DAA5B',
        ga:          '#E37400',
      },
      fontFamily: {
        sans: ['"Hanken Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-accent': '0 4px 14px rgba(30,107,255,0.18)',
        'glow-cyan':   'none',
        'glow-success':'none',
        'card':        '0 1px 2px rgba(17,24,39,0.04)',
        'inner-glow':  'none',
        'flyout':      '0 12px 32px -8px rgba(20,22,27,0.18), 0 2px 6px rgba(20,22,27,0.06)',
        'composer':    '0 1px 2px rgba(20,22,27,0.04), 0 8px 24px -12px rgba(20,22,27,0.12)',
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #1E6BFF 0%, #1557E0 100%)',
        'gradient-funnel': 'linear-gradient(180deg, #1E6BFF 0%, #1557E0 60%, #0F45B8 100%)',
        'gradient-card':   'linear-gradient(145deg, #FFFFFF 0%, #FFFFFF 100%)',
        'grid-pattern':    'none',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      animation: {
        'pulse-dot':  'pulseDot 2s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'slide-in':   'slideIn 0.25s ease-out',
        'fade-up':    'fadeUp 0.35s ease-out',
        'counter':    'counter 1s ease-out',
      },
      keyframes: {
        pulseDot: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%':     { opacity: '0.5', transform: 'scale(0.8)' },
        },
        glowPulse: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0.85' },
        },
        slideIn: {
          from: { transform: 'translateX(-8px)', opacity: '0' },
          to:   { transform: 'translateX(0)',    opacity: '1' },
        },
        fadeUp: {
          from: { transform: 'translateY(10px)', opacity: '0' },
          to:   { transform: 'translateY(0)',    opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
