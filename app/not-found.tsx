import Image from "next/image"
import Link from "next/link"
import { FaHome } from "react-icons/fa"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] gap-y-4">
      <Image src="/404.png" alt="Page introuvable" height={225} width={300} />
      <h2 className="text-4xl text-primary">404</h2>
      <h3 className="text-2xl">Page introuvable</h3>
      <p>La page que vous recherchez n'existe pas ou a été déplacée.</p>
      <Link
        className="flex items-center gap-x-2 bg-primary text-background text-lg font-extrabold px-4 py-3 rounded-xl"
        href="/"
      >
        <FaHome />
        <div>Retour à l'accueil</div>
      </Link>
    </div>
  )
}
