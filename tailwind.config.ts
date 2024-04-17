import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'GGx-gray': "#78776D",
        'GGx-yellow': "#EAD158",
        'GGx-dark': "#191D21",
        'GGx-light': "#DFDDCD",
        'GGx-black2': "#11100C",
        'GGx-green': '#158A0C',
        'GGx-red': '#E6283D',
      },
    },
  },
  plugins: [
    require('tailwindcss-safe-area')
  ],
}
export default config
