export const themes = {
  signal: {
    label: 'Heritage',
    colors: {
      background: '#f3f0e8',
      surface: '#eeeae1',
      paper: '#fbfaf5',
      ink: '#13201a',
      text: '#13201a',
      muted: '#68746f',
      line: '#d8d2c6',
      accent: '#195d49',
      accent2: '#e6b29d',
      dot: '#c0b8aa',
      solid: '#13201a',
      onSolid: '#fbfaf5',
    },
    fonts: {
      display: 'Manrope, Inter, ui-sans-serif, system-ui, sans-serif',
      body: 'Inter, ui-sans-serif, system-ui, sans-serif',
      mono: '"SFMono-Regular", Consolas, monospace',
    },
  },
  dark: {
    label: 'Dark',
    colors: {
      background: '#0b0e0d',
      surface: '#181e1b',
      paper: '#121715',
      ink: '#050706',
      text: '#f1efe7',
      muted: '#a6b0aa',
      line: '#35403b',
      accent: '#78d6b2',
      accent2: '#d99a7e',
      dot: '#46534d',
      solid: '#050806',
      onSolid: '#f5f2e9',
    },
    fonts: {
      display: 'Manrope, Inter, ui-sans-serif, system-ui, sans-serif',
      body: 'Inter, ui-sans-serif, system-ui, sans-serif',
      mono: '"SFMono-Regular", Consolas, monospace',
    },
  },
} as const

export type ThemeName = keyof typeof themes

export function applyTheme(name: ThemeName) {
  const theme = themes[name]
  const root = document.documentElement
  Object.entries(theme.colors).forEach(([key, value]) => root.style.setProperty(`--${key}`, value))
  Object.entries(theme.fonts).forEach(([key, value]) => root.style.setProperty(`--font-${key}`, value))
  root.dataset.theme = name
}
