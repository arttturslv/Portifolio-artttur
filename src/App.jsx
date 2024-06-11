import { useState } from 'react'
import Routes from './routes/routes.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';



export default function App() {

  const [theme, setTheme] = useState('light');

    const router = createBrowserRouter([
      {
        path: "/",
        element: <Home theme={theme} setTheme={setTheme}/>
      },
      {
        path: "/b-log",
        element: <Blog theme={theme} setTheme={setTheme}/>
      }
    ])


  return (
    <RouterProvider router={router} />
  )
}

