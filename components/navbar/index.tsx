"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FaCalendarAlt } from "react-icons/fa"
import { MdMenu } from "react-icons/md"
import MenuMobile from "./MenuMobile"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-primary fixed z-30 top-0 left-0 w-full">
      <div className="mx-auto flex h-20 w-full items-center justify-between px-6">
        <button
          className="text-background h-10 w-10 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
        >
          <MdMenu />
        </button>
        <Link href="/">
          <Image src="/logo-full.png" width={100} height={100} alt="Logo" />
        </Link>
        <button
          aria-label="Prendre rendez-vous"
          className="bg-background flex h-12 w-12 items-center justify-center rounded-xl"
          type="button"
        >
          <FaCalendarAlt />
        </button>
      </div>
      {isMenuOpen && <MenuMobile onClick={() => setIsMenuOpen(false)} />}
    </header>
  )
}
