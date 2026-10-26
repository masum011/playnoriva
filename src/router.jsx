import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'toys',
        lazy: async () => {
          const { default: Component } = await import('./pages/ToysPage')
          return { Component }
        },
      },
      {
        path: 'why-us',
        lazy: async () => {
          const { default: Component } = await import('./pages/WhyUsPage')
          return { Component }
        },
      },
      {
        path: 'reviews',
        lazy: async () => {
          const { default: Component } = await import('./pages/ReviewsPage')
          return { Component }
        },
      },
      {
        path: 'faq',
        lazy: async () => {
          const { default: Component } = await import('./pages/FaqPage')
          return { Component }
        },
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

export default router