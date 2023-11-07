import { useEffect, useRef } from 'react'

export const useUpdateEffect = (callback: Function, deps: Array<any>) => {
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    return callback()
  }, deps)
}