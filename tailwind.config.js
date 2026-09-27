/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0A0A0A',
        panel: '#151515',
        panel2: '#1C1C1C',
        bone: '#E8E8E3',
        grey: {
          DEFAULT: '#6B6B6B',
          light: '#9A9A9A',
          dark: '#3A3A3A',
        },
        amber: {
          DEFAULT: '#FFB020',
          dim: '#8A6318',
          glow: '#FFC85C',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(232,232,227,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(232,232,227,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        scan: 'scan 6s linear infinite',
        marquee: 'marquee 24s linear infinite',
      },
    },
  },
  plugins: [],
}
