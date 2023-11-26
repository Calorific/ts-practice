export type Order = 'asc' | 'desc'

export interface Sortable {
  created: string
}

export interface ToggleSortProps {
  onOrderChange: (order: Order) => void
}