import { OCCASIONS, BRAND_COLORS } from "@/constants/data";
import { OrnamentLabel } from "@/components/OrnamentLabel";
import { scrollToElement } from "@/lib/navigation";
import { IconArrow } from "@/components/icons/Icons";
import { BotanicalPattern } from "@/components/BotanicalPattern";

export function Occasions() {
  return (
    <section
      id="occasions"
      className="py-28 px-6 relative overflow-hidden"
      style={{ backgroundColor: BRAND_COLORS.cream }}
    >
      {/* Botanical accent top-right */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{ transform: "rotate(90deg)" }}
        aria-hidden="true"
      >
        <BotanicalPattern size={200} opacity={0.05} />
      </div>

      <div className="container mx-auto">

        {/* Header */}
        <div className="mb-16 max-w-xl">
          <OrnamentLabel text="مناسباتنا" />
          <h2
            className="mt-5 font-bold"
            style={{
              color:        BRAND_COLORS.primary,
              fontFamily:   "Kufam, 'IBM Plex Sans Arabic', sans-serif",
              fontSize:     "clamp(2rem, 4vw, 3rem)",
              lineHeight:   1.15,
              letterSpacing:"-0.01em",
            }}
          >
            لكل لحظة، ورد يليق بها
          </h2>
          <p
            className="mt-4 text-sm leading-loose"
            style={{
              color:      "#5a7060",
              fontFamily: "'IBM Plex Sans Arabic', sans-serif",
            }}
          >
            اختر المناسبة وسنرشدك إلى أجمل ما يناسبها
          </p>
        </div>

        {/* Magazine-style grid: 1 large + 5 smaller */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* Feature card — large */}
          <button
            className="md:col-span-7 relative overflow-hidden group cursor-pointer text-right focus:outline-none"
            style={{ height: "420px", borderRadius: "2px" }}
            onClick={() => scrollToElement("gallery")}
            aria-label={`عرض ${OCCASIONS[0].ar}`}
          >
            <img
              src={OCCASIONS[0].image}
              alt={OCCASIONS[0].ar}
              className="img-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div
              className="absolute inset-0 transition-opacity duration-300"
              style={{
                background: "linear-gradient(to top, rgba(24,51,37,0.88) 0%, rgba(24,51,37,0.1) 60%, transparent 100%)",
              }}
            />
            <div className="absolute bottom-0 right-0 p-8">
              <p
                className="text-[10px] tracking-[0.3em] uppercase mb-3"
                style={{ color: BRAND_COLORS.dustyRose, fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
              >
                الأكثر طلباً
              </p>
              <h3
                className="font-bold text-white text-2xl mb-2"
                style={{ fontFamily: "Kufam, 'IBM Plex Sans Arabic', sans-serif" }}
              >
                {OCCASIONS[0].ar}
              </h3>
              <p
                className="text-sm mb-5"
                style={{ color: BRAND_COLORS.champagne, fontFamily: "'IBM Plex Sans Arabic', sans-serif", opacity: 0.8 }}
              >
                {OCCASIONS[0].desc}
              </p>
              <div
                className="flex items-center gap-2 text-xs font-medium"
                style={{ color: BRAND_COLORS.champagne, fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
              >
                <span>اكتشف الكولكشن</span>
                <IconArrow size={14} color={BRAND_COLORS.champagne} className="rotate-180 group-hover:-translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </button>

          {/* 5 smaller cards */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
            {OCCASIONS.slice(1, 5).map((occ) => (
              <button
                key={occ.id}
                className="relative overflow-hidden group cursor-pointer text-right focus:outline-none"
                style={{ height: "95px", borderRadius: "2px" }}
                onClick={() => scrollToElement("gallery")}
                aria-label={`عرض ${occ.ar}`}
              >
                <img
                  src={occ.image}
                  alt={occ.ar}
                  className="img-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to left, rgba(24,51,37,0.85) 0%, rgba(24,51,37,0.2) 60%, transparent 100%)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-end px-5">
                  <h3
                    className="font-bold text-white text-sm"
                    style={{ fontFamily: "Kufam, 'IBM Plex Sans Arabic', sans-serif" }}
                  >
                    {occ.ar}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
