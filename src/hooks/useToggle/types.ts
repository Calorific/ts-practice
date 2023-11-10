export type useToggleResult<T> = [
  T,
  (value?: T | boolean) => void
]

