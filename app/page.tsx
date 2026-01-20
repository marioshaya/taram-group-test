import LandingSection from "@/components/landing"
import DifferenceSection from "@/components/landing/DifferenceSection"
import FaqSection from "@/components/landing/FaqSection"
import NeedSection from "@/components/landing/NeedSection"
import NewsLetter from "@/components/landing/NewsLetter"
import PortfolioSection from "@/components/landing/PortfolioSection"
import SchedulingSection from "@/components/landing/SchedulingSection"
import TestimonialsSection from "@/components/landing/TestimonialsSection"

export default function Home() {
  return (
    <main className="bg-background flex flex-col items-center justify-center">
      <LandingSection />
      <DifferenceSection />
      <PortfolioSection />
      <NeedSection />
      <TestimonialsSection />
      <SchedulingSection />
      <FaqSection />
      <NewsLetter />
    </main>
  )
}
