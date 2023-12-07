import { FC, useEffect, useState } from 'react'
import { Alert, Typography } from 'antd'
import { CardList } from '../../shared/ui/CardList/cardList'
import { CardListItem } from '../../shared/ui/CardList/types'
import { Location } from '../../shared/api/methods/types'
import { sortItemsByDate } from '../../features/toggleSort/methods'
import { Order, Sortable } from '../../features/toggleSort/types'
import { useSearchParams } from 'react-router-dom'
import { ToggleSort } from '../../features/toggleSort/toggleSort'
import { useInfiniteScroll } from '../../shared/hooks/useInfiniteScroll/useInfiniteScroll.ts'
import { Loader } from '../../shared/ui/Loader/loader.tsx'

export const LocationsPage: FC = () => {
  const [searchParams] = useSearchParams()
  const { data, loading, error, hasMore, loadTriggerNode } = useInfiniteScroll<Location>('https://rickandmortyapi.com/api/location')
  const [locations, setLocations] = useState<Location[] | null>(null)

  useEffect(() => {
    if (!data) return
    const sorted = sortItemsByDate(data as Sortable[], searchParams.get('order') as Order || 'desc') as Location[]
    setLocations(sorted)
  }, [data])

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
    <CardList triggerNodeRef={loadTriggerNode} triggerNodePosition={4} items={items} />
    {loading ? <div style={{ padding: 25, display: 'flex', justifyContent: 'center' }}><Loader /></div> : null}
    {!hasMore ? <Typography.Title level={4} style={{ textAlign: 'center'}}>All locations were loaded</Typography.Title> : null}
    {error ? <Alert
        style={{ marginTop: 20, marginRight: 40, marginLeft: 40 }}
        message="Error"
        description={error.message}
        type="error"
        showIcon
    /> : null}
  </div>
}