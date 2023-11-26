import { Navigate, RouteObject } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout/mainLayout'
import { HomePage } from '../../pages/HomePage/homePage'
import { CharactersPage } from '../../pages/CharactersPage/charactersPage'
import { CharacterDetailsPage } from '../../pages/CharacterDetailsPage/characterDetailsPage'
import { LocationsPage } from '../../pages/LocationsPage/locationsPage'
import { LocationDetailsPage } from '../../pages/LocationDetailsPage/locationDetailsPage'
import { EpisodesPage } from '../../pages/EpisodesPage/episodesPage'
import { EpisodeDetailsPage } from '../../pages/EpisodeDetailsPage/episodeDetailsPage'

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
        element: <CharacterDetailsPage />
      },
      {
        path: 'locations',
        element: <LocationsPage />
      },
      {
        path: 'locations/:id',
        element: <LocationDetailsPage />
      },
      {
        path: 'episodes',
        element: <EpisodesPage />
      },
      {
        path: 'episodes/:id',
        element: <EpisodeDetailsPage />
      },
      {
        path: '*',
        element: <Navigate to='' replace />
      }
    ]
  }
]