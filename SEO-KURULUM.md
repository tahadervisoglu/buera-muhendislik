# Buera Mühendislik - SEO Kurulum Rehberi

## ✅ Yapılan SEO İyileştirmeleri

### 1. Meta Tags ve Metadata
- ✅ Gelişmiş title ve description
- ✅ Keywords optimizasyonu ("Buera Mühendislik" odaklı)
- ✅ Open Graph tags (sosyal medya paylaşımları için)
- ✅ Twitter Card tags
- ✅ Robots meta tags
- ✅ Canonical URL: https://bueramuhendislik.com.tr

### 2. Structured Data (JSON-LD)
- ✅ Schema.org ProfessionalService markup
- ✅ Google'ın sitenizi daha iyi anlaması için yapılandırılmış veri

### 3. Sitemap ve Robots
- ✅ Dinamik XML sitemap (`/sitemap.xml`)
- ✅ Robots.txt (`/robots.txt`)

### 4. Teknik SEO
- ✅ Semantic HTML
- ✅ Image alt texts optimize edildi
- ✅ Türkçe dil desteği (lang="tr")
- ✅ PWA manifest
- ✅ Performans optimizasyonları
- ✅ Domain: **bueramuhendislik.com.tr** olarak ayarlandı

---

## 🚀 Yapmanız Gerekenler

### 1. ✅ Domain Adresi Güncellendi
Tüm dosyalarda domain adresi `https://bueramuhendislik.com.tr` olarak ayarlandı:

- ✅ `app/layout.tsx` (metadata.openGraph.url ve alternates.canonical)
- ✅ `app/sitemap.ts` (baseUrl)
- ✅ `app/robots.ts` (baseUrl)
- ✅ `components/structured-data.tsx` (url ve logo)

### 2. Google Search Console Kurulumu

1. [Google Search Console](https://search.google.com/search-console)'a gidin
2. "Mülk Ekle" butonuna tıklayın
3. Domain adresinizi girin
4. Doğrulama kodunu alın
5. `app/layout.tsx` dosyasındaki `verification.google` kısmına kodu yapıştırın:
   ```typescript
   verification: {
     google: "BURAYA_DOGRULAMA_KODUNUZU_YAPIŞTIRIN",
   },
   ```
6. Siteyi deploy edin ve Google'da doğrulayın
7. Sitemap'i gönderin: `https://yourdomain.com/sitemap.xml`

### 3. Google Analytics (Opsiyonel)
Zaten Vercel Analytics kullanıyorsunuz, ama Google Analytics da eklemek isterseniz:
- Google Analytics hesabı oluşturun
- Tracking ID'yi alın
- `app/layout.tsx`'e Google Analytics script'ini ekleyin

### 4. Sosyal Medya Linkleri
`components/structured-data.tsx` dosyasındaki `sameAs` array'ine sosyal medya linklerinizi ekleyin:
```typescript
"sameAs": [
  "https://www.linkedin.com/company/buera-muhendislik",
  "https://twitter.com/bueramuhendislik",
  "https://www.instagram.com/bueramuhendislik"
],
```

### 5. İletişim Bilgileri
`components/structured-data.tsx` dosyasına şirket adresinizi ve iletişim bilgilerinizi ekleyin.

---

## 📊 SEO Kontrol Listesi

Deploy ettikten sonra şunları kontrol edin:

- [ ] `https://yourdomain.com/sitemap.xml` çalışıyor mu?
- [ ] `https://yourdomain.com/robots.txt` çalışıyor mu?
- [ ] Google Search Console'da site doğrulandı mı?
- [ ] Sitemap Google'a gönderildi mi?
- [ ] Sosyal medyada paylaşınca doğru görsel ve açıklama çıkıyor mu?
- [ ] Mobil uyumlu mu? (Google Mobile-Friendly Test)
- [ ] Sayfa hızı iyi mi? (PageSpeed Insights)

---

## 🎯 Beklenen Sonuçlar

- **"Buera Mühendislik"** aramasında 1-2 hafta içinde ilk sayfada görünmelisiniz
- Rakip olmadığı için hızlı bir şekilde üst sıralara çıkacaksınız
- Google'ın siteyi indexlemesi 24-48 saat sürebilir
- Tam optimizasyon 2-4 hafta içinde gerçekleşir

---

## 🔍 Faydalı Araçlar

- [Google Search Console](https://search.google.com/search-console)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [Schema Markup Validator](https://validator.schema.org/)
- [Rich Results Test](https://search.google.com/test/rich-results)

---

## 💡 İpuçları

1. **İçerik Güncelleyin**: Düzenli olarak blog yazıları veya haber ekleyin
2. **Backlink Oluşturun**: Diğer sitelerden link alın
3. **Sosyal Medya**: Aktif olun ve siteye link verin
4. **Yerel SEO**: Google My Business profili oluşturun
5. **Hız**: Siteyi mümkün olduğunca hızlı tutun

---

Başarılar! 🚀
