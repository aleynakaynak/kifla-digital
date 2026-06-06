// ── Boşnak (AI generated + real photos) ─────────────────
import imgPatatesliBorek         from "@/assets/products/patatesli-bosnak-boregi.jpg";

import imgIspanakliBorekReal     from "@/assets/products/ispanakli-bosnak-boregi-real.jpeg";
import imgKiymaliMantiReal       from "@/assets/products/kiymali-bosnak-mantisi-real.jpeg";
import imgOzbekManti             from "@/assets/products/ozbek-mantisi.jpg";
// ── Özel Ekmekler ────────────────────────────────────────
import imgAvokado                from "@/assets/products/avokado-klasik.jpg";
import imgHindiFume              from "@/assets/products/hindi-fume-lezzeti.jpg";
import imgMantar                 from "@/assets/products/mantar-soleni.jpg";
import imgAkdeniz                from "@/assets/products/akdeniz-esintisi.jpg";
// ── Sıcak Kahveler ───────────────────────────────────────
import imgEspresso               from "@/assets/products/espresso.jpg";
import imgDoubleEspresso         from "@/assets/products/double-espresso.jpg";
import imgAmericano              from "@/assets/products/americano.jpg";
import imgCappuccino             from "@/assets/products/cappuccino.jpg";
import imgLatte                  from "@/assets/products/latte.jpg";
import imgFlatWhite              from "@/assets/products/flat-white.jpg";
import imgMocha                  from "@/assets/products/mocha.jpg";
import imgMacchiato               from "@/assets/products/macchiato.webp";
import imgFiltreKahve             from "@/assets/products/filtre-kahve.webp";
import imgTurkKahvesi            from "@/assets/products/turk-kahvesi.webp";
import imgSicakCikolata          from "@/assets/products/sicak-cikolata.webp";
import imgIcedAmericano          from "@/assets/products/iced-americano.webp";
import imgIcedLatte             from "@/assets/products/iced-latte.webp";
import imgIcedCappuccino        from "@/assets/products/iced-cappuccino.webp";
import imgIcedMocha             from "@/assets/products/iced-mocha.webp";
import imgColdBrew              from "@/assets/products/cold-brew.webp";
import imgIcedFlatWhite         from "@/assets/products/iced-flat-white.webp";
import imgAffogato              from "@/assets/products/affogato.webp";
import imgFrappe                from "@/assets/products/frappe.webp";
import imgIceCoffee             from "@/assets/products/ice-coffee.webp";
import imgIhlamurCayi           from "@/assets/products/ihlamur-cayi.webp";
import imgPapatyaCayi           from "@/assets/products/papatya-cayi.webp";
import imgYesilCay             from "@/assets/products/yesil-cay.webp";
import imgSiyahCay             from "@/assets/products/siyah-cay.webp";
// ── Pastalar (real KIFLA photos) ─────────────────────────
import imgCikolatalıPasta        from "@/assets/products/cikolatali-pasta.jpeg";
import imgSeftaliliCoca          from "@/assets/products/seftalili-coca.jpeg";
import imgMeyveliCikolataliPasta from "@/assets/products/meyveli-cikolatali-pasta.jpeg";
import imgCilekliParfe           from "@/assets/products/cilekli-parfe.jpeg";
import imgLotusPasta             from "@/assets/products/lotus-pasta.jpeg";
import imgAcibademPastasi        from "@/assets/products/acibadem-pastasi.jpeg";
import imgRuloPasta              from "@/assets/products/rulo-pasta.jpeg";

import imgSaraySarmasi           from "@/assets/products/saray-sarmasi.jpeg";
import imgParisBrest             from "@/assets/products/paris-brest.avif";
// ── İçecekler (real product photos) ─────────────────────
import imgCocaCola               from "@/assets/products/coca-cola.jpeg";
import imgLiptonLimon            from "@/assets/products/lipton-limon.jpeg";
import imgLiptonSeftali          from "@/assets/products/lipton-seftali.jpeg";
import imgErikliSu               from "@/assets/products/erikli-su.jpeg";
import imgBeypazari              from "@/assets/products/beypazari-maden-suyu.jpeg";
import imgSanPellegrino          from "@/assets/products/san-pellegrino.jpeg";


export type Product = {
  name: string;
  description?: string;
  price?: string;
  image?: string;
  notes?: string;
  allergens?: string;
};

export type Category = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  image: string;
  products: Product[];
};

// Category-level images (used only for section header — NOT passed to ProductCard)
import bosnak     from "@/assets/bosnak.jpg";
import ekmek      from "@/assets/ekmek.jpg";
import kahve      from "@/assets/kahve.jpg";
import sogukKahve from "@/assets/soguk-kahve.jpg";
import pasta      from "@/assets/pasta.jpg";
import dondurma   from "@/assets/dondurma.jpg";
import limonata   from "@/assets/limonata.jpg";
import icecek     from "@/assets/icecek.jpg";
import cay        from "@/assets/cay.jpg";
import meyvesuyu  from "@/assets/meyvesuyu.jpg";

export const categories: Category[] = [
  {
    id: "bosnak",
    title: "Boşnak Lezzetleri",
    subtitle: "Geleneksel Balkan tarifleri, her gün taze hazırlanır.",
    icon: "🥐",
    image: bosnak,
    products: [
      {
        name: "Patatesli Boşnak Böreği",
        description: "El açması yufka, taze patates harcı",
        price: "220 TL",
        image: imgPatatesliBorek,
        notes: "Günlük taze açılır, sınırlı sayıda hazırlanır.",
        allergens: "Gluten, yumurta",
      },
      {
        name: "Ispanaklı Boşnak Böreği",
        description: "Taze ıspanak ve özel peynir karışımı",
        price: "220 TL",
        image: imgIspanakliBorekReal,
        allergens: "Gluten, süt, yumurta",
      },
      {
        name: "Kıymalı Boşnak Mantısı",
        description: "İnce hamur, baharatlı dana kıyma",
        price: "300 TL",
        image: imgKiymaliMantiReal,
        notes: "Yoğurt veya tereyağlı sosla servis edilir.",
        allergens: "Gluten, süt",
      },
      {
        name: "Özbek Mantısı",
        description: "Buharda pişmiş, geleneksel Özbek usulü",
        price: "350 TL",
        image: imgOzbekManti,
        notes: "Özel baharatlı et harcıyla hazırlanır.",
        allergens: "Gluten",
      },
    ],
  },
  {
    id: "ekmek",
    title: "Özel Ekmekler",
    subtitle: "Doğal mayalı, ustaca hazırlanan ekmek sanatı.",
    icon: "🍞",
    image: ekmek,
    products: [
      {
        name: "Avokado Klasik",
        description: "Avokado, taze yeşillik, limon ve zeytinyağı",
        price: "360 TL",
        image: imgAvokado,
        notes: "Ekşi maya ekmekte servis edilir.",
        allergens: "Gluten",
      },
      {
        name: "Hindi Füme Lezzeti",
        description: "Hindi füme, çedar, roka ve hardal sosu",
        price: "360 TL",
        image: imgHindiFume,
        allergens: "Gluten, süt, hardal",
      },
      {
        name: "Mantar Şöleni",
        description: "Sote mantar, kaşar, taze otlar",
        price: "360 TL",
        image: imgMantar,
        allergens: "Gluten, süt",
      },
      {
        name: "Akdeniz Esintisi",
        description: "Beyaz peynir, domates, zeytin, fesleğen",
        price: "360 TL",
        image: imgAkdeniz,
        allergens: "Gluten, süt",
      },
    ],
  },
  {
    id: "sicak-kahve",
    title: "Sıcak Kahveler",
    subtitle: "Özenle seçilmiş çekirdeklerden, ustalıkla hazırlanır.",
    icon: "☕",
    image: kahve,
    products: [
      { name: "Espresso",        price: "100 TL", image: imgEspresso,       notes: "Tek shot, yoğun ve konsantre." },
      { name: "Double Espresso", price: "135 TL", image: imgDoubleEspresso, notes: "İki shot espresso." },
      { name: "Americano",       price: "125 TL", image: imgAmericano,      notes: "Espresso üzerine sıcak su." },
      { name: "Cappuccino",      price: "135 TL", image: imgCappuccino,     notes: "Espresso, buharlı süt ve köpük.", allergens: "Süt" },
      { name: "Latte",           price: "160 TL", image: imgLatte,          notes: "Espresso ve bol buharlı süt.",   allergens: "Süt" },
      { name: "Flat White",      price: "160 TL", image: imgFlatWhite,      notes: "Yoğun espresso, az köpük.",     allergens: "Süt" },
      { name: "Mocha",           price: "175 TL", image: imgMocha,          notes: "Espresso, çikolata, buharlı süt.", allergens: "Süt, kakao" },
      { name: "Macchiato",       price: "140 TL", image: imgMacchiato,    notes: "Espresso üzerine bir miktar köpük.", allergens: "Süt" },
      { name: "Filtre Kahve",    price: "100 TL", image: imgFiltreKahve,  notes: "Günlük öğütülen specialty çekirdek." },
      { name: "Türk Kahvesi",    price: "80 TL",  image: imgTurkKahvesi,  notes: "Geleneksel bakır cezve ile pişirilir." },
      { name: "Sıcak Çikolata",  price: "140 TL", image: imgSicakCikolata, notes: "Belçika çikolatası ile hazırlanır.", allergens: "Süt, kakao" },
    ],
  },
  {
    id: "soguk-kahve",
    title: "Soğuk Kahveler",
    subtitle: "Serinlik ve karakterin buluştuğu özel tarifler.",
    icon: "🧊",
    image: sogukKahve,
    products: [
      { name: "Iced Americano",  price: "145 TL", image: imgIcedAmericano,  notes: "Espresso, buz ve soğuk su." },
      { name: "Iced Latte",      price: "165 TL", image: imgIcedLatte,      notes: "Espresso, buz, soğuk süt.", allergens: "Süt" },
      { name: "Iced Cappuccino", price: "165 TL", image: imgIcedCappuccino, allergens: "Süt" },
      { name: "Iced Mocha",      price: "185 TL", image: imgIcedMocha,      allergens: "Süt, kakao" },
      { name: "Cold Brew",       price: "175 TL", image: imgColdBrew,       notes: "12 saat soğuk demleme, yoğun aroma." },
      { name: "Iced Flat White", price: "170 TL", image: imgIcedFlatWhite,  allergens: "Süt" },
      { name: "Affogato",        price: "175 TL", image: imgAffogato,       notes: "Espresso ve vanilyalı dondurma.", allergens: "Süt" },
      { name: "Frappe",          price: "155 TL", image: imgFrappe,         allergens: "Süt" },
      { name: "Ice Coffee",      price: "140 TL", image: imgIceCoffee },
    ],
  },
  {
    id: "pastalar",
    title: "Pastalar",
    subtitle: "Pastane sanatının zarif yorumları.",
    icon: "🍰",
    image: pasta,
    products: [
      {
        name: "Meyveli Çikolatalı Pasta",
        description: "Bitter çikolata ve mevsim meyveleri",
        image: imgMeyveliCikolataliPasta,
        allergens: "Gluten, süt, yumurta",
      },
      {
        name: "Çikolatalı Pasta",
        description: "Yoğun belçika çikolatası",
        image: imgCikolatalıPasta,
        allergens: "Gluten, süt, yumurta, kakao",
      },
      {
        name: "Lotus Pasta",
        description: "Karamelize lotus bisküvi katmanları",
        image: imgLotusPasta,
        allergens: "Gluten, süt, yumurta",
      },
      {
        name: "Acıbadem Pastası",
        description: "Geleneksel acıbadem tarifi",
        image: imgAcibademPastasi,
        allergens: "Badem, yumurta",
      },
      {
        name: "Rulo Pasta",
        description: "İnce pandispanya rulosu",
        image: imgRuloPasta,
        allergens: "Gluten, süt, yumurta",
      },
      {
        name: "Saray Sarması",
        description: "Hindistan cevizi kaplı hafif sütlü tatlı",
        image: imgSaraySarmasi,
        allergens: "Gluten, süt",
      },
      {
        name: "Çilekli Parfe",
        description: "Taze çilek ve hafif krema",
        image: imgCilekliParfe,
        allergens: "Süt, yumurta",
      },
      {
        name: "Paris Brest",
        description: "Çıtır ekler ve özel kremalı dolgu",
        image: imgParisBrest,
        allergens: "Gluten, süt, yumurta",
      },
      {
        name: "Şeftalili Coca",
        description: "İmza tatlımız — çikolata kabuklu şeftali kremalı",
        image: imgSeftaliliCoca,
        notes: "Günlük sınırlı sayıda hazırlanır.",
      },
    ],
  },
  {
    id: "dondurma",
    title: "Dondurmalar",
    subtitle: "Her top 70 TL · El yapımı, taze süt ile",
    icon: "🍨",
    image: dondurma,
    products: [
      { name: "Vanilya" },
      { name: "Çikolata" },
      { name: "Çilekli" },
      { name: "Antep Fıstıklı" },
      { name: "Bal Bademli" },
      { name: "Karamel" },
      { name: "Limon" },
      { name: "Orman Meyveli" },
    ],
  },
  {
    id: "limonata",
    title: "Ev Yapımı Limonatalar",
    subtitle: "Taze sıkılmış, doğal tariflerle.",
    icon: "🍋",
    image: limonata,
    products: [
      { name: "Çilek Bahçesi",   description: "Taze çilek ve nane",  notes: "Mevsime göre hazırlanır." },
      { name: "Mango Esintisi",  description: "Olgun mango ve limon" },
      { name: "Klasik Limonata", description: "Bol limon, dağ nanesi" },
    ],
  },
  {
    id: "meyvesuyu",
    title: "Taze Sıkılmış Meyve Suları",
    subtitle: "Anında hazırlanır, doğal ve katkısız.",
    icon: "🍊",
    image: meyvesuyu,
    products: [
      { name: "Havuç Elma Suyu", notes: "Taze sıkılır, şeker eklenmez." },
      { name: "Portakal Suyu",   notes: "Günlük taze portakal." },
      { name: "Karpuz Suyu",     notes: "Sezon boyunca geçerlidir." },
    ],
  },
  {
    id: "icecek",
    title: "Soğuk İçecekler",
    subtitle: "Klasikler ve ferah seçenekler.",
    icon: "🍹",
    image: icecek,
    products: [
      { name: "Coca Cola",                 image: imgCocaCola },
      { name: "Lipton Ice Tea Limon",      image: imgLiptonLimon },
      { name: "Lipton Ice Tea Şeftali",    image: imgLiptonSeftali },
      { name: "Erikli Su",                 image: imgErikliSu },
      { name: "Beypazarı Maden Suyu",      image: imgBeypazari },
      { name: "San Pellegrino",            image: imgSanPellegrino },
    ],
  },
  {
    id: "cay",
    title: "Bitki Çayları",
    subtitle: "Dingin anlar için aromatik infüzyonlar.",
    icon: "🍵",
    image: cay,
    products: [
      { name: "Ihlamur Çayı",        image: imgIhlamurCayi,  notes: "Demlik ile servis edilir." },
      { name: "Papatya Çayı",         image: imgPapatyaCayi },
      { name: "Yeşil Çay",            image: imgYesilCay },
      { name: "Sultan Çayı",         description: "Özel baharat karışımı" },
      { name: "Safranlı Mango Çayı", description: "Egzotik ve aromatik" },
      { name: "Siyah Çay" },
    ],
  },
];

export const restaurantConfig = {
  name: "KIFLA",
  tagline: "Artisan Bakery · Coffee · Patisserie",
  hero: {
    est: "Est. Artisan",
    sectionTitle: "Menü",
    brandSign: "— Kifla —",
    title: "KIFLA",
    subtitle: "Artisan Bakery · Coffee · Patisserie",
    quote: "Her gün taze, her detayda zarafet.",
    ctaText: "Menüyü Keşfet",
    searchPlaceholder: "Menüde ara…",
  },
  seo: {
    title: "KIFLA · Artisan Bakery, Coffee & Patisserie",
    description: "KIFLA — premium artisan fırın, özel kahveler, ev yapımı pastalar ve Balkan lezzetlerinden oluşan zarif menü.",
    themeColor: "#F7F3ED",
    ogImage: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6009d8f2-576b-412d-a529-759550be9fca/id-preview-f48f10e4--837f75c4-0901-4b42-bcac-f9ba1da48cba.lovable.app-1780660296857.png",
  },
  contact: {
    phone: "+905555555555",
    whatsapp: "905555555555",
    instagram: "kifla",
  },
  footer: {
    phoneText: "Ara",
    instagramText: "Instagram",
    whatsappText: "WhatsApp",
    copyright: "KIFLA. Tüm hakları saklıdır.",
  },
};

export const contact = restaurantConfig.contact;
