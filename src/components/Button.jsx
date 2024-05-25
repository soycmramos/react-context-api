import useThemeContext from '../hooks/useThemeContext'

export default function Button() {
  const { handleTheme } = useThemeContext()

  return (
    <button
      onClick={handleTheme}
      className="py-2 px-4 cursor-pointer bg-gray-200 hover:bg-gray-300 active:bg-gray-400"
    >
      Change Theme
    </button>
  )
}
