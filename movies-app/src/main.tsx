import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './routes/home/Home'
import Movie from './routes/movie/Movie'
import SearchPage from './routes/search/SearchPage'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'movie/:id',
        element: <Movie />
      },
      {
        path: 'search',
        element: <SearchPage />,
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)