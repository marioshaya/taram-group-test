import type { IconType } from "react-icons"
import { CiGlobe } from "react-icons/ci"
import { MdOutlinePhoneIphone } from "react-icons/md"
import { RiRobot2Fill } from "react-icons/ri"
import type { NeedsIdType } from "@/types"

interface NeedsDataIO {
  id: NeedsIdType
  title: string
  icon: IconType
}

export const needsData: NeedsDataIO[] = [
  {
    id: "web",
    title: "Un site web",
    icon: CiGlobe
  },
  {
    id: "mobile",
    title: "Une application mobile",
    icon: MdOutlinePhoneIphone
  },
  {
    id: "automation",
    title: "De l'automatisation",
    icon: RiRobot2Fill
  }
]

export const needAutomationIncludes = [
  "Devis & signature instantanés",
  "Onboarding client guidé",
  "Suivi des performances automatisé"
]

export const needWebNewIncludes = [
  "Site vitrine ou e-commerce",
  "Design sur mesure et responsive",
  "Hébergement et maintenance inclus"
]

export const needWebMaintenance = [
  "Surveillance 24/7 et sauvegardes quotidiennes",
  "Corrections garanties sous 24h ouvrées",
  "Améliorations régulières et coaching"
]

export const needWebSiteVitrine = [
  "Structure claire : accueil, services, avis, contact",
  "SEO local optimisé et formulaires connectés",
  "Formation vidéo pour être autonome"
]

export const needWebEcommerce = [
  "Catalogue modulable et fiches produits SEO",
  "Tunnel de commande optimisé mobile",
  "Email marketing automatisé dès le lancement"
]

export const needWebSaas = [
  "Prototype cliquable offert",
  "Parcours utilisateur testé en conditions réelles",
  "Monitoring et support utilisateurs inclus"
]
