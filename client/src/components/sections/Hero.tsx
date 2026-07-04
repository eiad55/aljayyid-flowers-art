import { BRAND_COLORS, COMPANY_INFO, CONTACT_INFO } from "@/constants/data";
import { scrollToElement } from "@/lib/navigation";
import { ArchFrame, BotanicalPattern } from "@/components/BotanicalPattern";
import { IconArrow } from "@/components/icons/Icons";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: BRAND_COLORS.cream }}
    >
      {/* ── Botanical watermarks ── */}
      <div className="absolute top-0 left-0 pointer-events-none" aria-hidden="true">
        <BotanicalPattern size={340} opacity={0.055} />
      </div>
      <div
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{ transform: "rotate(180deg)" }}
        aria-hidden="true"
      >
        <BotanicalPattern size={260} opacity={0.04} />
      </div>

      {/* ── Thin brand line left ── */}
      <div
        className="absolute top-[70px] bottom-0 right-0 w-[1px] opacity-10 hidden lg:block"
        style={{ backgroundColor: BRAND_COLORS.primary }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 md:px-10 relative z-10 pt-[70px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-70px)] py-16">

          {/* ── Text Block ── */}
          <div className="order-2 lg:order-1 space-y-10">

            {/* Overline */}
            <p
              className="tracking-[0.3em] text-[11px] uppercase"
              style={{
                color:      BRAND_COLORS.dustyRose,
                fontFamily: "'IBM Plex Sans Arabic', sans-serif",
              }}
            >
              الرياض — منذ ٢٠١٦
            </p>

            {/* Display Headline */}
            <div>
              <h1
                style={{
                  color:        BRAND_COLORS.primary,
                  fontFamily:   "Kufam, 'IBM Plex Sans Arabic', sans-serif",
                  fontSize:     "clamp(3rem, 6vw, 5.5rem)",
                  lineHeight:   1.1,
                  fontWeight:   700,
                  letterSpacing: "-0.01em",
                }}
              >
                ورد يليق
                <br />
                <span style={{ color: BRAND_COLORS.olive }}>بلحظتك</span>
              </h1>
              {/* Underline accent */}
              <div
                className="mt-6 h-[2px] w-16"
                style={{ backgroundColor: BRAND_COLORS.dustyRose }}
                aria-hidden="true"
              />
            </div>

            {/* Body */}
            <p
              className="max-w-sm leading-loose text-base"
              style={{
                color:      "#4a6155",
                fontFamily: "'IBM Plex Sans Arabic', sans-serif",
              }}
            >
              {COMPANY_INFO.description}
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-8 flex-wrap">
              <button
                onClick={() => scrollToElement("occasions")}
                className="group relative px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none overflow-hidden"
                style={{
                  backgroundColor: BRAND_COLORS.primary,
                  color:           BRAND_COLORS.cream,
                  fontFamily:      "'IBM Plex Sans Arabic', sans-serif",
                  borderRadius:    "2px",
                }}
              >
                <span className="relative z-10">استكشف الكولكشن</span>
                {/* sweep hover */}
                <span
                  className="absolute inset-0 origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{ backgroundColor: BRAND_COLORS.olive }}
                />
                <span className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: BRAND_COLORS.cream, fontFamily: "'IBM Plex Sans Arabic', sans-serif", fontSize: "0.875rem", fontWeight: 600 }}>
                  استكشف الكولكشن
                </span>
              </button>

              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm font-medium transition-all duration-300 focus:outline-none"
                style={{
                  color:      BRAND_COLORS.primary,
                  fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                }}
              >
                <span className="group-hover:underline underline-offset-4">اطلب الآن</span>
                <IconArrow
                  size={16}
                  color={BRAND_COLORS.primary}
                  className="rotate-180 transition-transform duration-300 group-hover:-translate-x-1"
                />
              </a>
            </div>

            {/* Stats — minimal */}
            <div
              className="flex gap-10 pt-6 border-t"
              style={{ borderColor: `${BRAND_COLORS.champagne}80` }}
            >
              {[
                { n: "٨+",    l: "سنوات" },
                { n: "+٥٠٠٠", l: "عميل"  },
                { n: "٣ ساعة", l: "توصيل" },
              ].map((s, i) => (
                <div key={i}>
                  <div
                    style={{
                      color:      BRAND_COLORS.primary,
                      fontFamily: "Kufam, sans-serif",
                      fontSize:   "1.5rem",
                      fontWeight: 700,
                      lineHeight: 1,
                    }}
                  >
                    {s.n}
                  </div>
                  <div
                    className="mt-1 text-xs tracking-wider uppercase"
                    style={{
                      color:      BRAND_COLORS.olive,
                      fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                    }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Image Block — arch frame ── */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">

              {/* Arch image */}
              <ArchFrame width={300} height={400}>
                <img
                  src={COMPANY_INFO.heroImage}
                  alt="باقة ورود فاخرة من الجيد المتقدمة"
                  className="img-cover h-full w-full"
                  loading="eager"
                />
              </ArchFrame>

              {/* Floating info card */}
              <div
                className="absolute -bottom-5 -right-5 lg:-right-10 px-6 py-4 text-right"
                style={{
                  backgroundColor: BRAND_COLORS.primary,
                  color:           BRAND_COLORS.cream,
                  borderRadius:    "2px",
                  minWidth:        "140px",
                }}
              >
                <div
                  className="text-[10px] tracking-[0.2em] uppercase mb-1"
                  style={{
                    color:      BRAND_COLORS.champagne,
                    fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                    opacity:    0.7,
                  }}
                >
                  توصيل سريع
                </div>
                <div
                  style={{
                    fontFamily: "Kufam, sans-serif",
                    fontSize:   "1.4rem",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                  }}
                >
                  ٣ ساعات
                </div>
              </div>

              {/* Botanical accent — top left of arch */}
              <div
                className="absolute -top-8 -left-8 pointer-events-none"
                aria-hidden="true"
              >
                <BotanicalPattern size={120} opacity={0.12} color={BRAND_COLORS.olive} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll cue ── */}
      <button
        onClick={() => scrollToElement("occasions")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 focus:outline-none"
        style={{ opacity: 0.4 }}
        aria-label="انتقل للأسفل"
      >
        <span
          className="text-[10px] tracking-[0.25em] uppercase"
          style={{
            color:      BRAND_COLORS.primary,
            fontFamily: "'IBM Plex Sans Arabic', sans-serif",
          }}
        >
          اكتشف
        </span>
        <div
          className="w-px h-10 animate-pulse"
          style={{ backgroundColor: BRAND_COLORS.primary, opacity: 0.5 }}
        />
      </button>
    </section>
  );
}
