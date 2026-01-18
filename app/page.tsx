import LandingSection from "@/components/landing"
import DifferenceSection from "@/components/landing/DifferenceSection"

export default function Home() {
  return (
    <main className="bg-background flex flex-col  items-center justify-center">
      <LandingSection />
      <DifferenceSection />
    </main>
  )
}
