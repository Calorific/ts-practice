import { Scroll, useWindowScrollResult } from './types'
import { useWindowEvent } from '../useWindowEvent/useWindowEvent'
import { useState } from 'react'

export const useWindowScroll = (): useWindowScrollResult => {
  const [scroll, setScroll] = useState<Scroll>({ x: window.scrollX, y: window.scrollY })
  useWindowEvent('scroll', _ => setScroll({ x: window.scrollX, y: window.scrollY }))

  const changeScroll = (pos: Partial<Scroll>) => {
    window.scrollTo({ top: pos.y ?? scroll.y, left: pos.x ?? scroll.x })
  }

  return [scroll, changeScroll]
}