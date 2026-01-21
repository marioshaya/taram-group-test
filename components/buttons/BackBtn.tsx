import clsx from "clsx"
import { MdKeyboardBackspace } from "react-icons/md"

const BackBtn = ({
  onClick,
  isRestartBtn
}: {
  onClick: () => void
  isRestartBtn?: boolean
}) => {
  return (
    <button
      className="flex items-center gap-x-2 text-sm text-white/70 hover:text-white transition-all ease-in-out duration-300"
      onClick={onClick}
      type="button"
    >
      <MdKeyboardBackspace className={clsx(isRestartBtn && "hidden")} />
      <div className="">{isRestartBtn ? "Recommencer" : "Retour"}</div>
    </button>
  )
}

export default BackBtn
