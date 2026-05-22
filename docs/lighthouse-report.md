# Lighthouse Yayın Raporu

Ölçüm tarihi: 18 Mayıs 2026  
Ortam: Vite production preview, mobil Lighthouse ölçümü  
Adres: `http://127.0.0.1:4173/`

## Final Mobil Skorlar

| Sayfa | Performance | Accessibility | Best Practices | SEO |
| --- | ---: | ---: | ---: | ---: |
| Anasayfa | 76 | 100 | 100 | 100 |
| Kurumsal | 76 | 100 | 100 | 100 |
| Sürdürülebilirlik | 74 | 100 | 100 | 100 |
| Projelerimiz | 76 | 100 | 100 | 100 |
| Haberler & Blog | 75 | 100 | 100 | 100 |
| İletişim | 72 | 100 | 100 | 100 |

## Yapılan SEO Düzeltmeleri

- `index.html` içindeki karakter bozulmaları düzeltildi.
- Ana meta etiketleri yenilendi: `title`, `description`, `keywords`, `robots`, `canonical`.
- Open Graph ve Twitter kart bilgileri eklendi.
- JSON-LD schema `HomeAndConstructionBusiness` olarak güncellendi.
- `robots.txt` ve `sitemap.xml` yayın domainine göre yenilendi.
- Manifest ve favicon altyapısı eklendi.
- React içinde sayfa bazlı dinamik SEO yönetimi eklendi.

## Yapılan Lighthouse Düzeltmeleri

- Anasayfa hero videosu mobilde ilk yükten çıkarıldı.
- Hero için preload edilen hafif poster görseli eklendi.
- Kampanya modalı otomatik açılmayacak hale getirildi.
- Hash route başlangıcı doğrudan ilgili sayfayı açacak şekilde düzeltildi.
- Mobil header taşma ve tıklama problemleri azaltıldı.
- Erişilebilirlik kontrast sorunları düzeltildi.
- Tıklanabilir alanlar mobilde büyütüldü.

## Performance Değerlendirmesi

Skorların 70-76 aralığında kalmasının ana nedeni medya varlıklarının boyutu. Kod tarafında yükleme stratejisi optimize edildi, fakat videolar fiziksel olarak çok büyük olduğu için Lighthouse mobil performans puanını sınırlamaya devam ediyor.

Önerilen sonraki medya işi:

- Mobil için ayrı, kısa ve düşük bitrate video üretmek.
- `home-drone` videolarını 1080p veya 720p web optimizasyonuyla yeniden sıkıştırmak.
- Mümkünse `mp4` yanında modern codec alternatifi kullanmak.
- Kampanya görsellerini daha küçük WebP/AVIF versiyonlara dönüştürmek.

## Yayın Durumu

`npm.cmd run build` başarıyla tamamlandı. Yayına alınacak klasör:

```text
dist/
```

Bu klasör içinde `robots.txt`, `sitemap.xml`, `site.webmanifest`, `icon.svg`, `og-image.jpg` ve build assetleri hazır durumda.
