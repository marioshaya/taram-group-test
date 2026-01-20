import type { Metadata } from "next"
import { Inter, Kanit } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"]
})

const kanit = Kanit({
  variable: "--font-kanit",
  weight: ["800", "900"],
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
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${kanit.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
