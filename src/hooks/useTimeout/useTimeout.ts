import { useCallback, useEffect, useRef } from 'react'

export const useTimeout = (callback: Function, delay: number) => {
  const callbackRef = useRef<Function>(callback)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
  }, [delay])

  const clear = useCallback(() => {
    if (timeoutRef.current)
      clearTimeout(timeoutRef.current)
  }, [])

  const reset = useCallback(() => {
    clear()
    set()
  }, [clear, set])

  useEffect(() => {
    set()
    return clear
  }, [delay, set, clear])

  return { reset, clear }
}