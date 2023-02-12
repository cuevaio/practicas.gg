import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import Link from "next/link"

import ThemeToggle  from "./ThemeToggle"
import HamburguerMenu from "./HamburguerMenu"
import { Icons } from "@/components/icons"


const MobileNavbar = () => {
  return (
    <div className="flex justify-between md:hidden">
      <Button variant="link" className="pl-0">
        <Link href="/" className="flex items-center">
          <Icons.logo className="mr-2 h-4 w-4 fill-current" />
          {siteConfig.name}
        </Link>
      </Button>
      <div className="flex items-center space-x-2">
        <ThemeToggle />
        <HamburguerMenu />
      </div>
    </div>
  )
}

export default MobileNavbar
