import React, { FC, useState } from 'react'
import { useUpdateEffect } from './hooks/useUpdateEffect/useUpdateEffect'

export const App: FC = () => {
  const [count, setCount] = useState<number>(10)

  useUpdateEffect(() => alert(count), [count])

  return <>
    <p>{count}</p>
    <button onClick={() => setCount(prevState => prevState + 1)}>Increment</button>
  </>
}