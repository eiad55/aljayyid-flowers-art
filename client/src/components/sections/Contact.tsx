import { BRAND_COLORS, CONTACT_INFO } from "@/constants/data";
import { OrnamentLabel } from "@/components/OrnamentLabel";
import { BotanicalPattern } from "@/components/BotanicalPattern";
import { IconPhone, IconInstagram, IconSnapchat, IconWhatsapp, IconClock, IconPin } from "@/components/icons/Icons";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6 relative overflow-hidden"
      style={{ backgroundColor: BRAND_COLORS.primary }}
    >
      {/* Botanical watermarks */}
      <div className="absolute top-0 right-0 pointer-events-none" aria-hidden="true">
        <BotanicalPattern size={300} opacity={0.04} color={BRAND_COLORS.cream} />
      </div>
      <div
        className="absolute bottom-0 left-0 pointer-events-none rotate-180"
        aria-hidden="true"
      >
        <BotanicalPattern size={220} opacity={0.03} color={BRAND_COLORS.champagne} />
      </div>

      <div className="container mx-auto relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left: content */}
          <div>
            <OrnamentLabel text="تواصل" light />
            <h2
              className="mt-5 font-bold"
              style={{
                color:        BRAND_COLORS.cream,
                fontFamily:   "Kufam, 'IBM Plex Sans Arabic', sans-serif",
                fontSize:     "clamp(2rem, 4vw, 3rem)",
                lineHeight:   1.15,
                letterSpacing:"-0.01em",
              }}
            >
              نحن هنا لك
              <br />
              <span style={{ color: BRAND_COLORS.champagne, opacity: 0.6 }}>في أي وقت</span>
            </h2>

            <div
              className="mt-6 h-px w-10"
              style={{ backgroundColor: BRAND_COLORS.dustyRose }}
              aria-hidden="true"
            />

            <p
              className="mt-8 text-sm leading-loose max-w-sm"
              style={{
                color:      BRAND_COLORS.champagne,
                fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                opacity:    0.65,
              }}
            >
              فريقنا متاح طوال الأسبوع لمساعدتك في اختيار أجمل الورود لأجمل لحظاتك
            </p>

            {/* Info items */}
            <div className="mt-10 space-y-6">
              {[
                { Icon: IconPin,   value: CONTACT_INFO.address     },
                { Icon: IconClock, value: CONTACT_INFO.hours        },
                { Icon: IconPhone, value: "اتصل أو راسلنا مباشرة" },
              ].map(({ Icon, value }, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: `${BRAND_COLORS.cream}0a`,
                      border:          `1px solid ${BRAND_COLORS.cream}12`,
                    }}
                  >
                    <Icon size={15} color={BRAND_COLORS.dustyRose} strokeWidth={1.5} />
                  </div>
                  <span
                    className="text-sm"
                    style={{
                      color:      BRAND_COLORS.champagne,
                      fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                      opacity:    0.7,
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: action cards */}
          <div className="space-y-3">

            {/* WhatsApp — primary CTA */}
            <a
              href={CONTACT_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 px-8 py-7 group transition-all duration-300 hover:opacity-90 focus:outline-none"
              style={{
                backgroundColor: "#25D366",
                borderRadius:    "2px",
              }}
            >
              <IconWhatsapp size={28} color="white" />
              <div className="text-right">
                <div
                  className="text-base font-bold text-white"
                  style={{ fontFamily: "Kufam, 'IBM Plex Sans Arabic', sans-serif" }}
                >
                  واتساب
                </div>
                <div
                  className="text-xs text-white mt-0.5"
                  style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif", opacity: 0.8 }}
                >
                  ردّ فوري — الأسرع والأسهل
                </div>
              </div>
              <div className="mr-auto opacity-50 text-white">←</div>
            </a>

            {/* Instagram */}
            <a
              href={CONTACT_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 px-8 py-6 group transition-all duration-300 focus:outline-none"
              style={{
                backgroundColor: `${BRAND_COLORS.cream}08`,
                border:          `1px solid ${BRAND_COLORS.cream}12`,
                borderRadius:    "2px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = `${BRAND_COLORS.cream}12`)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = `${BRAND_COLORS.cream}08`)}
            >
              <IconInstagram size={22} color={BRAND_COLORS.champagne} strokeWidth={1.4} />
              <div className="text-right">
                <div
                  className="text-sm font-bold"
                  style={{ color: BRAND_COLORS.cream, fontFamily: "Kufam, 'IBM Plex Sans Arabic', sans-serif" }}
                >
                  انستغرام
                </div>
                <div
                  className="text-xs mt-0.5"
                  style={{ color: BRAND_COLORS.champagne, fontFamily: "Inter, monospace", opacity: 0.45 }}
                >
                  @aljadeed.flowers
                </div>
              </div>
            </a>

            {/* Snapchat */}
            <a
              href={CONTACT_INFO.snapchat}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 px-8 py-6 group transition-all duration-300 focus:outline-none"
              style={{
                backgroundColor: `${BRAND_COLORS.cream}08`,
                border:          `1px solid ${BRAND_COLORS.cream}12`,
                borderRadius:    "2px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = `${BRAND_COLORS.cream}12`)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = `${BRAND_COLORS.cream}08`)}
            >
              <IconSnapchat size={22} color={BRAND_COLORS.champagne} strokeWidth={1.4} />
              <div className="text-right">
                <div
                  className="text-sm font-bold"
                  style={{ color: BRAND_COLORS.cream, fontFamily: "Kufam, 'IBM Plex Sans Arabic', sans-serif" }}
                >
                  سناب شات
                </div>
                <div
                  className="text-xs mt-0.5"
                  style={{ color: BRAND_COLORS.champagne, fontFamily: "Inter, monospace", opacity: 0.45 }}
                >
                  aljadeed.flowers
                </div>
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
