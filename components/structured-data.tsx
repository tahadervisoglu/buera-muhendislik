export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Buera Mühendislik",
    "alternateName": "Buera Engineering",
    "url": "https://bueramuhendislik.com.tr",
    "logo": "https://bueramuhendislik.com.tr/logo.png",
    "description": "Buera Mühendislik - İşletmenizin en verimli dönemine geçiş için profesyonel danışmanlık. Süreç analizi, pazar araştırması ve sosyal medya yönetimi hizmetleri.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TR",
      "addressLocality": "Türkiye"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["Turkish", "English"]
    },
    "sameAs": [
      // Sosyal medya linklerinizi buraya ekleyin
      // "https://www.linkedin.com/company/buera-muhendislik",
      // "https://twitter.com/bueramuhendislik",
      // "https://www.instagram.com/bueramuhendislik"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Turkey"
    },
    "serviceType": [
      "Süreç Analizi ve Optimizasyon",
      "Pazar Araştırması ve Analiz",
      "Sosyal Medya Yönetimi",
      "İşletme Danışmanlığı"
    ],
    "priceRange": "$$"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
