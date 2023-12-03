import React, { FC } from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from './router/routes'
import './reset.css'
import '@fontsource/roboto'
import { AuthProvider } from './context/auth/authProvider'

export const App: FC = () => {
  return <AuthProvider>
    {useRoutes(routes)}
  </AuthProvider>
}