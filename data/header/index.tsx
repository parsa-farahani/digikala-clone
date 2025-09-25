import { BiMobile } from "react-icons/bi";
import { BsLaptop } from "react-icons/bs";
import { FaToolbox } from "react-icons/fa6";


export const primaryCategories = [
  {
    id: 1,
    name: "موبایل",
    query: "mobile",
    icon: <BiMobile />,
  },
  {
    id: 2,
    name: "لپتاپ",
    query: "laptop",
    icon: <BsLaptop />,
  },
  {
    id: 3,
    name: "ابزارآلات و تجهیزات",
    query: "tools-and-equipment",
    icon: <FaToolbox />,
  },
  {
    id: 4,
    name: "موبایل",
    query: "mobile",
    icon: <BiMobile />,
  },
  {
    id: 5,
    name: "لپتاپ",
    query: "laptop",
    icon: <BsLaptop />,
  },
  {
    id: 6,
    name: "ابزارآلات و تجهیزات",
    query: "tools-and-equipment",
    icon: <FaToolbox />,
  },
  {
    id: 7,
    name: "موبایل",
    query: "mobile",
    icon: <BiMobile />,
  },
  {
    id: 8,
    name: "لپتاپ",
    query: "laptop",
    icon: <BsLaptop />,
  },
  {
    id: 9,
    name: "ابزارآلات و تجهیزات",
    query: "tools-and-equipment",
    icon: <FaToolbox />,
  },
];

export const subCategories = [
  // موبایل subcategories
  { parentId: 1, id: 1, name: "IOS", query: "ios" },
  { parentId: 1, id: 2, name: "اندروید", query: "android" },
  { parentId: 1, id: 3, name: "اکسسوری", query: "accessories" },
  { parentId: 1, id: 4, name: "گوشی‌های اقتصادی", query: "budget-phones" },
  { parentId: 1, id: 5, name: "گوشی‌های پرچمدار", query: "flagship-phones" },
  { parentId: 1, id: 6, name: "گوشی‌های میان‌رده", query: "midrange-phones" },
  { parentId: 1, id: 7, name: "تبلت‌ها", query: "tablets" },

  // لپتاپ subcategories
  { parentId: 2, id: 8, name: "ویندوز", query: "windows" },
  { parentId: 2, id: 9, name: "مک‌بوک", query: "macbook" },
  { parentId: 2, id: 10, name: "لنوو", query: "lenovo" },
  { parentId: 2, id: 11, name: "ایسوس", query: "asus" },
  { parentId: 2, id: 12, name: "اچ‌پی", query: "hp" },
  { parentId: 2, id: 13, name: "گیمینگ", query: "gaming" },
  { parentId: 2, id: 14, name: "اولترابوک", query: "ultrabook" },

  // ابزارآلات و تجهیزات subcategories
  { parentId: 3, id: 15, name: "ابزار دستی", query: "hand-tools" },
  { parentId: 3, id: 16, name: "ابزار برقی", query: "power-tools" },
  { parentId: 3, id: 17, name: "ابزار باغبانی", query: "gardening-tools" },
  { parentId: 3, id: 18, name: "تجهیزات ایمنی", query: "safety-equipment" },
  { parentId: 3, id: 19, name: "تجهیزات کارگاهی", query: "workshop-equipment" },
  { parentId: 3, id: 20, name: "قطعات جانبی", query: "spare-parts" },
  { parentId: 3, id: 21, name: "ابزار اندازه‌گیری", query: "measuring-tools" },
];

export const leafCategories = [
  // موبایل leaf categories
  // IOS (sub id 1)
  { parentId: 1, id: 1, name: "آیفون", query: "iphone" },
  { parentId: 1, id: 2, name: "آیپد", query: "ipad" },
  { parentId: 1, id: 3, name: "اپل واچ", query: "apple-watch" },

  // اندروید (sub id 2)
  { parentId: 2, id: 4, name: "شیائومی", query: "xiaomi" },
  { parentId: 2, id: 5, name: "سامسونگ", query: "samsung" },
  { parentId: 2, id: 6, name: "هواوی", query: "huawei" },
  { parentId: 2, id: 7, name: "وان‌پلاس", query: "oneplus" },

  // اکسسوری (sub id 3)
  { parentId: 3, id: 8, name: "کاور گوشی", query: "phone-covers" },
  { parentId: 3, id: 9, name: "شارژر", query: "chargers" },
  { parentId: 3, id: 10, name: "هندزفری", query: "headphones" },
  { parentId: 3, id: 11, name: "پاوربانک", query: "power-bank" },

  // گوشی‌های اقتصادی (sub id 4)
  { parentId: 4, id: 12, name: "نوکیا", query: "nokia-budget" },
  { parentId: 4, id: 13, name: "ریلمی", query: "realme" },
  { parentId: 4, id: 14, name: "ایسوس", query: "asus-budget" },

  // گوشی‌های پرچمدار (sub id 5)
  { parentId: 5, id: 15, name: "گلکسی S", query: "galaxy-s" },
  { parentId: 5, id: 16, name: "آیفون 13", query: "iphone-13" },
  { parentId: 5, id: 17, name: "گوگل پیکسل", query: "google-pixel" },

  // گوشی‌های میان‌رده (sub id 6)
  { parentId: 6, id: 18, name: "شیائومی ردمی", query: "xiaomi-redmi" },
  { parentId: 6, id: 19, name: "سامسونگ A", query: "samsung-a" },
  { parentId: 6, id: 20, name: "موتورولا", query: "motorola" },

  // تبلت‌ها (sub id 7)
  { parentId: 7, id: 21, name: "سامسونگ گلکسی تب", query: "galaxy-tab" },
  { parentId: 7, id: 22, name: "آیپد پرو", query: "ipad-pro" },
  { parentId: 7, id: 23, name: "مایکروسافت سرفیس", query: "surface" },

  // لپتاپ leaf categories
  // ویندوز (sub id 8)
  { parentId: 8, id: 24, name: "دل", query: "dell" },
  { parentId: 8, id: 25, name: "ایسر", query: "acer" },
  { parentId: 8, id: 26, name: "اچ پی", query: "hp" },

  // مک‌بوک (sub id 9)
  { parentId: 9, id: 27, name: "مک‌بوک ایر", query: "macbook-air" },
  { parentId: 9, id: 28, name: "مک‌بوک پرو", query: "macbook-pro" },

  // لنوو (sub id 10)
  { parentId: 10, id: 29, name: "لنوو تینک‌پد", query: "lenovo-thinkpad" },
  { parentId: 10, id: 30, name: "لنوو یوگا", query: "lenovo-yoga" },

  // ایسوس (sub id 11)
  { parentId: 11, id: 31, name: "ایسوس زن‌بوک", query: "asus-zenbook" },
  { parentId: 11, id: 32, name: "ایسوس روگ", query: "asus-rog" },

  // اچ‌پی (sub id 12)
  { parentId: 12, id: 33, name: "اچ‌پی اسپکتر", query: "hp-spectre" },
  { parentId: 12, id: 34, name: "اچ‌پی انوی", query: "hp-envy" },

  // گیمینگ (sub id 13)
  { parentId: 13, id: 35, name: "ام اس آی", query: "msi" },
  { parentId: 13, id: 36, name: "ایسوس روگ", query: "asus-rog" },
  { parentId: 13, id: 37, name: "دل آلین ور", query: "dell-alienware" },

  // اولترابوک (sub id 14)
  { parentId: 14, id: 38, name: "دل ایکس پی اس", query: "dell-xps" },
  { parentId: 14, id: 39, name: "لنوو تینک‌پد", query: "lenovo-thinkpad-ultrabook" },

  // ابزارآلات و تجهیزات leaf categories
  // ابزار دستی (sub id 15)
  { parentId: 15, id: 40, name: "چکش", query: "hammer" },
  { parentId: 15, id: 41, name: "پیچ‌گوشتی", query: "screwdriver" },
  { parentId: 15, id: 42, name: "آچار", query: "wrench" },
  { parentId: 15, id: 43, name: "انبردست", query: "pliers" },

  // ابزار برقی (sub id 16)
  { parentId: 16, id: 44, name: "دریل برقی", query: "electric-drill" },
  { parentId: 16, id: 45, name: "فرز", query: "grinder" },
  { parentId: 16, id: 46, name: "اره برقی", query: "electric-saw" },

  // ابزار باغبانی (sub id 17)
  { parentId: 17, id: 47, name: "قیچی باغبانی", query: "pruner" },
  { parentId: 17, id: 48, name: "بیل", query: "shovel" },
  { parentId: 17, id: 49, name: "علف‌زن", query: "weed-trimmer" },

  // تجهیزات ایمنی (sub id 18)
  { parentId: 18, id: 50, name: "کلاه ایمنی", query: "helmet" },
  { parentId: 18, id: 51, name: "دستکش ایمنی", query: "safety-gloves" },
  { parentId: 18, id: 52, name: "عینک ایمنی", query: "safety-glasses" },

  // تجهیزات کارگاهی (sub id 19)
  { parentId: 19, id: 53, name: "میز کار", query: "workbench" },
  { parentId: 19, id: 54, name: "کمد ابزار", query: "tool-cabinet" },

  // قطعات جانبی (sub id 20)
  { parentId: 20, id: 55, name: "باطری", query: "battery" },
  { parentId: 20, id: 56, name: "کابل", query: "cable" },

  // ابزار اندازه‌گیری (sub id 21)
  { parentId: 21, id: 57, name: "کولیس", query: "caliper" },
  { parentId: 21, id: 58, name: "متر", query: "tape-measure" },
];