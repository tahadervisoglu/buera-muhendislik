import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Contact from "@/components/contact"

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
