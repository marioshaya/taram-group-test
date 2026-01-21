import { FaTools } from "react-icons/fa"
import {
  FaArrowRotateRight,
  FaBug,
  FaCircleCheck,
  FaCirclePlus
} from "react-icons/fa6"

type Icon = "yes" | "no" | "tool" | "bug" | "rebrand"

const NeedBtn = ({
  icon,
  text,
  onClick
}: {
  icon: Icon
  text: string
  onClick: () => void
}) => {
  const getIcon = (icon: Icon) => {
    if (icon === "yes") {
      return <FaCircleCheck />
    } else if (icon === "no") {
      return <FaCirclePlus />
    } else if (icon === "tool") {
      return <FaTools />
    } else if (icon === "bug") {
      return <FaBug />
    } else if (icon === "rebrand") {
      return <FaArrowRotateRight />
    }
  }

  return (
    <button
      className="w-full flex items-center gap-x-2 py-3 px-5 border border-white/20 bg-white/5 rounded-xl font-extrabold transition-all duration-200 ease-in-out hover:border-primary hover:text-primary hover:bg-white/10"
      onClick={onClick}
      type="button"
    >
      {getIcon(icon)}
      <div className="">{text}</div>
    </button>
  )
}

export default NeedBtn
