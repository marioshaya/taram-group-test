import Image from "next/image"
import Section from "../section/Section"

const LifeBuoy = () => {
  return (
    <Section height="min-h-[50vh]">
      <div className="flex flex-col items-center gap-y-4">
        <h2 className="text-3xl font-semibold text-white text-center sm:text-4xl">
          Votre{" "}
          <span className="text-rose text-4xl sm:text-5xl font-bold">site</span>{" "}
          n'est pas passé entre{" "}
          <span className="text-rose text-4xl sm:text-5xl font-bold">
            nos mains
          </span>{" "}
          ?
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <Image
            src="/lifebuoy.png"
            height={200}
            width={200}
            alt="Bouée de sauvetage"
          />
          <div className="flex flex-col gap-4 text-center md:text-left items-center md:items-start">
            <h3 className="text-3xl sm:text-4xl font-semibold">
              Mais il a besoin de <span className="text-rose">nous</span> pour
              être <span className="text-4xl text-rose sm:text-5xl">sauvé</span>
              .
            </h3>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default LifeBuoy
