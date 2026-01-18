"use client"

import clsx from "clsx"
import { useState } from "react"
import { PiCaretDown } from "react-icons/pi"
import Section from "../Section"

const faqData = [
  {
    question: "Combien coûte un site ou une refonte ?",
    answer:
      "Nos projets démarrent à 390 € et sont adaptés à votre périmètre. Un devis clair vous est envoyé immédiatement après notre premier rendez-vous."
  },
  {
    question: "Quels sont les délais moyens ?",
    answer:
      "Recevez un lien d'accès à votre nouveau site dès le premier jour et suivez en temps réel l'avancée du projet, mise en ligne en 5 à 20 jours selon la complexité. Les projets plus ambitieux (SaaS ou app mobile) se planifient sur 2 à 6 semaines."
  },
  {
    question: "Pourrai-je gérer mon site web facilement ?",
    answer:
      "Oui. Votre site est facile à gérer et peut être administré via un accès CMS. Vous pouvez aussi choisir de ne rien gérer grâce à notre service de maintenance."
  },
  {
    question: "Quelles garanties proposez-vous ?",
    answer:
      "Après la mise en ligne, nous restons à vos côtés. Vous bénéficiez de 30 jours de maintenance incluse, d'une garantie de correction des bugs et d'une surveillance continue du site. Une assistance étendue est disponible selon votre offre."
  },
  {
    question: "Travaillez-vous avec mon secteur d'activité ?",
    answer:
      "Oui. Nous travaillons avec des structures de toutes tailles et de tous secteurs : artisans, TPE-PME, franchises, associations, startups et groupes. Notre différence : parler votre langage et construire un plan d'action réellement adapté à votre activité."
  }
]

export default function FaqSection() {
  const [openKey, setOpenKey] = useState<string | null>(null)

  const toggle = (question: string) => {
    setOpenKey((prev) => (prev === question ? null : question))
  }

  return (
    <Section>
      <h2 className="text-3xl text-white font-semibold">
        Questions <span className="text-primary text-4xl">fréquentes</span>
      </h2>
      <p className="text-center">
        Des réponses <span className="text-primary font-semibold">simples</span>{" "}
        pour vous <span className="text-primary font-semibold">aider</span> à
        décider en toute{" "}
        <span className="text-primary font-semibold">confiance</span>.
      </p>
      <div className="space-y-3 max-w-2xl">
        {faqData.map((item, i) => {
          const isOpen = openKey === item.question
          const answerId = `faq-answer-${i}`
          const questionId = `faq-question-${i}`
          return (
            <div
              className="relative border border-white/20 bg-white/10 hover:bg-white/25 duration-300 ease-in-out transition-all rounded-xl p-4"
              key={item.question}
            >
              <button
                id={questionId}
                className="w-full flex items-center justify-between gap-x-2 pb-2"
                onClick={() => toggle(item.question)}
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
              >
                <div className="text-left font-semibold">{item.question}</div>
                <div className="rounded-full border flex items-center justify-center border-white/35 w-8 h-8 shrink-0">
                  <PiCaretDown
                    className={clsx(
                      "text-primary transition-transform",
                      isOpen && "rotate-180"
                    )}
                  />
                </div>
              </button>
              {isOpen && (
                <section
                  id={answerId}
                  className="py-2 border-t text-white/60 border-white/10"
                  aria-labelledby={questionId}
                >
                  {item.answer}
                </section>
              )}
            </div>
          )
        })}
      </div>
    </Section>
  )
}
