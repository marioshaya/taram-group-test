import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-background">
      <div className="flex-1">
        <div className="mx-auto max-w-7xl flex flex-col items-center justify-center gap-4">
          <div className="flex items-center ">
            <Image src="" height={56} width={56} alt="Logo" />
            <div className="uppercase">
              Créer un site web <u>vraiement</u> unique
            </div>
          </div>

          <h1>
            Votre <span className="text-primary">site</span> doit{" "}
            <span className="text-primary">donner envie</span> de{" "}
            <span className="text-primary">rester</span>, pas de{" "}
            <del>
              <span className="text-primary">revenir</span> en{" "}
              <span className="text-primary">arrière</span>
            </del>
            .
          </h1>

          <p className="text-center">
            Design moderne, solide SEO, Suivi complet :
            on construit un site qui retient vos visiteurs et vous apporte des résultats.
          </p>

          <div className="">
            <button type="button">Prendre RDV</button>
            <button type="button">Découvrir nos projets</button>
          </div>
        </div>
      </div>
    </main>
  );
}
