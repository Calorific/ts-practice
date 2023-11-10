import { useViewportSizeResult } from './types'
import { useWindowEvent } from '../useWindowEvent/useWindowEvent'
import { useState } from 'react'

export const useViewportSize = (): useViewportSizeResult => {
  const [width, setWidth] = useState<number>(window.innerWidth)
  const [height, setHeight] = useState<number>(window.innerHeight)

  useWindowEvent('resize', e => {
    setWidth(e.target.innerWidth)
    setHeight(e.target.innerHeight)
  })

  return { width, height }
}