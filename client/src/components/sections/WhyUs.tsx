import { UNIQUE_SELLING_POINTS, BRAND_COLORS } from "@/constants/data";
import { OrnamentLabel } from "@/components/OrnamentLabel";
import { BotanicalPattern } from "@/components/BotanicalPattern";
import {
  IconRocket, IconBrush, IconChat, IconShield
} from "@/components/icons/Icons";

const USP_ICONS = [IconRocket, IconBrush, IconChat, IconShield];

export function WhyUs() {
  return (
    <section
      id="why"
      className="py-28 px-6 relative overflow-hidden"
      style={{ backgroundColor: BRAND_COLORS.primary }}
    >
      {/* Botanical watermarks */}
      <div
        className="absolute top-0 left-0 pointer-events-none"
        style={{ transform: "scaleX(-1)" }}
        aria-hidden="true"
      >
        <BotanicalPattern size={380} opacity={0.04} color={BRAND_COLORS.cream} />
      </div>
      <div
        className="absolute bottom-0 right-0 pointer-events-none rotate-180"
        aria-hidden="true"
      >
        <BotanicalPattern size={260} opacity={0.03} color={BRAND_COLORS.champagne} />
      </div>

      <div className="container mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <OrnamentLabel text="تميّزنا" light />
          <h2
            className="mt-5 font-bold"
            style={{
              color:        BRAND_COLORS.cream,
              fontFamily:   "Kufam, 'IBM Plex Sans Arabic', sans-serif",
              fontSize:     "clamp(2.2rem, 4vw, 3.2rem)",
              lineHeight:   1.15,
              letterSpacing:"-0.01em",
            }}
          >
            لماذا الجيد المتقدمة؟
          </h2>
        </div>

        {/* USP — horizontal split layout, not just cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ backgroundColor: `${BRAND_COLORS.cream}10` }}
        >
          {UNIQUE_SELLING_POINTS.map((usp, i) => {
            const Icon = USP_ICONS[i] ?? IconStar;
            return (
              <div
                key={i}
                className="group p-10 text-center transition-colors duration-300 cursor-default"
                style={{ backgroundColor: BRAND_COLORS.primary }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#1e3d2c")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = BRAND_COLORS.primary)
                }
              >
                {/* Icon — SVG, no emoji */}
                <div
                  className="w-12 h-12 mx-auto mb-7 flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${BRAND_COLORS.cream}0d`,
                    border:          `1px solid ${BRAND_COLORS.dustyRose}40`,
                  }}
                >
                  <Icon size={22} color={BRAND_COLORS.dustyRose} strokeWidth={1.4} />
                </div>

                {/* Number overline */}
                <div
                  className="text-[10px] tracking-[0.3em] uppercase mb-3"
                  style={{
                    color:      BRAND_COLORS.champagne,
                    fontFamily: "Inter, monospace",
                    opacity:    0.4,
                  }}
                >
                  0{i + 1}
                </div>

                <h3
                  className="font-bold mb-4"
                  style={{
                    color:      BRAND_COLORS.cream,
                    fontFamily: "Kufam, 'IBM Plex Sans Arabic', sans-serif",
                    fontSize:   "1.05rem",
                  }}
                >
                  {usp.title}
                </h3>

                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color:      BRAND_COLORS.champagne,
                    fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                    opacity:    0.75,
                  }}
                >
                  {usp.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Editorial quote strip */}
        <div className="mt-20 text-center max-w-2xl mx-auto">
          <p
            className="leading-loose"
            style={{
              color:        BRAND_COLORS.champagne,
              fontFamily:   "Kufam, 'IBM Plex Sans Arabic', sans-serif",
              fontSize:     "1.2rem",
              opacity:      0.6,
              fontStyle:    "italic",
              letterSpacing: "0.01em",
            }}
          >
            "كل باقة قصة تستحق أن تُروى"
          </p>
          <div
            className="mt-5 w-8 h-px mx-auto"
            style={{ backgroundColor: BRAND_COLORS.dustyRose }}
            aria-hidden="true"
          />
        </div>

      </div>
    </section>
  );
}

// fallback icon in case array is short
function IconStar({ size=24, color="currentColor", strokeWidth=1.5 }: { size?: number; color?: string; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}
