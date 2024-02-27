import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/router/ErrorPage.jsx'

const Home = lazy(() => import('./components/router/Home.jsx'))
const About = lazy(() => import('./components/router/About.jsx'))
const Recipes = lazy(() => import('./components/router/Recipes.jsx'))


const router = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    errorElement : <ErrorPage />,
    children : [
      {
        path : "",
        element : (
          <Suspense fallback="Loading...">
            <Home/>
          </Suspense>
        )
      },
      {
        path : "about",
        element : (
          <Suspense fallback="Loading...">
            <About />
          </Suspense>
        )
      },
      {
        path : "recipes",
        element : (
          <Suspense fallback="Loading...">
            <Recipes />
          </Suspense>
        )
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
