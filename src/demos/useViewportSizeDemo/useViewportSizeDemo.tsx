import { FC } from 'react'
import { useViewportSize } from '../../hooks/useViewportSize/useViewportSize'

export const UseViewportSizeDemo: FC = () => {
  const { height, width } = useViewportSize()

  return <>
    <p>Width: {width}, height: {height}</p>
  </>
}