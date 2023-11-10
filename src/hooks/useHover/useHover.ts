import { useHoverResult } from './types'
import { useEffect, useRef, useState } from 'react'

export const useHover = (): useHoverResult => {
  const ref = useRef()
  const [hovered, setHovered] = useState<boolean>(false)

  const mouseEnter = () => setHovered(true)

  const mouseLeave = () => setHovered(false)


  useEffect(() => {
    if (!ref.current) return
    ;(ref.current as HTMLElement).addEventListener('mouseenter', mouseEnter)
    ;(ref.current as HTMLElement).addEventListener('mouseleave', mouseLeave)

    return () => {
      if (!ref.current) return
      ;(ref.current as HTMLElement).removeEventListener('mouseenter', mouseEnter)
      ;(ref.current as HTMLElement).removeEventListener('mouseleave', mouseLeave)
    }
  }, [ref])

  return { hovered, ref }
}