import { useTimeout } from '../useTimeout/useTimeout'
import { useEffect } from 'react'

export const useDebounce = (callback: Function, delay: number, dependencies: Array<any>) => {
  const { reset, clear } = useTimeout(callback, delay)
  useEffect(reset, [...dependencies, reset])
  useEffect(clear, [])
}