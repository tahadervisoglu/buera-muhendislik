"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#anasayfa", label: "Ana Sayfa" },
    { href: "#hizmetler", label: "Hizmetler" },
    { href: "#hakkinda", label: "Hakkında" },
    { href: "#iletisim", label: "İletişim" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0f172a]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="#anasayfa" className="flex items-center">
          <Image src="/logo.png" alt="Buera Mühendislik Logo" width={120} height={40} className="h-10 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground hover:text-[#f59e0b] transition-colors duration-200 font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-foreground">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}
