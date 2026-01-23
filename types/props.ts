import type { ReactNode } from "react"

export interface BookAFreeCallProps {
  title: string
  paragraph: string
  onClick: () => void
}

export interface OfferCardProps {
  title: string
  paragraph: string
}

export interface SectionProps {
  children: ReactNode
  height?: string
  isNotMaxWidth?: boolean
}
