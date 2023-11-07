import React, { FC, useState } from 'react'
import { useTimeout } from './hooks/useTimeout/useTimeout'

export const App: FC = () => {
  const [count, setCount] = useState<number>(10)

  const { reset, clear } = useTimeout(() => setCount(0), 1000)

  return <>
    <p>{count}</p>
    <button onClick={() => setCount(prevState => prevState + 1)}>Increment</button>
    <button onClick={() => clear()}>Stop timeout</button>
    <button onClick={() => reset()}>Run timeout</button>
  </>
}