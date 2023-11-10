import { FC } from 'react'
import { useFetch } from '../../hooks/useFetch/useFetch'
import { Post } from './types'

const url = 'https://jsonplaceholder.typicode.com/posts'

export const UseFetchDemo: FC = () => {
  const { data, isLoading, error, reFetch } = useFetch<Post[]>(url, { _limit: '4' })

  return (
    <>
      <div>
        <button onClick={() => reFetch({ _limit: '3' })}>
          Перезапросить
        </button>
      </div>
      {isLoading && 'Загрузка...'}
      {error && 'Произошла ошибка'}
      {data && !isLoading && data?.map((item: Post) => <div key={item.id}>{item.title}</div>) }
    </>
  )
}