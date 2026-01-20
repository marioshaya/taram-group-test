"use client"

import Image from "next/image"
import { useState } from "react"
import { FaCalendarAlt } from "react-icons/fa"
import { FaCircleCheck, FaCirclePlus } from "react-icons/fa6"
import { LiaLongArrowAltRightSolid } from "react-icons/lia"
import { MdKeyboardBackspace } from "react-icons/md"
import { TfiCheck } from "react-icons/tfi"
import { needAutomationIncludes, needsData } from "@/data"
import type { NeedsIdType } from "@/types"
import PrendreRdvCta from "../buttons/PrendreRdvCta"
import Section from "../Section"

export default function NeedSection() {
  const [activeNeed, setActiveNeed] = useState<NeedsIdType | null>(null)

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
          <div className="w-full relative">
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
                      key={need.id}
                      onClick={() => setActiveNeed(need.id)}
                      type="button"
                    >
                      <Icon />
                      <div className="">{need.title}</div>
                    </button>
                  )
                })}
              </div>
            </div>

            {activeNeed && activeNeed === "web" && (
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center gap-y-4 bg-background">
                <div className="text-2xl font-extrabold text-primary">
                  Avez-vous déjà un site web ?
                </div>
                <div className="text-xl space-y-4">
                  <button
                    className="w-full flex items-center gap-x-2 py-3 px-5 border border-white/20 bg-white/5 rounded-xl font-extrabold transition-all duration-200 ease-in-out hover:border-primary hover:text-primary hover:bg-white/10"
                    type="button"
                  >
                    <FaCircleCheck />
                    <div className="">Oui, j'ai déjà un site</div>
                  </button>
                  <button
                    className="w-full flex items-center gap-x-2 py-3 px-5 border border-white/20 bg-white/5 rounded-xl font-extrabold transition-all duration-200 ease-in-out hover:border-primary hover:text-primary hover:bg-white/10"
                    type="button"
                  >
                    <FaCirclePlus />
                    <div className="">Non, je souhaite en créer un</div>
                  </button>
                  <button
                    className="flex items-center gap-x-2 text-sm"
                    onClick={() => setActiveNeed(null)}
                    type="button"
                  >
                    <MdKeyboardBackspace />
                    <div className="">Retour</div>
                  </button>
                </div>
              </div>
            )}

            {activeNeed && activeNeed === "mobile" && (
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center gap-y-4 bg-background">
                <div className="text-2xl font-extrabold text-primary">
                  Avez-vous déjà une application mobile ?
                </div>
                <div className="text-xl space-y-4">
                  <button
                    className="w-full flex items-center gap-x-2 py-3 px-5 border border-white/20 bg-white/5 rounded-xl font-extrabold transition-all duration-200 ease-in-out hover:border-primary hover:text-primary hover:bg-white/10"
                    type="button"
                  >
                    <FaCircleCheck />
                    <div className="">Oui, j'ai déjà une app</div>
                  </button>
                  <button
                    className="w-full flex items-center gap-x-2 py-3 px-5 border border-white/20 bg-white/5 rounded-xl font-extrabold transition-all duration-200 ease-in-out hover:border-primary hover:text-primary hover:bg-white/10"
                    type="button"
                  >
                    <FaCirclePlus />
                    <div className="">Non, je souhaite en créer une</div>
                  </button>
                  <button
                    className="flex items-center gap-x-2 text-sm"
                    onClick={() => setActiveNeed(null)}
                    type="button"
                  >
                    <MdKeyboardBackspace />
                    <div className="">Retour</div>
                  </button>
                </div>
              </div>
            )}

            {activeNeed && activeNeed === "automation" && (
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center gap-y-4 bg-background">
                <h3 className="font-extrabold text-3xl">Offre recommandée</h3>
                <button
                  className="text-left underline text-sm"
                  onClick={() => setActiveNeed(null)}
                  type="button"
                >
                  <div className="">Recommencer</div>
                </button>
                <div className="rounded-2xl p-6 bg-linear-to-r from-primary to-primaryLight space-y-3">
                  <div className="bg-white rounded-2xl shadow-2xs px-4 py-2 flex items-center gap-x-4">
                    <div className="border border-primary rounded-xl bg-primaryLight/20 w-16 h-16 flex items-center justify-center shadow-xl p-2">
                      <Image
                        className=""
                        src="/automatisation.png"
                        height={32}
                        width={32}
                        alt="Automatisation"
                      />
                    </div>
                    <h3 className="text-3xl font-[1000] text-background">
                      Automatisation
                    </h3>
                  </div>
                  <p className="text-sm text-background/90">
                    Automatisez vos processus métier avec des workflows
                    intelligents : devis, signature, facturation, notifications
                    et rapports.
                  </p>
                  <div className="w-full space-y-2">
                    <h4 className="uppercase font-semibold text-background/70">
                      Ce qui est inclus
                    </h4>
                    <div className="rounded-2xl border border-white/30 bg-white/20 p-4 w-full space-y-4">
                      {needAutomationIncludes.map((include) => (
                        <div
                          className="flex items-center gap-x-4 text-background rounded-full"
                          key={include}
                        >
                          <div className="w-6 h-6 text-background border border-white/75 bg-white/40 rounded-full flex items-center justify-center shadow-xl">
                            <TfiCheck className="text-xs" />
                          </div>
                          <div className="font-medium leading-relaxed">
                            {include}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    className="bg-background shadow-2xl font-extrabold w-full flex items-center justify-center gap-x-3 py-4 rounded-2xl mt-8 hover:scale-105 transition-all ease-in-out duration-300"
                    type="button"
                  >
                    <FaCalendarAlt />
                    <div className="">Réservez un appel gratuit</div>
                    <LiaLongArrowAltRightSolid />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <PrendreRdvCta />
        </div>
      </div>
    </Section>
  )
}
