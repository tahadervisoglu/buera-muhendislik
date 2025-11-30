"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert("Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.")
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        })
      } else {
        throw new Error("E-posta gönderilemedi")
      }
    } catch (error) {
      alert("Bir hata oluştu. Lütfen tekrar deneyin.")
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="iletisim" className="py-24 px-4 bg-[#1e293b]">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">İletişim</h2>
        <div className="w-24 h-1 bg-[#f59e0b] mx-auto mb-8"></div>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          İşletmenizi bir üst seviyeye taşımak için bizimle iletişime geçin
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-foreground font-medium mb-2">
              İsim <span className="text-[#f59e0b]">*</span>
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="bg-[#0f172a] border-[#334155] text-foreground focus:border-[#f59e0b]"
              placeholder="Adınız Soyadınız"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-foreground font-medium mb-2">
              İşletme <span className="text-[#f59e0b]">*</span>
            </label>
            <Input
              id="company"
              name="company"
              type="text"
              required
              value={formData.company}
              onChange={handleChange}
              className="bg-[#0f172a] border-[#334155] text-foreground focus:border-[#f59e0b]"
              placeholder="İşletme Adı"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-foreground font-medium mb-2">
              E-posta <span className="text-[#f59e0b]">*</span>
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="bg-[#0f172a] border-[#334155] text-foreground focus:border-[#f59e0b]"
              placeholder="ornek@email.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-foreground font-medium mb-2">
              Telefon Numarası
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="bg-[#0f172a] border-[#334155] text-foreground focus:border-[#f59e0b]"
              placeholder="+90 5XX XXX XX XX"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-foreground font-medium mb-2">
              Mesaj
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="bg-[#0f172a] border-[#334155] text-foreground focus:border-[#f59e0b] min-h-32"
              placeholder="Nasıl yardımcı olabiliriz?"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#f59e0b] hover:bg-[#f59e0b]/90 text-[#0f172a] font-semibold text-lg py-6 disabled:opacity-50"
          >
            {isSubmitting ? "Gönderiliyor..." : "Gönder"}
          </Button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">&copy; 2025 Buera Mühendislik. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </section>
  )
}
