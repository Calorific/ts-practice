import { useState } from 'react'

export const useArray = <T>(defaultValue: Array<T>) => {
  const [array, setArray] = useState(defaultValue)

  const push = (element: T) => setArray(prevState => [...prevState, element])

  const update = (idx: number, newElement: T) => {
    if (idx < 0 || idx > array.length) return;
    setArray(a => [...a.slice(0, idx), newElement, ...a.slice(idx + 1)])
  }

  const filter = (callback: (value: T, index: number, array: T[]) => boolean) => {
    setArray(prevState => prevState.filter(callback))
  }

  const remove = (idx: number) => {
    if (idx < 0 || idx > array.length) return;
    setArray(a => [...a.slice(0, idx), ...a.slice(idx + 1)])
  }

  const clear = () => {
    setArray([])
  }

  return { array, push, update, filter, remove, clear }
}