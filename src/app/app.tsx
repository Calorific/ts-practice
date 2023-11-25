import React, { FC } from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from './router/routes'
import './reset.css'
import '@fontsource/roboto'

export const App: FC = () => {
  return useRoutes(routes)
}