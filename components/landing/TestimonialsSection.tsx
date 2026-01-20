import Image from "next/image"
import { FaStar } from "react-icons/fa6"
import { testimonials } from "@/data"
import Section from "../Section"

export default function TestimonialsSection() {
  return (
    <Section>
      <h3 className="text-3xl font-extrabold text-center">
        Ils nous font <span className="text-primary text-4xl">confiance</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full text-background gap-4">
        {testimonials.map((item) => (
          <div
            className="w-full rounded-2xl p-4 space-y-4 bg-linear-to-br nth-[2]:bg-linear-to-tr nth-[3]:bg-linear-to-tr nth-[4]:bg-linear-to-br from-white odd:from-white/50 odd:to-white to-white/50 shadow-xl shadow-white/25"
            key={item.company}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-4">
                <div className="bg-background rounded-xl px-4 py-2 text-white text-2xl font-black">
                  {item.company.charAt(0)}
                </div>
                <div className="">
                  <div className="font-black text-xl">{item.company}</div>
                  <div className="flex items-center gap-x-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar
                        className="w-3 h-3"
                        key={`${item.company}-star-${i}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-x-2 rounded-full bg-background/10 p-1 font-bold">
                <div className="text-white rounded-full w-8 h-8 flex items-center justify-center overflow-hidden border-2 border-background">
                  <Image
                    src={`https://i.pravatar.cc/500?img=${Math.floor(Math.random() * 70) + 1}`}
                    width={300}
                    height={300}
                    alt="Random fake avatar"
                  />
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
