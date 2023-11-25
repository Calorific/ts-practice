import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Typography } from 'antd'
import { NavigationMenu } from '../../../widgets/NavigationMenu/navigationMenu'

export const MainLayout: FC = () => {
  return <>
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', margin: '0 50px' }}>
      <Typography.Title level={2} style={{ marginTop: '7px' }}>Рик и морти</Typography.Title>
      <NavigationMenu />
    </div>
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <Outlet />
    </div>
  </>
}

