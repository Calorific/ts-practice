export interface CardListItem {
  id: string
  name: string
  description: string
}

export interface CardListProps {
  items: CardListItem[] | null
}