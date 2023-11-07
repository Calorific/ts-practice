import React, { FC } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage/useLocalStorage'

export const App: FC = () => {
  const [value, setValue] = useLocalStorage('value', '')
  return <>
    <input type="text" value={value} onChange={e => setValue(e.target.value)} />
  </>
}