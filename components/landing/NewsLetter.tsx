import Link from "next/link"
import Section from "../section/Section"

export default function NewsLetter() {
  return (
    <Section>
      <div className="flex flex-col items-center justify-center gap-y-6 w-full">
        <h1
          className="text-4xl font-bold font-kanit sm:text-5xl md:text-6xl"
          style={{
            background:
              "linear-gradient(135deg, #FAFAFA 0%, #E6E6E6 25%, #CFCFCF 50%, #B8B8B8 75%, #9E9E9E 100%)",
            backgroundClip: "text",
            textShadow: "0 0 30px rgba(255, 255, 255, 0.3)",
            WebkitTextFillColor: "transparent"
          }}
        >
          Restons en contact
        </h1>
        <p className="text-center">
          Recevez nos guides, astuces et actualités directement dans votre boîte
          mail.
        </p>
        <div
          className="w-full md:w-[75%] border-2 rounded-2xl border-white/20 p-4"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
            backdropFilter: "blur(20px)",
            boxShadow:
              "0 20px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 0 80px rgba(113, 221, 174, 0.2)"
          }}
        >
          <form className="flex flex-col md:flex-row items-center gap-4">
            <input
              className="w-full rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-5 text-white placeholder:text-white/40 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/30 focus:bg-white/15 transition-all text-base sm:text-lg font-medium shadow-[0_8px_32px_rgba(0,0,0,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Votre adresse électronique"
              type="email"
            />
            <button
              className="rounded-2xl text-background bg-linear-to-r from-primary via-[#5BCA9D] to-primaryLight px-6 sm:px-10 py-3 sm:py-5 font-bold text-lg sm:text-2xl transition-all hover:shadow-[0_12px_40px_rgba(113,221,174,0.6)] hover:scale-105 relative w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0"
              style={{
                boxShadow: "0 8px 32px rgba(113, 221, 174, 0.4)"
              }}
              type="submit"
            >
              S'abonner
            </button>
          </form>
        </div>
        <p className="text-sm text-white/50 text-center mt-4 max-w-xs sm:max-w-full mx-auto">
          En vous inscrivant, vous acceptez notre{" "}
          <Link
            className="underline hover:text-white/70 transition inline-block py-2 px-1 min-h-[44px]"
            href="/politique-de-confidentialite"
          >
            politique de confidentialité
          </Link>
          .
        </p>
      </div>
    </Section>
  )
}
