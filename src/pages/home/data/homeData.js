import homeDrone1 from '../../../assets/videos/home-drone1.mp4';
import homeDrone2 from '../../../assets/videos/home-drone2.mp4';
import homeDrone3 from '../../../assets/videos/home-drone3.mp4';
import projectAhmetKartal from '../../../assets/images/projects-ahmetkartal.jpg';
import projectBeyKonaklari from '../../../assets/images/projects-beykonaklari.jpg';
import projectCattaVillaCity from '../../../assets/images/projects-cattavillacity.jpg';
import projectCattaVillaHomes from '../../../assets/images/projects-cattavillahomes.jpg';
import projectCattaVillaPremium from '../../../assets/images/projects-cattavillapremium.jpg';
import projectKartalResidence from '../../../assets/images/projects-kartalresidence.jpg';
import projectLalePark from '../../../assets/images/projects-lalepark.jpg';

export const heroVideos = [homeDrone1, homeDrone2, homeDrone3];

export const mapSrc =
  'https://www.google.com/maps?q=Siteler%20Mah.%20H%C3%BCrriyet%20Cad.%20Kartal%20Residence%20No%3A11%2FA%20B%20Blok%20Kat%3A1%20Konyaalt%C4%B1%2FAntalya&output=embed';

export const signatureProjects = [
  { name: 'Ahmet Kartal', image: projectAhmetKartal },
  { name: 'Bey Konakları', image: projectBeyKonaklari },
  { name: 'Catta Villa City', image: projectCattaVillaCity },
  { name: 'Catta Villa Homes', image: projectCattaVillaHomes },
  { name: 'Catta Villa Premium', image: projectCattaVillaPremium },
  { name: 'Kartal Residence', image: projectKartalResidence },
  { name: 'Lale Park', image: projectLalePark },
];

const createPost = ({ slug, title, text, image }) => ({
  slug,
  title,
  text,
  image,
  paragraphs: [
    text,
    'Hatip İnşaat için her proje yalnızca bir yapı üretimi değil, uzun vadeli yaşam değeri oluşturan kapsamlı bir planlama sürecidir. Tasarım kararlarından malzeme seçimine, uygulama disiplininden teslim sonrası konfora kadar bütün adımlar bu bakış açısıyla ele alınır.',
    'Kullanıcıların günlük yaşamını kolaylaştıran, güven veren ve bulunduğu bölgeye değer katan projeler geliştirmek markanın temel yaklaşımını oluşturur. Bu nedenle her başlıkta kalite, sürdürülebilirlik ve insan odaklı tasarım birlikte düşünülür.',
  ],
});

export const blogPosts = [
  createPost({
    slug: 'insaatta-guven-kalite-ve-surdurulebilirlik',
    title: 'İnşaatta Güven, Kalite ve Sürdürülebilirlik',
    text: 'Modern yaşam alanlarında doğru malzeme seçimi, güçlü mühendislik ve sürdürülebilir planlama uzun ömürlü projelerin temelini oluşturur.',
    image: projectCattaVillaHomes,
  }),
  createPost({
    slug: 'yasam-alanlarinda-dogru-planlama',
    title: 'Yaşam Alanlarında Doğru Planlama',
    text: 'Ferah iç mekanlar, gün ışığını doğru kullanan cepheler ve işlevsel planlama konforlu bir yaşam deneyimini güçlendirir.',
    image: projectLalePark,
  }),
  createPost({
    slug: 'villa-projelerinde-modern-mimari',
    title: 'Villa Projelerinde Modern Mimari',
    text: 'Doğayla uyumlu yapı dili, kaliteli malzeme ve dengeli peyzaj kullanımı modern villa projelerine değer katar.',
    image: projectBeyKonaklari,
  }),
  createPost({
    slug: 'antalyada-konut-secerken-nelere-bakilmali',
    title: 'Antalya’da Konut Seçerken Nelere Bakılmalı?',
    text: 'Konum, ulaşım, yapı kalitesi ve sosyal alan dengesi doğru yatırım kararını destekleyen en önemli başlıklar arasında yer alır.',
    image: projectKartalResidence,
  }),
  createPost({
    slug: 'depreme-dayanikli-yapi-anlayisi',
    title: 'Depreme Dayanıklı Yapı Anlayışı',
    text: 'Zemin etüdünden taşıyıcı sisteme kadar her aşamada mühendislik disiplinine bağlı kalmak güvenli yapıların temelidir.',
    image: projectAhmetKartal,
  }),
  createPost({
    slug: 'peyzajin-yasam-kalitesine-etkisi',
    title: 'Peyzajın Yaşam Kalitesine Etkisi',
    text: 'Yeşil alanlar, yürüyüş yolları ve ortak kullanım alanları projelerin sadece görünümünü değil günlük yaşam konforunu da yükseltir.',
    image: projectCattaVillaCity,
  }),
  createPost({
    slug: 'dogru-malzeme-seciminin-onemi',
    title: 'Doğru Malzeme Seçiminin Önemi',
    text: 'Kaliteli malzeme, estetik görünümün yanında bakım kolaylığı ve uzun ömürlü kullanım açısından da projeye değer katar.',
    image: projectCattaVillaPremium,
  }),
  createPost({
    slug: 'modern-cephe-tasariminda-denge',
    title: 'Modern Cephe Tasarımında Denge',
    text: 'Cephe tasarımında ışık, gölge, açıklık ve malzeme dengesi yapının karakterini belirleyen güçlü detaylar oluşturur.',
    image: projectBeyKonaklari,
  }),
  createPost({
    slug: 'site-yasaminda-sosyal-alanlar',
    title: 'Site Yaşamında Sosyal Alanlar',
    text: 'Havuz, spor alanları, çocuk oyun alanları ve peyzaj düzenlemeleri aile odaklı yaşamı daha keyifli hale getirir.',
    image: projectLalePark,
  }),
  createPost({
    slug: 'yatirim-degeri-yuksek-projeler',
    title: 'Yatırım Değeri Yüksek Projeler',
    text: 'Gelişen bölgelerde doğru planlanan projeler hem yaşam kalitesi hem de uzun vadeli yatırım potansiyeli açısından öne çıkar.',
    image: projectKartalResidence,
  }),
  createPost({
    slug: 'anahtar-teslim-proje-surecleri',
    title: 'Anahtar Teslim Proje Süreçleri',
    text: 'Tasarım, uygulama ve teslim aşamalarının düzenli yönetilmesi projelerde zaman, bütçe ve kalite dengesini korur.',
    image: projectCattaVillaHomes,
  }),
];
