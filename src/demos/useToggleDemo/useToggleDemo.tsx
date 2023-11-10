import { FC } from 'react'
import { useToggle } from '../../hooks/useToggle/useToggle'

export const UseToggleDemo: FC = () => {
  const [value, toggle] = useToggle<string>(['blue', 'orange', 'cyan', 'teal'])

  return <>
    <button onClick={() => toggle()}>{value.toString()}</button>
    <button onClick={() => toggle('orange')}>Set orange</button>
  </>

}