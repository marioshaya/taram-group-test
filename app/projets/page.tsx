import Image from "next/image"
import PortfolioSection from "@/components/landing/PortfolioSection"
import Section from "@/components/section/Section"
import GreenCardWrapper from "@/components/wrapper/GreenCardWrapper"

const ProjectsPage = () => {
  return (
    <main>
      <PortfolioSection />
      <Section>
        <h2 className="text-3xl font-extrabold text-center pb-6 sm:text-4xl">
          Besoin d&apos;un{" "}
          <u className="text-primary text-4xl sm:text-5xl">boost</u> de{" "}
          <span className="text-primary text-4xl sm:text-5xl">visibilité</span>{" "}
          ?
        </h2>
        <div className="flex flex-col md:flex-row text-background">
          <div className="w-full flex items-center justify-center">
            <Image
              className="animate-bounce"
              src="/popcorn-bot.png"
              width={320}
              height={240}
              alt="Popcorn bot"
            />
          </div>
          <GreenCardWrapper>
            <div className="flex flex-col items-center gap-y-4 w-full text-background">
              <div className="relative overflow-hidden w-full rounded-2xl aspect-video bg-background">
                <Image
                  className="object-cover h-auto w-full"
                  src="/futur-site.png"
                  fill
                  alt="Futur site"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 768px"
                />
              </div>
              <h3 className="w-full text-center font-extrabold text-3xl">
                Votre projet est mis en avant !
              </h3>
              <p className="text-xl text-center">
                Bonne nouvelle ! Votre site web rejoint nos réalisations et
                bénéficie d'une présentation soignée et interactive sur notre
                site.
              </p>
            </div>
          </GreenCardWrapper>
        </div>
      </Section>
    </main>
  )
}

export default ProjectsPage
