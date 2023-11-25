import { FC, useEffect, useState } from 'react'
import { Typography } from 'antd'
import { Character } from '../../shared/api/methods/types'
import { HttpService } from '../../shared/api/methods/methods'
import { CardList } from '../../shared/ui/CardList/cardList'
import { CardListItem } from '../../shared/ui/CardList/types'

export const CharactersPage: FC = () => {
  const [characters, setCharacters] = useState<Character[] | null>(null)
  useEffect(() => {
    (async () => {
      const data = await HttpService.fetchCharacters()
      setCharacters(data)
    })()
  }, [])

  const items: CardListItem[] | null = characters
      ? characters.map(c => ({ name: c.name, description: c.species, id: c.id.toString() }))
      : null

  return <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
    <Typography.Title style={{ textAlign: 'center' }}>Герои</Typography.Title>
    <CardList items={items} />
  </div>
}