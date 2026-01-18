import Link from "next/link"
import { FaPhone } from "react-icons/fa6"

export default function PhoneCallBtn() {
  return (
    <button
      className="bg-background rounded-xl px-4 py-3 font-extrabold text-white transition-all duration-150 ease-in-out hover:scale-105 hover:cursor-pointer group w-12 h-12"
      type="button"
    >
      <Link
        className="flex w-full items-center justify-center gap-x-2 "
        href="phone:+261332955119"
      >
        <FaPhone />
        <div className="hidden">+261 33 29 551 19</div>
      </Link>
    </button>
  )
}
