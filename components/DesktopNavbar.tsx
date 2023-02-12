import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import CustomLink from "./CustomLink"
import ThemeToggle from "./ThemeToggle"
import SocialLinks from "./SocialLinks"

const DesktopNavbar = () => {
  return (
    <div className="hidden md:flex container items-center justify-between py-4">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Icons.logo className="w-8 h-8 fill-current" />
          <span className="font-bold ml-2 mr-8">{siteConfig.name}</span>
        </Link>

        <SocialLinks />
      </div>
      <div className="flex items-center space-x-2">
        <ThemeToggle />
      </div>
    </div>
  )
}

export default DesktopNavbar
