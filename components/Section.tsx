import clsx from "clsx"
import type { ReactNode } from "react"

const Section = ({
  children,
  isNotMaxWidth
}: {
  children: ReactNode
  isNotMaxWidth?: boolean
}) => {
  return (
    <section className="not-last:border-b border-white/10 w-full min-h-dvh">
      <div
        className={clsx(
          !isNotMaxWidth && "max-w-7xl",
          "mx-auto flex flex-col items-center justify-center gap-4 py-4 px-4 sm:px-6"
        )}
      >
        {children}
      </div>
    </section>
  )
}

export default Section
