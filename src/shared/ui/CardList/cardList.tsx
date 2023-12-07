import React, { FC } from 'react'
import { CardListProps } from './types'
import { Card, Col, Row } from 'antd'
import { CardListItem } from '../CardListItem/cardListItem'

export const CardList: FC<CardListProps> = ({ items, triggerNodeRef, triggerNodePosition = 1 }) => {
  if (!items)
    return <>
      <Row style={{ maxWidth: '1000px' }} align='stretch' justify='center'>
        {new Array(6).fill(0).map((_, key) => (
            <Col style={{ margin: '16px 8px 0px' }} key={key}>
              <Card style={{ width: 300, height: '100%' }} loading={true} hoverable>
                <Card.Meta title={'loading title'} description={'loading description'} />
              </Card>
            </Col>
        ))}
      </Row>
    </>

  return <>
    <Row style={{ maxWidth: '1000px', display: 'flex' }} align='stretch' justify='center'>
      {items.map((item, idx) => (
          <Col
              style={{ margin: '16px 8px 0px' }}
              ref={items.length - idx === triggerNodePosition ? (triggerNodeRef || null) : null}
              key={item.id}
          >
            <CardListItem {...item} />
          </Col>
      ))}
    </Row>
  </>
}