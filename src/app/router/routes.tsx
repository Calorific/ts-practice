import { Navigate, RouteObject } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout/mainLayout'
import { HomePage } from '../../pages/HomePage/homePage'
import { CharactersPage } from '../../pages/CharactersPage/charactersPage'
import { CharacterDetailPage } from '../../pages/CharacterDetailPage/characterDetailPage'

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
        path: 'characters',
        element: <CharactersPage />
      },
      {
        path: 'characters/:id',
        element: <CharacterDetailPage />
      },
      {
        path: '*',
        element: <Navigate to='' replace />
      }
    ]
  }
]