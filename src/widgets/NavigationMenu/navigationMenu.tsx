import { FC } from 'react'
import { Menu, MenuProps } from 'antd'
import { NavLink, useLocation } from 'react-router-dom'

const items: MenuProps['items'] = [
  {
    label: <NavLink to=''>Главная</NavLink>,
    key: '/',
  },
  {
    label: <NavLink to=''>Герои</NavLink>,
    key: '/heroes',
  },
  {
    label: <NavLink to=''>Локации</NavLink>,
    key: '/locations',
  },
  {
    label: <NavLink to=''>Эпизоды</NavLink>,
    key: '/episodes',
  }
]

export const NavigationMenu: FC = () => {
  const location = useLocation()
  const activeItem = items.find(item => location.pathname.startsWith(item?.key?.toString() || ''))

  return <Menu selectedKeys={activeItem?.key ? [activeItem.key.toString()] : []}
               style={{ fontSize: '1.2rem', maxWidth: '100%' }}
               mode='horizontal'
               items={items} />
}