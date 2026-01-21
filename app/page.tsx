import LandingSection from "@/components/landing"
import DifferenceSection from "@/components/landing/DifferenceSection"
import FaqSection from "@/components/landing/FaqSection"
import LifeBuoy from "@/components/landing/LifeBuoy"
import NeedSection from "@/components/landing/NeedSection"
import NewsLetter from "@/components/landing/NewsLetter"
import PortfolioSection from "@/components/landing/PortfolioSection"
import SchedulingSection from "@/components/landing/SchedulingSection"
import TestimonialsSection from "@/components/landing/TestimonialsSection"

export default function Home() {
  return (
    <main>
      <LandingSection />
      <DifferenceSection />
      <PortfolioSection />
      <NeedSection />
      <LifeBuoy />
      <TestimonialsSection />
      <SchedulingSection />
      <FaqSection />
      <NewsLetter />
    </main>
  )
}
