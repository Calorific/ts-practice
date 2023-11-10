export type ParamsType = Record<string, string>

export interface useFetchResult<T> {
  data: T | null
  isLoading: boolean
  error: string | null
  reFetch: (params?: ParamsType) => void
}