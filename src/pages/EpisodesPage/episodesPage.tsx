import { FC, useEffect, useState } from 'react'
import { Typography } from 'antd'
import { Episode } from '../../shared/api/methods/types'
import { HttpService } from '../../shared/api/methods/methods'
import { CardList } from '../../shared/ui/CardList/cardList'
import { CardListItem } from '../../shared/ui/CardList/types'
import { ToggleSort } from '../../features/toggleSort/toggleSort'
import { sortItemsByDate } from '../../features/toggleSort/methods'
import { Order } from '../../features/toggleSort/types'
import { useSearchParams } from 'react-router-dom'

export const EpisodesPage: FC = () => {
  const [searchParams] = useSearchParams()
  const [episodes, setEpisodes] = useState<Episode[] | null>(null)

  useEffect(() => {
    (async () => {
      const data = await HttpService.fetchEpisodes()
      const sorted = sortItemsByDate(data, searchParams.get('order') as Order || 'desc') as Episode[]
      setEpisodes(sorted)
    })()
  }, [])

  useEffect(() => {
    orderChange()
  }, [searchParams])

  const orderChange = () => {
    if (episodes === null) return
    const order = searchParams.get('order') as Order || 'desc'
    setEpisodes(sortItemsByDate(episodes, order) as Episode[])
  }

  const items: CardListItem[] | null = episodes
      ? episodes.map(c => ({ name: c.name, description: c.episode, id: c.id.toString() }))
      : null

  return <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
    <Typography.Title style={{ textAlign: 'center' }}>
      Episodes <ToggleSort />
    </Typography.Title>
    <CardList items={items} />
  </div>
}