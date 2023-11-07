import React, { FC } from 'react'
import { useArray } from './hooks/useArray/useArray'

export const App: FC = () => {
  const { array, push, update, filter, remove, clear } = useArray([1,2,3,4,5,6])


  return <>
    <p>{array.join(', ')}</p>
    <button onClick={() => push(array.length + 1)}>Push</button>
    <button onClick={() => update(3, 10)}>Update</button>
    <button onClick={() => filter(a => a < 5)}>Filter</button>
    <button onClick={() => remove(4)}>Remove</button>
    <button onClick={() => clear()}>Clear</button>
  </>
}