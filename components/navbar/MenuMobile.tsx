import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaCalendarAlt, FaTimes } from "react-icons/fa"
import { FaPhone } from "react-icons/fa6"

const navLinks = [
  {
    label: "Acceuil",
    link: "/"
  },
  {
    label: "Offres",
    link: "/offres"
  },
  {
    label: "Projets",
    link: "/projets"
  },
  {
    label: "Guides",
    link: "/guides"
  }
]

interface MenuMobileProps {
  onClick: () => void
}

const MenuMobile = ({ onClick }: MenuMobileProps) => {
  const pathname = usePathname()

  const isLinkActive = (link: string) => {
    if (link === pathname) return true
  }

  return (
    <div className="bg-primary absolute top-0 left-0 z-40 mx-auto flex h-dvh w-full flex-col items-center justify-between pb-4">
      <div className="border-background/10 flex h-20 w-full shrink-0 items-center justify-between border-b px-6 py-4">
        <Image alt="Logo" height={100} src="/logo-full.png" width={100} />
        <button
          aria-label="Fermer menu"
          className="text-background text-2xl"
          onClick={onClick}
          type="button"
        >
          <FaTimes />
        </button>
      </div>
      <div className="flex h-[80vh] w-full flex-col items-center gap-y-4 px-6 py-4">
        {navLinks.map((item) => (
          <Link
            className={clsx(
              isLinkActive(item.link) &&
                "bg-background rounded-lg text-white shadow-sm",
              "text-background w-full px-4 py-3 font-semibold"
            )}
            href={item.link}
            key={item.link}
            onClick={onClick}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="w-full space-y-3 px-6 border-t border-background/10">
        <button
          aria-label="Prendre RDV"
          className="bg-background flex w-full items-center justify-center gap-x-2 rounded-xl px-4 py-3 font-extrabold text-white"
          type="button"
        >
          <FaCalendarAlt />
          <div className="">Prendre RDV</div>
        </button>
        <button
          className="border-background text-background flex w-full items-center justify-center gap-x-2 rounded-xl border-2 px-4 py-3 font-extrabold"
          type="button"
        >
          <FaPhone />
          <div className="">+261 33 29 551 19</div>
        </button>
      </div>
    </div>
  )
}

export default MenuMobile
