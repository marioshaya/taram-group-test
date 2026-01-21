"use client"

import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { FaCalendarAlt } from "react-icons/fa"
import { MdMenu } from "react-icons/md"
import { navLinks } from "@/data"
import { isLinkActive } from "@/utils/"
import PhoneCallBtn from "../buttons/PhoneCall"
import PrendreRdvBtn from "../buttons/PrendreRdv"
import MenuMobile from "./MenuMobile"

const SCROLL_THRESHOLD = 32

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`bg-primary fixed top-0 left-0 z-30 w-full transition-[height] duration-200 ease-out ${
        isScrolled ? "h-14" : "h-20"
      }`}
    >
      {/* Mobile */}
      <div className="md:hidden mx-auto flex h-full w-full items-center justify-between px-6">
        <button
          className={`text-background flex shrink-0 items-center justify-center text-2xl transition-[width,height] duration-200 ease-out ${
            isScrolled ? "h-9 w-9" : "h-10 w-10"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
        >
          <MdMenu />
        </button>
        <Link
          href="/"
          className={`flex shrink-0 items-center justify-center transition-[transform] duration-200 ease-out ${
            isScrolled ? "scale-[0.55]" : "scale-100"
          }`}
        >
          <Image src="/logo-full.png" width={100} height={100} alt="Logo" />
        </Link>
        <button
          aria-label="Prendre rendez-vous"
          className={`bg-background flex shrink-0 items-center justify-center rounded-xl transition-[width,height] duration-200 ease-out ${
            isScrolled ? "h-10 w-10" : "h-12 w-12"
          }`}
          type="button"
        >
          <FaCalendarAlt />
        </button>
      </div>
      {/* Desktop */}
      <div className="hidden md:flex mx-auto h-full w-full items-center justify-between px-6">
        <Link href="/" className="">
          <Image src="/logo-full.png" width={100} height={100} alt="Logo" />
        </Link>
        <nav className="space-x-2">
          {navLinks.map((item) => (
            <Link
              className={clsx(
                isLinkActive(pathname, item.link) &&
                  "bg-background rounded-lg text-white border-2 border-background shadow-sm",
                "text-background w-full rounded-lg px-4 py-3 font-semibold hover:shadow-lg hover:shadow-background/50 hover:border-2 transition-all duration-300 ease-in-out"
              )}
              href={item.link}
              key={item.link}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-x-3">
          <PrendreRdvBtn />
          <PhoneCallBtn />
        </div>
      </div>
      {isMenuOpen && <MenuMobile onClick={() => setIsMenuOpen(false)} />}
    </header>
  )
}
