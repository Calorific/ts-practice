import { UseInfiniteScrollResult } from './types.ts'
import { useCallback, useEffect, useRef, useState } from 'react'

export const useInfiniteScroll = <T>(url: string, initialPage: number = 1): UseInfiniteScrollResult<T> => {
  const [pageNumber, setPageNumber] = useState<number>(initialPage)
  const [data, setData] = useState<T[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)
  const [hasMore, setHasMore] = useState<boolean>(true)

  useEffect(() => {
    setLoading(true)
    setError(null)
    ;(async () => {
      if (!hasMore) return
      try {
        const response = await fetch(`${url}?page=${pageNumber}`)
        const newData = await response.json()
        setHasMore(newData.info.next !== null)
        setData([...(data || []), ...newData.results])
        setLoading(false)
      } catch (e: any) {
        setError(e)
        setLoading(false)
      }
    })()
  }, [url, pageNumber])

  const observer = useRef<IntersectionObserver>()
  const loadTriggerNode = useCallback((node: HTMLElement) => {
    if (loading) return
    if (observer.current) {
      observer.current.disconnect()
    }

    observer.current = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && hasMore)
        setPageNumber(prevState => prevState + 1)
    })

    if (node) {
      observer.current?.observe(node)
    }
  }, [loading, hasMore])

  return { data, loading, error, hasMore, loadTriggerNode }
}