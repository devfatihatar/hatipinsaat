# Mobil Kodlama ve Açıklama Raporu

Bu rapor, Hatip İnşaat sitesinin mobil yayın hazırlığı sırasında yapılan düzenlemeleri ve nedenlerini açıklar.

## 1. Mobil Header Düzeni

Dosya: `src/styles/common/_header.scss`

Mobilde header artık tek kolonlu, sarılabilen ve cam efektli kompakt bir yapıya geçti. Logo üstte, nav linkleri altta satırlara bölünebilecek şekilde ayarlandı. Böylece küçük ekranlarda menü taşması, üst üste binme ve yatay kayma riski azaltıldı.

Önemli yaklaşım:

```scss
@media (max-width: 860px) {
  .site-header {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  .site-header__side {
    flex-wrap: wrap;
  }
}
```

Buradaki amaç, masaüstündeki geniş yatay navigasyonu mobilde zorla aynı hizada tutmak yerine doğal olarak satırlara yaymaktır.

## 2. Sayfa Açılış Performansı

Dosya: `src/App.jsx`

Hash route ile açılan sayfalarda eskiden ilk render kısa süre `home` olarak başlıyor, sonra ilgili sayfaya geçiyordu. Mobil Lighthouse için bu kötüydü çünkü örneğin `#contact` açılırken anasayfa hero yükü de devreye girebiliyordu.

Düzeltme:

```jsx
const [currentPage, setCurrentPage] = useState(() => window.location.hash.slice(1) || 'home');
```

Bu sayede uygulama ilk render'da doğrudan doğru sayfadan başlıyor.

## 3. Hero Video Optimizasyonu

Dosya: `src/pages/home/components/Hero.jsx`

Anasayfa videoları çok büyük olduğu için mobilde doğrudan yüklenmeleri performansı düşürüyordu. Bu yüzden ilk ekranda hafif bir poster görseli gösteriliyor; videolar sadece uygun koşullarda ve tarayıcı boşta kaldığında aktifleşiyor.

Kural:

- Mobilde video otomatik yüklenmiyor.
- `prefers-reduced-motion` aktifse video yüklenmiyor.
- Veri tasarrufu açıksa video yüklenmiyor.
- Geniş ekranda video sonra devreye giriyor.

## 4. Mobil Sayfa Yerleşimleri

Düzenlenen ana dosyalar:

- `src/pages/home/styles/_responsive.scss`
- `src/pages/corporate/styles/_corporate.scss`
- `src/pages/sustainability/styles/_sustainability.scss`
- `src/pages/blog/styles/_blog.scss`
- `src/pages/projects/styles/_projects.scss`
- `src/pages/contact/styles/_contact.scss`

Mobilde genel hedef:

- Hero alanlarını daha kısa ve dengeli yapmak.
- Büyük başlıkları küçük ekranlarda taşmayacak şekilde küçültmek.
- Kartları tek kolonlu göstermek.
- Detay sayfalarında metin ve sidebar alanlarını alt alta almak.
- Harita ve medya alanlarını daha kontrollü yükseklikte tutmak.

## 5. Erişilebilirlik Düzeltmeleri

Lighthouse erişilebilirlik skorunu 100'e çıkarmak için:

- Turuncu butonlarda beyaz yazı yerine koyu yazı kullanıldı.
- Görünür metin ile `aria-label` uyumsuzlukları düzeltildi.
- Küçük tıklanabilir linklerin minimum dokunma alanı büyütüldü.
- İletişim sayfasındaki düşük kontrastlı `Adres` etiketi koyulaştırıldı.

## 6. SEO Altyapısı

Dosya: `src/hooks/usePageSeo.js`

Sayfa bazlı `title`, `description`, Open Graph ve Twitter meta bilgileri dinamik hale getirildi. Böylece kullanıcı hangi sayfaya veya blog/proje detayına giderse tarayıcı başlığı ve meta açıklaması o içeriğe göre güncelleniyor.

Eklenen yayın dosyaları:

- `public/robots.txt`
- `public/sitemap.xml`
- `public/site.webmanifest`
- `public/icon.svg`
- `public/og-image.jpg`
- `public/hero-poster.jpg`

## 7. Kalan Performans Notu

Kod tarafında video yüklemesi ertelendi, ancak kaynak video dosyaları hala çok büyük:

- `home-drone3`: yaklaşık 320 MB
- `home-drone2`: yaklaşık 89 MB
- `home-drone1`: yaklaşık 28 MB

Mobil Performance skorunu 90+ seviyesine taşımak için bu videoların ayrıca sıkıştırılması veya kısa mobil versiyonlarının hazırlanması gerekir.
