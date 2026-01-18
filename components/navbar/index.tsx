import Image from "next/image";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";

export default function Navbar() {
  return <header className="fixed top-0 left-0 w-full bg-primary">
    <div className="flex items-center justify-between h-20 w-full mx-auto px-6">
      <button className="text-2xl text-background h-10 w-10" type="button">
        <MdMenu />
      </button>
      <Link href="/">
        <Image src="/logo-full.png" width={100} height={100} alt="Logo" />
      </Link>
      <button 
        aria-label="Prendre rendez-vous"
        className="bg-background h-12 w-12 flex items-center justify-center rounded-xl" 
        type="button"
      >
        <FaCalendarAlt />
      </button>
    </div>
  </header>
}
