import Image from "next/image"
import Section from "../Section"

const PortfolioSection = () => {
  return (
    <Section>
      <Image src="/ideeailes.png" width={300} height={300} alt="Idée ailes" />
      <h2 className="text-3xl font-semibold text-center">
        Le détail{" "}
        <span className="underline text-secondary text-4xl">cœur</span> de
        chaque <span className="text-secondary text-4xl">projet</span>
      </h2>
    </Section>
  )
}

export default PortfolioSection
