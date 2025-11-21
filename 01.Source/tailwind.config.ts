import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';
import typography from '@tailwindcss/typography';
import animate from 'tailwindcss-animate';
import reactAriaComponents from 'tailwindcss-react-aria-components';
import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: [
    'src/**/*!(*.stories|*.spec|*.test).{ts,tsx}',
    'stories/*.stories.{ts,tsx}',
    'index.html',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', ...fontFamily.sans],
        mono: ['JetBrains Mono Variable', ...fontFamily.mono],
      },
      colors: {
        primary: colors.indigo,
        destructive: colors.red,
      },
    },
  },
  plugins: [
    forms,
    aspectRatio,
    typography,
    animate,
    reactAriaComponents,
  ],
} satisfies Config
