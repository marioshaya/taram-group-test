import type { ReactNode } from "react"

const Section = ({ children }: { children: ReactNode }) => {
  return (
    <section className="not-last:border-b border-white/10 w-full">
      <div className="mx-auto flex flex-col items-center justify-center gap-4 max-w-7xl min-h-dvh px-4 sm:px-6">
        {children}
      </div>
    </section>
  )
}

export default Section
