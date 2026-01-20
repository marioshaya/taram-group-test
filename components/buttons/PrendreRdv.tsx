import { FaCalendarAlt } from "react-icons/fa"

export default function PrendreRdvBtn() {
  return (
    <button
      aria-label="Prendre RDV"
      className="bg-background flex w-full h-12 items-center justify-center gap-x-2 rounded-xl px-4 py-3 font-extrabold text-white transition-all duration-150 ease-in-out hover:scale-105 hover:cursor-pointer"
      onClick={() => {
        // @ts-expect-error
        Calendly.initPopupWidget({
          url: "https://calendly.com/marioshaya/quick-30-minutes-contact-meeting"
        })
      }}
      type="button"
    >
      <FaCalendarAlt />
      <div className="">Prendre RDV</div>
    </button>
  )
}
