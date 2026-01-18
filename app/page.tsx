import LandingSection from "@/components/landing"
import DifferenceSection from "@/components/landing/DifferenceSection"
import PortfolioSection from "@/components/landing/PortfolioSection"

export default function Home() {
  return (
    <main className="bg-background flex flex-col items-center justify-center">
      <LandingSection />
      <DifferenceSection />
      <PortfolioSection />
    </main>
  )
}
