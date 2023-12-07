import { FC, PropsWithChildren } from 'react'
import { useAuth } from '../../app/context/auth/authProvider.tsx'
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation()
  const auth = useAuth()

  if (auth && auth.user === null)
    return <Navigate to='/auth/login' replace state={{ from: location.pathname }} />
  return children
}
