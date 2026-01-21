"use client"

import CalendlyInline from "../CalendlyInline"
import Section from "../section/Section"

const SchedulingSection = () => {
  return (
    <Section>
      <h3 className="w-full text-3xl font-extrabold text-center">
        Alors, <span className="text-primary text-4xl">quand</span> est-ce qu'on{" "}
        <span className="text-primary text-4xl">commence</span> ?
      </h3>
      <CalendlyInline />
    </Section>
  )
}

export default SchedulingSection
