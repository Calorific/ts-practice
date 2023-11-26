import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Episode } from '../../shared/api/methods/types'
import { HttpService } from '../../shared/api/methods/methods'
import { Card, Tag, Typography } from 'antd'
import { GoBackButton } from '../../features/goBackButton/goBackButton'

export const EpisodeDetailsPage: FC = () => {
  const { id } = useParams()
  const [episode, setEpisode] = useState<Episode | null>(null)

  useEffect(() => {
    (async () => {
      if (!id) return
      const data = await HttpService.fetchEpisodeById(id)
      setEpisode(data)
    })()
  }, [])


  if (!episode)
    return  <Card style={{ width: 300, height: '100%' }} loading={true}>
      <Card.Meta title={'loading title'} description={'loading description'} />
    </Card>

  const title = <div>
    <Typography.Title level={2} style={{ wordWrap: 'break-word', wordBreak: 'break-word', marginBottom: 0, width: '100%', whiteSpace: 'pre-line', alignContent: 'baseline' }}>
      <span style={{ display: 'flex', alignItems: 'center'}}>
        Title: {episode.name}
        <Tag style={{ marginLeft: 7, marginTop: 8 }} color='#87d068'>
          {episode.episode}
        </Tag>
      </span>
    </Typography.Title>
  </div>

  return <div style={{ margin: '0 20px'}}>
    <Typography.Title style={{ display: 'flex', justifyContent: 'space-between' }}>
      Episode Page <GoBackButton />
    </Typography.Title>
    <Card style={{ maxWidth: '600px', padding: '20px' }} title={title}>
      <Typography.Title level={3}>Air date: {episode.air_date}</Typography.Title>
    </Card>
  </div>
}