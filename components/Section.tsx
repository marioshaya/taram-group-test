import type { ReactNode } from "react"

const Section = ({ children }: { children: ReactNode }) => {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-4 sm:px-6 not-last:border-b">
      {children}
    </section>
  )
}

export default Section
