"use client"

import type { ReactNode } from "react"
import { FaCalendarAlt } from "react-icons/fa"
import { LiaLongArrowAltRightSolid } from "react-icons/lia"

const GreenCardWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="rounded-2xl p-6 bg-linear-to-r from-primary to-primaryLight space-y-3 shadow-2xl shadow-primary/75">
      {children}
      <button
        className="bg-background shadow-2xl font-extrabold text-white w-full flex items-center justify-center gap-x-3 py-4 rounded-2xl mt-8 hover:scale-105 transition-all ease-in-out duration-300"
        onClick={() => {
          typeof window !== "undefined" &&
            (
              window as unknown as {
                Calendly?: {
                  initPopupWidget?: (o: { url: string }) => void
                }
              }
            ).Calendly?.initPopupWidget?.({
              url: "https://calendly.com/marioshaya/quick-30-minutes-contact-meeting"
            })
        }}
        type="button"
      >
        <FaCalendarAlt />
        <span>Réservez un appel gratuit</span>
        <LiaLongArrowAltRightSolid />
      </button>
    </div>
  )
}

export default GreenCardWrapper
