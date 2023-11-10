import { FC } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage/useLocalStorage'

export const UseLocalStorageDemo: FC = () => {
  const [token, { setItem, removeItem }] = useLocalStorage('token')

  return (
      <div>
        <p>
          Твой токен: {token}
        </p>
        <div>
          <button onClick={() => setItem('newToken')}>
            Задать токен
          </button>
          <button onClick={() => removeItem()}>
            Удалить токен
          </button>
        </div>
      </div>
  )
}