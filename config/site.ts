interface SiteConfig {
  name: string
  description: string
  links: {
    facebook: string
    instagram: string
    twitter: string
    github: string
  }
  url: string
}

export const siteConfig: SiteConfig = {
  name: "practicas.gg",
  description:
    "Buscamos optimizar tu experiencia de búsqueda de empleo en Computrabajo. Por ello, hemos implementado un filtro especial para ofertas de prácticas en la rama de Ingeniería Civil. Estamos en la fase beta y agradecemos cualquier comentario o sugerencia que tengas para mejorar el sitio. Si eres desarrollador, ¡eres más que bienvenido a contribuir al código fuente en GitHub! Juntos, podemos hacer la búsqueda de empleo más eficiente y efectiva.",
  links: {
    facebook: "https://www.facebook.com/cuevantn",
    instagram: "https://www.instagram.com/cuevantn",
    twitter: "https://twitter.com/cuevantn",
    github: "https://github.com/cuevantn/practicas.gg",
  },
  url: "https://civil.jobs",
}
