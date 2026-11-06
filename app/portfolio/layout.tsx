import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/components_portfolio/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Fajar Kurniawan - Web Developer Portfolio",
  description: "Professional portfolio of Holiq Ibrahim, a Web Developer specializing in Laravel and web technologies.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
