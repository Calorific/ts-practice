import { FC, useEffect, useState } from 'react'
import { Typography } from 'antd'
import { Character } from '../../shared/api/methods/types'
import { HttpService } from '../../shared/api/methods/methods'
import { CardList } from '../../shared/ui/CardList/cardList'
import { CardListItem } from '../../shared/ui/CardList/types'
import { ToggleSort } from '../../features/toggleSort/toggleSort'
import { Order } from '../../features/toggleSort/types'
import { sortItemsByDate } from '../../features/toggleSort/methods'
import { useSearchParams } from 'react-router-dom'

export const CharactersPage: FC = () => {
  const [characters, setCharacters] = useState<Character[] | null>(null)
  const [searchParams] = useSearchParams()

  useEffect(() => {
    (async () => {
      const data = await HttpService.fetchCharacters()
      const sorted = sortItemsByDate(data, searchParams.get('order') as Order || 'desc') as Character[]
      setCharacters(sorted)
    })()
  }, [])

  useEffect(() => {
    orderChange()
  }, [searchParams])

  const orderChange = () => {
    if (characters === null) return
    const order = searchParams.get('order') as Order || 'desc'
    setCharacters(sortItemsByDate(characters, order) as Character[])
  }

  const items: CardListItem[] | null = characters
      ? characters.map(c => ({ name: c.name, description: c.species, id: c.id.toString() }))
      : null

  return <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
    <Typography.Title style={{ textAlign: 'center' }}>
      Characters <ToggleSort />
    </Typography.Title>
    <CardList items={items} />
  </div>
}