import { useEffect, useRef, useState } from 'react'

export const useThrottle = <T>(value: T, interval = 500) => {
  const [throttledValue, setThrottledValue] = useState(value)
  const lastExecuted = useRef(Date.now())

  useEffect(() => {
    if (Date.now() >= lastExecuted.current + interval) {
      lastExecuted.current = Date.now()
      setThrottledValue(value)
      return
    }

    const id = setTimeout(() => {
      lastExecuted.current = Date.now()
      setThrottledValue(value)
    }, interval)

    return () => clearTimeout(id)
  }, [value, interval])

  return throttledValue
}