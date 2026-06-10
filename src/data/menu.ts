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
import imgMocha                  from "@/assets/products/mocha-real.jpeg";
import imgMacchiato              from "@/assets/products/macchiato-real.jpeg";
import imgFiltreKahve            from "@/assets/products/filtre-kahve.webp";
import imgTurkKahvesi            from "@/assets/products/turk-kahvesi-real.jpeg";
import imgSicakCikolata          from "@/assets/products/sicak-cikolata-real.jpeg";
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
import imgSultanCayi             from "@/assets/products/sultan-cayi.jpg";
import imgSafranliMangoCayi      from "@/assets/products/safranli-mango-cayi.jpg";

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
import imgBoza                   from "@/assets/products/boza.jpeg";
import imgBeyogluGazozu          from "@/assets/products/beyoglu-gazozu.jpeg";

// ── Limonata ve Meyve Suyu ──────────────────────────────
import imgLimonataCilekBahcesi   from "@/assets/products/limonata-cilek-bahcesi.jpg";
import imgLimonataMangoEsintisi  from "@/assets/products/limonata-mango-esintisi.jpg";
import imgLimonataTaze           from "@/assets/products/limonata-taze.jpg";
import imgHavucElmaSuyu          from "@/assets/products/havuc-elma-suyu.jpg";
import imgPortakalSuyu           from "@/assets/products/portakal-suyu.jpg";
import imgTazeMeyveSuyu          from "@/assets/products/taze-meyve-suyu.jpg";

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
        description: "El açması yufka / Taze patates harcı",
        price: "200 TL",
        image: imgPatatesliBorek,
        allergens: "Gluten, yumurta",
      },
      {
        name: "Ispanaklı Boşnak Böreği",
        description: "Taze ıspanak / Özel peynir karışımı",
        price: "200 TL",
        image: imgIspanakliBorekReal,
        allergens: "Gluten, süt",
      },
      {
        name: "Kıymalı Boşnak Mantısı",
        description: "İnce hamur / Baharatlı dana kıyma / Yoğurt sosu",
        price: "350 TL",
        image: imgKiymaliMantiReal,
        allergens: "Gluten, süt",
      },
      {
        name: "Özbek Mantısı",
        description: "Buharda pişmiş / Geleneksel Özbek usulü / Özel baharat",
        price: "450 TL",
        image: imgOzbekManti,
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
        description: "Avokado / Taze yeşillik / Limon / Zeytinyağı",
        price: "600 TL",
        image: imgAvokado,
        allergens: "Gluten",
      },
      {
        name: "Hindi Füme Lezzeti",
        description: "Hindi füme / Çedar / Roka / Hardal sosu",
        price: "600 TL",
        image: imgHindiFume,
        allergens: "Gluten, süt",
      },
      {
        name: "Mantar Şöleni",
        description: "Sote mantar / Kaşar / Taze otlar",
        price: "600 TL",
        image: imgMantar,
        allergens: "Gluten, süt",
      },
      {
        name: "Akdeniz Esintisi",
        description: "Beyaz peynir / Domates / Zeytin / Fesleğen",
        price: "600 TL",
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
      { name: "Espresso",        price: "120 TL", image: imgEspresso,       description: "Tek shot / Yoğun / Konsantre" },
      { name: "Double Espresso", price: "150 TL", image: imgDoubleEspresso, description: "İki shot / Güçlü aroma" },
      { name: "Americano",       price: "150 TL", image: imgAmericano,      description: "Espresso / Sıcak su" },
      { name: "Cappuccino",      price: "180 TL", image: imgCappuccino,     description: "Espresso / Buharlı süt / Köpük" },
      { name: "Latte",           price: "180 TL", image: imgLatte,          description: "Espresso / Bol buharlı süt" },
      { name: "Flat White",      price: "180 TL", image: imgFlatWhite,      description: "Espresso / İnce süt / Az köpük" },
      { name: "Mocha",           price: "180 TL", image: imgMocha,          description: "Espresso / Çikolata / Buharlı süt" },
      { name: "White Mocha",     price: "180 TL", image: imgWhiteMocha,     description: "Espresso / Beyaz çikolata / Buharlı süt", notes: "Yeni" },
      { name: "Macchiato",       price: "150 TL", image: imgMacchiato,      description: "Espresso / Hafif köpük" },
      { name: "Türk Kahvesi",    price: "120 TL", image: imgTurkKahvesi,    description: "Bakır cezve / Geleneksel tarif" },
      { name: "Filtre Kahve",    price: "140 TL", image: imgFiltreKahve,    description: "Günlük öğütülen / Specialty çekirdek" },
      { name: "Sıcak Çikolata",  price: "200 TL", image: imgSicakCikolata,  description: "Belçika çikolatası / Buharlı süt" },
    ],
  },
  {
    id: "soguk-kahve",
    title: "Soğuk Kahveler",
    subtitle: "Serinlik ve karakterin buluştuğu özel tarifler.",
    icon: "🧊",
    image: sogukKahve,
    products: [
      { name: "Iced Americano",  price: "170 TL", image: imgIcedAmericano,  description: "Espresso / Buz / Soğuk su" },
      { name: "Iced Latte",      price: "200 TL", image: imgIcedLatte,      description: "Espresso / Buz / Soğuk süt" },
      { name: "Iced Cappuccino", price: "200 TL", image: imgIcedCappuccino, description: "Espresso / Buz / Köpük / Süt" },
      { name: "Iced Mocha",      price: "220 TL", image: imgIcedMocha,      description: "Espresso / Çikolata / Buz / Süt" },
      { name: "Cold Brew",       price: "180 TL", image: imgColdBrew,       description: "12 saat soğuk demleme / Yoğun aroma" },
      { name: "Iced Flat White", price: "200 TL", image: imgIcedFlatWhite,  description: "Espresso / Buz / İnce süt" },
      { name: "Affogato",        price: "220 TL", image: imgAffogato,       description: "Espresso / Vanilyalı dondurma" },
      { name: "Frappe",          price: "240 TL", image: imgFrappe,         description: "Espresso / Buz / Köpük" },
      { name: "Ice Coffee",      price: "160 TL", image: imgIceCoffee,      description: "Soğuk kahve / Buz" },
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
        description: "Bitter çikolata / Mevsim meyveleri",
        price: "480 TL",
        image: imgMeyveliCikolataliPasta,
        allergens: "Gluten, süt",
      },
      {
        name: "Çikolatalı Pasta",
        description: "Yoğun Belçika çikolatası",
        price: "480 TL",
        image: imgCikolatalıPasta,
        allergens: "Gluten, süt",
      },
      {
        name: "Lotus Pasta",
        description: "Karamelize lotus bisküvi",
        price: "480 TL",
        image: imgLotusPasta,
        allergens: "Gluten, süt",
      },
      {
        name: "Acıbadem Pastası",
        description: "Geleneksel acıbadem tarifi",
        price: "480 TL",
        image: imgAcibademPastasi,
        allergens: "Badem, yumurta",
      },
      {
        name: "Rulo Pasta",
        description: "İnce pandispanya rulosu",
        price: "480 TL",
        image: imgRuloPasta,
        allergens: "Gluten, süt",
      },
      {
        name: "Saray Sarması",
        description: "Hindistan cevizi / Hafif sütlü tatlı",
        price: "480 TL",
        image: imgSaraySarmasi,
      },
      {
        name: "Çilekli Parfe",
        description: "Taze çilek / Hafif krema",
        price: "480 TL",
        image: imgCilekliParfe,
        allergens: "Süt",
      },
      {
        name: "Paris Brest",
        description: "Çıtır ekler / Özel kremalı dolgu",
        price: "350 TL",
        image: imgParisBrest,
        allergens: "Gluten",
      },
      {
        name: "Şeftalili Coca",
        description: "Çikolata kabuğu / Şeftali kreması",
        price: "480 TL",
        image: imgSeftaliliCoca,
        notes: "İmza / Sınırlı sayıda",
      },
    ],
  },
  {
    id: "cay",
    title: "Bitki Çayları",
    subtitle: "Dingin anlar için aromatik infüzyonlar.",
    icon: "🍵",
    image: cay,
    products: [
      { name: "Ihlamur Çayı",        price: "250 TL", image: imgIhlamurCayi,       description: "Demlik servisi / Sakinleştirici" },
      { name: "Papatya Çayı",        price: "250 TL", image: imgPapatyaCayi,       description: "Ferah / Hafif ve aromatik" },
      { name: "Sultan Çayı",         price: "250 TL", image: imgSultanCayi,        description: "Tarçın / Kakule / Karanfil / Özel baharat" },
      { name: "Yeşil Çay",           price: "250 TL", image: imgYesilCay,          description: "Antioksidan / Hafif ve taze" },
      { name: "Siyah Çay",           price: "40 TL",  image: imgSiyahCay,          description: "Klasik demleme / Türk usulü" },
      { name: "Safranlı Mango Çayı", price: "250 TL", image: imgSafranliMangoCayi, description: "Safran / Taze mango / Egzotik aroma" },
    ],
  },
  {
    id: "icecek",
    title: "Soğuk İçecekler",
    subtitle: "Klasikler ve ferah seçenekler.",
    icon: "🍹",
    image: icecek,
    products: [
      { name: "Coca Cola",                 price: "125 TL", image: imgCocaCola },
      { name: "Boza",                      price: "120 TL", image: imgBoza },
      { name: "Lipton Ice Tea Şeftali",    price: "125 TL", image: imgLiptonSeftali },
      { name: "Lipton Ice Tea Limon",      price: "125 TL", image: imgLiptonLimon },
      { name: "San Pellegrino",            price: "125 TL", image: imgSanPellegrino },
      { name: "Beypazarı Maden Suyu",      price: "60 TL",  image: imgBeypazari },
      { name: "Erikli Su",                 price: "25 TL",  image: imgErikliSu },
      { name: "Beyoğlu Gazozu",            price: "70 TL",  image: imgBeyogluGazozu },
    ],
  },
  {
    id: "dondurma",
    title: "Dondurmalar",
    subtitle: "Her top 70 TL · El yapımı, taze süt ile",
    icon: "🍨",
    image: dondurma,
    products: [
      { name: "Vanilya",         price: "70 TL" },
      { name: "Çikolata",        price: "70 TL" },
      { name: "Çilekli",         price: "70 TL" },
      { name: "Antep Fıstıklı",  price: "70 TL" },
      { name: "Bal Bademli",     price: "70 TL" },
      { name: "Karamel",         price: "70 TL" },
      { name: "Limon",           price: "70 TL" },
      { name: "Orman Meyveli",   price: "70 TL" },
    ],
  },
  {
    id: "limonata",
    title: "Ev Yapımı Limonatalar",
    subtitle: "Taze sıkılmış, doğal tariflerle.",
    icon: "🍋",
    image: limonata,
    products: [
      { name: "Klasik Limonata", price: "350 TL", description: "Bol limon, dağ nanesi", image: imgLimonataTaze, notes: "500 ML 2 KİŞİLİK" },
      { name: "Çilek Bahçesi",   price: "350 TL", description: "Taze çilek / Nane", image: imgLimonataCilekBahcesi, notes: "500 ML 2 KİŞİLİK" },
      { name: "Mango Esintisi",  price: "350 TL", description: "Olgun mango ve limon", image: imgLimonataMangoEsintisi, notes: "500 ML 2 KİŞİLİK" },
    ],
  },
  {
    id: "meyvesuyu",
    title: "Taze Sıkılmış Meyve Suları",
    subtitle: "Anında hazırlanır, doğal ve katkısız.",
    icon: "🍊",
    image: meyvesuyu,
    products: [
      { name: "Havuç Elma Suyu", price: "200 TL", image: imgHavucElmaSuyu, description: "Bol limon, dağ nanesi" },
      { name: "Portakal Suyu",   price: "200 TL", image: imgPortakalSuyu,   description: "Taze çilek / Nane" },
      { name: "Karpuz Suyu",     price: "200 TL", image: imgTazeMeyveSuyu,  description: "Olgun mango ve limon" },
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
    instagram: "thekifla",
  },
  footer: {
    phoneText: "Ara",
    instagramText: "Instagram",
    whatsappText: "WhatsApp",
    copyright: "KIFLA. Tüm hakları saklıdır.",
  },
};

export const contact = restaurantConfig.contact;
