import Link from "next/link"
import { FaPhone } from "react-icons/fa6"

export default function PhoneCallBtn() {
  return (
    <Link
      href="tel:+261332955119"
      className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-background p-3 font-extrabold text-white transition-[width,padding] duration-200 ease-out hover:w-80 hover:scale-105 hover:cursor-pointer hover:justify-start hover:px-4"
    >
      <FaPhone className="shrink-0" />
      <span className="absolute left-10 whitespace-nowrap translate-x-full transition-transform duration-200 ease-out group-hover:translate-x-0">
        +261 33 29 551 19
      </span>
    </Link>
  )
}
