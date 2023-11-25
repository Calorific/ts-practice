import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Character } from '../../shared/api/methods/types'
import { HttpService } from '../../shared/api/methods/methods'
import { Card, Tag, Typography } from 'antd'

export const CharacterDetailPage: FC = () => {
  const { id } = useParams()
  const [character, setCharacter] = useState<Character | null>(null)

  useEffect(() => {
    (async () => {
      if (!id) return
      const data = await HttpService.fetchCharacterById(id)
      setCharacter(data)
    })()
  }, [])


  if (!character)
    return  <Card style={{ width: 300, height: '100%' }} loading={true}>
      <Card.Meta title={'loading title'} description={'loading description'} />
    </Card>

  const title = <div>
    <Typography.Title level={2} style={{ wordWrap: 'break-word', wordBreak: 'break-word', marginBottom: 0, width: '100%', whiteSpace: 'pre-line', alignContent: 'baseline' }}>
      <span style={{ display: 'flex', alignItems: 'center'}}>
        Name: {character.name}
        <Tag style={{ marginLeft: 7, marginTop: 8 }} color={character.status === 'Alive' ? '#87d068' : '#f50'}>
        {character.status}
      </Tag>
      </span>
    </Typography.Title>
  </div>

  return <div style={{ margin: '0 20px'}}>
    <Typography.Title>Character Page</Typography.Title>
    <Card style={{ maxWidth: '600px', padding: '20px' }} cover={<img alt="example" src={character.image} />} title={title}>
      <Typography.Title level={3}>Species: {character.species}</Typography.Title>
      <Typography.Title level={4}>{character.type}</Typography.Title>
      <Typography.Title level={5}>Gender: {character.gender}</Typography.Title>
    </Card>
  </div>
}