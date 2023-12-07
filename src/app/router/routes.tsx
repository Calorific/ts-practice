import { PrivateRoute } from '../../features/PrivateRoute/privateRoute'
import React, { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout/mainLayout'

const HomePage = lazy(() => import('../../pages/HomePage/homePage.tsx').then(m => ({ default: m.HomePage})))
const CharactersPage = lazy(() => import('../../pages/CharactersPage/charactersPage.tsx').then(m => ({ default: m.CharactersPage})))
const CharacterDetailsPage = lazy(() => import('../../pages/CharacterDetailsPage/characterDetailsPage.tsx').then(m => ({ default: m.CharacterDetailsPage})))
const LocationsPage = lazy(() => import('../../pages/LocationsPage/locationsPage.tsx').then(m => ({ default: m.LocationsPage})))
const LocationDetailsPage = lazy(() => import('../../pages/LocationDetailsPage/locationDetailsPage.tsx').then(m => ({ default: m.LocationDetailsPage})))
const EpisodesPage = lazy(() => import('../../pages/EpisodesPage/episodesPage.tsx').then(m => ({ default: m.EpisodesPage})))
const EpisodeDetailsPage = lazy(() => import('../../pages/EpisodeDetailsPage/episodeDetailsPage.tsx').then(m => ({ default: m.EpisodeDetailsPage})))
const AuthPage = lazy(() => import('../../pages/AuthPage/authPage.tsx').then(m => ({ default: m.AuthPage})))



export const routes: RouteObject[] = [
  {
    path: '',
    element: <PrivateRoute><MainLayout /></PrivateRoute>,
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
        element: <Navigate to='/' replace />
      }
    ]
  },
  {
    path: 'auth',
    element: <Navigate to='/auth/login' />
  },
  {
    path: 'auth/:type',
    element: <AuthPage />
  }
]