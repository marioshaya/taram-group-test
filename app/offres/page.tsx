import OfferCard from "@/components/cards/OfferCard"
import NeedSection from "@/components/landing/NeedSection"
import Section from "@/components/section/Section"
import { offers } from "@/data"

export default function OffresPage() {
  return (
    <main>
      <NeedSection />
      <Section>
        <h3 className="text-3xl sm:text-4xl font-extrabold">
          Toutes nos{" "}
          <span className="text-4xl sm:text-4xl text-primary">offres</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {offers.map((off) => (
            <OfferCard
              paragraph={off.paragraph}
              title={off.title}
              key={off.title}
            />
          ))}
        </div>
      </Section>
    </main>
  )
}
