import { FC, PropsWithChildren } from 'react'
import { useAuth } from '../../../app/context/auth/authProvider'
import { Navigate } from 'react-router-dom'

export const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const auth = useAuth()

  if (auth && auth.user === null)
    return <Navigate to='/auth' replace />
  return children
}