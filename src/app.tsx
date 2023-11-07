import React, { FC } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage/useLocalStorage'
import { useUpdateLogger } from './hooks/useUpdateLogger/useUpdateLogger'

export const App: FC = () => {
  const [value, setValue] = useLocalStorage('value', '')

  useUpdateLogger(value)

  return <>
    <input type="text" value={value} onChange={e => setValue(e.target.value)} />
  </>
}