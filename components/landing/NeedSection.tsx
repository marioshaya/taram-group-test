"use client"

import Image from "next/image"
import { useState } from "react"
import { needsData } from "@/data"
import type {
  ExistingOrNewType,
  ExistingWebType,
  NeedsIdType,
  NewWebType
} from "@/types"
import BookAFreeCall from "../buttons/BookAFreeCall"
import NeedBtn from "../buttons/NeedBtn"
import PrendreRdvCta from "../buttons/PrendreRdvCta"
import Section from "../section/Section"
import StepList from "../wrapper/StepList"

export default function NeedSection() {
  const [activeNeed, setActiveNeed] = useState<NeedsIdType | null>(null)
  const [activeWeb, setActiveWeb] = useState<ExistingOrNewType>(null)
  const [activeNewWeb, setActiveNewWeb] = useState<NewWebType | null>(null)
  const [activeExistingWeb, setActiveExistingWeb] =
    useState<ExistingWebType | null>(null)

  const [activeMobile, setActiveMobile] = useState<ExistingOrNewType>(null)
  const [activeExistingMobile, setActiveExistingMobile] =
    useState<ExistingWebType | null>(null)

  return (
    <Section isNotMaxWidth>
      <div className="w-full space-y-4">
        <h3 className="text-3xl font-extrabold text-center">
          Des <span className="text-4xl text-primary">offres</span> adaptées à
          chaque <span className="text-4xl text-primary">besoin</span>
        </h3>
        <div className="flex flex-col gap-6 min-h-[80vh] md:flex-row md:items-center">
          <div className="relative w-full h-full min-h-[250px] sm:min-h-[400px] md:min-h-[500px] rounded-2xl overflow-hidden">
            <Image
              className="object-cover object-top"
              src="/conceptionweb.png"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              alt="Conception web"
            />
          </div>
          <div className="w-full flex flex-col items-center justify-center relative">
            {/* Main: choice among web, mobile, automation — only when not in a sub-flow */}
            {!activeNeed &&
              !activeNewWeb &&
              !activeWeb &&
              !activeMobile &&
              !activeExistingWeb &&
              !activeExistingMobile && (
                <div className="w-full h-full">
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
              )}

            {/* Web sub: existing site — Maintenance, bugs, refonte */}
            {activeWeb === "existing" && (
              <StepList
                title="Quelle prestation vous intéresse ?"
                onClick={() => {
                  setActiveWeb(null)
                  setActiveNeed("web")
                }}
              >
                <NeedBtn
                  icon="tool"
                  onClick={() => {
                    setActiveExistingWeb("maintenance")
                    setActiveWeb(null)
                  }}
                  text="Maintenance"
                />
                <NeedBtn
                  icon="bug"
                  onClick={() => {
                    setActiveExistingWeb("debug")
                    setActiveWeb(null)
                  }}
                  text="Correction de bugs"
                />
                <NeedBtn
                  icon="rebrand"
                  onClick={() => {
                    setActiveExistingWeb("rebrand")
                    setActiveWeb(null)
                  }}
                  text="Refonte"
                />
              </StepList>
            )}

            {activeExistingWeb && activeExistingWeb === "maintenance" && (
              <BookAFreeCall
                title="Maintenance"
                onClick={() => {
                  setActiveExistingWeb(null)
                  setActiveNewWeb(null)
                  setActiveNeed(null)
                  setActiveWeb(null)
                }}
                paragraph="Sécurisez votre site, corrigez les bugs et bénéficiez d'un support réactif par un interlocuteur unique."
              />
            )}

            {activeExistingWeb && activeExistingWeb === "debug" && (
              <BookAFreeCall
                title="Correction de bugs"
                onClick={() => {
                  setActiveExistingWeb(null)
                  setActiveNewWeb(null)
                  setActiveNeed(null)
                  setActiveWeb(null)
                }}
                paragraph="Corrigez rapidement les bugs et problèmes techniques de votre site ou application avec un support réactif."
              />
            )}

            {activeExistingWeb && activeExistingWeb === "rebrand" && (
              <BookAFreeCall
                title="Refonte & optimisation"
                onClick={() => {
                  setActiveExistingWeb(null)
                  setActiveNewWeb(null)
                  setActiveNeed(null)
                  setActiveWeb(null)
                }}
                paragraph="Modernisez votre image, améliorez la vitesse et augmentez votre conversion sans repartir de zéro."
              />
            )}

            {/* Web: question — avez‑vous déjà un site ? */}
            {activeNeed === "web" && (
              <StepList
                title="Avez-vous déjà un site web ?"
                onClick={() => {
                  setActiveNeed(null)
                  setActiveWeb(null)
                }}
              >
                <NeedBtn
                  icon="yes"
                  onClick={() => {
                    setActiveNeed(null)
                    setActiveWeb("existing")
                  }}
                  text="Oui, j'ai déjà un site"
                />
                <NeedBtn
                  icon="no"
                  onClick={() => {
                    setActiveWeb("new")
                    setActiveNeed(null)
                  }}
                  text="Non, je souhaite en créer un"
                />
              </StepList>
            )}

            {/* Web sub: new site — création */}
            {activeWeb === "new" && (
              <StepList
                title="Création de site web"
                onClick={() => {
                  setActiveWeb(null)
                  setActiveNeed("web")
                }}
              >
                <NeedBtn
                  icon="vitrine"
                  onClick={() => {
                    setActiveNewWeb("vitrine")
                    setActiveWeb(null)
                  }}
                  text="Site Vitrine"
                />
                <NeedBtn
                  icon="e-commerce"
                  onClick={() => {
                    setActiveNewWeb("e-commerce")
                    setActiveWeb(null)
                  }}
                  text="E-commerce"
                />
                <NeedBtn
                  icon="saas"
                  onClick={() => {
                    setActiveNewWeb("saas")
                    setActiveWeb(null)
                  }}
                  text="SaaS"
                />
              </StepList>
            )}

            {activeNewWeb && activeNewWeb === "vitrine" && (
              <div className="w-full h-full flex flex-col justify-center gap-y-4 bg-background">
                <BookAFreeCall
                  title="Site vitrine"
                  onClick={() => {
                    setActiveNewWeb(null)
                    setActiveNeed(null)
                    setActiveWeb(null)
                  }}
                  paragraph="Valorisez votre activité, attirez plus de demandes et rassurez vos prospects dès la première visite."
                />
              </div>
            )}

            {activeNewWeb && activeNewWeb === "e-commerce" && (
              <BookAFreeCall
                title="E-commerce"
                onClick={() => {
                  setActiveNewWeb(null)
                  setActiveNeed(null)
                  setActiveWeb(null)
                }}
                paragraph="Vendez en ligne simplement avec un parcours d'achat fluide, des paiements sécurisés et des campagnes prêtes."
              />
            )}

            {activeNewWeb && activeNewWeb === "saas" && (
              <BookAFreeCall
                title="SaaS"
                onClick={() => {
                  setActiveNewWeb(null)
                  setActiveNeed(null)
                  setActiveWeb(null)
                }}
                paragraph="Développez votre solution SaaS innovante avec une équipe qui gère design, produit, développement et suivi."
              />
            )}

            {/* Mobile: question — avez‑vous déjà une app ? */}
            {activeNeed === "mobile" && (
              <StepList
                title="Avez-vous déjà une application mobile ?"
                onClick={() => {
                  setActiveMobile(null)
                  setActiveNeed(null)
                }}
              >
                <NeedBtn
                  icon="yes"
                  onClick={() => {
                    setActiveMobile("existing")
                    setActiveNeed(null)
                  }}
                  text="Oui, j'ai déjà une app"
                />
                <NeedBtn
                  icon="no"
                  onClick={() => {
                    setActiveMobile("new")
                    setActiveNeed(null)
                  }}
                  text="Non, je souhaite en créer une"
                />
              </StepList>
            )}

            {activeMobile && activeMobile === "existing" && (
              <StepList
                title="Quelle prestation vous intéresse ?"
                onClick={() => {
                  setActiveNeed("mobile")
                }}
              >
                <NeedBtn
                  icon="rebrand"
                  text="Refonte"
                  onClick={() => {
                    setActiveExistingMobile("rebrand")
                    setActiveMobile(null)
                    setActiveNeed(null)
                  }}
                />
                <NeedBtn
                  icon="tool"
                  text="Maintenance"
                  onClick={() => {
                    setActiveExistingMobile("maintenance")
                    setActiveMobile(null)
                  }}
                />
                <NeedBtn
                  icon="bug"
                  text="Correction de bugs"
                  onClick={() => {
                    setActiveExistingMobile("debug")
                    setActiveMobile(null)
                  }}
                />
              </StepList>
            )}

            {activeExistingMobile === "rebrand" && (
              <BookAFreeCall
                title="Refonte App Mobile"
                onClick={() => {
                  setActiveExistingMobile(null)
                  setActiveMobile(null)
                }}
                paragraph="Modernisez votre application mobile existante avec une nouvelle interface, de meilleures performances et les dernières fonctionnalités."
              />
            )}

            {activeExistingMobile === "maintenance" && (
              <BookAFreeCall
                title="Maintenance"
                onClick={() => {
                  setActiveExistingMobile(null)
                  setActiveMobile(null)
                }}
                paragraph="Sécurisez votre site, corrigez les bugs et bénéficiez d'un support réactif par un interlocuteur unique."
              />
            )}

            {activeExistingMobile === "debug" && (
              <BookAFreeCall
                title="Correction de bugs"
                onClick={() => {
                  setActiveExistingMobile(null)
                  setActiveMobile(null)
                }}
                paragraph="Corrigez rapidement les bugs et problèmes techniques de votre site ou application avec un support réactif."
              />
            )}

            {activeMobile && activeMobile === "new" && (
              <BookAFreeCall
                title="Application Mobile"
                paragraph="Créez votre application mobile native ou cross-platform avec une interface intuitive et des performances optimales."
                onClick={() => {
                  setActiveMobile(null)
                  setActiveNeed(null)
                  setActiveWeb(null)
                }}
              />
            )}

            {activeNeed === "automation" && (
              <BookAFreeCall
                onClick={() => {
                  setActiveNeed(null)
                  setActiveWeb(null)
                }}
                title="Automatisation"
                paragraph="Automatisez vos processus métier avec des workflows
                    intelligents : devis, signature, facturation, notifications
                    et rapports."
              />
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
