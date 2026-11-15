# 🌹 الجيد المتقدمة للورود والأعمال الفنية

موقع ويب احترافي لمحل الجيد المتقدمة للورود والأعمال الفنية.

## 🛠️ التقنيات المستخدمة

- **React 18** + **TypeScript**
- **Vite 5** - أداة البناء السريعة
- **Tailwind CSS v4** - تصميم سريع ومتجاوب
- **tw-animate-css** - تأثيرات حركية أنيقة

## 🚀 تشغيل المشروع

```bash
# 1. الانتقال لمجلد المشروع
cd client

# 2. تثبيت المكتبات
npm install

# 3. تشغيل بيئة التطوير
npm run dev
```

سيفتح المتصفح تلقائياً على: **http://localhost:5173**

## 📁 هيكل المجلدات

```
client/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── button.tsx
│   │   ├── sections/
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Occasions.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── WhyUs.tsx
│   │   │   ├── Branches.tsx    ← قسم الفروع المبتكر
│   │   │   ├── Contact.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── WhatsAppButton.tsx
│   │   └── OrnamentLabel.tsx
│   ├── constants/
│   │   └── data.ts             ← بيانات الموقع (ألوان، منتجات، فروع...)
│   ├── hooks/
│   │   ├── useScrollPosition.ts
│   │   └── useCarousel.ts
│   ├── lib/
│   │   └── navigation.ts
│   ├── pages/
│   │   └── Home.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## ✏️ تخصيص البيانات

عدّل ملف `client/src/constants/data.ts` لتغيير:
- أرقام الهاتف والواتساب
- عناوين الفروع وأوقات العمل
- أسماء المنتجات والأسعار
- ألوان العلامة التجارية
