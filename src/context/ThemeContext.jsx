import { createContext, useEffect, useState } from 'react'

const setStorageTheme = theme => {
  window.localStorage.setItem('theme', theme)
}
const getStorageTheme = () => {
  return window.localStorage.getItem('theme')
}

const getPreferColorScheme = () => {
  if (!getStorageTheme()) {
    if (matchMedia('(prefers-color-scheme: dark)').matches) {
      setStorageTheme('dark')
      return
    }

    if (matchMedia('(prefers-color-scheme: light)').matches) {
      setStorageTheme('light')
      return
    }
  }

  return getStorageTheme()
}

export const ThemeContext = createContext()
export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getPreferColorScheme())

  const handleTheme = () => {
    if (getStorageTheme() === 'dark') {
      setStorageTheme('light')
    } else if (getStorageTheme() === 'light') {
      setStorageTheme('dark')
    }

    setTheme(getStorageTheme())
  }

  useEffect(() => {
    if (theme === 'dark') {
      document
        .querySelector('body')
        .classList.add('dark')
    } else if (theme === 'light') {
      document
        .querySelector('body')
        .classList.remove('dark')
    }
  }, [theme])


  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
