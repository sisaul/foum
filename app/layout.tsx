import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Layout from "@/components/layout"
import { headers } from "next/headers"

export const metadata: Metadata = {
  title: "FOUM - Furniture & Interior Design",
  description: "FOUM is a customized furniture brand by interior architects at FOUM Studio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const heads = headers()
  const pathname = heads.get("next-url")

  const isSanityStudioPage = pathname?.startsWith("/sanity/studio")

  return (
    <html lang="en">
      <body className="font-sans">
        {isSanityStudioPage ? (
          <>{children}</>
        ) : (
          <Layout>{children}</Layout>
        )}
      </body>
    </html>
  )
}

