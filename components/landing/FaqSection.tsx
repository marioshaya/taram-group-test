"use client"

import clsx from "clsx"
import { useState } from "react"
import { PiCaretDown } from "react-icons/pi"
import { faqData } from "@/data"
import Section from "../Section"

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
