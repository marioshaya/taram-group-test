import type { ReactNode } from "react"
import BackBtn from "../buttons/BackBtn"

const StepList = ({
  title,
  children,
  onClick
}: {
  title: string
  children: ReactNode
  onClick: () => void
}) => {
  return (
    <div className="w-full flex flex-col justify-center gap-y-4 bg-background">
      <h3 className="text-2xl font-extrabold text-primary">{title}</h3>
      {children}
      <BackBtn onClick={onClick} />
    </div>
  )
}

export default StepList
