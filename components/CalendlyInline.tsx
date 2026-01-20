"use client"

import { useEffect, useRef } from "react"

export default function CalendlyInline() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    if (!window.Calendly) return

    window.Calendly.initInlineWidget({
      url: "https://calendly.com/marioshaya/quick-30-minutes-contact-meeting",
      parentElement: ref.current
    })
  }, [])

  return <div className="w-full h-[70vh]" ref={ref} />
}
