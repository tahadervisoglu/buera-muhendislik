import { BarChart3, Users, Share2 } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: BarChart3,
      title: "Süreç ve Verimlilik Analizi",
      description: "İşletmenizin süreçlerini detaylı analiz ederek verimliliği artıracak çözümler sunuyoruz.",
    },
    {
      icon: Users,
      title: "Rakip ve Pazar Analizi",
      description: "Pazarınızdaki konumunuzu güçlendirmek için kapsamlı rakip ve pazar analizleri gerçekleştiriyoruz.",
    },
    {
      icon: Share2,
      title: "Sosyal Medya Yönetimi",
      description:
        "Markanızın dijital varlığını güçlendirmek için profesyonel sosyal medya yönetimi hizmeti sunuyoruz.",
    },
  ]

  return (
    <section id="hizmetler" className="py-24 px-4 bg-[#1e293b]">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">Hizmetlerimiz</h2>
        <div className="w-24 h-1 bg-[#f59e0b] mx-auto mb-16"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-[#0f172a] p-8 rounded-lg border border-[#334155] hover:border-[#f59e0b] transition-all duration-300 group hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-[#f59e0b]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#f59e0b]/20 transition-colors">
                  <Icon className="w-8 h-8 text-[#f59e0b]" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
