"use client"

import Image from "next/image"
import { FaCalendarAlt } from "react-icons/fa"
import { LiaLongArrowAltRightSolid } from "react-icons/lia"
import { TfiCheck } from "react-icons/tfi"
import type { OfferCardProps } from "@/types"
import { getBookingIncludes, slugify } from "@/utils"
import GreenCardWrapper from "../wrapper/GreenCardWrapper"

const OfferCard = ({ title, paragraph }: OfferCardProps) => {
  const getImage = (title: string) => {
    if (title.includes("Refonte")) {
      return "/refonte-optimisation.png"
    }

    return `/${slugify(title)}.png`
  }

  return (
    <GreenCardWrapper>
      <div className="bg-white rounded-2xl shadow-2xs px-4 py-4 flex items-center gap-x-4">
        <div className="border border-primary/50 rounded-2xl bg-primary/10 w-16 h-16 flex items-center justify-center shadow-xl p-2">
          <Image src={getImage(title)} height={32} width={32} alt={title} />
        </div>
        <h3 className="text-3xl font-[1000] text-background">{title}</h3>
      </div>
      <p className="text-sm text-background/90">{paragraph}</p>
      <div className="w-full space-y-2">
        <h4 className="uppercase font-semibold text-background/70">
          Ce qui est inclus
        </h4>
        <div className="rounded-2xl border border-white/30 bg-white/20 p-4 w-full space-y-4">
          {getBookingIncludes(title).map((include) => (
            <div
              className="flex items-center gap-x-4 text-background rounded-full"
              key={include}
            >
              <div className="w-6 h-6 text-background border border-white/75 bg-white/40 rounded-full flex items-center justify-center shadow-xl">
                <TfiCheck className="text-xs" />
              </div>
              <div className="font-medium leading-relaxed">{include}</div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="bg-background shadow-2xl font-extrabold w-full flex items-center justify-center gap-x-3 py-4 rounded-2xl mt-8 hover:scale-105 transition-all ease-in-out duration-300"
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
    </GreenCardWrapper>
  )
}

export default OfferCard
