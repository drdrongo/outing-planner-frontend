import { createContext, useContext } from "react"

interface theme {
  background: string,
  foreground: string,
}

export type GlobalContent = {
  theme: theme
  toggleTheme: React.MouseEventHandler<HTMLButtonElement>
}

const themes = {
  dark: {
    foreground: '#FFFFFF',
    background: '#000000'
  },
  light: {
    foreground: '#000000',
    background: '#FFFFFF'
  }
}

export const ThemeContext = createContext<GlobalContent>({
  theme: themes.light, // set a default value
  toggleTheme: () => {},
})
export const useThemeContext = () => useContext(ThemeContext)
