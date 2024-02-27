import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/router/ErrorPage.jsx'
import About from './components/router/About.jsx'
import Recipes from './components/router/Recipes.jsx'
import Home from './components/router/Home.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    errorElement : <ErrorPage />,
    children : [
      {
        path : "",
        element : <Home/>
      },
      {
        path : "about",
        element : <About />
      },
      {
        path : "recipes",
        element : <Recipes />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
