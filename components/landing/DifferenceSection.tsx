import Image from "next/image"
import { differences } from "@/data"
import Section from "../section/Section"

const DifferenceSection = () => {
  return (
    <Section>
      <Image
        src="/illustration-difference.png"
        width={450}
        height={300}
        alt="Où est la différence ?"
      />
      <h2 className="text-3xl font-semibold text-center">
        Mais <span className="text-4xl text-primary">où</span> est la{" "}
        <span className="text-4xl text-primary">différence</span> ?
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {differences.map((diff) => (
          <div
            className="rounded-3xl bg-linear-to-r from-primaryLight to-primary even:from-primary even:to-primaryLight p-4 text-background space-y-3 hover:scale-105 transition-all duration-300 ease-in-out"
            key={diff.label}
          >
            <div className="flex items-center gap-x-2">
              <Image
                src={diff.illustration}
                width={60}
                height={60}
                alt="Suvi en temps réel"
              />
              <h3 className="text-3xl font-bold">{diff.label}</h3>
            </div>
            <p>{diff.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default DifferenceSection
