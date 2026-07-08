// ─── Asset imports ──────────────────────────────────────────────────
import bosnak from "@/assets/bosnak.jpg";
import ekmek from "@/assets/ekmek.jpg";
import kahve from "@/assets/kahve.jpg";
import sogukKahve from "@/assets/soguk-kahve.jpg";
import pasta from "@/assets/pasta.jpg";
import dondurma from "@/assets/dondurma.jpg";
import limonata from "@/assets/limonata.jpg";
import icecek from "@/assets/icecek.jpg";
import cay from "@/assets/cay.jpg";
import meyvesuyu from "@/assets/meyvesuyu.jpg";
import kahvaltiTabaklari from "@/assets/kahvalti_tabaklari.png";
import tostlar from "@/assets/tostlar.png";
import serpmeKahvalti from "@/assets/serpme_kahvalti.png";

// ─── Types ──────────────────────────────────────────────────────────
export type Product = {
  name: string;
  description?: string;
  price?: string;
  image?: string;
  allergens?: string[];
  badge?: string;
};

export type Category = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  image: string;
  products: Product[];
};

// ─── Menu Data ──────────────────────────────────────────────────────
export const categories: Category[] = [
  // ── 1. Boşnak Lezzetleri ─────────────────────────────────────────
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
        allergens: ["Gluten", "Yumurta"],
      },
      {
        name: "Ispanaklı Boşnak Böreği",
        description: "Taze ıspanak / Özel peynir karışımı",
        price: "200 TL",
        allergens: ["Gluten", "Süt"],
      },
      {
        name: "Kıymalı Boşnak Mantısı",
        description: "İnce hamur / Baharatlı dana kıyma / Yoğurt sosu",
        price: "350 TL",
        allergens: ["Gluten", "Süt"],
      },
      {
        name: "Özbek Mantısı",
        description: "Buharda pişmiş / Geleneksel Özbek usulü / Özel baharat",
        price: "500 TL",
        allergens: ["Gluten"],
      },
    ],
  },

  // ── 2. Özel Ekmekler ─────────────────────────────────────────────
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
        price: "700 TL",
        allergens: ["Gluten"],
      },
      {
        name: "Hindi Füme Lezzeti",
        description: "Hindi füme / Çedar / Roka / Hardal sosu",
        price: "700 TL",
        allergens: ["Gluten", "Süt"],
      },
      {
        name: "Mantar Şöleni",
        description: "Sote mantar / Kaşar / Taze otlar",
        price: "700 TL",
        allergens: ["Gluten", "Süt"],
      },
      {
        name: "Akdeniz Esintisi",
        description: "Beyaz peynir / Domates / Zeytin / Fesleğen",
        price: "700 TL",
        allergens: ["Gluten", "Süt"],
      },
    ],
  },

  // ── 3. Kahvaltı Tabakları ────────────────────────────────────────
  {
    id: "kahvalti",
    title: "Kahvaltı Tabakları",
    subtitle: "Günün en güzel başlangıcı, taze ve doyurucu.",
    icon: "🍳",
    image: kahvaltiTabaklari,
    products: [
      {
        name: "Peynir Tabağı",
        description: "Çeşit peynirler / Zeytin / Domates / Salatalık",
        price: "350 TL",
        allergens: ["Süt"],
      },
      {
        name: "Menemen",
        description: "Taze domates / Biber / Yumurta / Baharat",
        price: "300 TL",
        allergens: ["Yumurta"],
      },
      {
        name: "Sahanda Yumurta",
        description: "Tereyağı / Taze yumurta",
        price: "200 TL",
        allergens: ["Yumurta", "Süt"],
      },
      {
        name: "Omlet",
        description: "İstenilen malzeme seçeneğiyle",
        price: "280 TL",
        allergens: ["Yumurta", "Süt"],
      },
      {
        name: "Avokadolu Yumurta",
        description: "Avokado / Bütün yumurta / Ekşi maya ekmek",
        price: "400 TL",
        allergens: ["Yumurta", "Gluten"],
      },
    ],
  },

  // ── 4. Tostlar ───────────────────────────────────────────────────
  {
    id: "tostlar",
    title: "Tostlar",
    subtitle: "Çıtır ekmek, özel iç malzemeler.",
    icon: "🥪",
    image: tostlar,
    products: [
      {
        name: "Klasik Tost",
        description: "Kaşar / Sucuk",
        price: "480 TL",
        allergens: ["Gluten", "Süt"],
      },
      {
        name: "Club Sandviç",
        description: "Tavuk / Domates / Marul / Mayonez",
        price: "480 TL",
        allergens: ["Gluten", "Yumurta"],
      },
      {
        name: "Füme Et Tost",
        description: "Füme et / Kaşar / Domates / Hardal",
        price: "480 TL",
        allergens: ["Gluten", "Süt"],
      },
      {
        name: "Mantarlı Tost",
        description: "Sote mantar / Kaşar / Roka",
        price: "480 TL",
        allergens: ["Gluten", "Süt"],
      },
    ],
  },

  // ── 5. Serpme Kahvaltı ───────────────────────────────────────────
  {
    id: "serpme",
    title: "Serpme Kahvaltı",
    subtitle: "Kişi başı · En az 2 kişilik · Rezervasyon önerilir.",
    icon: "☀️",
    image: serpmeKahvalti,
    products: [
      {
        name: "Serpme Kahvaltı",
        description:
          "Peynir çeşitleri / Zeytin / Bal / Kaymak / Domates / Salatalık / Yumurta / Reçel çeşitleri / Taze ekmek",
        price: "1.200 TL",
        allergens: ["Gluten", "Süt", "Yumurta"],
        badge: "Kişi Başı",
      },
    ],
  },

  // ── 6. Sıcak Kahveler ────────────────────────────────────────────
  {
    id: "sicak-kahve",
    title: "Sıcak Kahveler",
    subtitle: "Özenle seçilmiş çekirdeklerden, ustalıkla hazırlanır.",
    icon: "☕",
    image: kahve,
    products: [
      {
        name: "Espresso",
        description: "Tek shot / Yoğun / Konsantre",
        price: "120 TL",
      },
      {
        name: "Double Espresso",
        description: "İki shot / Güçlü aroma",
        price: "150 TL",
      },
      {
        name: "Americano",
        description: "Espresso / Sıcak su",
        price: "150 TL",
      },
      {
        name: "Cappuccino",
        description: "Espresso / Buharlı süt / Köpük",
        price: "180 TL",
        allergens: ["Süt"],
      },
      {
        name: "Latte",
        description: "Espresso / Bol buharlı süt",
        price: "180 TL",
        allergens: ["Süt"],
      },
      {
        name: "Flat White",
        description: "Espresso / İnce süt / Az köpük",
        price: "180 TL",
        allergens: ["Süt"],
      },
      {
        name: "Mocha",
        description: "Espresso / Çikolata / Buharlı süt",
        price: "180 TL",
        allergens: ["Süt"],
      },
      {
        name: "White Mocha",
        description: "Espresso / Beyaz çikolata / Buharlı süt",
        price: "180 TL",
        allergens: ["Süt"],
      },
      {
        name: "Macchiato",
        description: "Espresso / Hafif köpük",
        price: "150 TL",
        allergens: ["Süt"],
      },
      {
        name: "Türk Kahvesi",
        description: "Bakır cezve / Geleneksel tarif",
        price: "120 TL",
      },
      {
        name: "Filtre Kahve",
        description: "Günlük öğütülen / Specialty çekirdek",
        price: "140 TL",
      },
      {
        name: "Sıcak Çikolata",
        description: "Belçika çikolatası / Buharlı süt",
        price: "200 TL",
        allergens: ["Süt"],
      },
    ],
  },

  // ── 7. Soğuk Kahveler ────────────────────────────────────────────
  {
    id: "soguk-kahve",
    title: "Soğuk Kahveler",
    subtitle: "Serinlik ve karakterin buluştuğu özel tarifler.",
    icon: "🧊",
    image: sogukKahve,
    products: [
      {
        name: "Iced Americano",
        description: "Espresso / Buz / Soğuk su",
        price: "170 TL",
      },
      {
        name: "Iced Latte",
        description: "Espresso / Buz / Soğuk süt",
        price: "200 TL",
        allergens: ["Süt"],
      },
      {
        name: "Iced Cappuccino",
        description: "Espresso / Buz / Köpük / Süt",
        price: "200 TL",
        allergens: ["Süt"],
      },
      {
        name: "Iced Mocha",
        description: "Espresso / Çikolata / Buz / Süt",
        price: "220 TL",
        allergens: ["Süt"],
      },
      {
        name: "Cold Brew",
        description: "12 saat soğuk demleme / Yumuşak aroma",
        price: "180 TL",
      },
      {
        name: "Iced Flat White",
        description: "Espresso / Buz / İnce süt",
        price: "200 TL",
        allergens: ["Süt"],
      },
      {
        name: "Affogato",
        description: "Espresso / Vanilya dondurma",
        price: "320 TL",
        allergens: ["Süt"],
      },
      {
        name: "Frappe",
        description: "Kahve / Buz / Süt / Köpük",
        price: "250 TL",
        allergens: ["Süt"],
      },
      {
        name: "Ice Coffee",
        description: "Soğuk baskı kahve / Şeker / Süt",
        price: "200 TL",
        allergens: ["Süt"],
      },
    ],
  },

  // ── 8. Pastalar ──────────────────────────────────────────────────
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
        allergens: ["Gluten", "Süt", "Yumurta"],
      },
      {
        name: "Çikolatalı Pasta",
        description: "Yoğun Belçika çikolatası",
        price: "480 TL",
        allergens: ["Gluten", "Süt", "Yumurta"],
      },
      {
        name: "Lotus Pasta",
        description: "Karamelize lotus bisküvi katmanları",
        price: "480 TL",
        allergens: ["Gluten", "Süt", "Yumurta"],
      },
      {
        name: "Acıbadem Pastası",
        description: "Geleneksel acıbadem tarifi",
        price: "480 TL",
        allergens: ["Gluten", "Fındık", "Yumurta"],
      },
      {
        name: "Rulo Pasta",
        description: "İnce pandispanya rulosu",
        price: "400 TL",
        allergens: ["Gluten", "Süt", "Yumurta"],
      },
      {
        name: "Saray Sarması",
        description: "İncecik yufka / Ceviz / Şerbet",
        price: "300 TL",
        allergens: ["Gluten", "Ceviz"],
      },
      {
        name: "Çilekli Parfe",
        description: "Taze çilek / Hafif krema",
        price: "480 TL",
        allergens: ["Süt", "Yumurta"],
      },
      {
        name: "Paris Brest",
        description: "Çıtır ekler / Fındıklı praline",
        price: "350 TL",
        allergens: ["Gluten", "Süt", "Fındık", "Yumurta"],
      },
      {
        name: "Şeftalili Coca",
        description: "İmza tatlımız",
        price: "550 TL",
        badge: "İmza",
        allergens: ["Gluten", "Süt", "Yumurta"],
      },
    ],
  },

  // ── 9. Bitki Çayları ─────────────────────────────────────────────
  {
    id: "cay",
    title: "Bitki Çayları",
    subtitle: "Dingin anlar için aromatik infüzyonlar.",
    icon: "🍵",
    image: cay,
    products: [
      { name: "Ihlamur Çayı", price: "250 TL" },
      { name: "Papatya Çayı", price: "250 TL" },
      { name: "Sultan Çayı", description: "Özel baharat karışımı", price: "360 TL" },
      { name: "Yeşil Çay", price: "250 TL" },
      { name: "Siyah Çay", price: "50 TL" },
      { name: "Safranlı Mango Çayı", price: "250 TL" },
    ],
  },

  // ── 10. Soğuk İçecekler ──────────────────────────────────────────
  {
    id: "icecek",
    title: "Soğuk İçecekler",
    subtitle: "Klasikler ve ferah seçenekler.",
    icon: "🍹",
    image: icecek,
    products: [
      { name: "Coca Cola", price: "125 TL" },
      { name: "Boza", price: "120 TL" },
      { name: "Lipton Ice Tea Şeftali", price: "125 TL" },
      { name: "Lipton Ice Tea Limon", price: "125 TL" },
      { name: "San Pellegrino", price: "125 TL" },
      { name: "Beypazarı Maden Suyu", price: "60 TL" },
      { name: "Erikli Su", price: "25 TL" },
      { name: "Beyoğlu Gazozu", price: "70 TL" },
    ],
  },

  // ── 11. Dondurmalar ──────────────────────────────────────────────
  {
    id: "dondurma",
    title: "Dondurmalar",
    subtitle: "El yapımı, taze süt ile — Top başı 70 TL",
    icon: "🍨",
    image: dondurma,
    products: [
      { name: "Vanilya", price: "70 TL" },
      { name: "Çikolata", price: "70 TL" },
      { name: "Çilekli", price: "70 TL" },
      { name: "Antep Fıstıklı", price: "70 TL" },
      { name: "Bal Bademli", price: "70 TL" },
      { name: "Karamel", price: "70 TL" },
      { name: "Limon", price: "70 TL" },
      { name: "Orman Meyveli", price: "70 TL" },
    ],
  },

  // ── 12. Ev Yapımı Limonatalar ────────────────────────────────────
  {
    id: "limonata",
    title: "Ev Yapımı Limonatalar",
    subtitle: "Taze sıkılmış, doğal tariflerle.",
    icon: "🍋",
    image: limonata,
    products: [
      {
        name: "Klasik Limonata",
        description: "Bol limon / Dağ nanesi",
        price: "350 TL",
      },
      {
        name: "Çilek Bahçesi",
        description: "Taze çilek / Nane",
        price: "350 TL",
      },
      {
        name: "Mango Esintisi",
        description: "Olgun mango / Limon",
        price: "350 TL",
      },
    ],
  },

  // ── 13. Taze Meyve Suları ────────────────────────────────────────
  {
    id: "meyvesuyu",
    title: "Taze Sıkılmış Meyve Suları",
    subtitle: "Anında hazırlanır, doğal ve katkısız.",
    icon: "🍊",
    image: meyvesuyu,
    products: [
      { name: "Havuç Elma Suyu", price: "350 TL" },
      { name: "Portakal Suyu", price: "350 TL" },
      { name: "Naneli Karpuz Suyu", price: "350 TL" },
    ],
  },
];

// ─── Contact ─────────────────────────────────────────────────────────
export const contact = {
  phone: "+905555555555",
  whatsapp: "905555555555",
  instagram: "kifla",
};
