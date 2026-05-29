import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route index element={<LandingPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
      </>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
