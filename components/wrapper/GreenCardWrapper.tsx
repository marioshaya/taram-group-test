import type { ReactNode } from "react"

const GreenCardWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="rounded-2xl p-6 bg-linear-to-r from-primary to-primaryLight space-y-3 shadow-2xl shadow-primary/75">
      {children}
    </div>
  )
}

export default GreenCardWrapper
