import { useEffect } from 'react'
import { ListenerType, OptionsType } from './types'

export const useWindowEvent = (type: any, listener: ListenerType, options?: OptionsType): void => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(type, listener, options)
      return () => window.removeEventListener(type, listener, options)
    }
  }, [type, listener])
}