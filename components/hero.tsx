"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("")
  const [showDot, setShowDot] = useState(true)
  const fullText = "Buera Mühendislik"

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowDot((prev) => !prev)
    }, 500)

    return () => clearInterval(blinkInterval)
  }, [])

  return (
    <section
      id="anasayfa"
      className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background.jpg"
          alt="Buera Mühendislik - Profesyonel danışmanlık ve mühendislik hizmetleri"
          fill
          className="object-cover blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-[#0f172a]/60" />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
          İşletmenizin en verimli dönemine geçiş için{" "}
          <span className="text-[#f59e0b]">
            {displayedText}
            <span className={`transition-opacity duration-100 ${showDot ? "opacity-100" : "opacity-0"}`}>.</span>
          </span>
        </h1>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#iletisim"
            className="inline-block bg-[#f59e0b] text-[#0f172a] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#f59e0b]/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Hemen Ulaşın
          </a>
          <a
            href="https://bueramuhendislik.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-transparent border-2 border-[#f59e0b] text-[#f59e0b] px-6 py-3 rounded-lg font-semibold text-base hover:bg-[#f59e0b]/10 transition-all duration-200 hover:scale-105"
          >
            Ücretsiz Analiz
          </a>
        </div>
      </div>
    </section>
  )
}
