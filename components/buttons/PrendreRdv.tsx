import { FaCalendarAlt } from "react-icons/fa"

export default function PrendreRdvBtn() {
  return (
    <button
      aria-label="Prendre RDV"
      className="bg-background flex w-full items-center justify-center gap-x-2 rounded-xl px-4 py-3 font-extrabold text-white transition-all duration-150 ease-in-out hover:scale-105 hover:cursor-pointer"
      type="button"
    >
      <FaCalendarAlt />
      <div className="">Prendre RDV</div>
    </button>
  )
}
