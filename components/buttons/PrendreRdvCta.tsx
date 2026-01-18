import { FaCalendarAlt, FaLongArrowAltRight } from "react-icons/fa"

export default function PrendreRdvCta() {
  return (
    <button
      className="text-background font-extrabold from-primary flex w-full items-center justify-center gap-x-2 text-2xl rounded-xl bg-linear-to-r to-primaryLight px-4 py-3 transition-all ease-in-out hover:scale-105 hover:cursor-pointer hover:duration-150 md:w-auto"
      type="button"
    >
      <FaCalendarAlt />
      <div>Prendre RDV</div>
      <FaLongArrowAltRight />
    </button>
  )
}
