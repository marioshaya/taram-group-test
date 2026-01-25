import Image from "next/image"
import PortfolioSection from "@/components/landing/PortfolioSection"
import Section from "@/components/section/Section"

const ProjectsPage = () => {
  return (
    <main>
      <PortfolioSection />
      <Section>
        <Image
          src="/popcorn-bot.png"
          width={320}
          height={240}
          alt="Popcorn bot"
        />
      </Section>
    </main>
  )
}

export default ProjectsPage
