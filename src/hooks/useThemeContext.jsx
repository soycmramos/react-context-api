import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function useThemeContext() {
  const { theme, handleTheme } = useContext(ThemeContext)
  return { theme, handleTheme }
}
