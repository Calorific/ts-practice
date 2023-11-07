import React, { FC, useState } from 'react'
import { useThrottle } from './hooks/useThrottle/useThrottle'

export const App: FC = () => {
  const [value, setValue] = useState('')
  const throttledValue = useThrottle(value, 500)

  return <>
    <input type="text" value={value} onChange={e => setValue(e.target.value)} />

    <p>{throttledValue}</p>
  </>
}