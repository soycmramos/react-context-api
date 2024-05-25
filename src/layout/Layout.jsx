import useThemeContext from './../hooks/useThemeContext';
import Header from './../components/Header'
import Footer from './../components/Footer'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className='min-h-screen grid place-items-center bg-slate-100 dark:bg-neutral-900'>
        {children}
      </main>
      <Footer />
    </>
  )
}
