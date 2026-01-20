"use client"

import Image from "next/image"
import { needsData } from "@/data"
import PrendreRdvCta from "../buttons/PrendreRdvCta"
import Section from "../Section"

export default function NeedSection() {
  return (
    <Section isNotMaxWidth>
      <div className="w-full space-y-4">
        <h3 className="text-3xl font-extrabold text-center">
          Des <span className="text-4xl text-primary">offres</span> adaptées à
          chaque <span className="text-4xl text-primary">besoin</span>
        </h3>
        <div className="flex flex-col md:flex-row items-center">
          <div className="relative w-full h-full min-h-[250px] sm:min-h-[400px] md:min-h-[500px] rounded-2xl overflow-hidden">
            <Image
              className="object-cover object-top"
              src="/conceptionweb.png"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              alt="Conception web"
            />
          </div>
          <div className="w-full">
            <h4 className="text-2xl text-primary font-extrabold py-4 md:pt-0">
              Vos besoins concernent ...
            </h4>
            <div className="flex flex-col gap-y-3">
              {needsData.map((need) => {
                const Icon = need.icon
                return (
                  <button
                    className="w-full flex items-center gap-x-2 font-bold border-2 border-white/10 bg-white/5 hover:text-primary hover:border-primary transition-all duration-300 ease-in-out hover:cursor-pointer px-4 py-3 rounded-xl"
                    key={need.title}
                    type="button"
                  >
                    <Icon />
                    <div className="">{need.title}</div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <PrendreRdvCta />
        </div>
      </div>
    </Section>
  )
}
