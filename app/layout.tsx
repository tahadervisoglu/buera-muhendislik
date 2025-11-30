import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Buera Mühendislik | Profesyonel Danışmanlık Hizmetleri",
  description:
    "İşletmenizin en verimli dönemine geçiş için Buera Mühendislik. Süreç analizi, pazar araştırması ve sosyal medya yönetimi hizmetleri.",
  keywords: "mühendislik, danışmanlık, verimlilik, pazar analizi, sosyal medya",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
