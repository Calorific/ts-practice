import React, { FC } from 'react'
import { useToggle } from './hooks/useToggle/useToggle'

export const App: FC = () => {
  const [show, toggleShow] = useToggle(true)

  return <>
    <button onClick={() => toggleShow()}>Toggle text</button>
    <button onClick={() => toggleShow(true)}>Show text</button>
    <button onClick={() => toggleShow(false)}>Hide text</button>
    <p style={{ display: show ? 'block' : 'none'}}>Text</p>
  </>
}