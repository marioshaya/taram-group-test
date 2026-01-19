"use client"

import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { isLinkActive } from "@/lib/isLinkActive"
import { navLinks } from "../navbar/navLinks"
import { contactData } from "./contactData"
import { legalLinks } from "./legalLinks"

const Footer = () => {
  const pathname = usePathname()

  return (
    <footer className="w-full py-12 bg-primary">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/">
              <Image src="/logo-full.png" width={160} height={65} alt="Logo" />
            </Link>
            <p className="text-sm text-background">
              Des sites qui donnent envie de rester
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-extrabold text-background">
              Navigation
            </h3>
            <nav className="flex flex-col gap-y-2">
              {navLinks.map((nav) => (
                <Link
                  className={clsx(
                    "text-sm text-background decoration-2 underline-offset-4 hover:decoration-background/65 hover:underline transition-all duration-200 ease-in-out",
                    isLinkActive(pathname, nav.link) &&
                      "underline decoration-background/65"
                  )}
                  href={nav.link}
                  key={nav.link}
                >
                  {nav.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-extrabold text-background">
              Contact
            </h3>
            <div className="flex flex-col gap-y-2">
              {contactData.map((item) => {
                const Icon = item.icon

                return (
                  <Link
                    className="flex items-center gap-x-2 text-sm text-background decoration-background/65 decoration-2 underline-offset-4 hover:underline transition-all duration-300 ease-in-out"
                    href={item.link}
                    key={item.link}
                  >
                    <Icon />
                    <div className="">{item.label}</div>
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-extrabold text-background">Légal</h3>
            <div className="flex flex-col gap-y-2">
              {legalLinks.map((item) => (
                <Link
                  className="text-sm text-background hover:underline decoration-background/65 decoration-2 hover:underline-offset-4 transition-all duration-300 ease-in-out"
                  href={item.link}
                  key={item.link}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
