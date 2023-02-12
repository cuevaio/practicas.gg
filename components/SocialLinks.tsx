import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

const SocialLinks = () => (
  <div className="flex space-x-1">
    <a target="_blank" rel="noreferrer" href={siteConfig.links.instagram}>
      <Icons.instagram className="w-5 h-5 mr-2" />
    </a>
    <a target="_blank" rel="noreferrer" href={siteConfig.links.facebook}>
      <Icons.facebook className="w-5 h-5 mr-2 fill-current" />
    </a>
    <a target="_blank" rel="noreferrer" href={siteConfig.links.twitter}>
      <Icons.twitter className="w-5 h-5 mr-2 fill-current" />
    </a>
  </div>
)

export default SocialLinks
