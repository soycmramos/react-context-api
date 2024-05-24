import { RouterProvider } from 'react-router-dom'
import ThemeProvider from './context/ThemeContext'
import Layout from './layout/Layout'
import router from './Router'

export default function App() {
  return (
    <ThemeProvider>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </ThemeProvider>
  )
}
