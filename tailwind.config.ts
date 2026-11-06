import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Art direction: Codex, 2026-11-06. Blue fills the header phone button only.
      colors: {
        black: '#000000',
        ink: '#202020',
        surface: '#F3F3F3',
        line: '#D6D6D6',
        muted: '#595959',
        accent: { DEFAULT: '#0B57D0', press: '#0842A0' },
      },
      fontFamily: {
        sans: ['var(--font-source-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-libre-franklin)', 'var(--font-source-sans)', 'sans-serif'],
      },
      maxWidth: { site: '1200px' },
      borderRadius: { DEFAULT: '4px' },
    },
  },
  plugins: [],
}

export default config
