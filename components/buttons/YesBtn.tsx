import { FaCircleCheck } from "react-icons/fa6"

const YesBtn = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return (
    <button
      className="w-full flex items-center gap-x-2 py-3 px-5 border border-white/20 bg-white/5 rounded-xl font-extrabold transition-all duration-200 ease-in-out hover:border-primary hover:text-primary hover:bg-white/10"
      onClick={onClick}
      type="button"
    >
      <FaCircleCheck />
      <div className="">{text}</div>
    </button>
  )
}

export default YesBtn
