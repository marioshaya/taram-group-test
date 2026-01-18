import Image from "next/image"
import { CiGlobe } from "react-icons/ci"
import { MdOutlinePhoneIphone } from "react-icons/md"
import { RiRobot2Fill } from "react-icons/ri"
import PrendreRdvCta from "../buttons/PrendreRdvCta"
import Section from "../Section"

const needsData = [
  {
    title: "Un site web",
    icon: CiGlobe
  },
  {
    title: "Une application mobile",
    icon: MdOutlinePhoneIphone
  },
  {
    title: "De l'automatisation",
    icon: RiRobot2Fill
  }
]

export default function NeedSection() {
  return (
    <Section>
      <div className="">
        <h3 className="text-3xl font-extrabold text-center">
          Des <span className="text-4xl text-primary">offres</span> adaptées à
          chaque <span className="text-4xl text-primary">besoin</span>
        </h3>
        <div className="flex">
          <div className="relative w-full h-full min-h-[250px] sm:min-h-[400px] md:min-h-[500px] rounded-2xl overflow-hidden">
            <Image
              className="object-cover"
              src="/conceptionweb.png"
              fill
              alt="Conception web"
            />
          </div>
          <div className="w-full">
            <h4 className="text-2xl text-primary font-extrabold">
              Vos besoins concernent ...
            </h4>
            <div className="flex flex-col">
              {needsData.map((need) => {
                const Icon = need.icon
                return (
                  <button
                    className="w-full flex items-center gap-x-2 font-bold border-2 border-white/10 hover:text-primary hover:border-primary transition-all duration-300 ease-in-out hover:cursor-pointer px-4 py-3 rounded-xl"
                    key={need.title}
                    type="button"
                  >
                    <Icon />
                    <div className="">{need.title}</div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
        <PrendreRdvCta />
      </div>
    </Section>
  )
}
