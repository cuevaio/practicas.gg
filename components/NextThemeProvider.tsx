"use client"

import * as React from "react"
import { ThemeProvider } from "next-themes"

interface NextThemeProviderProps {
  children: React.ReactNode
}

const NextThemeProvider: React.FunctionComponent<NextThemeProviderProps> = ({
  children,
}) => {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}

export default NextThemeProvider
