// Centralized theme configuration for Atal Yuva Vikas 2026
// Change these values to update the entire website theme

export const theme = {
  colors: {
    // Primary - Government Orange
    primary: {
      main: '#FF6B00',
      light: '#FF8533',
      dark: '#CC5500',
      foreground: '#FFFFFF',
    },
    // Secondary - Saffron tones
    secondary: {
      main: '#FFF5E6',
      light: '#FFFAF2',
      dark: '#FFE4C4',
      foreground: '#1A1A1A',
    },
    // Neutral
    neutral: {
      white: '#FFFFFF',
      lightGray: '#F5F5F5',
      gray: '#666666',
      darkGray: '#333333',
      black: '#1A1A1A',
    },
    // Accent for highlights
    accent: {
      green: '#2E7D32',
      blue: '#1565C0',
    },
  },
  fonts: {
    primary: 'var(--font-inter)',
    secondary: 'var(--font-noto-sans-oriya)',
  },
  spacing: {
    section: {
      paddingY: 'py-16 md:py-20',
      paddingX: 'px-4 md:px-6 lg:px-8',
    },
    container: 'max-w-7xl mx-auto',
  },
  borderRadius: '0px', // No border radius for government professional look
} as const

// CSS custom property values for Tailwind
export const cssVariables = {
  '--color-govt-orange': theme.colors.primary.main,
  '--color-govt-orange-light': theme.colors.primary.light,
  '--color-govt-orange-dark': theme.colors.primary.dark,
  '--color-saffron': theme.colors.secondary.main,
  '--color-saffron-light': theme.colors.secondary.light,
} as const
