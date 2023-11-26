import { FC, useEffect, useState } from 'react'
import { Typography } from 'antd'
import { HttpService } from '../../shared/api/methods/methods'
import { CardList } from '../../shared/ui/CardList/cardList'
import { CardListItem } from '../../shared/ui/CardList/types'
import { Location } from '../../shared/api/methods/types'
import { sortItemsByDate } from '../../features/toggleSort/methods'
import { Order } from '../../features/toggleSort/types'
import { useSearchParams } from 'react-router-dom'
import { ToggleSort } from '../../features/toggleSort/toggleSort'

export const LocationsPage: FC = () => {
  const [searchParams] = useSearchParams()
  const [locations, setLocations] = useState<Location[] | null>(null)

  useEffect(() => {
    (async () => {
      const data = await HttpService.fetchLocations()
      const sorted = sortItemsByDate(data, searchParams.get('order') as Order || 'desc') as Location[]
      setLocations(sorted)
    })()
  }, [])

  useEffect(() => {
    orderChange()
  }, [searchParams])

  const orderChange = () => {
    if (locations === null) return
    const order = searchParams.get('order') as Order || 'desc'
    setLocations(sortItemsByDate(locations, order) as Location[])
  }

  const items: CardListItem[] | null = locations
      ? locations.map(l => ({ name: l.name, description: l.type, id: l.id.toString() }))
      : null

  return <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
    <Typography.Title style={{ textAlign: 'center' }}>
      Locations <ToggleSort />
    </Typography.Title>
    <CardList items={items} />
  </div>
}