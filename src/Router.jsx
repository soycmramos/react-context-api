import { createBrowserRouter } from 'react-router-dom'

import Root from './pages/Root'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import NotFound from './pages/NotFound'

export default createBrowserRouter([
  {
    path: '/',
    element: <Root />
  },
  {
    path: '/1',
    element: <Page1 />
  },
  {
    path: '/2',
    element: <Page2 />
  },
  {
    path: '*',
    element: <NotFound />
  }
])
