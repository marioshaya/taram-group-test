import LandingSection from "@/components/landing"
import DifferenceSection from "@/components/landing/DifferenceSection"
import FaqSection from "@/components/landing/FaqSection"
import NeedSection from "@/components/landing/NeedSection"
import PortfolioSection from "@/components/landing/PortfolioSection"

export default function Home() {
  return (
    <main className="bg-background flex flex-col items-center justify-center">
      <LandingSection />
      <DifferenceSection />
      <PortfolioSection />
      <NeedSection />
      <FaqSection />
    </main>
  )
}
