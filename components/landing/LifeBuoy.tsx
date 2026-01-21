import Image from "next/image"
import Section from "../Section"

const LifeBuoy = () => {
  return (
    <Section height="min-h-[50vh]">
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">
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
            Mais il a besoin de nous pour être sauvé.
          </h3>
        </div>
      </div>
    </Section>
  )
}

export default LifeBuoy
