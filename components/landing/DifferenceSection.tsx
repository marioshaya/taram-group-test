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
    </Section>
  )
}

export default DifferenceSection
