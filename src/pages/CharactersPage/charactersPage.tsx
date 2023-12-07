import { FC, useEffect, useState } from 'react'
import { Alert, Typography } from 'antd'
import { CardList } from '../../shared/ui/CardList/cardList'
import { CardListItem } from '../../shared/ui/CardList/types'
import { ToggleSort } from '../../features/toggleSort/toggleSort'
import { Order } from '../../features/toggleSort/types'
import { sortItemsByDate } from '../../features/toggleSort/methods'
import { useSearchParams } from 'react-router-dom'
import { useInfiniteScroll } from '../../shared/hooks/useInfiniteScroll/useInfiniteScroll.ts'
import { Loader } from '../../shared/ui/Loader/loader.tsx'
import { Character } from '../../shared/api/methods/types.ts'

export const CharactersPage: FC = () => {
  const [searchParams] = useSearchParams()
  const { data, loading, error, hasMore, loadTriggerNode } = useInfiniteScroll<Character>('https://rickandmortyapi.com/api/character')
  const [characters, setCharacters] = useState<Character[] | null>(null)


  useEffect(() => {
    if (!data) return
    const sorted = sortItemsByDate(data, searchParams.get('order') as Order || 'desc') as Character[]
    setCharacters(sorted)
  }, [data])

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

  return <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', paddingBottom: 50 }}>
    <Typography.Title style={{ textAlign: 'center' }}>
      Characters <ToggleSort />
    </Typography.Title>
    <CardList triggerNodeRef={loadTriggerNode} triggerNodePosition={4} items={items} />
    {loading ? <div style={{ padding: 25, display: 'flex', justifyContent: 'center' }}><Loader /></div> : null}
    {!hasMore ? <Typography.Title level={4} style={{ textAlign: 'center'}}>All characters were loaded</Typography.Title> : null}
    {error ? <Alert
        style={{ marginTop: 20, marginRight: 40, marginLeft: 40 }}
        message="Error"
        description={error.message}
        type="error"
        showIcon
    /> : null}
  </div>
}