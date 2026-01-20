"use client"

import { useEffect, useRef } from "react"

const CALENDLY_URL =
  "https://calendly.com/marioshaya/quick-30-minutes-contact-meeting"

export default function CalendlyInline() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const parent = ref.current
    if (!parent) return

    const init = () => {
      if (!window.Calendly) return false
      window.Calendly.initInlineWidget({
        url: CALENDLY_URL,
        parentElement: parent
      })
      return true
    }

    if (init()) return

    const interval = setInterval(() => {
      if (init()) clearInterval(interval)
    }, 100)

    const timeout = setTimeout(() => clearInterval(interval), 10_000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return <div className="w-full h-[70vh] min-h-[600px]" ref={ref} />
}
