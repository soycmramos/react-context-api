import useThemeContext from './../hooks/useThemeContext';
import Header from './../components/Header'
import Footer from './../components/Footer'

export default function Layout({ children }) {

  const { theme } = useThemeContext()

  return (
    <>
      <Header />
      <main className={`min-h-screen grid place-items-center ${ theme === 'dark' ? 'bg-gray-900' : 'bg-slate-100' }`}>
        {children}
      </main>
      <Footer />
    </>
  )
}
