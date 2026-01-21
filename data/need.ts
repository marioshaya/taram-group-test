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
