import NeedSection from "@/components/landing/NeedSection"
import Section from "@/components/Section"

export default function OffresPage() {
  return (
    <main>
      <NeedSection />
      <Section>
        <h3 className="text-3xl sm:text-4xl font-extrabold">
          Toutes nos{" "}
          <span className="text-4xl sm:text-4xl text-primary">offres</span>
        </h3>
      </Section>
    </main>
  )
}
