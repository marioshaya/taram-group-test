import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"]
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Agence Web - Créer un site web vraiment unique",
  description:
    "Création de sites web qui retiennent vos visiteurs et vous apportent des résultats. Design moderne, SEO solide, suivi complet. Devis instantané et automatisations no-code."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
