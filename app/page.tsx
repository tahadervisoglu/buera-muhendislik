import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Contact from "@/components/contact"

export const metadata: Metadata = {
  title: "Buera Mühendislik | Profesyonel Danışmanlık ve Mühendislik Hizmetleri",
  description: "Buera Mühendislik - Süreç analizi, pazar araştırması ve sosyal medya yönetimi ile işletmenizi zirveye taşıyoruz. Ücretsiz danışmanlık için hemen ulaşın.",
  keywords: "Buera Mühendislik, buera mühendislik, mühendislik danışmanlık, süreç analizi, pazar araştırması, sosyal medya yönetimi",
  openGraph: {
    title: "Buera Mühendislik | Profesyonel Danışmanlık Hizmetleri",
    description: "Buera Mühendislik - Süreç analizi, pazar araştırması ve sosyal medya yönetimi ile işletmenizi zirveye taşıyoruz.",
    type: "website",
    locale: "tr_TR",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a]">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
    </main>
  )
}
