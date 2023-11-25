import { FC } from 'react'
import { Typography } from 'antd'

export const HomePage: FC = () => {
  return <>
    <Typography.Title>Вселенная Рика и Морти</Typography.Title>
    <Typography.Title level={3}>Здесь вы можете найти информацию о героях, локациях и эпизодах</Typography.Title>
  </>
}