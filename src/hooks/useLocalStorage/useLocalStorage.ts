import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export const useLocalStorage = <S>(key: string, initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>] => {
  const getValue = (key: string, baseState: typeof initialState): S => {
    const storageValue = localStorage.getItem(key)
    if (storageValue) return JSON.parse(storageValue)
    return baseState instanceof Function ? baseState() : baseState
  }

  const [value, setValue] = useState<S>(() => getValue(key, initialState))

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value])

  return [value, setValue]
}