import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import StructuredData from "@/components/structured-data"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Buera Mühendislik | Profesyonel Danışmanlık Hizmetleri",
  description:
    "Buera Mühendislik - İşletmenizin en verimli dönemine geçiş için profesyonel danışmanlık. Süreç analizi, pazar araştırması ve sosyal medya yönetimi hizmetleri.",
  keywords: [
    "Buera Mühendislik",
    "buera mühendislik",
    "mühendislik danışmanlık",
    "süreç analizi",
    "pazar araştırması",
    "sosyal medya yönetimi",
    "işletme danışmanlığı",
    "verimlilik danışmanlığı",
    "profesyonel danışmanlık hizmetleri"
  ].join(", "),
  authors: [{ name: "Buera Mühendislik" }],
  creator: "Buera Mühendislik",
  publisher: "Buera Mühendislik",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://bueramuhendislik.com.tr",
    siteName: "Buera Mühendislik",
    title: "Buera Mühendislik | Profesyonel Danışmanlık Hizmetleri",
    description:
      "Buera Mühendislik - İşletmenizin en verimli dönemine geçiş için profesyonel danışmanlık. Süreç analizi, pazar araştırması ve sosyal medya yönetimi hizmetleri.",
    images: [
      {
        url: "https://bueramuhendislik.com.tr/logo.png",
        width: 1200,
        height: 630,
        alt: "Buera Mühendislik Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buera Mühendislik | Profesyonel Danışmanlık Hizmetleri",
    description:
      "Buera Mühendislik - İşletmenizin en verimli dönemine geçiş için profesyonel danışmanlık.",
    images: ["https://bueramuhendislik.com.tr/logo.png"],
  },
  alternates: {
    canonical: "https://bueramuhendislik.com.tr",
  },
  verification: {
    google: "EFjnnV7ZR86pT6j81Ba1Pw79VNtcqY_NQM-vUvkNFT4",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <head>
        <StructuredData />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f59e0b" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
