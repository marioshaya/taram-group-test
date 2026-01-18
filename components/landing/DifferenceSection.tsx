import Image from "next/image"
import Section from "../Section"

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
    </Section>
  )
}

export default DifferenceSection
