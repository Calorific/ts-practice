import { FC, useEffect, useState } from 'react'
import { Typography } from 'antd'
import { Episode } from '../../shared/api/methods/types'
import { HttpService } from '../../shared/api/methods/methods'
import { CardList } from '../../shared/ui/CardList/cardList'
import { CardListItem } from '../../shared/ui/CardList/types'

export const EpisodesPage: FC = () => {
  const [characters, setCharacters] = useState<Episode[] | null>(null)
  useEffect(() => {
    (async () => {
      const data = await HttpService.fetchEpisodes()
      setCharacters(data)
    })()
  }, [])

  const items: CardListItem[] | null = characters
      ? characters.map(c => ({ name: c.name, description: c.episode, id: c.id.toString() }))
      : null

  return <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
    <Typography.Title style={{ textAlign: 'center' }}>Episodes</Typography.Title>
    <CardList items={items} />
  </div>
}