import Image from "next/image"
import { portfolioProjects } from "@/data"
import PrendreRdvCta from "../buttons/PrendreRdvCta"
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
      <div className="grid gap-4 md:grid-cols-3">
        {portfolioProjects.map((item) => (
          <div
            className="bg-linear-to-r to-primaryLight from-primary rounded-2xl text-background py-4"
            key={item.title}
          >
            <Image src={item.image} width={800} height={600} alt={item.title} />
            <div className="px-4">
              <h3 className="text-2xl font-bold text-black pb-2">
                {item.title}
              </h3>
              <div className="flex flex-wrap gap-2 items-center">
                {item.category.map((cat) => (
                  <div
                    className="bg-background/20 border border-white/30 px-4 py-1 rounded-3xl backdrop-blur-lg text-xs"
                    key={cat}
                  >
                    {cat}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <PrendreRdvCta />
    </Section>
  )
}

export default PortfolioSection
