import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './routes/home/Home'
import Movie from './routes/movie/Movie'
import SearchPage from './routes/search/SearchPage'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MoviesGenre from './routes/moviesGenre/MoviesGenre'

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
      },
      {
        path: 'genre/:genreId',
        element: <MoviesGenre />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
