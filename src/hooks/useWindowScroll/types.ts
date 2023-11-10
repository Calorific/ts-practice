export type Scroll = { x: number, y: number }

export type useWindowScrollResult = [
  Scroll,
  (scroll: Partial<Scroll>) => void
]