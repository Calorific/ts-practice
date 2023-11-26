import { FC, useEffect, useState } from 'react'
import { Typography } from 'antd'
import { HttpService } from '../../shared/api/methods/methods'
import { CardList } from '../../shared/ui/CardList/cardList'
import { CardListItem } from '../../shared/ui/CardList/types'
import { Location } from  '../../shared/api/methods/types'

export const LocationsPage: FC = () => {
  const [locations, setLocations] = useState<Location[] | null>(null)
  useEffect(() => {
    (async () => {
      const data = await HttpService.fetchLocations()
      setLocations(data)
    })()
  }, [])

  const items: CardListItem[] | null = locations
      ? locations.map(l => ({ name: l.name, description: l.type, id: l.id.toString() }))
      : null

  return <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
    <Typography.Title style={{ textAlign: 'center' }}>Locations</Typography.Title>
    <CardList items={items} />
  </div>
}