import { NAV_ITEMS, BRAND_COLORS, COMPANY_INFO, CONTACT_INFO } from "@/constants/data";
import { scrollToElement } from "@/lib/navigation";
import { BotanicalPattern } from "@/components/BotanicalPattern";
import { IconInstagram, IconSnapchat, IconWhatsapp, IconPin, IconClock, IconDelivery } from "@/components/icons/Icons";

export function Footer() {
  return (
    <footer role="contentinfo" style={{ backgroundColor: "#080f09" }}>

      {/* ── Top: Brand statement full-width ── */}
      <div
        className="relative overflow-hidden py-20 px-6 text-center border-b"
        style={{ borderColor: `${BRAND_COLORS.olive}15` }}
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
          <BotanicalPattern size={500} opacity={0.025} color={BRAND_COLORS.champagne} />
        </div>

        <p
          className="relative z-10 tracking-[0.4em] text-[10px] uppercase mb-6"
          style={{
            color:      BRAND_COLORS.dustyRose,
            fontFamily: "'IBM Plex Sans Arabic', sans-serif",
          }}
        >
          الجيد المتقدمة للورود
        </p>

        <h2
          className="relative z-10"
          style={{
            color:        BRAND_COLORS.cream,
            fontFamily:   "Kufam, 'IBM Plex Sans Arabic', sans-serif",
            fontSize:     "clamp(2rem, 5vw, 4rem)",
            fontWeight:   700,
            lineHeight:   1.15,
            opacity:      0.9,
            letterSpacing:"-0.01em",
          }}
        >
          ورد يليق بلحظتك
        </h2>

        <a
          href={CONTACT_INFO.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 inline-flex items-center gap-3 mt-10 px-10 py-4 text-sm font-semibold tracking-wide transition-all duration-300 hover:opacity-80 focus:outline-none"
          style={{
            backgroundColor: BRAND_COLORS.dustyRose,
            color:           "white",
            fontFamily:      "'IBM Plex Sans Arabic', sans-serif",
            borderRadius:    "2px",
          }}
        >
          <IconWhatsapp size={18} color="white" />
          تواصل معنا الآن
        </a>
      </div>

      {/* ── Middle: 4-column info grid ── */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px border-b"
        style={{ borderColor: `${BRAND_COLORS.olive}15`, backgroundColor: `${BRAND_COLORS.olive}10` }}
      >
        {/* Col 1: Logo + about */}
        <div className="p-10 text-right" style={{ backgroundColor: "#080f09" }}>
          <div className="flex items-center gap-3 mb-6">
            <img
              src="/logo.jpg"
              alt="شعار الجيد المتقدمة"
              className="w-10 h-10 rounded-full object-cover"
              style={{ border: `1px solid ${BRAND_COLORS.champagne}30` }}
            />
            <div>
              <div style={{ color: BRAND_COLORS.cream, fontFamily: "Kufam, sans-serif", fontSize: "0.85rem", fontWeight: 700 }}>
                {COMPANY_INFO.name}
              </div>
              <div style={{ color: BRAND_COLORS.olive, fontFamily: "'IBM Plex Sans Arabic', sans-serif", fontSize: "0.7rem", opacity: 0.7 }}>
                {COMPANY_INFO.tagline}
              </div>
            </div>
          </div>
          <p
            className="text-xs leading-loose"
            style={{
              color:      BRAND_COLORS.champagne,
              fontFamily: "'IBM Plex Sans Arabic', sans-serif",
              opacity:    0.55,
            }}
          >
            {COMPANY_INFO.description}
          </p>
        </div>

        {/* Col 2: Navigation */}
        <div className="p-10 text-right" style={{ backgroundColor: "#080f09" }}>
          <h4
            className="text-[10px] tracking-[0.3em] uppercase mb-7"
            style={{ color: BRAND_COLORS.dustyRose, fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
          >
            روابط سريعة
          </h4>
          <nav className="space-y-4" aria-label="روابط التذييل">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToElement(item.id)}
                className="block w-full text-right text-xs transition-all duration-200 focus:outline-none group"
                style={{
                  color:      BRAND_COLORS.champagne,
                  fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                  opacity:    0.5,
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "1")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "0.5")}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Col 3: Info */}
        <div className="p-10 text-right" style={{ backgroundColor: "#080f09" }}>
          <h4
            className="text-[10px] tracking-[0.3em] uppercase mb-7"
            style={{ color: BRAND_COLORS.dustyRose, fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
          >
            معلومات
          </h4>
          <div className="space-y-5">
            {[
              { Icon: IconPin,      text: CONTACT_INFO.address },
              { Icon: IconClock,    text: CONTACT_INFO.hours },
              { Icon: IconDelivery, text: CONTACT_INFO.deliveryArea },
            ].map(({ Icon, text }, i) => (
              <div key={i} className="flex items-start gap-3">
                <Icon size={14} color={BRAND_COLORS.olive} strokeWidth={1.5} />
                <span
                  className="text-xs leading-relaxed"
                  style={{
                    color:      BRAND_COLORS.champagne,
                    fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                    opacity:    0.55,
                  }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Col 4: Social */}
        <div className="p-10 text-right" style={{ backgroundColor: "#080f09" }}>
          <h4
            className="text-[10px] tracking-[0.3em] uppercase mb-7"
            style={{ color: BRAND_COLORS.dustyRose, fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
          >
            تابعنا
          </h4>
          <div className="space-y-4">
            {[
              { href: CONTACT_INFO.instagram, Icon: IconInstagram, label: "انستغرام",  handle: "@aljadeed.flowers" },
              { href: CONTACT_INFO.snapchat,  Icon: IconSnapchat,  label: "سناب شات",  handle: "aljadeed.flowers"  },
              { href: CONTACT_INFO.whatsapp,  Icon: IconWhatsapp,  label: "واتساب",    handle: "اطلب مباشرة"      },
            ].map(({ href, Icon, label, handle }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group focus:outline-none"
                aria-label={label}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                  style={{
                    border:          `1px solid ${BRAND_COLORS.olive}25`,
                    backgroundColor: `${BRAND_COLORS.olive}10`,
                  }}
                >
                  <Icon size={14} color={BRAND_COLORS.olive} strokeWidth={1.5} />
                </div>
                <div className="text-right">
                  <div
                    className="text-xs font-medium"
                    style={{
                      color:      BRAND_COLORS.cream,
                      fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                      opacity:    0.7,
                    }}
                  >
                    {label}
                  </div>
                  <div
                    className="text-[10px]"
                    style={{
                      color:      BRAND_COLORS.champagne,
                      fontFamily: "Inter, monospace",
                      opacity:    0.35,
                    }}
                  >
                    {handle}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom: copyright ── */}
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-4 px-10 py-6 text-center"
      >
        <p
          className="text-[10px] tracking-wider"
          style={{
            color:      BRAND_COLORS.olive,
            fontFamily: "Inter, sans-serif",
            opacity:    0.35,
          }}
        >
          © {COMPANY_INFO.year} {COMPANY_INFO.name}. All rights reserved.
        </p>
        <div
          className="w-px h-4 hidden md:block"
          style={{ backgroundColor: `${BRAND_COLORS.olive}20` }}
          aria-hidden="true"
        />
        <p
          className="text-[10px] tracking-wider"
          style={{
            color:      BRAND_COLORS.olive,
            fontFamily: "'IBM Plex Sans Arabic', sans-serif",
            opacity:    0.35,
          }}
        >
          جميع الحقوق محفوظة — الرياض، المملكة العربية السعودية
        </p>
      </div>
    </footer>
  );
}
