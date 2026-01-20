import Section from "../Section"

const testimonials = [
  {
    company: "Verdi Events",
    author: "Corinne",
    rating: 5,
    content:
      "Site e-commerce complet, référencement au top, automatisations adaptées. Professionnalisme et vitesse d'exécution impeccables."
  },
  {
    company: "JWL Marketing",
    author: "Jodie",
    rating: 5,
    content:
      "Tristan comprend vite les enjeux, imagine des solutions et livre un résultat impeccable. Collaboration fluide et efficace."
  },
  {
    company: "KS Distrib",
    author: "Moustapha",
    rating: 5,
    content:
      "Excellent développeur, compétent, réactif et disponible. Vous pouvez lui faire confiance."
  },
  {
    company: "Freelance",
    author: "Noah",
    rating: 5,
    content:
      "Écoute, pédagogie, pistes pertinentes et exécution soignée. Travaux livrés dans les temps avec un vrai souci du détail."
  }
]

export default function TestimonialsSection() {
  return (
    <Section>
      <h3 className="text-3xl font-extrabold text-center">
        Ils nous font <span className="text-primary text-4xl">confiance</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full text-background">
        {testimonials.map((item) => (
          <div
            className="w-full rounded-2xl p-4 space-y-4 bg-linear-to-r from-white to-white/50"
            key={item.company}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-4">
                <div className="bg-background rounded-xl px-4 py-2 text-white text-2xl font-black">
                  {item.company.charAt(0)}
                </div>
                <div className="">
                  <div className="font-black text-xl">{item.company}</div>
                  <div className="">{item.rating}</div>
                </div>
              </div>
              <div className="flex items-center gap-x-2 rounded-full bg-background/10 p-1 font-bold">
                <div className="bg-background text-white rounded-full w-8 h-8 flex items-center justify-center">
                  {item.author.charAt(0)}
                </div>
                <div className="text-sm pr-3 text-background/90">
                  {item.author}
                </div>
              </div>
            </div>
            <p className="">{item.content}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
