import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import SocialLinks from "./SocialLinks"

const HamburguerMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <Icons.menu className="hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100" />
          <span className="sr-only">Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          <Link href="/" className="flex items-center">
            <Icons.logo className="mr-2 h-4 w-4 fill-current" />
            {siteConfig.name}
          </Link>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel asChild>
          <div className="flex space-x-1">
            <a
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.instagram}
            >
              <Icons.instagram className="w-5 h-5 mr-2" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.facebook}
            >
              <Icons.facebook className="w-5 h-5 mr-2 fill-current" />
            </a>
            <a target="_blank" rel="noreferrer" href={siteConfig.links.twitter}>
              <Icons.twitter className="w-5 h-5 mr-2 fill-current" />
            </a>
          </div>
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default HamburguerMenu
