import { useState } from "react";
import { NAV_ITEMS, BRAND_COLORS, COMPANY_INFO, CONTACT_INFO } from "@/constants/data";
import { scrollToElement, generateWhatsAppLink } from "@/lib/navigation";

interface HeaderProps { isScrolled: boolean; }

export function Header({ isScrolled }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const close = () => setMobileOpen(false);
  const nav   = (id: string) => { scrollToElement(id); close(); };

  return (
    <header
      role="banner"
      className="fixed top-0 right-0 left-0 z-50 transition-all duration-500"
      style={{
        height:          "70px",
        backgroundColor: isScrolled ? BRAND_COLORS.primary : "transparent",
        borderBottom:    isScrolled ? `1px solid ${BRAND_COLORS.olive}20` : "none",
      }}
    >
      <div className="h-full mx-auto px-6 md:px-10 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => nav("hero")}
          className="flex items-center gap-3 focus:outline-none group"
          aria-label="الصفحة الرئيسية"
        >
          <img
            src="/logo.jpg"
            alt="شعار الجيد المتقدمة"
            className="w-10 h-10 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
            style={{ border: `2px solid ${isScrolled ? BRAND_COLORS.champagne + "40" : BRAND_COLORS.primary + "20"}` }}
          />
          <div className="hidden sm:block text-right">
            <div
              className="text-sm font-bold leading-none mb-0.5"
              style={{
                color:      isScrolled ? BRAND_COLORS.cream : BRAND_COLORS.primary,
                fontFamily: "Kufam, 'IBM Plex Sans Arabic', sans-serif",
              }}
            >
              {COMPANY_INFO.name}
            </div>
            <div
              className="text-[10px] tracking-wider"
              style={{
                color:      isScrolled ? BRAND_COLORS.champagne : BRAND_COLORS.olive,
                fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                opacity:    0.7,
              }}
            >
              {COMPANY_INFO.tagline}
            </div>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="التنقل الرئيسي">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => nav(item.id)}
              className="relative text-xs tracking-wider uppercase pb-0.5 group focus:outline-none"
              style={{
                color:      isScrolled ? BRAND_COLORS.champagne : BRAND_COLORS.primary,
                fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                transition: "color 0.3s",
              }}
            >
              {item.label}
              <span
                className="absolute bottom-0 right-0 h-px w-0 group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: BRAND_COLORS.dustyRose }}
              />
            </button>
          ))}

          <a
            href={CONTACT_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 text-xs font-semibold tracking-wide transition-all duration-300 hover:opacity-80 focus:outline-none"
            style={{
              backgroundColor: isScrolled ? BRAND_COLORS.dustyRose : BRAND_COLORS.primary,
              color:           BRAND_COLORS.cream,
              fontFamily:      "'IBM Plex Sans Arabic', sans-serif",
              borderRadius:    "2px",
            }}
          >
            اطلب الآن
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "إغلاق" : "القائمة"}
          aria-expanded={mobileOpen}
        >
          <div className="flex flex-col gap-1.5 w-6">
            <span
              className="h-px w-full transition-all duration-300"
              style={{
                backgroundColor: isScrolled ? BRAND_COLORS.cream : BRAND_COLORS.primary,
                transform: mobileOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
              }}
            />
            <span
              className="h-px transition-all duration-300"
              style={{
                backgroundColor: isScrolled ? BRAND_COLORS.cream : BRAND_COLORS.primary,
                width: mobileOpen ? "0" : "100%",
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className="h-px w-full transition-all duration-300"
              style={{
                backgroundColor: isScrolled ? BRAND_COLORS.cream : BRAND_COLORS.primary,
                transform: mobileOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="absolute top-[70px] inset-x-0 md:hidden"
          style={{ backgroundColor: BRAND_COLORS.primary }}
          role="navigation"
        >
          <div className="px-6 py-8 space-y-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => nav(item.id)}
                className="block w-full text-right text-sm focus:outline-none pb-4 border-b"
                style={{
                  color:       BRAND_COLORS.cream,
                  borderColor: `${BRAND_COLORS.olive}20`,
                  fontFamily:  "'IBM Plex Sans Arabic', sans-serif",
                }}
              >
                {item.label}
              </button>
            ))}
            <a
              href={CONTACT_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 text-sm font-semibold mt-2"
              style={{
                backgroundColor: BRAND_COLORS.dustyRose,
                color:           "white",
                fontFamily:      "'IBM Plex Sans Arabic', sans-serif",
                borderRadius:    "2px",
              }}
            >
              اطلب الآن
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
