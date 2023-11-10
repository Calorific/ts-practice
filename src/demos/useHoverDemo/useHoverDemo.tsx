import { FC } from 'react'
import { useHover } from '../../hooks/useHover/useHover'

export const UseHoverDemo: FC = () => {
  const { hovered, ref } = useHover()

  return (
      <div ref={ref}>
        {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
      </div>
  )
}