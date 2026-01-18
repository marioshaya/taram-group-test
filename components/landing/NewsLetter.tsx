import Section from "../Section"

export default function NewsLetter() {
  return (
    <Section>
      <h1
        className="font-extrabold text-4xl"
        style={{
          background:
            "linear-gradient(135deg, #FAFAFA 0%, #E6E6E6 25%, #CFCFCF 50%, #B8B8B8 75%, #9E9E9E 100%)",
          backgroundClip: "text",
          textShadow: "0 0 30px rgba(255, 255, 255, 0.3)",
          WebkitTextFillColor: "transparent"
        }}
      >
        Restons en Contact
      </h1>
      <p className="text-center">
        Recevez nos guides, astuces et actualités directement dans votre boîte
        mail.
      </p>
      <div
        className="border-2 rounded-2xl border-white/20 p-4"
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
            className="jsx-4f57d6e22a251548 w-full rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-5 text-white placeholder:text-white/60 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/30 focus:bg-white/15 transition-all text-base sm:text-lg font-medium shadow-[0_8px_32px_rgba(0,0,0,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Votre adresse électronique"
            type="email"
          />
          <button
            className="rounded-2xl bg-linear-to-r from-primary via-[#5BCA9D] to-primaryLight px-6 sm:px-10 py-3 sm:py-5 font-bold text-lg sm:text-2xl transition-all shadow-[0_8px_32px_rgba(113,221,174,0.4)] hover:shadow-[0_12px_40px_rgba(113,221,174,0.6)] hover:-translate-y-1 hover:scale-105 relative overflow-hidden w-full sm:w-auto self-start disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0"
            type="submit"
          >
            S'abonner
          </button>
        </form>
      </div>
    </Section>
  )
}
