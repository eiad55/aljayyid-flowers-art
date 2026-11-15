/**
 * Brand Tokens — متغيرات العلامة التجارية
 * مستوحاة من دليل الهوية البصرية 2026
 */
export const BRAND_COLORS = {
  primary:    "#183325",   // أخضر أساسي
  olive:      "#8A9960",   // أخضر زيتوني
  dustyRose:  "#C98D7D",   // وردي ترابي
  cream:      "#F5F1E7",   // عاجي دافئ — خلفية الصفحة
  champagne:  "#DCC7A8",   // بيج شامبين
};

/** Navigation */
export const NAV_ITEMS = [
  { id: "occasions", label: "مناسباتنا" },
  { id: "gallery",   label: "أعمالنا"   },
  { id: "why",       label: "تميّزنا"   },
  { id: "branches",  label: "فروعنا"    },
  { id: "contact",   label: "تواصل"     },
];

/** Occasions — مع صور Unsplash حقيقية */
export const OCCASIONS = [
  {
    id:    "wed",
    emoji: "💍",
    ar:    "الأعراس والخطوبة",
    desc:  "تنسيقات تليق بأجمل لحظاتك",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80&auto=format&fit=crop",
  },
  {
    id:    "love",
    emoji: "🌹",
    ar:    "تعبير عن الحب",
    desc:  "ورد يحمل أعمق مشاعرك",
    image: "https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?w=600&q=80&auto=format&fit=crop",
  },
  {
    id:    "grad",
    emoji: "🎓",
    ar:    "التخرج والتكريم",
    desc:  "احتفل بالنجاح بأبهى صورة",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&q=80&auto=format&fit=crop",
  },
  {
    id:    "home",
    emoji: "🏡",
    ar:    "منزل جديد",
    desc:  "لمسة جمال تزيّن كل ركن",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80&auto=format&fit=crop",
  },
  {
    id:    "corp",
    emoji: "💼",
    ar:    "إهداء الشركات",
    desc:  "هدايا راقية لعملائك وشركائك",
    image: "https://images.unsplash.com/photo-1490750967868-88df5691cc6d?w=600&q=80&auto=format&fit=crop",
  },
  {
    id:    "bday",
    emoji: "🎂",
    ar:    "أعياد الميلاد",
    desc:  "اجعل يومهم لا يُنسى",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80&auto=format&fit=crop",
  },
];

/** Products — معرض المنتجات بصور حقيقية */
export const PRODUCTS = [
  {
    id:       1,
    category: "wed",
    name:     "باقة زفاف ملكية",
    price:    "من ٣٥٠ ريال",
    image:    "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&q=80&auto=format&fit=crop",
    height:   320,
  },
  {
    id:       2,
    category: "love",
    name:     "باقة الحب الكلاسيكية",
    price:    "من ١٨٠ ريال",
    image:    "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=600&q=80&auto=format&fit=crop",
    height:   260,
  },
  {
    id:       3,
    category: "grad",
    name:     "تنسيق التخرج المميز",
    price:    "من ٢٢٠ ريال",
    image:    "https://images.unsplash.com/photo-1559599238-308793637427?w=600&q=80&auto=format&fit=crop",
    height:   290,
  },
  {
    id:       4,
    category: "wed",
    name:     "ستاند ورد ملكي",
    price:    "من ٨٠٠ ريال",
    image:    "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=600&q=80&auto=format&fit=crop",
    height:   270,
  },
  {
    id:       5,
    category: "corp",
    name:     "هدية الشركة الراقية",
    price:    "من ٤٥٠ ريال",
    image:    "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&q=80&auto=format&fit=crop",
    height:   300,
  },
  {
    id:       6,
    category: "bday",
    name:     "باقة عيد ميلاد",
    price:    "من ١٥٠ ريال",
    image:    "https://images.unsplash.com/photo-1487530811015-780780169b47?w=600&q=80&auto=format&fit=crop",
    height:   260,
  },
];

/** Unique Selling Points */
export const UNIQUE_SELLING_POINTS = [
  {
    icon:        "🚀",
    title:       "توصيل ٣ ساعات",
    description: "نصل إليك في أسرع وقت في جميع أحياء الرياض",
  },
  {
    icon:        "🎨",
    title:       "تصاميم حصرية",
    description: "كل باقة تُصنع بيدينا بعناية وإبداع خاص",
  },
  {
    icon:        "💬",
    title:       "استشارة مجانية",
    description: "نساعدك في اختيار ما يناسب مناسبتك تماماً",
  },
  {
    icon:        "✅",
    title:       "ضمان الجودة ١٠٠٪",
    description: "ورد طازج وتغليف فاخر مضمون أو نعيد ثمنه",
  },
];

/** Branches */
export const BRANCHES = [
  {
    id:    1,
    name:  "فرع العليا",
    address: "حي العليا، شارع العليا العام، الرياض",
    phone:   "+966XXXXXXXXX",
    hours:   "٨ص – ١٢م",
    icon:    "🌹",
    coordinates: { lat: 24.7136, lng: 46.6753 },
  },
  {
    id:    2,
    name:  "فرع النخيل",
    address: "حي النخيل، طريق الملك فهد، الرياض",
    phone:   "+966XXXXXXXXX",
    hours:   "٨ص – ١٢م",
    icon:    "🌸",
    coordinates: { lat: 24.7500, lng: 46.7000 },
  },
  {
    id:    3,
    name:  "فرع الملز",
    address: "حي الملز، شارع الستين، الرياض",
    phone:   "+966XXXXXXXXX",
    hours:   "٨ص – ١٢م",
    icon:    "🌷",
    coordinates: { lat: 24.7400, lng: 46.6900 },
  },
  {
    id:    4,
    name:  "فرع الروضة",
    address: "حي الروضة، شارع الأمير سلطان، الرياض",
    phone:   "+966XXXXXXXXX",
    hours:   "٨ص – ١٢م",
    icon:    "🌺",
    coordinates: { lat: 24.7300, lng: 46.7100 },
  },
];

/** Contact */
export const CONTACT_INFO = {
  whatsapp:     "https://wa.me/966XXXXXXXXX?text=أهلاً، أريد الاستفسار",
  phone:        "tel:+966XXXXXXXXX",
  address:      "الرياض، المملكة العربية السعودية",
  hours:        "٨ص – ١٢م، ٧ أيام في الأسبوع",
  deliveryArea: "داخل الرياض كاملاً",
  instagram:    "https://instagram.com/aljadeed.flowers",
  snapchat:     "https://snapchat.com/add/aljadeed.flowers",
};

/** Company */
export const COMPANY_INFO = {
  name:        "الجيد المتقدمة",
  tagline:     "للورود والهدايا والأعمال الفنية",
  fullTagline: "ورد يليق بلحظتك",
  description: "متجر متخصص في تنسيق الورود الفاخر والأعمال الفنية لجميع المناسبات",
  heroImage:   "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85&auto=format&fit=crop",
  year:        2026,
};
