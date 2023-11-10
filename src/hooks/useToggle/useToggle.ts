import { useState } from 'react'
import { useToggleResult } from './types'

export const useToggle = <T = boolean>(options?: Array<T>): useToggleResult<T | boolean> => {
  const [currentIdx, setCurrentIdx] = useState<number>(0)
  const _options = options ?? [true, false]

  const toggle = (value?: T | boolean): void => {
    if (!value) setCurrentIdx(prevState => (prevState + 1) % _options.length)
    else setCurrentIdx(_options.findIndex(el => el === value))
  }

  return [_options[currentIdx], toggle]
}