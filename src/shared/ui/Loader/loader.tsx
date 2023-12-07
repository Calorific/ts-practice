import { FC } from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

export const Loader: FC = () => {
  return <Spin indicator={<LoadingOutlined style={{ fontSize: 64 }} spin />} />
}