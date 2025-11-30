import Image from "next/image"

export default function About() {
  return (
    <section id="hakkinda" className="py-24 px-4 bg-[#0f172a]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">Hakkımızda</h2>
        <div className="w-24 h-1 bg-[#f59e0b] mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-[#1e293b] p-8 md:p-12 rounded-lg border border-[#334155]">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Buera Mühendislik, Atatürk Üniversitesi'nde bir araya gelen{" "}
              <span className="text-[#f59e0b] font-semibold">yıldız öğrenciler</span> tarafından 2025 yılında
              kurulmuştur. Genç, dinamik ve yenilikçi kadromuzla işletmenizin{" "}
              <span className="text-foreground font-semibold">büyüme hedeflerine</span> ulaşması için profesyonel
              danışmanlık hizmetleri sunuyoruz.
            </p>
          </div>

          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden border border-[#334155]">
            <Image
              src="/engineering-consulting-business-meeting-with-bluep.jpg"
              alt="Buera Mühendislik - Engineering and Business Consulting"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
