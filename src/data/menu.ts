// ── Boşnak (AI generated + real photos) ─────────────────
import imgPatatesliBorek         from "@/assets/products/patatesli-bosnak-boregi.jpg";
import imgIspanakliBorekReal     from "@/assets/products/ispanakli-bosnak-boregi-real.jpeg";
import imgKiymaliMantiReal       from "@/assets/products/kiymali-bosnak-mantisi-real.jpeg";
import imgOzbekManti             from "@/assets/products/ozbek-mantisi.jpg";

// ── Ev Yapımı Lezzetler ──────────────────────────────────
import imgYaprakSarmasi          from "@/assets/products/YaprakSarması.jpeg";
import imgKarisikKuruDolma       from "@/assets/products/KarışıkKuruDolma.jpeg";

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
import imgMocha                  from "@/assets/products/mocha-real.jpeg";
import imgMacchiato              from "@/assets/products/macchiato-real.jpeg";
import imgWhiteMocha             from "@/assets/products/white-mocha.jpeg";

// ── Soğuk Kahveler ───────────────────────────────────────
import imgIcedAmericano          from "@/assets/products/iced-americano.webp";
import imgIcedLatte              from "@/assets/products/iced-latte.webp";
import imgIcedCappuccino         from "@/assets/products/iced-cappuccino.webp";
import imgIcedMocha              from "@/assets/products/iced-mocha.webp";
import imgColdBrew               from "@/assets/products/cold-brew.webp";
import imgIcedFlatWhite          from "@/assets/products/iced-flat-white.webp";
import imgAffogato               from "@/assets/products/affogato.webp";
import imgFrappe                 from "@/assets/products/frappe.webp";
import imgIceCoffee              from "@/assets/products/ice-coffee.webp";

// ── Bitki Çayları ────────────────────────────────────────
import imgIhlamurCayi            from "@/assets/products/ihlamur-cayi.webp";
import imgPapatyaCayi            from "@/assets/products/papatya-cayi.webp";
import imgYesilCay               from "@/assets/products/yesil-cay.webp";
import imgSiyahCay               from "@/assets/products/siyah-cay.webp";
import imgSultanCayi             from "@/assets/products/ChatGPT Image 27 Tem 2026 19_12_54.png";
import imgSafranliMangoCayi      from "@/assets/products/safranli-mango-cayi.jpg";

// ── Pastalar (real KIFLA photos) ─────────────────────────
import imgAcibademPastasi        from "@/assets/products/cilekli-parfe.jpeg";
import imgParisBrest             from "@/assets/products/paris-brest.avif";
import imgBalliCevizliMarlenka   from "@/assets/products/BallıCevizliDondurmalıMarlenka.jpeg";
import imgAntepFistikliMarlenka  from "@/assets/products/AntepFıstıklıDondurmalıMarlenka.jpeg";

// ── İçecekler (real product photos) ─────────────────────
import imgCocaCola               from "@/assets/products/coca-cola.jpeg";
import imgLiptonLimon            from "@/assets/products/lipton-limon.jpeg";
import imgLiptonSeftali          from "@/assets/products/lipton-seftali.jpeg";
import imgErikliSu               from "@/assets/products/erikli-su.jpeg";
import imgBeypazari              from "@/assets/products/beypazari-maden-suyu.jpeg";
import imgSanPellegrino          from "@/assets/products/san-pellegrino.jpeg";
import imgBoza                   from "@/assets/products/boza.jpeg";
import imgBeyogluGazozu          from "@/assets/products/beyoglu-gazozu.jpeg";

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
import limonata   from "@/assets/limonata.jpg";
import icecek     from "@/assets/icecek.jpg";
import cay        from "@/assets/cay.jpg";
import meyvesuyu  from "@/assets/meyvesuyu.jpg";

import kahvaltiTabaklariImage from "@/assets/kahvalti_tabaklari.png";
import tostlarImage from "@/assets/tostlar.png";
import serpmeImage from "@/assets/serpme_kahvalti.png";

import imgKiflaKlasik from "@/assets/products/kiflakaslik.png";
import imgBalkanTostu from "@/assets/products/balkantostu.png";
import imgDortPeynirliTost from "@/assets/products/dörtpeynirlitost.png";
import imgAkdenizTostu from "@/assets/products/akdeniztostu.png";

import imgSerpmeKahvalti from "@/assets/products/ChatGPT Image 27 Tem 2026 18_02_33.png";

// ── Yeni AI görselleri (2026-07-27/28) ───────────────────
import imgKlasikKahvaltiNew  from "@/assets/products/ChatGPT Image 27 Tem 2026 17_53_24.png";
import imgBalkanKahvaltisiNew from "@/assets/products/ChatGPT Image 27 Tem 2026 17_56_37.png";
import imgSicakCikolataNew   from "@/assets/products/ChatGPT Image 27 Tem 2026 18_05_51 (1).png";
import imgFiltreKahveNew     from "@/assets/products/ChatGPT Image 27 Tem 2026 18_13_48.png";
import imgTurkKahvesiNew     from "@/assets/products/ChatGPT Image 27 Tem 2026 18_16_48.png";
import imgKlasikLimonataNew  from "@/assets/products/ChatGPT Image 27 Tem 2026 18_24_39.png";
import imgCilekBahcesiNew    from "@/assets/products/ChatGPT Image 27 Tem 2026 18_37_09.png";
import imgMangoEsintisiNew   from "@/assets/products/ChatGPT Image 27 Tem 2026 18_45_08 (1).png";
import imgHavucElmaSuyuNew   from "@/assets/products/ChatGPT Image 27 Tem 2026 18_49_37.png";
import imgPortakalSuyuNew    from "@/assets/products/ChatGPT Image 27 Tem 2026 18_51_39.png";
import imgKarpuzSuyuNew      from "@/assets/products/ChatGPT Image 27 Tem 2026 18_54_21.png";
import imgDondurmaVitrinNew  from "@/assets/products/ChatGPT Image 27 Tem 2026 19_09_11.png";
import imgLimonluCheesecakeNew      from "@/assets/products/ChatGPT Image 28 Tem 2026 10_03_17.png";
import imgOrmanMeyveliCheesecakeNew from "@/assets/products/ChatGPT Image 28 Tem 2026 10_04_45.png";

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
        price: "250 TL",
        image: imgPatatesliBorek,
      },
      {
        name: "Ispanaklı Boşnak Böreği",
        price: "250 TL",
        image: imgIspanakliBorekReal,
      },
      {
        name: "Kıymalı Boşnak Mantısı",
        price: "450 TL",
        image: imgKiymaliMantiReal,
      },
      {
        name: "Özbek Mantısı",
        price: "500 TL",
        image: imgOzbekManti,
      },
    ],
  },
  {
    id: "ev-yapimi",
    title: "Ev Yapımı Lezzetler",
    subtitle: "Geleneksel tariflerle hazırlanan ev lezzetleri.",
    icon: "🏠",
    image: imgYaprakSarmasi,
    products: [
      {
        name: "Yaprak Sarması",
        price: "450 TL",
        notes: "Porsiyon",
        description: "Özel iç harçla hazırlanan yaprak sarma, sarımsaklı yoğurt ve tereyağlı sos eşliğinde.",
        image: imgYaprakSarmasi,
      },
      {
        name: "Kuru Patlıcan Dolması",
        price: "450 TL",
        notes: "Porsiyon",
        description: "Geleneksel baharatlı iç harçla doldurulan kuru patlıcan, yoğurt eşliğinde.",
        image: imgKarisikKuruDolma,
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
        price: "700 TL",
        image: imgAvokado,
      },
      {
        name: "Hindi Füme Lezzeti",
        price: "700 TL",
        image: imgHindiFume,
      },
      {
        name: "Mantar Şöleni",
        price: "700 TL",
        image: imgMantar,
      },
      {
        name: "Akdeniz Esintisi",
        price: "700 TL",
        image: imgAkdeniz,
      },
    ],
  },
  {
    id: "kahvalti-tabaklari",
    title: "Kahvaltı Tabakları",
    subtitle: "Güne enerjik bir başlangıç.",
    icon: "🍳",
    image: kahvaltiTabaklariImage,
    products: [
      { name: "Klasik Kahvaltı", price: "600 TL", image: imgKlasikKahvaltiNew },
      { name: "Balkan Kahvaltısı", price: "800 TL", image: imgBalkanKahvaltisiNew },
    ],
  },
  {
    id: "tostlar",
    title: "Tostlar",
    subtitle: "Çıtır lezzetler.",
    icon: "🥪",
    image: tostlarImage,
    products: [
      { name: "Kifla Klasik", price: "480 TL", notes: "Yanında söğüş tabağı ile servis edilir.", image: imgKiflaKlasik },
      { name: "Balkan Tostu", price: "480 TL", notes: "Yanında söğüş tabağı ile servis edilir.", image: imgBalkanTostu },
      { name: "Dört Peynirli", price: "480 TL", notes: "Yanında söğüş tabağı ile servis edilir.", image: imgDortPeynirliTost },
      { name: "Akdeniz Tostu", price: "480 TL", notes: "Yanında söğüş tabağı ile servis edilir.", image: imgAkdenizTostu },
    ],
  },
  {
    id: "serpme",
    title: "Serpme Kahvaltı",
    subtitle: "Pazar gününe özel · Özenle hazırlanan serpme deneyimi",
    icon: "🍳",
    image: serpmeImage,
    products: [
      { 
        name: "Serpme Kahvaltı", 
        price: "1200 TL",
        image: imgSerpmeKahvalti,
        notes: "Kişi Başı",
        description: "Lukanka · Balkan sosu · Seçkin peynirler · Ev yapımı reçeller · Bal & kaymak · Taze söğüşler · Günlük börekler · Sıcak kahvaltılıklar · Özel ekmekler · Sınırsız çay" 
      }
    ],
  },
  {
    id: "sicak-kahve",
    title: "Sıcak Kahveler",
    subtitle: "Özenle seçilmiş çekirdeklerden, ustalıkla hazırlanır.",
    icon: "☕",
    image: kahve,
    products: [
      { name: "Espresso",        price: "150 TL", image: imgEspresso },
      { name: "Double Espresso", price: "200 TL", image: imgDoubleEspresso },
      { name: "Americano",       price: "200 TL", image: imgAmericano },
      { name: "Cappuccino",      price: "250 TL", image: imgCappuccino },
      { name: "Latte",           price: "270 TL", image: imgLatte },
      { name: "Flat White",      price: "270 TL", image: imgFlatWhite },
      { name: "Mocha",           price: "300 TL", image: imgMocha },
      { name: "White Mocha",     price: "300 TL", image: imgWhiteMocha },
      { name: "Macchiato",       price: "200 TL", image: imgMacchiato },
      { name: "Türk Kahvesi",    price: "200 TL", image: imgTurkKahvesiNew },
      { name: "Filtre Kahve",    price: "200 TL", image: imgFiltreKahveNew },
      { name: "Sıcak Çikolata",  price: "350 TL", image: imgSicakCikolataNew },
    ],
  },
  {
    id: "soguk-kahve",
    title: "Soğuk Kahveler",
    subtitle: "Serinlik ve karakterin buluştuğu özel tarifler.",
    icon: "🧊",
    image: sogukKahve,
    products: [
      { name: "Iced Americano",  price: "200 TL", image: imgIcedAmericano },
      { name: "Iced Latte",      price: "270 TL", image: imgIcedLatte },
      { name: "Iced Cappuccino", price: "250 TL", image: imgIcedCappuccino },
      { name: "Iced Mocha",      price: "320 TL", image: imgIcedMocha },
      { name: "Cold Brew",       price: "280 TL", image: imgColdBrew },
      { name: "Iced Flat White", price: "270 TL", image: imgIcedFlatWhite },
      { name: "Affogato",        price: "320 TL", image: imgAffogato },
      { name: "Frappe",          price: "300 TL", image: imgFrappe },
      { name: "Ice Coffee",      price: "250 TL", image: imgIceCoffee },
    ],
  },
  {
    id: "pastalar",
    title: "Pastalar",
    subtitle: "Pastane sanatının zarif yorumları.",
    icon: "🍰",
    image: pasta,
    products: [
      { name: "Acıbadem Pastası",         price: "480 TL", image: imgAcibademPastasi },
      { name: "Paris Brest",              price: "350 TL", image: imgParisBrest },
      { name: "Ballı Cevizli Dondurmalı Marlenka",  price: "520 TL", image: imgBalliCevizliMarlenka },
      { name: "Antep Fıstıklı Dondurmalı Marlenka", price: "520 TL", image: imgAntepFistikliMarlenka },
      { name: "Limonlu Cheesecake",                 price: "480 TL", image: imgLimonluCheesecakeNew },
      { name: "Orman Meyveli Cheesecake",           price: "480 TL", image: imgOrmanMeyveliCheesecakeNew },
    ],
  },
  {
    id: "cay",
    title: "Bitki Çayları",
    subtitle: "Dingin anlar için aromatik infüzyonlar.",
    icon: "🍵",
    image: cay,
    products: [
      { name: "Sultan Çayı",         price: "400 TL", image: imgSultanCayi },
      { name: "Ihlamur Çayı",        price: "350 TL", image: imgIhlamurCayi },
      { name: "Papatya Çayı",        price: "350 TL", image: imgPapatyaCayi },
      { name: "Yeşil Çay",           price: "350 TL", image: imgYesilCay },
      { name: "Safranlı Mango Çayı", price: "400 TL", image: imgSafranliMangoCayi },
      { name: "Siyah Çay",           price: "80 TL",  image: imgSiyahCay },
    ],
  },
  {
    id: "icecek",
    title: "Soğuk İçecekler",
    subtitle: "Klasikler ve ferah seçenekler.",
    icon: "🍹",
    image: icecek,
    products: [
      { name: "Coca-Cola",                 price: "150 TL", image: imgCocaCola },
      { name: "Boza",                      price: "120 TL", image: imgBoza },
      { name: "Lipton Ice Tea Şeftali",    price: "150 TL", image: imgLiptonSeftali },
      { name: "Lipton Ice Tea Limon",      price: "150 TL", image: imgLiptonLimon },
      { name: "San Pellegrino",            price: "160 TL", image: imgSanPellegrino },
      { name: "Beypazarı Maden Suyu",      price: "90 TL",  image: imgBeypazari },
      { name: "Erikli Su",                 price: "35 TL",  image: imgErikliSu },
      { name: "Beyoğlu Gazozu",            price: "100 TL", image: imgBeyogluGazozu },
    ],
  },
  {
    id: "dondurma",
    title: "Dondurmalar",
    subtitle: "Diğer çeşitlerde her top 80 TL · Antep Fıstıklı 150 TL",
    icon: "🍨",
    image: imgDondurmaVitrinNew,
    products: [
      { name: "Vanilya",         price: "80 TL" },
      { name: "Çikolata",        price: "80 TL" },
      { name: "Çilekli",         price: "80 TL" },
      { name: "Bal Bademli",     price: "80 TL" },
      { name: "Karamel",         price: "80 TL" },
      { name: "Limon",           price: "80 TL" },
      { name: "Orman Meyveli",   price: "80 TL" },
      { name: "Antep Fıstıklı",  price: "150 TL" },
    ],
  },
  {
    id: "limonata",
    title: "Ev Yapımı Limonatalar",
    subtitle: "Taze sıkılmış, doğal tariflerle.",
    icon: "🍋",
    image: limonata,
    products: [
      { name: "Klasik Limonata", price: "400 TL", image: imgKlasikLimonataNew },
      { name: "Çilek Bahçesi",   price: "400 TL", image: imgCilekBahcesiNew },
      { name: "Mango Esintisi",  price: "400 TL", image: imgMangoEsintisiNew },
    ],
  },
  {
    id: "meyvesuyu",
    title: "Taze Meyve Suları",
    subtitle: "Anında hazırlanır, doğal ve katkısız.",
    icon: "🍊",
    image: meyvesuyu,
    products: [
      { name: "Havuç Elma Suyu", price: "420 TL", image: imgHavucElmaSuyuNew },
      { name: "Portakal Suyu",   price: "420 TL", image: imgPortakalSuyuNew },
      { name: "Naneli Karpuz Suyu", price: "500 TL", image: imgKarpuzSuyuNew },
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
    instagram: "kiflakafe",
  },
  footer: {
    phoneText: "Ara",
    instagramText: "Instagram",
    whatsappText: "WhatsApp",
    copyright: "KIFLA. Tüm hakları saklıdır.",
  },
};

export const contact = restaurantConfig.contact;
