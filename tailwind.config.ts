import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    listStyleType: {
      'dash': '"- "',
    },
    extend: {
      animation: {
        'infinite-slider': 'infiniteSlider 45s linear infinite',
      },
      keyframes: {
        infiniteSlider: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          },
        },
      },
    }
  },
  plugins: [],
}
export default config
