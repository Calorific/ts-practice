import { useEffect, useState } from 'react'
import { ParamsType, useFetchResult } from './types'

export const useFetch = <T>(url: string, initParams?: ParamsType): useFetchResult<T> => {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async (params?: ParamsType) => {
    setIsLoading(true)
    try {
      const paramString = params ? new URLSearchParams(params) : ''
      const res = await fetch(`${url}?${paramString}`)
      const newData: T = await res.json()
      if (Object.keys(newData as object).length !== 0) {
        setData(newData)
      } else {
        setError('Произошла ошибка')
      }
      setIsLoading(false)

    } catch (e) {
      setError((e as Error).message)
    }
  }

  useEffect(() => {
    fetchData(initParams).then()
  }, [])

  const reFetch = async (params?: ParamsType) => {
    fetchData(params).then()
  }

  return { data, isLoading, error, reFetch }
}