import clsx from "clsx"
import type { ReactNode } from "react"

const Section = ({
  children,
  height,
  isNotMaxWidth
}: {
  children: ReactNode
  height?: string
  isNotMaxWidth?: boolean
}) => {
  return (
    <section
      className={clsx(
        height ? height : "min-h-dvh",
        "not-last:border-b border-white/10 w-full"
      )}
    >
      <div
        className={clsx(
          !isNotMaxWidth && "max-w-7xl",
          height ? height : "min-h-dvh",
          "mx-auto flex flex-col items-center justify-center gap-4 py-4 px-4 sm:px-6 h-full"
        )}
      >
        {children}
      </div>
    </section>
  )
}

export default Section
