import {
  needAutomationIncludes,
  needMobileNew,
  needMobileRebrand,
  needWebDebug,
  needWebEcommerce,
  needWebMaintenance,
  needWebRebrand,
  needWebSaas,
  needWebSiteVitrine
} from "@/data"

export const getBookingIncludes = (title: string) => {
  let includes: string[]

  switch (title) {
    case "Automatisation":
      includes = needAutomationIncludes
      break
    case "Maintenance":
      includes = needWebMaintenance
      break
    case "Correction de bugs":
      includes = needWebDebug
      break
    case "Refonte & optimisation":
      includes = needWebRebrand
      break
    case "Site vitrine":
      includes = needWebSiteVitrine
      break
    case "E-commerce":
      includes = needWebEcommerce
      break
    case "SaaS":
      includes = needWebSaas
      break
    case "Refonte App Mobile":
      includes = needMobileRebrand
      break
    case "Application Mobile":
      includes = needMobileNew
      break
    default:
      includes = []
  }

  return includes
}
