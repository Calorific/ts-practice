import { Navigate, RouteObject } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout/mainLayout'
import { HomePage } from '../../pages/HomePage/homePage'

export const routes: RouteObject[] = [
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: '*',
        element: <Navigate to='' replace />
      }
    ]
  }
]