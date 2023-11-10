export type useLocalStorageResult = [
  string,
  {
    setItem: (data: string) => void
        removeItem: () => void
  }
]