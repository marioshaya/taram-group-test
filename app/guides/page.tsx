import Image from "next/image"
import Link from "next/link"
import GuideCard from "@/components/cards/GuideCard"
import Section from "@/components/section/Section"
import { guideFilter, guidesData } from "@/data"
import { slugify } from "@/utils"

const GuidesPage = () => {
  return (
    <main>
      <Section>
        <div className="min-h-[80vh] flex flex-col items-center justify-center gap-y-6 sm:gap-y-8">
          <Image
            className="w-auto h-auto rounded-2xl max-w-[80px] sm:max-w-none"
            src="/guide-question.png"
            alt="Guide"
            width={120}
            height={60}
          />
          <h2 className="text-center text-4xl sm:text-5xl font-bold">
            Guides & FAQ
          </h2>
          <div className="w-full relative">
            <div className="absolute top-3.5 left-4 z-20">
              <Image
                className=""
                src="/search.png"
                width={32}
                height={32}
                alt="Recherche"
              />
            </div>
            <input
              placeholder="Rechercher un guide, un sujet, une question..."
              className="w-full pl-16 py-4 rounded-3xl text-black placeholder:text-black/50 focus:outline-none transition-all text-sm sm:text-lg font-medium relative"
              style={{
                background:
                  "linear-gradient(135deg, rgb(250, 250, 250) 0%, rgb(230, 230, 230) 25%, rgb(207, 207, 207) 50%, rgb(184, 184, 184) 75%, rgb(158, 158, 158) 100%)",
                boxShadow:
                  "rgba(158, 158, 158, 0.4) 0px 20px 60px, rgba(255, 255, 255, 0.6) 0px 1px 0px inset, rgba(0, 0, 0, 0.1) 0px -1px 0px inset",
                border: "1px solid rgba(255, 255, 255, 0.3)"
              }}
              type="text"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {guideFilter.map((guide) => (
              <button
                className="px-6 py-2 rounded-xl text-sm font-semibold transition-all relative overflow-hidden border border-background/30 text-background opacity-70"
                style={{
                  background:
                    "linear-gradient(135deg, #FAFAFA 0%, #E6E6E6 25%, #CFCFCF 50%, #B8B8B8 75%, #9E9E9E 100%)",
                  boxShadow:
                    "0 10px 30px rgba(160, 160, 160, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(0, 0, 0, 0.1)"
                }}
                type="button"
                key={guide}
              >
                {guide}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {guidesData.map((gd) => (
            <Link href={`/guides/${slugify(gd.title)}`} key={gd.title}>
              <GuideCard
                category={gd.category}
                date={gd.date}
                readLenghtInMinute={gd.readLenghtInMinute}
                title={gd.title}
                intro={gd.intro}
              />
            </Link>
          ))}
        </div>
      </Section>
    </main>
  )
}

export default GuidesPage
