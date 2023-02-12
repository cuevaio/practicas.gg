interface SiteConfig {
  name: string
  description: string
  links: {
    facebook: string
    instagram: string
    twitter: string
  }
  url: string
}

export const siteConfig: SiteConfig = {
  name: "Civil.jobs",
  description:
    "Filtramos las Ofertas de empleo para Practicantes de Ingeniería Civil (60% de probabilidad de acierto)",
  links: {
    facebook: "https://www.facebook.com/cuevantn",
    instagram: "https://www.instagram.com/cuevantn",
    twitter: "https://twitter.com/cuevantn",
  },
  url: "https://civil.jobs",
}
