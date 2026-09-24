/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:          '#06070F',
        surface:     '#0C0D1A',
        'surface-2': '#111228',
        'surface-3': '#161830',
        border:      '#1A1C35',
        'border-2':  '#222440',
        accent:      '#1E6BFF',
        'accent-2':  '#3D8BFF',
        'accent-glow':'#0A4FD4',
        cyan:        '#00D4FF',
        'cyan-dim':  '#0099CC',
        success:     '#00E676',
        'success-dim':'#00B85C',
        danger:      '#FF4444',
        warning:     '#FFB800',
        muted:       '#5A6080',
        'muted-2':   '#8890B0',
        meta:        '#1877F2',
        google:      '#EA4335',
        tiktok:      '#FF0050',
        whatsapp:    '#25D366',
        ga:          '#E37400',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-accent': '0 0 40px rgba(30,107,255,0.35)',
        'glow-cyan':   '0 0 30px rgba(0,212,255,0.25)',
        'glow-success':'0 0 20px rgba(0,230,118,0.3)',
        'card':        '0 4px 32px rgba(0,0,0,0.6)',
        'inner-glow':  'inset 0 1px 0 rgba(255,255,255,0.05)',
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #1E6BFF 0%, #0A4FD4 100%)',
        'gradient-funnel': 'linear-gradient(180deg, #1E6BFF 0%, #0A4FD4 60%, #063099 100%)',
        'gradient-card':   'linear-gradient(145deg, #111228 0%, #0C0D1A 100%)',
        'grid-pattern':    'linear-gradient(rgba(30,107,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(30,107,255,0.03) 1px, transparent 1px)',
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
          '0%,100%': { boxShadow: '0 0 20px rgba(30,107,255,0.3)' },
          '50%':     { boxShadow: '0 0 40px rgba(30,107,255,0.6)' },
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
