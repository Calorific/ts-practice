import { useState } from 'react'
import { useLocalStorageResult } from './types'

export const useLocalStorage = <S>(key: string): useLocalStorageResult => {
  const [data, setData] = useState<string>('')

  const setItem = (newData: string) => {
    localStorage.setItem(key, newData)
    setData(newData)
  }

  const removeItem = () => {
    localStorage.removeItem(key)
    setData('')
  }

  return [data, { setItem, removeItem }]
}