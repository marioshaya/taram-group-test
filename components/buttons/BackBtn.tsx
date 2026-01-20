import { MdKeyboardBackspace } from "react-icons/md"

const BackBtn = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="flex items-center gap-x-2 text-sm"
      onClick={onClick}
      type="button"
    >
      <MdKeyboardBackspace />
      <div className="">Retour</div>
    </button>
  )
}

export default BackBtn
