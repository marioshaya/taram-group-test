import Image from "next/image"
import { FaCalendarAlt } from "react-icons/fa"
import { IoMdArrowRoundDown } from "react-icons/io"

export default function Home() {
  return (
    <main className="bg-background flex min-h-dvh items-center justify-center">
      <div className="flex-1">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-4">
          <div className="text-background flex items-center justify-center rounded-full bg-white px-8 py-3 shadow-[0_18px_48px_rgba(0,0,0,0.32),0_0_20px_rgba(113,221,174,0.4),0_0_20px_rgba(113,221,174,0.2)]">
            <Image src="/search.png" height={48} width={48} alt="Logo" />
            <div className="overflow-hidden text-sm font-extrabold text-ellipsis uppercase lg:text-2xl">
              Créer un site web <u>vraiement</u> unique
            </div>
          </div>

          <h1 className="max-w-3xl text-center text-3xl font-semibold tracking-tight lg:text-5xl">
            Votre <span className="text-primary">site</span> doit{" "}
            <span className="text-primary">donner envie</span> de{" "}
            <span className="text-primary">rester</span>, pas de{" "}
            <del className="text-background">
              <span className="text-primary">revenir</span>{" "}
              <span className="text-white">en </span>
              <span className="text-primary">arrière</span>
            </del>
            .
          </h1>

          <p className="max-w-lg text-center text-base font-semibold text-white/80">
            Design moderne, solide SEO, Suivi complet : <br />
            on construit un site qui retient vos visiteurs et vous apporte des
            résultats.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 font-extrabold md:flex-row">
            <div className="relative w-full md:w-auto">
              <button
                className="text-background from-primary flex w-full items-center justify-center gap-x-2 rounded-xl bg-linear-to-r to-[#2A9D7A] px-4 py-2 transition-all ease-in-out hover:scale-105 hover:cursor-pointer hover:duration-150 md:w-auto"
                type="button"
              >
                <FaCalendarAlt />
                <div>Prendre RDV</div>
              </button>
              <div className="absolute -bottom-12 -left-10 hidden md:block">
                <Image src="/click.png" height={128} width={128} alt="click" />
              </div>
            </div>
            <button
              className="text-primary flex w-full items-center justify-center gap-x-2 rounded-xl border px-4 py-2 transition-all ease-in-out hover:scale-105 hover:cursor-pointer hover:duration-150 sm:w-auto"
              type="button"
            >
              <div>Découvrir nos projets</div>
              <IoMdArrowRoundDown />
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
