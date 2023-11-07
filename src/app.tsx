import React, { FC, useState } from 'react'
import { useDebounce } from './hooks/useDebounce/useDebounce'

export const App: FC = () => {
  const [value, setValue] = useState<string>('')
  const [count, setCount] = useState<number>(10)
  useDebounce(() => alert(count), 1000, [count])
  useDebounce(() => console.log('Запрос к API'), 1000, [value])

  return <>
    <p>{count}</p>
    <button onClick={() => setCount(prevState => prevState + 1)}>Increment</button>
    <input type='text' value={value} onChange={e => setValue(e.target.value)} />
  </>
}