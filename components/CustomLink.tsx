"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface CustomLinkProps {
  href: string
  children: React.ReactNode
  label?: string
}

const CustomLink: React.FunctionComponent<CustomLinkProps> = ({
  href,
  children,
  label,
}) => {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={
        "flex items-center relative font-bold h-10 " + (pathname === href ? "border-b border-spacing-2" : "")
      }
    >
      {children}
      {label && (
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full absolute -top-2 -right-2 px-2 py-1 scale-75 text-xs text-white">
          {label}
        </span>
      )}
    </Link>
  )
}

export default CustomLink
