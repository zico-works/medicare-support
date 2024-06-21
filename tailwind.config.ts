import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './layout/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#336699',
          100: '#6f7d93',
        },
        tint: {
          DEFAULT: 'rgba(0, 0, 0, 0.1)',
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '0rem',
          lg: '0rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '840px',
          md: '968px',
          lg: '1110px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        bricolage: ['--font-brocolage', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
