import { useState, useMemo } from "react";
import { PRODUCTS, OCCASIONS, BRAND_COLORS, CONTACT_INFO } from "@/constants/data";
import { OrnamentLabel } from "@/components/OrnamentLabel";
import { generateWhatsAppLink } from "@/lib/navigation";
import { IconArrow } from "@/components/icons/Icons";

type FilterKey = "الكل" | string;

export function Gallery() {
  const [active, setActive] = useState<FilterKey>("الكل");

  const filters = useMemo<FilterKey[]>(
    () => ["الكل", ...OCCASIONS.map((o) => o.ar)],
    []
  );

  const items = useMemo(() => {
    if (active === "الكل") return PRODUCTS;
    return PRODUCTS.filter(
      (p) => OCCASIONS.find((o) => o.id === p.category)?.ar === active
    );
  }, [active]);

  return (
    <section
      id="gallery"
      className="py-28 px-6"
      style={{ backgroundColor: "#f9f6f0" }}
    >
      <div className="container mx-auto">

        {/* Header — left-aligned for editorial feel */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <OrnamentLabel text="أعمالنا" />
            <h2
              className="mt-4 font-bold"
              style={{
                color:        BRAND_COLORS.primary,
                fontFamily:   "Kufam, 'IBM Plex Sans Arabic', sans-serif",
                fontSize:     "clamp(2rem, 4vw, 3rem)",
                lineHeight:   1.1,
                letterSpacing:"-0.01em",
              }}
            >
              معرض أعمالنا
            </h2>
          </div>

          {/* Filter — minimal text tabs, not pill buttons */}
          <div
            className="flex gap-6 overflow-x-auto pb-1"
            role="tablist"
            aria-label="تصفية"
          >
            {filters.map((f) => {
              const isOn = active === f;
              return (
                <button
                  key={f}
                  role="tab"
                  aria-selected={isOn}
                  onClick={() => setActive(f)}
                  className="text-xs tracking-wider whitespace-nowrap pb-2 transition-all duration-300 focus:outline-none border-b-2"
                  style={{
                    color:       isOn ? BRAND_COLORS.primary : BRAND_COLORS.olive,
                    borderColor: isOn ? BRAND_COLORS.dustyRose : "transparent",
                    fontFamily:  "'IBM Plex Sans Arabic', sans-serif",
                    fontWeight:  isOn ? 600 : 400,
                    opacity:     isOn ? 1 : 0.6,
                  }}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>

        {/* Masonry grid — variable heights */}
        {items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {items.map((p, i) => (
              <div
                key={p.id}
                className="relative overflow-hidden group cursor-pointer"
                style={{ height: `${p.height}px`, borderRadius: "2px" }}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="img-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Price — always visible, top */}
                <div
                  className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold"
                  style={{
                    backgroundColor: BRAND_COLORS.cream,
                    color:           BRAND_COLORS.primary,
                    fontFamily:      "Kufam, sans-serif",
                    borderRadius:    "2px",
                  }}
                >
                  {p.price}
                </div>

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(to top, rgba(24,51,37,0.92) 0%, rgba(24,51,37,0.05) 60%, transparent 100%)",
                  }}
                >
                  <h3
                    className="text-white font-bold text-base mb-2"
                    style={{ fontFamily: "Kufam, 'IBM Plex Sans Arabic', sans-serif" }}
                  >
                    {p.name}
                  </h3>
                  <a
                    href={generateWhatsAppLink(`أريد باقة مشابهة لـ: ${p.name}`, "966XXXXXXXXX")}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 text-xs font-medium focus:outline-none group/link"
                    style={{
                      color:      BRAND_COLORS.champagne,
                      fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                    }}
                    aria-label={`اطلب ${p.name}`}
                  >
                    <span className="group-hover/link:underline underline-offset-3">اطلب مشابهاً</span>
                    <IconArrow
                      size={13}
                      color={BRAND_COLORS.champagne}
                      className="rotate-180 group-hover/link:-translate-x-1 transition-transform duration-300"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="py-20 text-center"
            style={{ color: BRAND_COLORS.olive, fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
          >
            <div
              className="w-10 h-px mx-auto mb-6"
              style={{ backgroundColor: BRAND_COLORS.dustyRose }}
            />
            <p className="text-sm opacity-60">لا توجد منتجات في هذه الفئة حالياً</p>
          </div>
        )}
      </div>
    </section>
  );
}
