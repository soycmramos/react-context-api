import useThemeContext from '../hooks/useThemeContext'

export default function Button() {

  const { theme, setTheme } = useThemeContext()

  const changeTheme = () => theme === 'light' ? setTheme('dark') : setTheme('light')

  return (
    <button
      onClick={changeTheme}
      className="py-2 px-4 outline-none cursor-pointer bg-gray-200 hover:bg-gray-300 active:bg-gray-400"
    >
      Change theme
    </button>
  )
}
