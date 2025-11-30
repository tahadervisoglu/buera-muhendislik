import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, company, email, phone, message } = body

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer re_HvCp3zJq_BgoiMqB1wN1ydNSDFoZT9cx7`,
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: "bueramuhendislik@gmail.com",
        subject: `Yeni İletişim Formu - ${company}`,
        html: `
          <h2>Yeni İletişim Formu Mesajı</h2>
          <p><strong>İsim:</strong> ${name}</p>
          <p><strong>İşletme:</strong> ${company}</p>
          <p><strong>E-posta:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone || "Belirtilmedi"}</p>
          <p><strong>Mesaj:</strong></p>
          <p>${message || "Mesaj girilmedi"}</p>
        `,
      }),
    })

    if (!response.ok) {
      throw new Error("E-posta gönderilemedi")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("E-posta gönderme hatası:", error)
    return NextResponse.json({ success: false, error: "E-posta gönderilemedi" }, { status: 500 })
  }
}
