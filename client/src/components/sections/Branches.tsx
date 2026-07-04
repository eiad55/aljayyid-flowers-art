import { useState } from "react";
import { BRANCHES, BRAND_COLORS } from "@/constants/data";
import { OrnamentLabel } from "@/components/OrnamentLabel";
import { generatePhoneLink } from "@/lib/navigation";
import { IconPin, IconClock, IconDelivery, IconMap, IconPhone } from "@/components/icons/Icons";
import { BotanicalPattern } from "@/components/BotanicalPattern";

const BRANCH_ACCENTS = ["#8A9960", "#C98D7D", "#DCC7A8", "#7a9268"];

const STATS = [
  { number: "٤",        label: "فروع في الرياض", Icon: IconMap      },
  { number: "٣ ساعات",  label: "أسرع توصيل",    Icon: IconDelivery },
  { number: "٧ أيام",   label: "خدمة متواصلة",  Icon: IconClock    },
  { number: "١٠٠٪",    label: "ضمان الجودة",    Icon: IconPin      },
];

export function Branches() {
  const [activeId, setActiveId] = useState<number>(1);
  const active       = BRANCHES.find((b) => b.id === activeId)!;
  const activeAccent = BRANCH_ACCENTS[(activeId - 1) % BRANCH_ACCENTS.length];

  return (
    <section
      id="branches"
      className="py-28 px-6 relative overflow-hidden"
      style={{ backgroundColor: BRAND_COLORS.cream }}
      aria-labelledby="branches-heading"
    >
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        aria-hidden="true"
        style={{ transform: "scaleX(-1) rotate(20deg)" }}
      >
        <BotanicalPattern size={240} opacity={0.045} />
      </div>

      <div className="container mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <OrnamentLabel text="فروعنا" />
          <h2
            id="branches-heading"
            className="mt-5 font-bold"
            style={{
              color:        BRAND_COLORS.primary,
              fontFamily:   "Kufam, 'IBM Plex Sans Arabic', sans-serif",
              fontSize:     "clamp(2rem, 4vw, 3rem)",
              lineHeight:   1.15,
              letterSpacing:"-0.01em",
            }}
          >
            أقرب فرع إليك
          </h2>
        </div>

        {/* Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Tabs */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {BRANCHES.map((b, i) => {
              const isOn    = activeId === b.id;
              const accent  = BRANCH_ACCENTS[i % BRANCH_ACCENTS.length];
              return (
                <button
                  key={b.id}
                  onClick={() => setActiveId(b.id)}
                  className="flex-shrink-0 lg:flex-shrink-0 text-right px-6 py-5 transition-all duration-300 focus:outline-none w-48 lg:w-full"
                  style={{
                    backgroundColor: isOn ? BRAND_COLORS.primary : "white",
                    borderRight:     isOn ? `3px solid ${accent}` : `3px solid transparent`,
                    borderRadius:    "2px",
                    boxShadow:       isOn ? "0 8px 30px rgba(24,51,37,0.12)" : "0 1px 4px rgba(0,0,0,0.04)",
                  }}
                  aria-pressed={isOn}
                  aria-label={`فرع ${b.name}`}
                >
                  <div
                    className="text-[9px] tracking-[0.3em] uppercase mb-1.5"
                    style={{
                      color:      isOn ? accent : BRAND_COLORS.olive,
                      fontFamily: "Inter, monospace",
                      opacity:    0.7,
                    }}
                  >
                    BRANCH 0{b.id}
                  </div>
                  <div
                    className="text-sm font-bold"
                    style={{
                      color:      isOn ? BRAND_COLORS.cream : BRAND_COLORS.primary,
                      fontFamily: "Kufam, 'IBM Plex Sans Arabic', sans-serif",
                    }}
                  >
                    {b.name}
                  </div>
                  {isOn && (
                    <div
                      className="text-[11px] mt-1 leading-snug"
                      style={{
                        color:      BRAND_COLORS.champagne,
                        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                        opacity:    0.7,
                      }}
                    >
                      {b.address}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Detail */}
          <div
            className="lg:col-span-8 p-10 transition-all duration-300"
            style={{
              backgroundColor: BRAND_COLORS.primary,
              borderRadius:    "2px",
              minHeight:       "360px",
            }}
          >
            {/* Overline */}
            <div
              className="text-[9px] tracking-[0.35em] uppercase mb-6"
              style={{
                color:      BRAND_ACCENTS(activeId),
                fontFamily: "Inter, monospace",
                opacity:    0.7,
              }}
            >
              BRANCH 0{active.id} — RIYADH
            </div>

            <h3
              className="font-bold mb-2"
              style={{
                color:      BRAND_COLORS.cream,
                fontFamily: "Kufam, 'IBM Plex Sans Arabic', sans-serif",
                fontSize:   "1.8rem",
                lineHeight: 1.2,
              }}
            >
              {active.name}
            </h3>

            <div
              className="h-px w-10 mb-8"
              style={{ backgroundColor: activeAccent }}
              aria-hidden="true"
            />

            {/* Info grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {[
                { Icon: IconPin,      label: "العنوان",      value: active.address           },
                { Icon: IconClock,    label: "أوقات العمل",  value: active.hours              },
                { Icon: IconDelivery, label: "التوصيل",      value: "خلال ٣ ساعات"           },
                { Icon: IconMap,      label: "نطاق التغطية", value: "جميع أحياء الرياض"      },
              ].map(({ Icon, label, value }, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4"
                  style={{
                    backgroundColor: `${BRAND_COLORS.cream}08`,
                    border:          `1px solid ${BRAND_COLORS.cream}10`,
                    borderRadius:    "2px",
                  }}
                >
                  <Icon size={16} color={activeAccent} strokeWidth={1.4} />
                  <div>
                    <div
                      className="text-[9px] uppercase tracking-wider mb-1"
                      style={{
                        color:      BRAND_COLORS.champagne,
                        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                        opacity:    0.5,
                      }}
                    >
                      {label}
                    </div>
                    <div
                      className="text-sm"
                      style={{
                        color:      BRAND_COLORS.cream,
                        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                      }}
                    >
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={generatePhoneLink(active.phone)}
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold transition-all duration-300 hover:opacity-80 focus:outline-none"
              style={{
                backgroundColor: activeAccent,
                color:           BRAND_COLORS.primary,
                fontFamily:      "'IBM Plex Sans Arabic', sans-serif",
                borderRadius:    "2px",
              }}
              aria-label={`اتصل بـ ${active.name}`}
            >
              <IconPhone size={15} color={BRAND_COLORS.primary} strokeWidth={1.8} />
              اتصل بـ {active.name}
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="mt-6 grid grid-cols-2 md:grid-cols-4"
          role="list"
          aria-label="إحصاءات الفروع"
          style={{
            backgroundColor: BRAND_COLORS.primary,
            borderRadius:    "2px",
          }}
        >
          {STATS.map(({ number, label, Icon }, i) => (
            <div
              key={i}
              role="listitem"
              className="flex items-center gap-4 py-6 px-8 border-r last:border-r-0"
              style={{ borderColor: `${BRAND_COLORS.cream}08` }}
            >
              <Icon size={18} color={BRAND_COLORS.dustyRose} strokeWidth={1.4} />
              <div>
                <div
                  className="font-bold"
                  style={{
                    color:      BRAND_COLORS.cream,
                    fontFamily: "Kufam, sans-serif",
                    fontSize:   "1.1rem",
                  }}
                >
                  {number}
                </div>
                <div
                  className="text-[10px] mt-0.5"
                  style={{
                    color:      BRAND_COLORS.champagne,
                    fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                    opacity:    0.55,
                  }}
                >
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function BRAND_ACCENTS(id: number) {
  return BRANCH_ACCENTS[(id - 1) % BRANCH_ACCENTS.length];
}
