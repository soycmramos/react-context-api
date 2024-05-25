import { createContext, useState } from 'react'

export const ThemeContext = createContext()

export default function ThemeProvider({ children }) {

  const [theme, setTheme] = useState('light')

  const handleTheme = () => setTheme(currentTheme => currentTheme === 'light' ? 'dark': 'light')

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
