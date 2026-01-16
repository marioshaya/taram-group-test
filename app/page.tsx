import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdArrowRoundDown } from "react-icons/io";

export default function Home() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-background">
      <div className="flex-1">
        <div className="mx-auto max-w-7xl flex flex-col items-center justify-center gap-4 px-4">
          <div className="flex items-center justify-center bg-white rounded-full px-8 py-3 text-background shadow-[0_18px_48px_rgba(0,0,0,0.32),0_0_20px_rgba(113,221,174,0.4),0_0_20px_rgba(113,221,174,0.2)]">
            <Image src="/search.png" height={48} width={48} alt="Logo" />
            <div className="uppercase font-extrabold text-sm lg:text-2xl overflow-hidden text-ellipsis">
              Créer un site web <u>vraiement</u> unique
            </div>
          </div>

          <h1 className="max-w-3xl text-3xl lg:text-5xl font-semibold tracking-tight text-center">
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

          <p className="text-center max-w-lg text-base font-semibold text-white/80">
            Design moderne, solide SEO, Suivi complet : <br />
            on construit un site qui retient vos visiteurs et vous apporte des
            résultats.
          </p>

          <div className="flex font-extrabold flex-col md:flex-row items-center justify-center gap-4">
            <div className="w-full md:w-auto relative">
              <button
                className="w-full md:w-auto flex items-center text-background justify-center gap-x-2 bg-linear-to-r from-primary hover:cursor-pointer to-[#2A9D7A] hover:duration-150 hover:scale-105 ease-in-out transition-all rounded-xl px-4 py-2"
                type="button"
              >
                <FaCalendarAlt />
                <div>Prendre RDV</div>
              </button>
              <div className="absolute hidden md:block -bottom-12 -left-10">
                <Image src="/click.png" height={128} width={128} alt="click"/>
              </div>
            </div>
            <button
              className="w-full sm:w-auto flex items-center justify-center gap-x-2 rounded-xl px-4 py-2 border text-primary hover:cursor-pointer hover:duration-150 hover:scale-105 ease-in-out transition-all"
              type="button"
            >
              <div>Découvrir nos projets</div>
              <IoMdArrowRoundDown />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
