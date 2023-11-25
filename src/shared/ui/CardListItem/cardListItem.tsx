import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { Card } from 'antd'
import { CardListItem as CardListItemProps } from '../CardList/types'

export const CardListItem: FC<CardListItemProps> = ({ name, description, id }) => {
  return <NavLink to={`${id}`}>
    <Card style={{ width: 300, height: '100%' }} hoverable>
      <Card.Meta title={name} description={description} />
    </Card>
  </NavLink>
}